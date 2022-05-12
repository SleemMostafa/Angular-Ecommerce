import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  idProductWantUpdate:number  = 0;
  // productUpdated: FormGroup ;
  currProduct:Iproduct = {} as Iproduct;
  categoryList:ICategory[] =[];
  public response!: {dbPath: ''} ;
  constructor(private activatedRoute:ActivatedRoute,
              private productApi:ProductService,
              private formGroup:FormBuilder,
              private categoryApi:CategoryService,
              private router:Router,
              private toasApi:NgToastService) {
                
      // this.productUpdated = formGroup.group({
      //   name:[this.currProduct.name,[Validators.required,Validators.minLength(3)]],
      //   description:[this.currProduct.description,[Validators.required,Validators.maxLength(40),Validators.minLength(15)]],
      //   quantity:[this.currProduct.quantity,[Validators.required]],
      //   price:[this.currProduct.price,[Validators.required]],
      //   photo:[this.currProduct.photo,[Validators.required]],
      //   purchaseDate:[this.currProduct.purchaseDate],
      //   cateogryID:[this.currProduct.cateogryID,[Validators.required]]
      // })
      // this.productUpdated = formGroup.group({
      //   name:['',[Validators.required,Validators.minLength(3)]],
      //   description:['',[Validators.required,Validators.maxLength(40),Validators.minLength(15)]],
      //   quantity:['',[Validators.required]],
      //   price:['',[Validators.required]],
      //   photo:['',[Validators.required]],
      //   purchaseDate:[''],
      //   cateogryID:['',[Validators.required]]
      // })
}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.idProductWantUpdate = Number(paramMap.get("proId"));
      this.productApi.GetById(this.idProductWantUpdate).subscribe(product=>{
        this.currProduct = product;
        console.log(this.currProduct)
      });
    });
    this.categoryApi.GetAllCategory().subscribe(categories=>{
      this.categoryList = categories;      
    });
  }
  uploadFinished = (event:any) => { 
    this.response = event; 
    this.currProduct.photo = this.response.dbPath;
  } 

  EditProduct()
  {
    this.productApi.Update(this.currProduct).subscribe(product=>{
    this.router.navigate(['/Product'])
    this.toasApi.success({summary:"Edit is success",duration:3000})
    });
  }
}
