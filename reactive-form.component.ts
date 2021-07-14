import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [LoginService],
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  usersData = [];
  successMessage: string;
  errorMessage: string;

  constructor(private fb: FormBuilder, private ls: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      /* username: ['', [Validators.required, usernameValidate]], */
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    /*  console.log(this.loginForm.value);
    console.log(this.loginForm.value.username); */
    this.ls.getData().subscribe(
      (res) => {
        //console.log(res);
        this.usersData = res;
        console.log(this.usersData);
        for (let i = 0; i < this.usersData.length; i++) {
          if (this.loginForm.value.username == this.usersData[i].username) {
            this.errorMessage = null;
            this.successMessage = 'User Found';
            break;
          } else {
            this.successMessage = null;
            this.errorMessage = 'User not found';
          }
        }
      },
      (error) => {
        console.log(error);
        if (error.status == 404) this.errorMessage = 'Check the URL.';
      }
    );
    this.ls.postUser(this.loginForm.value).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
function usernameValidate(c: FormControl) {
  // console.log(c.value);
  /* let regExp = /^[a-zA-Z]{4}[0-9]{4}$/; */
  let regExp = new RegExp('^[a-zA-Z]{4}[0-9]{4}$');

  if (!regExp.test(c.value)) {
    return { uNameValid: 'Username should be 4 chars followed by 4 digits' };
  } else return null;
}
