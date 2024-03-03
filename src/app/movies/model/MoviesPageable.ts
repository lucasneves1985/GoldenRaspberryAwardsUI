/**
 * Data model for Movies with pagination
 */
import { Movies } from "./Movies"

export interface MoviesPageable {
  content: Movies[]
  /*pageable: Pageable*/
  totalPages: number
  /*totalElements: number*/
  last: boolean
  /*size: number*/
  number: number
  /*sort: Sort
  first: boolean
  numberOfElements: number
  empty: boolean*/
}

export interface Pageable {
  sort: Sort
  offset: number
  pageSize: number
  pageNumber: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}
