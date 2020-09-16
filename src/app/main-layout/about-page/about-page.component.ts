import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/shared/interfaces/interfaces';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  isMainPopup: boolean = false
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

  closeMainPopup() {
    this.isMainPopup = false
  }

}
