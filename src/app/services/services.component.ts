import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

@Injectable()
export class CourseService{
  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())

}

export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


