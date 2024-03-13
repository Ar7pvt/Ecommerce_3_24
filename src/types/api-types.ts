import { Bar, CartItem, Line, Order, Pie, Product, ShippingInfo, Stats, User } from "./types";

export type CustomError={
    status:number;
    data:{
        message:string;
        success:boolean;
    };
};

export type MessageResponse={
    sucess:boolean;
    message:string;
};

export type AllUsersResponse={
    sucess:boolean;
    users:User[];
};

export type UserResponse={
    sucess:boolean;
    user:User;
};

export type AllProductsResponse={
    sucess:boolean;
    products:Product[];
};

export type CategoriesResponse={
    sucess:boolean;
    categories:string[];
};

export type searchProductsResponse = AllProductsResponse & {
    totalPage:number;
};

export type searchProductsRequest ={
    price:number;
    page:number;
    category:string;
    search:string;
    sort:string;
};

export type ProductResponse={
    sucess:boolean;
    product:Product;
};

export type AllOrdersResponse={
    sucess:boolean;
    orders:Order[];
};
export type OrderDetailsResponse={
    sucess:boolean;
    order:Order;
};
export type StatsResponse={
    success:boolean;
    stats:Stats;
}
export type PieResponse = {
    success: boolean;
    charts: Pie;
  };
  
  export type BarResponse = {
    success: boolean;
    charts: Bar;
  };
  
  export type LineResponse = {
    success: boolean;
    charts: Line;
  };



export type NewProductRequest={
    id:string;
    formData:FormData;
};

export type UpdateProductRequest={
    userId:string;
    productId:string;
    formData:FormData;
};

export type DeleteProductRequest={
    userId:string;
    productId:string;
};

export type NewOrderRequest={
    shippingInfo:ShippingInfo;
    orderItems:CartItem[];
    subtotal:number;
    tax:number;
    shippingCharges:number;
    discount:number;
    total:number;
    user:string;
};

export type UpdateOrderRequest={
    userId:string;
    orderId:string;
};

export type DeleteUserRequest={
    userId:string;
    adminUserId:string;
};

