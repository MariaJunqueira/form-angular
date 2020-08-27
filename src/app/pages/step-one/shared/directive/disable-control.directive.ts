import { NgControl } from '@angular/forms';
import { Directive, Input, OnInit, HostListener } from "@angular/core";

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective implements OnInit {
  @Input() set disableControl(condition: boolean) {
    this.toggleForm(condition);
    this.disabled = condition;
  }

  disabled: boolean = false;

  constructor(private ngControl: NgControl) {}

  ngOnInit() {
    if(this.ngControl) {
      this.toggleForm(this.disabled);
    }
  }

  toggleForm(condition: boolean) {
    if(condition) {
      this.ngControl?.control?.disable();
    } else {
      this.ngControl?.control?.enable();
    }
  }


}
