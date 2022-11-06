import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendRequestService } from 'src/app/services/backend-request.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup = new FormGroup({})

  constructor(private router:Router,private formBuilder:FormBuilder, private backendRequest:BackendRequestService) { }

  ngOnInit(): void {
    let token = window.sessionStorage.getItem('accessToken');
    if(token){
      this.router.navigate(['movies'])
    }
    this.myForm = this.formBuilder.group(
      {
        user:['',Validators.required],
        password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
      }
    )
  }

  get user(){
    return this.myForm.get('user')
  }

  get password(){
    return this.myForm.get('password')
  }

  loginUser(){
    const user = this.user?.value
    const password = this.password?.value
    this.backendRequest.registerUser(user,password).subscribe((res)=>{
      console.log(res)
      const token = res.accessToken
      window.sessionStorage.setItem('accessToken',token)
      this.router.navigate(['movies'])
    })
  }

  cancelButton(){
    this.myForm.reset()
    this.router.navigate(['movies'])
  }
}
