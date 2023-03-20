import Payment from "./interface/payment";
declare class MercadoPagoSdkApiCommunication {
    accessToken: String;
    setAccessToken(accessToken: String): Promise<Error>;
    createOrder(orderData: Payment): Promise<any>;
    cancelOrder(orderId: String): Promise<any>;
    getOrderStatus(orderId: String): Promise<any>;
}
export { MercadoPagoSdkApiCommunication };
