import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDirectiveDirective } from './Directives/product-directive.directive';
import { CustomeCardPipe } from './Pipes/custome-card.pipe';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { UploadComponent } from './components/upload/upload.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RoleComponent } from './components/role/role.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDirectiveDirective,
    CustomeCardPipe,
    RegisterComponent,
    LoginComponent,
    AddNewProductComponent,
    UploadComponent,
    EditProductComponent,
    LogoutComponent,
    RoleComponent,
    UsersComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgToastModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule { }
