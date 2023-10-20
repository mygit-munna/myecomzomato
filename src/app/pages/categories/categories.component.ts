import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  catogory: any[] = [];
  constructor(private masterSrv :MasterService ,private router:Router){

  }

ngOnInit(): void {
  this.loadAllFoodCategories()
}


loadAllFoodCategories(){
  this.masterSrv.getAllFoodCategory().subscribe((res:any)=>{
    this.catogory = res.data;
    // console.log(this.catogory)
  })
}


navigate(item:any){
  // console.log(item);
// this.router.navigate(['/restaurant-items/:categoryname',item])
this.router.navigate(['/restaurant-items/'+item.categoryId]);
}

}
