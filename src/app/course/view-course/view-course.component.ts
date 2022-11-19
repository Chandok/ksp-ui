import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../vo/Course';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputText } from 'primeng/inputtext';
import { AddClassComponent } from '../class/add-class/add-class.component';
import { ConfirmationService } from 'primeng/api';
import { ClassService } from '../service/class.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
  providers: [DialogService, ConfirmationService],
})
export class ViewCourseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private courseService: CourseService,
    private classService:ClassService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {}
  course: Course = null;
  loading: boolean = true;
  errorMessage = null;

  ref: DynamicDialogRef;

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.route.params.subscribe((params) => {
      this.courseService.getCourse(params['id']).subscribe({
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
    });
  }

  addClass() {
    this.ref = this.dialogService.open(AddClassComponent, {
      header: 'Add course class',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { courseId: this.course.id },
    });

    this.ref.onClose.subscribe((status: string) => {
      if (status) {
        this.getCourse();
      }
    });
  }

  editClass(classId: number) {
    this.ref = this.dialogService.open(AddClassComponent, {
      header: 'Add course class',
      width: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { courseId: this.course.id, classId: classId },
    });

    this.ref.onClose.subscribe((status: string) => {
      if (status) {
        this.getCourse();
      }
    });
  }

  confirmDeleteClass(event: Event, classId: number) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteClass(classId);
        
      },
      reject: () => {
        //reject action
      },
    });
  }

  refreshComponent() {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([`/viewCourse`,this.course.id]).then(()=>{
        
      })
    })
  }

  deleteClass(classId: number) {
    this.classService.deleteClass(classId).subscribe({
      next: () => {
        this.refreshComponent();
      },
      error: (e) => {
        this.errorMessage = e.error;
        this.loading = false;
      },
    });
  }

}
