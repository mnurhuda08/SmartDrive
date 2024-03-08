import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingParameter } from 'src/app/constants/PagingParameter';

@Component({
  selector: 'partner-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{
  @Input() currentPage !: number 
  @Input() totalPage !: number
  @Input() pagesToShow !: number
  @Input() pagingParameter !: PagingParameter
  @Output() onPaging: EventEmitter<PagingParameter> = new EventEmitter<PagingParameter> 
  
  getPageNumber(): (number | string) [] {
    const pages : (number | string) [] = [];
    let startPage = Math.max(1, this.currentPage - ( Math.floor(this.pagesToShow/2)))
    let endPage = Math.min(this.totalPage, startPage + this.pagesToShow - 1)

    if(this.currentPage > 1 && startPage !== 1) {
      pages.push(1)
      if(startPage - 1 !== 1) {
        pages.push('...')
      }
    }

    for (let index = startPage; index <= endPage; index++) {    
      pages.push(index)
    }

    if(this.currentPage < this.totalPage && endPage !== this.totalPage) {
      if(this.currentPage < this.totalPage-1 && this.totalPage - endPage !== 1){
        pages.push('...')
      }
      pages.push(this.totalPage)
    }
    return pages
  }
  goPages(pageNumber: number | string) {
    this.pagingParameter.pageNumber = pageNumber as number
    this.onPaging.emit(this.pagingParameter)
  }
}
