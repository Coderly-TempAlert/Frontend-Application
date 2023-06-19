import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = {} as FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      userName: ['', [Validators.required]],
      names: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      paternLastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
      ],
      motherLastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.auth.signUp(this.registerForm.value).subscribe(
        (response) => {
          this._snackBar.open(response.message, 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-service'],
          });

          if (response.isRegister) {
            this._router.navigate(['/login']);
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
