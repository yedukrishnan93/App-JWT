import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  registerForm: FormGroup;
  private response:string="";
  private isLogin: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private authSvc: AuthService) {
    this.form = this.fb.group({ email: ['', Validators.required], password: ['', Validators.required] });
    this.registerForm = this.fb.group({ email: ['', Validators.required], password: ['', Validators.required] });
  }

  ngOnInit() {
  }
  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authSvc.login(val.email, val.password).subscribe((data:any) => {
        console.log("data::",data)
        this.response = data;
        console.log('user logged in')
      })
    }
  }
  loadRegister = () => this.isLogin = false;
  loadLogin = () => this.isLogin = true;
 
 
  register() {
    console.log("register component worked");
    const val = this.registerForm.value;
    if (val.email && val.password) {
      this.authSvc.register(val.email, val.password).subscribe((data:any) => {
        console.log("reg::data::",data)
        this.response = data;
        console.log('user logged in')
      })
    }
  }

}
