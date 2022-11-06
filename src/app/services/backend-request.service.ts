import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IMovie } from '../models/interfaces/Movie.interface';
@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {

  baseUrl = 'http://localhost:3002/api'
  constructor(private http: HttpClient) { }
  
  registerUser(username:string,password:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,{user:username,password:password})
  }

  getAllMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}/movies`)
  }

  addMovie(movie:Object):Observable<any>{
    let token = window.sessionStorage.getItem('accessToken')
    let header:HttpHeaders = new HttpHeaders().append('Authorization',`Bearer ${token}` )
    return this.http.post(`${this.baseUrl}/movies`,movie,{headers:header })
  }

  editMovie(id:string | undefined,movie:Object):Observable<any>{
    let token = window.sessionStorage.getItem('accessToken')
    let header:HttpHeaders = new HttpHeaders().append('Authorization',`Bearer ${token}` )
    return this.http.put(`${this.baseUrl}/movies/${id}`,movie,{headers:header})
  }

  removeMovie(id:string | undefined):Observable<any>{
    let token = window.sessionStorage.getItem('accessToken')
    let header:HttpHeaders = new HttpHeaders().append('Authorization',`Bearer ${token}` )
    return this.http.delete(`${this.baseUrl}/movies/${id}`,{headers:header})
  }
}
