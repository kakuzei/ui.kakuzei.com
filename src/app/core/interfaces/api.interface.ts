export interface IApi<T> {
  id: string;
  type: string;
  attributes: T;
}
