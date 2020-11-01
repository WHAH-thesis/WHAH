import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  constructor(private _http: HttpService, private router: Router) {}
  ngOnInit(): void {}
  student() {
    this.router.navigateByUrl("/signup/student");
  }
  company() {
    this.router.navigateByUrl("/signup/company");
  }
  center() {
    this.router.navigateByUrl("/signup/center");
  }
  studentl() {
    this.router.navigateByUrl("/signin/student");
  }
  companyl() {
    this.router.navigateByUrl("/signin/company");
  }
  centerl() {
    this.router.navigateByUrl("/signin/center");
  }
  submitForm(username, typeOfUser, message) {
    let obj = { username, typeOfUser, message };
    console.log(obj);
    if (!obj.message) {
      alert("your msg please");
      return;
    }
    this._http.usersReport(obj).subscribe((data) => {});
    alert("thanks for your message'A CHANGER'");
  }
  home() {
    this.router.navigateByUrl("");
  }
}
