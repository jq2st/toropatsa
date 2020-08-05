import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pic } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  link = 'https://toropatsa-4e75a.firebaseio.com/'

  constructor(private http: HttpClient) { }

  getPicList() {
    return this.http.get(this.link + 'service.json')
    .pipe(
      map((resp: Pic[]) => {
        return  Object
          .keys(resp)
          .map(key => ({
            ...resp[key],
            id: key
          }))
      })
    )
  }

  addPic(pic) {
    return this.http.post(this.link + 'service/.json', pic)
      .pipe(
        map((resp: Pic) => {
          return {
            ...pic,
            id: resp.name
          }
        })
      )
  }

  deletePic(id) {
    return this.http.delete(this.link + 'service/' + id + '.json')
  }

}
