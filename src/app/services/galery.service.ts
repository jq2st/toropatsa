import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  link = 'https://toropatsa-4e75a.firebaseio.com/'

  constructor(private http: HttpClient) { }

  getPicList() {
    return this.http.get(this.link)
  }

  addPic(pic) {
    return this.http.post(this.link, pic)
  }

}
