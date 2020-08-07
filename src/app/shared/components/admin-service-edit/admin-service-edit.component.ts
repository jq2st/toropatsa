import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pic } from '../../interfaces/interfaces';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UploadService } from 'src/app/services/upload.service';
import { tap, finalize } from 'rxjs/operators';
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

  @Output() onClose = new EventEmitter()
  @Output() onAdd = new EventEmitter<Pic>()

  selectedFile: File = null
  fb

  task: AngularFireUploadTask
  progress: Observable<string>
  snapshot: Observable<any>;
  url = ''

  constructor(private afStorage: AngularFireStorage, private db: AngularFirestore, private serviceService: ServService, private upload: UploadService) { }

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

  editPic() {
    let data: Pic
    let qt = Date.now();
    let stName = '/service/' + qt + '_' + this.fileToUpload.name
    let ref = this.afStorage.ref(stName);
    this.task = this.afStorage.upload(stName, this.fileToUpload);
    this.task.snapshotChanges().pipe(
      tap(),
      finalize( async() =>  {
        this.url = await ref.getDownloadURL().toPromise()
        data = {name: this.form.value.name, description: this.form.value.description, photo: this.url}
        this.serviceService.addPic(data)
        .subscribe(item => {
          this.onAdd.emit(item)
          this.closePopup()
        })
        // this.db.collection('files').add( { downloadURL: this.downloadURL, path })
      }),
    ).subscribe(n => {
     
    })
  }
}
