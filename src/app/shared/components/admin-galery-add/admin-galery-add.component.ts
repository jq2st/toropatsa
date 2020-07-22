import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pic } from '../../interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-admin-galery-add',
  templateUrl: './admin-galery-add.component.html',
  styleUrls: ['./admin-galery-add.component.scss']
})
export class AdminGaleryAddComponent implements OnInit {

  isAddPopup: boolean = false
  form: FormGroup
  fileToUpload: File = null

  @Output() onClose = new EventEmitter()
  @Output() onAdd = new EventEmitter<Pic>()

  selectedFile: File = null;
  fb;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.form = new FormGroup({
      file: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0]
    }
  }

  addPic() {
    let n = Date.now();
    this.afStorage.upload('/n/jn', this.fileToUpload);  

    this.closePopup()
  }

 
  

   

}
