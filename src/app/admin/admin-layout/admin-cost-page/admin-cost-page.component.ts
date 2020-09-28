import { Component, OnInit } from '@angular/core';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-admin-cost-page',
  templateUrl: './admin-cost-page.component.html',
  styleUrls: ['./admin-cost-page.component.scss']
})
export class AdminCostPageComponent implements OnInit {

  isAddPopup = false
  priceList

  constructor(private costService: CostService) { }

  ngOnInit() {
    this.costService.getPriceList()
      .subscribe((items) => {
        items.map(n => {
          
        })
        this.priceList = items
      })
  }

}
