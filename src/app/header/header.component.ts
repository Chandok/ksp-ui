import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items:MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
          label:'Course',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  routerLink:'addCourse',
              },
              {
                  label:'List Courses',
                  icon:'pi pi-fw pi-list',
                  routerLink:'courses',
              },
            //   {
            //       separator:true
            //   }
          ]
      },
      {
          label:'Students',
          icon:'pi pi-fw pi-user',
          
      },
      
  ];
  }

}
