import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadService } from 'src/app/services/upload.service';
import { Pic } from '../../interfaces/interfaces';

@Component({
  selector: 'app-admin-cost-add',
  templateUrl: './admin-cost-add.component.html',
  styleUrls: ['./admin-cost-add.component.scss']
})
export class AdminCostAddComponent implements OnInit {

  isAddPopup: boolean = false
  form: FormGroup
  fileToUpload: File = null

  @Output() onClose = new EventEmitter()
  @Output() onAdd = new EventEmitter<Pic>()

  selectedFile: File = null
  fb

  itemList = [
    {left: '', right: '', middle: ''}
  ]

  constructor(private afStorage: AngularFireStorage, private db: AngularFirestore, private upload: UploadService) { }

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

  // addPic() {
  //   let data: Pic
  //   let qt = Date.now();
  //   let stName = '/galary/' + qt + '_' + this.fileToUpload.name
  //   let ref = this.afStorage.ref(stName);
  //   this.task = this.afStorage.upload(stName, this.fileToUpload);
  //   this.task.snapshotChanges().pipe(
  //     tap(),
  //     finalize( async() =>  {
  //       this.url = await ref.getDownloadURL().toPromise()
  //       data = {name: this.form.value.name, description: this.form.value.description, photo: this.url}
  //       this.galeryService.addPic(data)
  //       .subscribe(item => {
  //         this.onAdd.emit(item)
  //         this.closePopup()
  //       })
  //       // this.db.collection('files').add( { downloadURL: this.downloadURL, path })
  //     }),
  //   ).subscribe(n => {
     
  //   })
    
  addListItem() {
    this.itemList.push({left: '', right: '', middle: ''})
  }
    
}
