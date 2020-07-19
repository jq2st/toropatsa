import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-galery-popup',
  templateUrl: './galery-popup.component.html',
  styleUrls: ['./galery-popup.component.scss']
})
export class GaleryPopupComponent implements OnInit {

  constructor(public popupService: PopupService) { }

  ngOnInit() {
  }

  

}
