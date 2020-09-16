import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.scss']
})
export class MainPopupComponent implements OnInit {

  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()

  constructor() { }

  ngOnInit() {
  }

  closepopup() {
    this.onClose.emit(null)
  }

}
