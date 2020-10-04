import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  village = [
    { id: 1, talukaId: 1, name: 'Malichinchora' },
    { id: 2, talukaId: 2, name: 'Rashin' },
    { id: 3, talukaId: 2, name: 'Khed' },
    { id: 4, talukaId: 2, name: 'MirajGaon' },
    { id: 5, talukaId: 4, name: 'Rui' },
    { id: 6, talukaId: 4, name: 'malegaon BK' }
  ];

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(['dashboard']); 
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      grampanchayatName: ['', Validators.required],
    });
  }

  get form() { return this.loginForm.controls; }

  
  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.form.username,this.form.password);
  }

}
