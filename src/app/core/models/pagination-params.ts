export type PaginationParams = {
  page?: number | null;
  size?: number | null;
  query?: string | null;
  sortBy?: string | null;
  sortDirection?: 'asc' | 'desc' | null;
};
