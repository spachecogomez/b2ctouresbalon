import { Order_status } from '../entities/order_status';

export interface IOrders {
    order_id: string;
    order_date: Date;
    order_price :number;
    order_status : Order_status;


}
