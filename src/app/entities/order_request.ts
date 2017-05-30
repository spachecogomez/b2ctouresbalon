export class IOrderRequest{
	order_date:Date;
	order_price:number;
	order_comments:string;
	public order_status:IOrderStatus;
	customer_details:ICustomerDetails;
	order_details:Array<IOrderDetail>;
}

export class IOrderStatus{
	public status_id:number;
	public status_name:string;
}

export class ICustomerDetails{
	cust_id:number;
	cust_firstname:string;
	cust_lastname:string;
	cust_phone:string;
	cust_address:string;
	cust_email:string;
	cust_password:string;
	cust_credit_card_type:string;
	cust_credit_card_number:string;
	cust_status:string;
}

export class IOrderDetail{
	item_id:number;
	product_id:number;
	spectacle_name:string;
	total_price:number;
	quantity:number;
}

