import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  url = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProjects() 
  }
  getProjects() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.get(this.url, httpOptions).subscribe(res => { this.projects = res; console.log(res); },
      err => { console.log(err); });
  }
}
