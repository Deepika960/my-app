import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public role: [
    {
      name: 'Admin', value: 'admin'
    },
    {
      name: 'User', value: 'user'
    }
  ];
  public signUpForm: FormGroup;
  public submitted: boolean =  false;
  public loading = false;
  error = '';


  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router,private http: HttpClient) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: '',
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    debugger
    this.submitted =  true;
    if(this.signUpForm.invalid) {
      return;
    }
    let signUpData =  {
      username: this.signUpForm.controls['username'].value,
      firstName:this.signUpForm.controls['firstName'].value,
      lastName: this.signUpForm.controls['lastName'].value,
      role: this.signUpForm.controls['role'].value,
      password: this.signUpForm.controls['password'].value
    }
    // debugger
    // this.userService.signUp( signUpData ).subscribe((res) => {
    //   console.log(res);
    //   if(res) {
    //     alert('Sign Up successFully')
    //     this.router.navigateByUrl('login');
    //   }
    // },error => {
    //   console.error(error);
    // })
    this.http.post<any>("http://localhost:3000/register", this.signUpForm.value)
    .subscribe(res=>{
      debugger
      this.signUpForm.reset();
      if(res) {
            alert('Sign Up successFully')
            this.router.navigateByUrl('login');
          }
    }, err=>{
      alert('Somthing went wrong');
    })
  }

  // isAdminSelected(event:any) {
  //   debugger
  //   if(event.target.defaultValue === 'admin') {
  //     this.signUpForm.controls['role'].setValue('admin');
  //   } else if(event.target.defaultValue === 'user') {
  //     this.signUpForm.controls['role'].setValue('user');
  //   }
    
  // }
}
