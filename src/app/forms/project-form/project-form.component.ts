import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  toggleaddperson:boolean = true;
  constructor() { }

  ngOnInit(): void {
     
  }
 addpersondetails(){
  this.toggleaddperson != this.toggleaddperson;
 }
 currentStep = 1;

 next() {
   this.currentStep++;
 }

 previous() {
   this.currentStep--;
 }

}
