import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService, private _http: HttpClient) {
    if (authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    debugger
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    // this.authenticationService.login(this.f['username'].value, this.f['password'].value).subscribe((res) => {
    //   debugger
    //   // this.router.navigate([]);
    //   if (res.role === "User") {
    //     this.router.navigateByUrl('user');
    //   } else if (res.role === "Admin") {
    //     this.router.navigateByUrl("admin");
    //   } else {
    //     alert('Role does not access login as user or admin');
    //     this.router.navigateByUrl("login");
    //   }
    //   console.log('login', res)
    // }, (error) => {
    //   this.error = error;
    //   this.loading = false;
    // })
    this._http.post<any>("http://localhost:3000/login",this.f['username'].value, this.f['password'].value)
      .subscribe(res => {
        debugger
        // const user = res.find((a: any) => {
        //   return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        // });

        // if (res.role === "User") {
        //   this.router.navigateByUrl('user');
        // } else if (res.role === "Admin") {
        //   this.router.navigateByUrl("admin");
        // } else {
        //   this.router.navigateByUrl("login");
        // }


      }, error => {
        this.error = error;
        this.loading = false;
      })


  }

  public goToSignUp() {
    this.router.navigateByUrl('signUp');
  }
} 
