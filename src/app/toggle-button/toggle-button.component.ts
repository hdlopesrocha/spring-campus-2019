import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  value = false;
  @Output()
  changeEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.value = !this.value;
    this.changeEmitter.emit(this.value);
  }
}
