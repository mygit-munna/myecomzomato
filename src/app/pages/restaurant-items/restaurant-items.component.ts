import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.css']
})
export class RestaurantItemsComponent implements OnInit {

  items:any[] = [];
constructor(private activate :ActivatedRoute ,private master:MasterService){
  // this.activate.params.subscribe((res:any)=>{
  //   this.loadFoodItemsBycategory(res);
  //   console.log("hello",res)
  // })
  this.activate.params.subscribe((res: any) => {
    const dataArray = Object.values(res); // Convert object properties to an array
    this.loadFoodItemsBycategory(dataArray);
    console.log("hello", dataArray);
  });
}

ngOnInit(): void {
 
}


loadFoodItemsBycategory(id:any){
  this.master.getItemsByCategoryName(id).subscribe((res:any)=>{
    console.log(res);
    this.items = Object.values(res.data);
    console.log(this.items)
  })
}



openQtyModel(item:any){
const model = document.getElementById('modal')
if(model != null){
  model.style.display = "block";
}
}


closeQtyModel(item:any){
  const model = document.getElementById('modal')
  if(model != null){
    model.style.display = "none";
  }
  }
  
  }

