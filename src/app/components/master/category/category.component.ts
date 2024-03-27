import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/master/category';
import { CategoryService } from 'src/app/services/master/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  title = 'Category';
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      category_name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateCategory(id: number): void {
    this.router.navigate(['master/category/edit', id]);
  }

  deleteCategory(event: any, category: Category): void {
    if (confirm(`Delete this data ?`)) {
      event.target.innerText = 'Deleting....';
      this.categories = this.categories.filter((f) => f !== category);
      this.categoryService.deleteCategory(category).subscribe();
    }
  }

  openModal(): void {
    const modalID = document.getElementById('categoryAddModal');
    if (modalID) {
      modalID.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalID = document.getElementById('categoryAddModal');
    if (modalID) {
      modalID.style.display = 'none';
    }
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const cateName: string = this.f.category_name?.value;

    this.categoryService
      .addCategory({ cateName } as Category)
      .subscribe(() => this.closeModal());
  }
}
