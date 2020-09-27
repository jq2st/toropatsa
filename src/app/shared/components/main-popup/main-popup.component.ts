import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.scss']
})
export class MainPopupComponent implements OnInit {

  @Output() onClose: EventEmitter<null> = new EventEmitter<null>()
  @Output() onSend: EventEmitter<null> = new EventEmitter<null>()

  form: FormGroup

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      msg: new FormControl('')
    })
  }

  sendMSG() {
    this.http.post('/api/mail.php', this.form.value)
      .subscribe()
    this.closepopup()
    this.openThenksPopup()
  }

  openThenksPopup() {
    this.onSend.emit(null)
  }

  closepopup() {
    this.onClose.emit(null)
  }

}
