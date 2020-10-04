import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  district = [
    { id: 1, name: "Nagar" },
    { id: 2, name: "Pune" },
    { id: 3, name: "Satara" }
  ];
  filteredTaluka = [];
  filteredVillage = [];
  taluka = [
    { id: 1, districtId: 1, name: 'Newasa' },
    { id: 2, districtId: 1, name: 'Karjat' },
    { id: 3, districtId: 1, name: 'Shrigonda' },
    { id: 4, districtId: 2, name: 'Baramati' },
    { id: 5, districtId: 2, name: 'Daund' },
    { id: 6, districtId: 2, name: 'Shirur' },
    { id: 1, districtId: 3, name: 'Phaltan' }
  ];
  village = [
    { id: 1, talukaId: 1, name: 'Malichinchora' },
    { id: 2, talukaId: 2, name: 'Rashin' },
    { id: 3, talukaId: 2, name: 'Khed' },
    { id: 4, talukaId: 2, name: 'MirajGaon' },
    { id: 5, talukaId: 4, name: 'Rui' },
    { id: 6, talukaId: 4, name: 'malegaon BK' }
  ];

  minDate: Date;

  // tslint:disable-next-line:variable-name
  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(['dashboard']); 
    }
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      aadharNo: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: [''],
      district: ['', Validators.required],
      taluka: ['', Validators.required],
      village: [''],
      startDate: [new Date(), Validators.required],
      endDate: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm.valueChanges.subscribe(res => {
      this.minDate = new Date(res.startDate);
    });
  }
  reset() {
    this.registerForm.reset();
  }

  get form() { return this.registerForm.controls; }

  onDistrictSelect(districtId) {
    this.filteredTaluka = this.taluka.filter(el => el.districtId === districtId);
  }

  onTalukaSelect(talukaId) {
    this.filteredVillage = this.village.filter(el => el.talukaId === talukaId);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem('access_token', String(this.form.username));
      // this.authService.register(this.registerForm.value).subscribe((res) => {
      //   if (res.result) {
      //     this.registerForm.reset()
      //     this.router.navigate(['login']);
      //   }
      // })

      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/dashboard']);
    }
  }
}
