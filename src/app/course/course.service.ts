import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './vo/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  
  constructor(public httpClient: HttpClient) {}

  public save(course:Course): Observable<Course>{
    return this.httpClient.post<Course>("http://localhost:8080/course/create",course);
  }
  
  getCourse(id: number) {
    return this.httpClient.get<Course>('http://localhost:8080/course?id='+id);
  }
  
  public getCourses(): Observable<Course[]> {
    
    return this.httpClient.get<Course[]>('http://localhost:8080/course/list');
  }


  deleteCourse(id: number) {
    return this.httpClient.delete('http://localhost:8080/course?id='+id);
  }
 
}
