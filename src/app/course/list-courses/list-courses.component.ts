import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ConfirmationService } from 'primeng/api';
import { Course } from '../vo/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
  providers: [ConfirmationService],
})
export class ListCoursesComponent implements OnInit {
  constructor(
    public service: CourseService,
    public router:Router,
    private confirmationService: ConfirmationService
  ) {}

  courses: Course[] = [];
  loading: boolean = true;
  errorMessage: String = null;

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses() {
    this.service.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: (e) => {
        this.errorMessage = 'Unable to get courses';
        this.loading = false;
      },
    });
  }

   confirmDelete(event: Event, courseId: number) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this.deleteCourse(courseId);
        this.refreshComponent();
      },
      reject: () => {
        //reject action
      },
    });
  }
  refreshComponent() {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([`/courses`]).then(()=>{
        
      })
    })
  }

  deleteCourse(courseId: number) {
    this.service.deleteCourse(courseId).subscribe({
      next: () => {},
      error: (e) => {
        this.errorMessage = e.error;
        this.loading = false;
      },
    });
  }
}


