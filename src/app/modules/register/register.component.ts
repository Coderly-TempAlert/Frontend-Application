import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = {} as FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private _router: Router,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      // userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      // names: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      // paternLastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      // motherLastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required]],      
      // phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      userName: ['', [Validators.required]],
      names: ['', [Validators.required]],
      paternLastName: ['', [Validators.required]],
      motherLastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],      
      phoneNumber: ['', [Validators.required]],
    },);
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
  
    const formData = this.registerForm.value;
  
    console.log('Enviando solicitud de registro:', formData); 
  
    this._http.post(`${environment.security_url_api}/Users/Register`, formData).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this._router.navigate(['/main/stores']);
      },
      error => {
        console.error('Error en el registro', error);
      }
    );
  }


  onRegister(){
    if(this.registerForm.valid){
      console.log('Enviando solicitud de registro:', this.registerForm.value);
      this.auth.signUp(this.registerForm.value).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this._router.navigate(['/main/stores']);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }


  }

}
