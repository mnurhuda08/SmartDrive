import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/master/category';
import { CategoryService } from 'src/app/services/master/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  updateCategory(id: number) {
    this.router.navigate(['master/category/edit', id]);
  }

  deleteCategory(categories: Category) {
    this.categories.filter((f) => f !== categories);
    this.categoryService.deleteCategory(categories).subscribe();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
