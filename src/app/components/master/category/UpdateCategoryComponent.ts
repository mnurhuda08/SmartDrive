import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/master/category';
import { CategoryService } from 'src/app/services/master/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  category!: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.categoryService
        .getCategory(params['id'])
        .subscribe((res: Category) => {
          this.category = res;
          this.form = new FormGroup({
            category_id: new FormControl(this.category.cateId),
            category_name: new FormControl(this.category.cateName),
          });
        });
    });
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const cateId: number = this.f.category_id?.value;
    const cateName: string = this.f.category_name?.value;

    this.categoryService
      .updateCategory({ cateId, cateName } as Category)
      .subscribe(() => this.router.navigate(['master/category']));
  }

  ngOnInit(): void {}
}
