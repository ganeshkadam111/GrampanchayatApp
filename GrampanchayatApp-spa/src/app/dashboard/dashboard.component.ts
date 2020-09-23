import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;

  district = [
      { id: 1, name: "Nagar" },
      { id: 2, name: "Pune" },
      { id: 3, name: "Satara" }
    ];
  filteredTaluka =[];
  filteredVillage =[];
  taluka = [
    { id: 1, districtId:1, name: 'Newasa'},
    { id: 2, districtId:1, name: 'Karjat'},
    { id: 3, districtId:1, name: 'Shrigonda'},
    { id: 4, districtId:2, name: 'Baramati'},
    { id: 5, districtId:2, name: 'Daund'},
    { id: 6, districtId:2, name: 'Shirur'},
    { id: 1, districtId:3, name: 'Phaltan'}
  ];
  village = [
    { id: 1, talukaId:1, name: 'Malichinchora'},
    { id: 2, talukaId:2, name: 'Rashin'},
    { id: 3, talukaId:2, name: 'Khed'},
    { id: 4, talukaId:2, name: 'MirajGaon'},
    { id: 5, talukaId:4, name: 'Rui'},
    { id: 6, talukaId:4, name: 'malegaon BK'}
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      district: ['', Validators.required],
      taluka: ['', Validators.required],
      village: ['', Validators.required],
      searchType: '',
      totalCount:''
    });
  }

  get form() { return this.searchForm.controls; }

  onDistrictSelect(districtId) {
    this.filteredTaluka =  this.taluka.filter(el=>el.districtId === districtId);
  }

  onTalukaSelect(talukaId) {
    this.filteredVillage = this.village.filter(el=>el.talukaId === talukaId);
  }
}
