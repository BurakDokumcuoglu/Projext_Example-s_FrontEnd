import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory:Category;   //"strictPropertyInitialization": false ---- bu şekilde kullanabilmek için tsconfig.json içinde yapılan ayar

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
   
  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories=response.data;
    })
  }

  setCurrentCategory(category:Category){
   this.currentCategory=category;
  }

  getCurrentCategoryClass(category:Category){//ngFor ile dönülürken seçilen kategori parametre ile gönderilene eşitse css class'ını değiştir
   if(category == this.currentCategory){
     return "list-group-item active";
   }
   else{
    return "list-group-item";
   }
  }


}
