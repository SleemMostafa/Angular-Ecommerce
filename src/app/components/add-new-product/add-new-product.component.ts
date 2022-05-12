import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  idProductUpdated:number = 0;
  newProduct: FormGroup;
  categoryList:ICategory[] =[];
  currProduct:Iproduct = {} as Iproduct;
  public response!: {dbPath: ''} ;
  constructor(private formGroup:FormBuilder,
              private categoryApi:CategoryService,
              private productApi:ProductService,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private toasApi:NgToastService) { 
   this.newProduct = formGroup.group({
     name:['',[Validators.required,Validators.minLength(3)]],
     description:['',[Validators.required,Validators.maxLength(40),Validators.minLength(15)]],
     quantity:['',[Validators.required]],
     price:['',[Validators.required]],
     photo:['',[Validators.required]],
     purchaseDate:[''],
     cateogryID:['',[Validators.required]]
   })
   
  }
  get name()
  {
    return this.newProduct.controls['name'];
  }
  get description()
  {
    return this.newProduct.controls['description'];
  }
  get quantity()
  {
    return this.newProduct.controls['quantity'];
  }
  get price()
  {
    return this.newProduct.controls['price'];
  }
  get photo()
  {
    return this.newProduct.controls['photo'];
  }
  get purchaseDate()
  {
    return this.newProduct.controls['purchaseDate'];
  }
  get cateogryID()
  {
    return this.newProduct.controls['cateogryID'];
  }
  ngOnInit(): void {
    this.categoryApi.GetAllCategory().subscribe(categories=>{
      this.categoryList = categories;      
    });
    
  }
  CreateProduct()
  {
    let newProduct:Iproduct = {} as Iproduct;
    newProduct.name = this.name.value;
    newProduct.description = this.description.value;
    newProduct.price = this.price.value;
    newProduct.photo = this.response.dbPath;
    newProduct.quantity = this.quantity.value;
    newProduct.purchaseDate = this.purchaseDate.value;
    newProduct.cateogryID = this.cateogryID.value;
    this.productApi.Create(newProduct).subscribe();
    this.router.navigate(['/Product'])
    this.toasApi.success({summary:"Created is success",duration:3000})
  }
  uploadFinished = (event:any) => { 
    this.response = event; 
  }
}
