import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpOptions;
  constructor(private httpClient:HttpClient) { 
    
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    }
  }
  GetAllCategory(): Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIBaseURL}/api/Category`,this.httpOptions)
  }
}
