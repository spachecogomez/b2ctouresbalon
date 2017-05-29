import { Order_status } from '../entities/order_status';
import { ICustomer,Customer } from '../entities/customer';

export interface IOrders {
    size: number;
    details : OrdersList[];
}

export interface OrdersList {
    order_id: string;
    order_date: Date;
    order_price :number;
    order_status : Order_status;
    order_comments:string;
    customer_details : Customer;
}
