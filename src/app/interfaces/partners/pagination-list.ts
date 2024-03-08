export interface PaginationList<T>{
    currentPages: number,
    totalPages: number, 
    data: T[] 
}