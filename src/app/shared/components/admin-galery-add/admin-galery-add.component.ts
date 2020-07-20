import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pic } from '../../interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-galery-add',
  templateUrl: './admin-galery-add.component.html',
  styleUrls: ['./admin-galery-add.component.scss']
})
export class AdminGaleryAddComponent implements OnInit {

  isAddPopup: boolean = false
  form: FormGroup

  @Output() onClose = new EventEmitter()
  @Output() onAdd = new EventEmitter<Pic>()

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  addPic() {
    console.log(this.form)
    this.closePopup()
  }

}
