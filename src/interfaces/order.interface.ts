export interface OrderResumen {
  id: string;
  subTotal: number;
  tax: number;
  total: number;
  itemsInOrder: number;
  isPaid: boolean;
}
