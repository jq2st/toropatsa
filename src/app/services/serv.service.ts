import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pic } from '../shared/interfaces/interfaces';
import { Observable } from 'rxjs';

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

  getPicById(id): Observable<Pic> {
    return this.http.get<Pic>(this.link + 'service/' + id + '.json')
    .pipe(
      map((resp: Pic) => {
        console.log('serv', id, resp)
        resp.id = id
        return resp
      })
    )
  }

  editPic(id, pic) {
    return this.http.put(this.link + 'service/' + id + '.json', pic)
    .pipe(
      map((resp: Pic) => {
        console.log('serveeeeee', id, resp)
        resp.id = id
        return resp
      })
    )
  }

  deletePic(id) {
    return this.http.delete(this.link + 'service/' + id + '.json')
  }

}
