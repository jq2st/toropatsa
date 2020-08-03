import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { GaleryService } from 'src/app/services/galery.service';
import { Pic } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.scss']
})
export class GaleryPageComponent implements OnInit {

  qitem
  galeryItemsList: Pic[] = []

  constructor(public popupService: PopupService, private galeryService: GaleryService) { }

  ngOnInit() {
    this.galeryService.getPicList()
    .subscribe((items: Pic[]) => {
      items.map(n => {
        
      })
      this.galeryItemsList = items
    })
  }

}
