import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thanks-popup',
  templateUrl: './thanks-popup.component.html',
  styleUrls: ['./thanks-popup.component.scss']
})
export class ThanksPopupComponent implements OnInit {

  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()

  constructor() { }

  ngOnInit() {
  }

  closepopup() {
    this.onClose.emit(null)
  }

}
