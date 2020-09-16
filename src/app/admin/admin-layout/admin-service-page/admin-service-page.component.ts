import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';
import { Pic } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-service-page',
  templateUrl: './admin-service-page.component.html',
  styleUrls: ['./admin-service-page.component.scss']
})
export class AdminServicePageComponent implements OnInit {

  isEditPopup = false
  serviceItemsList: Pic[] = []
  qedit: string

  constructor(private serviceService: ServService) { }

  ngOnInit() {
    this.serviceService.getPicList()
      .subscribe((items: Pic[]) => {
        items.map(n => {
          
        })
        this.serviceItemsList = items
      })
  }

  addItem(event) {
    this.serviceItemsList.push(event)
  }

  editItem(id) {
    this.isEditPopup = true
    this.qedit = id
  }

  onEdit(event) {
    this.serviceItemsList.forEach((n, i) => {
      if (n.name == event.name) {
        this.serviceItemsList[i] = event
      }
    })
  }

  deleteItem(id) {
    this.serviceService.deletePic(id)
      .subscribe(() => {
        this.serviceItemsList = this.serviceItemsList.filter(n => n.id != id)
      })
  }

}
