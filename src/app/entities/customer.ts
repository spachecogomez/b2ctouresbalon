export class Customer {
    public id: string;
    public cust_id: number;
    public cust_firstname: string;
    public cust_lastname: string;
    public cust_phone: string;
    public cust_address: string;
    public cust_email: string;
    public cust_password: string;
    public cust_credit_card_type: string;
    public cust_credit_card_number: string;
    public cust_status: number;
}

export interface ICustomer{
    customerId:number;
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email:string;
    password:string;
    creditCardType:string;
    creditCardNumber:string;
    status:string;


}
