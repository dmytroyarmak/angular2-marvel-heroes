import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comic-prices',
  templateUrl: './comic-prices.component.html',
  styleUrls: ['./comic-prices.component.css']
})
export class ComicPricesComponent implements OnInit {
  @Input() prices: [any];

  constructor() { }

  ngOnInit() {
  }

  getPriceLabelByType(priceType: string) {
    switch (priceType) {
      case 'printPrice': return 'Print price';
      case 'digitalPurchasePrice': 'Digital purchase price';
      default: return priceType;
    }
  }

}
