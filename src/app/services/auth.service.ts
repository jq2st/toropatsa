import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get token() {
    return ''
  }

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post('', user)
  }

  logout() {

  }

  isAuth(): boolean {
    return !!this.token
  }

  private setToken() {

  }

}
