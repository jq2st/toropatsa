import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-galery-page',
  templateUrl: './admin-galery-page.component.html',
  styleUrls: ['./admin-galery-page.component.scss']
})
export class AdminGaleryPageComponent implements OnInit {

  galeryItemsList: Pic[] = []

  constructor() { }

  ngOnInit() {
  }

  addItem(event) {
    console.log(event)
    this.galeryItemsList.push(event)
  }

}
