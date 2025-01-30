import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  constructor(private httpclient:HttpClient) { }

  getAllData():Observable<any>{
    return this.httpclient.get("http://localhost:2000/products")
  }

  getDataByID(ID:number):Observable<any>{
    return this.httpclient.get(`http://localhost:2000/products/${ID}`)
  }

  DeleteDataByID(ID:number):Observable<void>{
    return this.httpclient.delete<void>(`http://localhost:2000/products/${ID}`)
  }

  post(){}
  put(){}
}
