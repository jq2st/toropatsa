import { Injectable } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  task: AngularFireUploadTask
  progress: Observable<string>
  snapshot: Observable<any>;
  url

  constructor(private storage: AngularFireStorage) { }

  upload(path: string, file) {
    this.task = this.storage.upload(path, file);
    return this.snapshot = this.task.snapshotChanges()
    // return this.task.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //   (snap) => {
    //     progress = (snap.bytesTransferred / snap.totalBytes) * 100
    //   },
    //   (error) => {
    //     console.log(error)
    //   },
    //   () => {
    //     this.url = this.task.snapshot.downloadURL
    //   }
    // )
  }
}
