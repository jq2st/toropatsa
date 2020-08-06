import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get token() {
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  constructor(private http: HttpClient) { }

  login(user) {
    user.returnSecureToken = true
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseConfig.apiKey, user)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuth(): boolean {
    return !!this.token
  }

  private setToken(resp) {
    if (resp) {
      const expDate = new Date(new Date().getTime() + +resp.expiresIn * 1000)
      localStorage.setItem('fb-token', resp.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    }
    else {
      localStorage.clear()
    }
  }

}
