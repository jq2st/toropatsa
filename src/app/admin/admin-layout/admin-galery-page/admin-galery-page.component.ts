import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/shared/interfaces/interfaces';
import { GaleryService } from 'src/app/services/galery.service';

@Component({
  selector: 'app-admin-galery-page',
  templateUrl: './admin-galery-page.component.html',
  styleUrls: ['./admin-galery-page.component.scss']
})
export class AdminGaleryPageComponent implements OnInit {

  galeryItemsList: Pic[] = []

  constructor(private galeryService: GaleryService) { }

  ngOnInit() {
    this.galeryService.getPicList()
      .subscribe((items: Pic[]) => {
        items.map(n => {
          
        })
        this.galeryItemsList = items
      })
  }

  addItem(event) {
    this.galeryItemsList.push(event)
  }

  deleteItem(id) {
    this.galeryService.deletePic(id)
      .subscribe(() => {
        this.galeryItemsList = this.galeryItemsList.filter(n => n.id != id)
      })
  }

}
