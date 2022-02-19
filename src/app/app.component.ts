import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PageEvent } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  position: number;
  checked?: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' },
  { position: 11, name: 'Hydrogen' },
  { position: 12, name: 'Helium' },
  { position: 13, name: 'Lithium' },
  { position: 14, name: 'Beryllium' },
  { position: 15, name: 'Boron' },
  { position: 16, name: 'Carbon' },
  { position: 17, name: 'Nitrogen' },
  { position: 18, name: 'Oxygen' },
  { position: 19, name: 'Fluorine' },
  { position: 20, name: 'Neon' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA.slice(0, 5);
  }
  memory: number[] = [];
  title = 'settimeout';
  displayedColumns: string[] = ['position', 'name', 'checkbox'];
  dataSource: PeriodicElement[] = [];

  pageEvent(event: PageEvent) {
    // this.setCheckbox(this.dataSource);
    const start = event.pageIndex * 5;
    this.dataSource = ELEMENT_DATA.slice(start, start + 5);
    this.dataSource.forEach((element) => {
      if (this.memory.includes(element.position)) element.checked = true;
    });
  }
  changeElementCheckedValue(event: MatCheckboxChange, element: any) {
    element.checked = event.checked;
    if (element.checked) {
      this.memory.push(element.position);
    } else {
      const index = this.memory.indexOf(element.position);
      if (index > -1) {
        this.memory.splice(index, 1);
      }
    }
  }
}
