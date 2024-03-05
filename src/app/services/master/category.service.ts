import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Category } from 'src/app/interfaces/master/category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl: string = environment.baseUrl + '/master/category';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  getCategory(id: number): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Category>(url);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(this.apiUrl, category, this.httpOptions)
      .pipe(catchError(this.handleError<Category>('addCategory')));
  }

  updateCategory(category: Category): any {
    const apiUrl = `${this.apiUrl}/${category.cateId}`;
    return this.http
      .put(apiUrl, category, this.httpOptions)
      .pipe(catchError(this.handleError<Category>('updateCategory')));
  }

  deleteCategory(category: Category): Observable<Category> {
    const apiUrl = `${this.apiUrl}/${category.cateId}`;

    return this.http
      .delete<Category>(apiUrl, this.httpOptions)
      .pipe(
        catchError(
          this.handleError<Category>('deleteCategory id=${category.cateId}')
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
