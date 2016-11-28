import { Directive, ElementRef, Renderer, ViewChild } from '@angular/core';

@Directive({
    selector:'[elastic-header]'
})
export class ElasticHeader 
{
   scrollerHandle: any;
    header: any;
    headerHeight: any;
    translateAmt: any;
    scaleAmt: any;
    scrollTop: any;
    lastScrollTop: any;
    ticking: any; 

    constructor(public element: ElementRef, public renderer: Renderer) 
    {
 
    }
    ngOnInit()
    {
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.element.nativeElement.getElementsByClassName('header')[0];

        console.log(this.scrollerHandle)
        console.log(this.header)

        // this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false; 

        this.renderer.setElementStyle(this.header,'webkitTransformOrigin','center bottom');

        window.addEventListener('resize',()=>{
            if(!this.ticking)
            {
                window.requestAnimationFrame(() => {
                    this.updateElasticHeader();
                });
            }
            this.ticking = true;
        })

        this.scrollerHandle.addEventListener('scroll', () => {
 
            if(!this.ticking){
                window.requestAnimationFrame(() => {
                    this.updateElasticHeader();
                });
            }
 
            this.ticking = true;
 
        });
    }
    updateElasticHeader()
    {
        this.scrollTop = this.scrollerHandle.scrollTop;

        if(this.lastScrollTop >= 0)
        {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else
        {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.translateAmt = 0

        if (this.scrollTop < 220 - 60) { 
            this.renderer.setElementStyle(this.header, 'height', 220 - this.scrollTop + 'px')
            this.renderer.setElementStyle(this.scrollerHandle, 'margin-top', 220 - this.scrollTop + 'px');
        } else {
            this.renderer.setElementStyle(this.header, 'background', '#00796B')
        }
        // this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmt+'px,0) scale('+1+','+this.scaleAmt+')');
        this.ticking = false;
    }

}