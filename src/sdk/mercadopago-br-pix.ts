import { MercadoPagoSdkApiCommunication } from "./mercadoPagoSdkApiCommunication";
import Payment from "./interface/payment";

// Interface que define os métodos necessários para qualquer sdk de pagamento
abstract class PaymentSdk {
  async createOrder(orderData: Payment): Promise<any> {}
  async cancelOrder(orderId: String) {}
  async getOrderStatus(orderId: String) {}
}

// Classe MercadoPagoSdk que processa as informações relacionadas ao pagamento
class MercadoPagoBrPix extends PaymentSdk {
  mercadopagoSdkApiCommunication: MercadoPagoSdkApiCommunication = null;

  constructor() {
    super();
    this.mercadopagoSdkApiCommunication = new MercadoPagoSdkApiCommunication();
  }

  async configure(accessToken: String) {
    this.mercadopagoSdkApiCommunication.setAccessToken(accessToken);
  }

  async createOrder(orderData: Payment): Promise<any> {
    return await this.mercadopagoSdkApiCommunication.createOrder(orderData);
  }

  async cancelOrder(orderId: String): Promise<any> {
    return await this.mercadopagoSdkApiCommunication.cancelOrder(orderId);
  }

  async getOrderStatus(orderId: String): Promise<any> {
    return await this.mercadopagoSdkApiCommunication.getOrderStatus(orderId);
  }
}

export { MercadoPagoBrPix };
