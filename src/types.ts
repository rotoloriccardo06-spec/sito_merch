export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specs: ProductSpec[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
