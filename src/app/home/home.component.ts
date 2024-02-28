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
 page: number = 10;
  totalItems : any;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  isGridView: boolean = true;
  title2="Trendy Products"



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
  calculateIndices(totalItems: number): { startIndex: number; endIndex: number } {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, totalItems - 1);
    return { startIndex, endIndex };

}
toggleView(viewMode: 'grid' | 'list') {
  this.isGridView = viewMode === 'grid';
  this.page =  0
}
}
