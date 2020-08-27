import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input('parentForm') parentForm: FormGroup;
  @Input('controlForm') controlForm;
  @Input('type') type: String;
  @Input('id') id: String;
  @Input('class') class: String;
  @Output() event = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event) {
    this.event.emit(event)
  }

  consolelog(oi) {
    console.log(oi)
  }
}
