export class PagingParameter{
    search : string
    pageSize : number
    pageNumber : number

    constructor(search: string ='', pageSize: number = 10, pageNumber: number = 1) {
        this.search = search
        this.pageSize = pageSize
        this.pageNumber = pageNumber
    }

    toUrl(): string {
        return `?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}&searchBy=${this.search}`
    }
}