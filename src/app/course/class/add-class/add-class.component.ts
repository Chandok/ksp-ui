import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputText } from 'primeng/inputtext';
import { ClassService } from '../../service/class.service';
import { Class } from '../../vo/Class';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
})
export class AddClassComponent implements OnInit {
  loading: false;
  errorMessage: string = null;
  clazz: Class = {
    id: '',
    name: '',
    courseId: '',
  };

  constructor(
    public service: ClassService,
    private router: Router,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this.clazz.courseId = config.data.courseId;
    this.clazz.id = config.data.classId;
  }

  ngOnInit(): void {
    if (this.clazz.id) {
      this.loadCourseClassDetails(this.clazz.id);
    }
  }
  loadCourseClassDetails(classId: String) {
    this.service.getClass(classId).subscribe({
      next: (clazz) => {
        this.clazz = clazz;
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
    this.service.save(this.clazz).subscribe({
      next: (clazz) => {
        this.ref.close('SUCCESS');
      },
      error: (e) => {
        this.errorMessage = 'Unable to save Class';
        this.loading = false;
      },
    });
  }

  onCancel() {
    // redirect to list page
  }
}
