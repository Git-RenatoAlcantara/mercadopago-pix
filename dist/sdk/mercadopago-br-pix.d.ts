import { MercadoPagoSdkApiCommunication } from "./mercadoPagoSdkApiCommunication";
import Payment from "./interface/payment";
declare abstract class PaymentSdk {
    createOrder(orderData: Payment): Promise<any>;
    cancelOrder(orderId: String): Promise<void>;
    getOrderStatus(orderId: String): Promise<void>;
}
declare class MercadoPagoBrPix extends PaymentSdk {
    mercadopagoSdkApiCommunication: MercadoPagoSdkApiCommunication;
    constructor();
    configure(accessToken: String): Promise<void>;
    createOrder(orderData: Payment): Promise<any>;
    cancelOrder(orderId: String): Promise<any>;
    getOrderStatus(orderId: String): Promise<any>;
}
export { MercadoPagoBrPix };
