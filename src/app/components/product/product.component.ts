import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
import { DialogService } from 'src/app/Services/dialog.service';
import { NgToastService } from 'ng-angular-popup';

const ELEMENT_DATA: Iproduct[] = []

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit ,OnChanges {
  productList:Iproduct[] = [];
  // productListOfCategory:Iproduct[] = [];
  categoryList:ICategory[] = [];
  selectedCatID:number=0;
  //
  displayedColumns:string[] = ['id','name', 'description','price','quantity','delete','update','details'];
  dataSource = ELEMENT_DATA;
  //
  constructor(private productApi:ProductService
              ,private router:Router
              ,private dialog:MatDialog
              ,private categoryApi:CategoryService,
              private dialogApi:DialogService,
              private toasApi:NgToastService) {
   }

  ngOnChanges(changes: SimpleChanges): void {
   
  } 

  ngOnInit(): void {
    this.categoryApi.GetAllCategory().subscribe(categories=>{
      this.categoryList = categories;
    })
    if(this.selectedCatID == 0)
    { 
      this.productApi.GetAllProducts().subscribe(proList=>{
        this.dataSource = proList;
      })
    }
  }
  ProductIsTrackBy(index:number,item:Iproduct)
  {
    return item.id;
  }

  changeSelect(selectedCatID:number)
  {
    this.selectedCatID = selectedCatID
    if(this.selectedCatID == 0)
    { 
      this.productApi.GetAllProducts().subscribe(proList=>{
        this.dataSource = proList;
      })
    }
    else
    {
      this.productApi.GetProductByCategoryId(this.selectedCatID).subscribe(proList=>{
        this.dataSource = proList;
      })
    }
  }
  OpenProductDetail(productId:number)
  {
    // this.router.navigate(['Product',productId])
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    
    let modelRef= this.dialog.open(ProductDetailsComponent,dialogConfig)
    modelRef.componentInstance.receivedProductID= Number(productId)
  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:65348/${serverPath}`; 
  }
  Delete(product:Iproduct)
  {
    this.dialogApi.OpenConfirmDialog().afterClosed().subscribe(res=>{
      console.log(res);
      if(res)
      {
        let index = this.dataSource.indexOf(product);
        console.log(index);
        this.dataSource.splice(index,1); 
        this.productApi.Delete(product).subscribe();
        this.toasApi.success({summary:"Deleted is success",duration:3000})
      }
    })

  }
  
}
