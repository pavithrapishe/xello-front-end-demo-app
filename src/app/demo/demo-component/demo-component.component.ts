import { Component, OnInit, HostListener } from '@angular/core';
import { TooltipDirective } from '../tooltip.directive'

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponent implements OnInit {
  //Flags for the tooltip positions
  private tooltipFlag1: boolean = true;
  private tooltipFlag2: boolean = true;

  private tooltipFlag3: boolean = true;
  private tooltipFlag4: boolean = true;

  constructor() { }

  ngOnInit() { }

  //Listens to the escape event and closes all the tooltips if open
  @HostListener('document:keydown', ['$event'])
  escapeListener(e: any) {
    if (e.keyCode == 27) {
      this.tooltipFlag1 = true; this.tooltipFlag2 = true; this.tooltipFlag3 = true; this.tooltipFlag4 = true;
    }
  }

  // Listens to the scroll event to detect if the tooltip should be placed on the top or the bottom of the button
  @HostListener('document:scroll', ['$event'])
  scrollListener() {
    if (this.isButtonVisible()) {
      if (!this.tooltipFlag3) {
        this.tooltipFlag3 = true;
        this.tooltipFlag1 = false;
      }
      if (!this.tooltipFlag4) {
        this.tooltipFlag4 = true;
        this.tooltipFlag2 = false;
      }
    }
    else {
      if (!this.tooltipFlag1) {
        this.tooltipFlag3 = false;
        this.tooltipFlag1 = true;
      }
      if (!this.tooltipFlag2) {
        this.tooltipFlag4 = false;
        this.tooltipFlag2 = true;
      }
    }
  }

  //If the click event is outside the buttons
  onClickOutside(e: any) {
    if (e.target.className !== "button-A" && e.target.className !== "button-B") {
      this.tooltipFlag1 = true;
      this.tooltipFlag2 = true;
      this.tooltipFlag3 = true;
      this.tooltipFlag4 = true;
    }
  }

  //On clicking of Button A
  tooltipClick1() {
    if (this.isButtonVisible()) {
      this.tooltipFlag1 = false; this.tooltipFlag2 = true; this.tooltipFlag3 = true; this.tooltipFlag4 = true;
    } else {
      this.tooltipFlag1 = true; this.tooltipFlag2 = true; this.tooltipFlag3 = false; this.tooltipFlag4 = true;
    }
  }

  //On clicking of Button B
  tooltipClick2() {
    if (this.isButtonVisible()) {
      this.tooltipFlag1 = true; this.tooltipFlag2 = false; this.tooltipFlag3 = true; this.tooltipFlag4 = true;
    } else {
      this.tooltipFlag1 = true; this.tooltipFlag2 = true; this.tooltipFlag3 = true; this.tooltipFlag4 = false;
    }
  }

  // returns true if the button is present in the viewport; false otherwise
  isButtonVisible() {
    const element = document.querySelector('.demo-border');
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = element.getBoundingClientRect().top + scroll;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + element.clientHeight,
    }
    
    return ((bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
      || (bounds.top <= viewport.bottom && bounds.top >= viewport.top))
  }
}

