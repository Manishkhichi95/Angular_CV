import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
response:any;
public url='http://localhost:3000/data';
  constructor(private http:HttpClient) {}
  getDetails(){
       return this.http.get(this.url)
   }
}

export interface details{
[x: string]: any;
  
    data: {
      name:string;
      img: string;
      objective: string;
      studies: {
        graduation: {
          degree: string;
          institute:string;
          percentage:string;
        },
        postgraduation: {
          degree: string;
          institute: string;
          cgpa: string;
        }
      },
      experience: {
        job: string;
        period:string
      },
      projects: [
        {
          title: string;
          description: string;
          languages_used: string;
          tools_used: string;
        },
        {
          title: string;
          description: string;
          languages_used: string;
          tools_used: string;
        },
        {
          title:string;
          description: string;
          languages_used: string;
          tools_used: string;
        },
        {
          title: string;
          description: string;           
          languages_used: string;
          framework_used: string;
          tools_used: string;
        },
        {
          title: string;
          description: string;
          languages_used: string;
          framework_used: string;
          tools_used: string;
        }
      ];
      contact: {
        address: string;
        ph_no:string;
        linkedIn: string;
        instagram: string;
        facebook: string;
        mailId: string;
      }
      skills: {
        hardSkills: [string];
        devTools: [string];
        softSkills: [string];
      };
      languages: [string];
      hobbies: [string];
    }
  }


