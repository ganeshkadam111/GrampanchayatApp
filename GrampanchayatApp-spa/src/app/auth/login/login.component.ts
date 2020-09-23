import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  countries: any = [
    {
      full: 'Great Britain',
      short: 'GB'
    },
    {
      full: 'United States',
      short: 'US'
    },
    {
      full: 'Canada',
      short: 'CA'
    }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      grampanchayatName: ['', Validators.required],
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else if (this.data.username.value === localStorage.getItem('username') &&
     this.data.password.value === localStorage.getItem('password')) {
      this.router.navigate(['/dashboard']);
    } else {
      this.submitted = true;
      this.router.navigate(['/dashboard']);
    }
  }
}
