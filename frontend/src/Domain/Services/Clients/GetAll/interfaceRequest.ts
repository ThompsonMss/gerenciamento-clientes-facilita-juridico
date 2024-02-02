export interface InterfaceRequest {
  filters?: InterfaceFilters | null;
  page?: number;
}

export interface InterfaceFilters {
  name?: string;
  email?: string;
  phone?: string;
}
