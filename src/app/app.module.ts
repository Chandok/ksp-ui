import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';
import { AddClassComponent } from './course/class/add-class/add-class.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCourseComponent,
    ListCoursesComponent,
    ViewCourseComponent,
    AddClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // NG Prime 
    MenubarModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    CardModule,
    DynamicDialogModule,
    ConfirmPopupModule,
    // Custom
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
