import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllFoodCategory(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory"); 
  }

getItemsByCategoryName(id:any){
  console.log(id);
  return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId="+id)
}

login(obj:any){
  return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login",obj)
}

 
}
