import { AuthService } from './../../core/services/auth/auth.service';
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

  constructor(
    private _formBuilder: FormBuilder, 
    private auth: AuthService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.logInForm = this._formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.logInForm.invalid) {
      return;
    }
    this.logInForm.disable();
    this._router.navigate(['/main/stores']);
  }

  onLogin() {
    if (this.logInForm.valid) {
      console.log('Enviando solicitud de login:', this.logInForm.value);
      this.auth.login(this.logInForm.value).subscribe(
        (response) => {
          console.log('Login exitoso', response);
          this._router.navigate(['/main/stores']);
        },
        (error) => {
          console.error('Error en el login', error);
        }
      );
    }
  }
}
