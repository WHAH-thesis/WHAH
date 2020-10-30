import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {

  user : any 
  constructor(private _http: HttpService, private router: Router) {}
  ngOnInit(): void { }
  func(user) {
    var obj = {
      "username": user
    }
    this._http.checkExistingNames(obj).subscribe((data)=>{
      this.user = data
     })
  }
  signin() {
    this.router.navigateByUrl('/signin/student');
  }
  // sign up student
  collect(username, email, secretinfo, password) {
    var obj = { username, email, secretinfo, password };
    var nameObj = {username}
    this._http.checkuserNames(nameObj).subscribe((data)=>{
      console.log(data)
      if(!data){
        console.log('false')
        this._http.register(obj).subscribe((data) => {
          this.router.navigateByUrl('/signin/student');
        });
      }
      else{
        console.log('true')
         alert('name already existing')
      }
    })
  }
}
