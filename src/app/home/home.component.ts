import { Component, OnInit } from '@angular/core';

import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 popularProducts:undefined|product[];
 trendyProducts: any;
 page: number = 1;
  itemsPerPage = 10;
  totalItems : any;


  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
      console.log(this.popularProducts)
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
      console.log(this.trendyProducts)
      this.page =  0
    })
  }
  gty(page: any){
    this.product.trendyProducts().subscribe((data: any) => {
      this.trendyProducts =  data.data;
      this.totalItems = data.totalPassengers;
    })
  }
}
