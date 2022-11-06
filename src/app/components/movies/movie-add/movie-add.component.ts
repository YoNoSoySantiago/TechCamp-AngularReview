import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendRequestService } from 'src/app/services/backend-request.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  myForm: FormGroup = new FormGroup({})

  constructor(private formBuilder:FormBuilder, private router:Router, private backendRequest:BackendRequestService) { }

  ngOnInit(): void {
    const year = new Date().getFullYear()

    this.myForm = this.formBuilder.group(
      {
        title:['Hola',Validators.required],
        year:['',Validators.compose([Validators.pattern('[0-9]*'),Validators.required,Validators.max(year),Validators.min(1890)])],
        genre:['',Validators.required],
        director:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*')])],
        rate:['',Validators.compose([Validators.pattern('[0-5]*'),Validators.required,Validators.min(1),Validators.max(5)])]
      }
    )
    this.myForm.valueChanges.subscribe(
      console.log
    )
  }

  get title(){
    return this.myForm.get('title')
  }
  get year(){
    return this.myForm.get('year')
  }
  get genre(){
    return this.myForm.get('genre')
  }
  get director(){
    return this.myForm.get('director')
  }
  get rate(){
    return this.myForm.get('rate')
  }
 
  submitForm(){
    if(this.myForm.valid){
      let movie = {
        title:this.title?.value,
        year:this.year?.value,
        genre:this.genre?.value,
        director:this.director?.value,
        rate:this.rate?.value
      }
      this.backendRequest.addMovie(movie).subscribe((res)=>{
        console.log(res)
        this.router.navigate(['movies'])
      })
      this.myForm.reset()
    }
  }

  cancelButton(){
    this.myForm.reset()
    this.router.navigate(['movies'])
  }
}
