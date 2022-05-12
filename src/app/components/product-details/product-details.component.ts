import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { DialogService } from 'src/app/Services/dialog.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private currProductId:number=0;
  currProduct:Iproduct = {} as Iproduct
  listIdOfProduct:number[] = [];
  @Input() receivedProductID:number=0;
  constructor(private activatedRoute:ActivatedRoute
              ,private productApi:ProductService
              ,private router:Router,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.currProductId = Number(paramMap.get("proId"));
      this.productApi.GetById(this.receivedProductID).subscribe(product=>{
        this.currProduct = product;
      });
    })
    this.productApi.GetAllProducts().subscribe(products=>{
     this.listIdOfProduct = products.map(product=>product.id)
     console.log(this.listIdOfProduct);
    })
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:65348/${serverPath}`; 
  }
  CloseDialog()
  {
    this.dialog.closeAll();
  }
}
