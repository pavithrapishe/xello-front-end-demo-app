import { Directive, Input, ElementRef, Renderer2, ViewContainerRef, HostListener, ContentChild, TemplateRef, Output } from '@angular/core';
import { DemoComponent } from './demo-component/demo-component.component';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private tooltipTemplateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter();

  // Listener for click event of the button; captures the click outside the button 
  @HostListener('document:click', ['$event.target'])
  public onClickButton(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

  //Listener is for the tooltip event
  @Input()
  set appTooltip(el: HTMLBaseElement) {
    el.addEventListener('click', () => {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
    });
  }
}
