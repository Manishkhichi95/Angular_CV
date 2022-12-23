import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';  
// import { tap, filter } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
response:any;
public url='http://localhost:3000/MyCV'
  constructor(private http:HttpClient) {}
  getDetails(){
    
   this.http.get(this.url).subscribe((res)=>{
    console.log("::::::::res",res)
    this.response=res
   })
   return this.response;
   }
}
