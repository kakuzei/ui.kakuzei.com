export interface IApi<A, L = null> {
  id: string;
  type: string;
  attributes: A;
  links: L;
}
