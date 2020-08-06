import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent implements OnInit {

  form: FormGroup

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  toDash() {
    const user = {
      email: this.form.value.login,
      password: this.form.value.password
    }
    this.auth.login(user)
      .subscribe(() => {
        this.form.reset()
        this.router.navigate(['admin', 'dashboard'])
      })
  }

}
