import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    this.logInForm = new FormGroup({
      userName: new FormControl<string | null>('', [Validators.required]),
      password: new FormControl<string | null>('', [Validators.required])
    });
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
          this._snackBar.open(error.error.message, 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-service'],
          });
        }
      );
    }
  }
}
