import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pic } from '../../interfaces/interfaces';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UploadService } from 'src/app/services/upload.service';
import { tap, finalize, map } from 'rxjs/operators';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-admin-service-edit',
  templateUrl: './admin-service-edit.component.html',
  styleUrls: ['./admin-service-edit.component.scss']
})
export class AdminServiceEditComponent implements OnInit {

  isAddPopup: boolean = false
  form: FormGroup
  fileToUpload: File = null
  isLoaded = false
  qPic: Pic
  img
  htmimg

  @Output() onClose = new EventEmitter()
  @Output() onEdit = new EventEmitter<Pic>()
  @Input('qedit') qEdit 

  selectedFile: File = null
  fb

  task: AngularFireUploadTask
  progress: Observable<string>
  snapshot: Observable<any>;
  url = ''
  reader: FileReader = new FileReader()

  constructor(private afStorage: AngularFireStorage, private db: AngularFirestore, private serviceService: ServService, private upload: UploadService) { }

  ngOnInit() {
    this.serviceService.getPicById(this.qEdit)
      .subscribe((pic) => {
        this.form = new FormGroup({
          file: new FormControl(''),
          name: new FormControl(pic.name, Validators.required),
          description: new FormControl(pic.description, Validators.required)
        })
        this.isLoaded = true
        this.img = pic.photo
        this.htmimg = pic.photo
      })
  }

  closePopup() {
    this.onClose.emit(null)
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0]
      let reader: FileReader = new FileReader()
      reader.onloadend = (e) => {
        this.htmimg = reader.result;
     }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  editPic() {
    console.log(this.form.value.file)
    let data: Pic
    if (this.form.value.file != '') {
      let qt = Date.now();
      let stName = '/service/' + qt + '_' + this.fileToUpload.name
      let ref = this.afStorage.ref(stName);
      this.task = this.afStorage.upload(stName, this.fileToUpload);
      this.task.snapshotChanges().pipe(
        tap(),
        finalize( async() =>  {
          this.url = await ref.getDownloadURL().toPromise()
          data = {name: this.form.value.name, description: this.form.value.description, photo: this.url}
          this.serviceService.editPic(this.qEdit, data)
          .subscribe((item: Pic) => {
            this.onEdit.emit(item)
            this.closePopup()
          })
          // this.db.collection('files').add( { downloadURL: this.downloadURL, path })
        }),
      ).subscribe(n => {
       
      })
    }
    else {
      this.url = this.img
      data = {name: this.form.value.name, description: this.form.value.description, photo: this.url}
      this.serviceService.editPic(this.qEdit, data)
      .subscribe((item: Pic) => {
        this.onEdit.emit(item)
        this.closePopup()
      })
    }
  }
}
