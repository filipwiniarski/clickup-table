export type PaginationParams = {
  page: number;
  size: number;
  query: string | null;
  sortBy: string | null;
  sortDirection: 'asc' | 'desc' | null;
};
