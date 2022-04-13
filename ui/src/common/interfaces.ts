export interface MainStore {
  ready: boolean;
  isError: boolean;
  error: {
    error: any;
    from: string;
  };
  fetching: {
    status: boolean;
    from: string;
  };
}