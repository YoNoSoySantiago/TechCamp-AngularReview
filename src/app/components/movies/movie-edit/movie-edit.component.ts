import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/models/interfaces/Movie.interface';
import { BackendRequestService } from 'src/app/services/backend-request.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  myForm: FormGroup = new FormGroup({})
  id: string | undefined;

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private router:Router,private backendRequest:BackendRequestService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:any)=>{
        if(params.id){
          this.id == params.id
        }
      }
    )
    const year = new Date().getFullYear()
    this.myForm = this.formBuilder.group(
      {
        title:['',Validators.required],
        year:['',Validators.compose([Validators.required,Validators.max(year),Validators.min(1890)])],
        genre:['',Validators.required],
        director:['',Validators.required],
        rate:['',Validators.compose([Validators.required,Validators.min(1),Validators.max(5)])]
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
 
  submitForm():void{
    if(this.myForm.valid){
      let movie = {
        title:this.title?.value,
        year:this.year?.value,
        genre:this.genre?.value,
        director:this.director?.value,
        rate:this.rate?.value
      }
      this.backendRequest.editMovie(this.id,movie).subscribe((res)=>{
        console.log(res)
      })

    }
  }
  cancelButton():void{
    this.myForm.reset()
    this.router.navigate(['movies'])
  }
}
