import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  //add skill
  public addSkill(skill:any){
    return this.http.post("http://localhost:8080/addSkill",skill);
  }
}
