import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { RoleComponent } from './components/role/role.component';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'',component:MainLayoutComponent,children:[
   {path:'Home',component:HomeComponent},
   {path:'Register',component:RegisterComponent},
   {path:'Product',component:ProductComponent},
   {path:'AddProduct',component:AddNewProductComponent},
   {path:'EditProduct/:proId',component:EditProductComponent},
   {path:'Product/:proId',component:ProductDetailsComponent},
   {path:'Role',component:RoleComponent},
   {path:'Users',component:UsersComponent},
  ]},
  {path:'Login',component:LoginComponent},
  {path:'Logout',component:LogoutComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
