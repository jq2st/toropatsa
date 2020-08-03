import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { Pic } from '../../interfaces/interfaces';

@Component({
  selector: 'app-galery-popup',
  templateUrl: './galery-popup.component.html',
  styleUrls: ['./galery-popup.component.scss']
})
export class GaleryPopupComponent implements OnInit {

  @Input('item') item: Pic

  constructor(public popupService: PopupService) { }

  ngOnInit() {
  }

}
