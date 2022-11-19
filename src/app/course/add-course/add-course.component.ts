import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../vo/Course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  loading: false;
  errorMessage: string = null;
  course: Course = {
    id: '',
    name: '',
    enrollmentStartDate: '',
    enrollmentEndDate: '',
    startDate: '',
    endDate: '',
    cost: 0,
  };

  constructor(
    public service: CourseService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.loadCourseDetails(params['id']);
      }
    });
  }
  loadCourseDetails(courseId: number) {
    this.service.getCourse(courseId).subscribe({
      next: (course) => {
        this.course = course;
        this.loading = false;
        this.errorMessage = null;
      },
      error: (e) => {
        this.errorMessage = e.error;
        this.loading = false;
      },
    });
  }

  onSubmit() {
    this.service.save(this.course).subscribe({
      next: (course) => {
        this.router.navigate(['/viewCourse/' + course.id]);
      },
      error: (e) => {
        this.errorMessage = 'Unable to save Course';
        this.loading = false;
      },
    });
  }

  onCancel() {
    // redirect to list page
  }
}
