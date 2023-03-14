import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  skill={
    skill_group_name:'',
  }
  constructor(private http: HttpClient, private skillService: SkillService) { }
  ngOnInit() {

    let response = this.http.get("http://localhost:8080/skills");
    response.subscribe((data)=>this.skills=data);

  }
  formSubmit(){
    console.log(this.skill);
    this.skillService.addSkill(this.skill).subscribe((data)=>{
      console.log(data);
      alert("success");
    },
    (error)=>{
      console.log(error);
      alert("Error");
    }
    )

  }

}



