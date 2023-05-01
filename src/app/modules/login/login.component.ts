import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup = {} as FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.logInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.logInForm.invalid) {
      return;
    }
    this.logInForm.disable();
    this._router.navigate(['/stores']);
  }
}
