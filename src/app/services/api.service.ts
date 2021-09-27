import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPhotosList(){
  let url = "https://jsonplaceholder.typicode.com/photos";
  
  return new Promise((resolve, reject) =>{
    this.http.get(url).subscribe((response) => {
      resolve(response);
      }, error => {
      reject(error);
      })
    });
  }
}