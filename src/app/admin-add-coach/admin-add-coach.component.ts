import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalService } from '../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-coach',
  templateUrl: './admin-add-coach.component.html',
  styleUrls: ['./admin-add-coach.component.css'],
})
export class AdminAddCoachComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {}


  addCoach(fullName, image, email, diplome, experience, about, number){
    var obj = {fullName, image, email, diplome, experience, about, number}
    this._http.addCoach(obj).subscribe((data)=>{
      alert('coach is done')
    })
  }
}
