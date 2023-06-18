import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _router: Router,
    private _snackBar: MatSnackBar
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
      this.auth.login(this.logInForm.value).subscribe(
        (response) => {
          if (response.isAuthenticate) {
            localStorage.setItem('token', response.token);
            this._router.navigate(['/main/stores']);
          } else {
            this._snackBar.open(response.message, 'Cerrar', {
              duration: 3000,
              panelClass: ['snackbar-service'],
            });
          }
        },
        (error) => {
          throw error;
        }
      );
    }
  }
}
