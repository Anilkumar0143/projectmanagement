import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  toggleaddperson: boolean = true;
 // url = 'http://localhost:3000/project';
    url = 'https://projectmanagementdb1.vercel.app/project';

  projectForm!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      fieldset1: this.formBuilder.group({
        projectTitle: '',
        inputStateCompany: '',
        projectdescription: ''
      }),
      fieldset2: this.formBuilder.group({
        inputStateEmp: '',
      }),
      fieldset3: this.formBuilder.group({
        duedate: '',
        inputprojectType: '',
        projectCategory: '',
        tagproject: ''
      }),

    });
  }
   
  addpersondetails() {
    this.toggleaddperson != this.toggleaddperson;
  }
  currentStep = 1;

  next() {
    this.currentStep++;
  }

  previous() {
    this.currentStep--;
  }

 
  // onSubmit() {
  //   const data = {
  //     projectTitle: 'testing',
  //     company: 'xy',
  //     projectDescription: 'wfasa',
  //     assidnedEmployees: 'anil',
  //     createdDate: 'Tue Jan 03 2023 13:25:54 GMT+0530 (India Standard Time)',
  //     creator: 'Anil',
  //     duedate: '7/01/2023',
  //   };
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };

   
  // }

  onSavevalue() {
    // const fieldset1Values = this.projectForm.get('fieldset1').value;
    const f1 = this.projectForm.get('fieldset1')
    const f2 = this.projectForm.get('fieldset2')
    const f3 = this.projectForm.get('fieldset3')
   const data = {
        projectTitle: f1?.value.projectTitle,
        company: f1?.value.inputStateCompany,
        projectDescription: f1?.value.projectdescription,
        assidnedEmployees:f2?.value.inputStateEmp,
        createdDate: 'Tue Jan 03 2023 13:25:54 GMT+0530 (India Standard Time)',
        projectType: f3?.value.inputprojectType,
        creator: 'Anil',
        duedate: f3?.value.duedate,
      };
    console.log(f1?.value, f2?.value, f3?.value);
    this.http.post<any>(this.url, data).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
  }
reload(){
  window.location.reload()
}
}
