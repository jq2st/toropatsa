import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pic } from '../../interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { GaleryService } from 'src/app/services/galery.service';
import { UploadService } from 'src/app/services/upload.service';
import { tap, finalize, switchMap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

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

  selectedFile: File = null
  fb

  task: AngularFireUploadTask
  progress: Observable<string>
  snapshot: Observable<any>;
  url = ''

  constructor(private afStorage: AngularFireStorage, private db: AngularFirestore, private galeryService: GaleryService, private upload: UploadService) { }

  ngOnInit() {
    this.form = new FormGroup({
      file: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('')
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
    let data: Pic
    let qt = Date.now();
    let stName = '/galary/' + qt + '_' + this.fileToUpload.name
    let ref = this.afStorage.ref(stName);
    this.task = this.afStorage.upload(stName, this.fileToUpload);
    this.task.snapshotChanges().pipe(
      tap(),
      finalize( async() =>  {
        this.url = await ref.getDownloadURL().toPromise()
        data = {name: this.form.value.name, description: this.form.value.description, photo: this.url}
        this.galeryService.addPic(data)
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
