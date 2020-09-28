import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pic } from '../shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  link = 'https://toropatsa-4e75a.firebaseio.com/'

  constructor(private http: HttpClient) { }

  getPriceList() {
    return this.http.get(this.link + 'price.json')
    .pipe(
      map(resp => {
        return  Object
          .keys(resp)
          .map(key => ({
            ...resp[key],
            id: key
          }))
      })
    )
  }

}
