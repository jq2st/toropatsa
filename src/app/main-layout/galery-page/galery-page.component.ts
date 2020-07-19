import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.scss']
})
export class GaleryPageComponent implements OnInit {

  constructor(public popupService: PopupService) { }

  ngOnInit() {
  }

}
