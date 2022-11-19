import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../vo/Class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  deleteClass(id: number) {
    return this.httpClient.delete('http://localhost:8080/class?id='+id);
  }

  constructor(public httpClient: HttpClient) {}

  public save(clazz:Class): Observable<Class>{
    return this.httpClient.post<Class>("http://localhost:8080/class/create",clazz);
  }
  
  getClass(id: String) {
    return this.httpClient.get<Class>('http://localhost:8080/class?id='+id);
  }
  
  public getClasses(id:number): Observable<Class[]> {
    return this.httpClient.get<Class[]>('http://localhost:8080/class/list?courseId='+id);
  }
}
