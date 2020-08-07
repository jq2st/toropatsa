import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/shared/interfaces/interfaces';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {

  qitem
  serviceItemsList: Pic[] = []

  constructor(private serviceService: ServService) { }

  ngOnInit() {
    this.serviceService.getPicList()
    .subscribe((items: Pic[]) => {
      items.map(n => {
        
      })
      this.serviceItemsList = items
    })
  }
}
