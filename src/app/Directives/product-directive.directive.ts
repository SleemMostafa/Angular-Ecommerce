import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ShadowImage]'
})
export class ProductDirectiveDirective {

  @Input() setColor:string = "blue";
  constructor(private elmentRef:ElementRef) {
    // elmentRef.nativeElement.style.border = "1px blue solid";
   }
   @HostListener('mouseenter') onMouseEnter()
   {
      this.elmentRef.nativeElement.style.border= `1px ${this.setColor} solid`
   }
   @HostListener('mouseout') onMouseOut()
   {
      this.elmentRef.nativeElement.style.border= ""
   }
}
