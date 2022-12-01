export default interface PaginationResponseInterface<ItemInterface> {
  items: ItemInterface[]
  current_page: number
  per_page: number
  from: number
  to: number
}
