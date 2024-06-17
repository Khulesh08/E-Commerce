export interface ID {
  id: number;
  quantity?: number;
}

export interface Product {
  id: number;
  category: string;
  model: string;
  brand: string;
  quantity: number;
  description: string;
  price: number;
  image: string;
  stock: number;
  avlQty : number;
  cart ?:[];
}
