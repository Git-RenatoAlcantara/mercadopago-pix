const {
  MercadoPagoSdkApiCommunication,
} = require("./mercadoPagoSdkApiCommunication");

// Interface que define os métodos ecessários para qualquer sdk de pagamento
class PaymentSdk {
  async createOrder(orderData) {}
  async cancelOrder(orderId) {}
  async getOrderStatus(orderId) {}
}

// Classe MercadoPagoSdk que processa as informações relacionadas ao pagamento
class MercadoPagoBrPix extends PaymentSdk {
  constructor() {
    super();
    this.apiCommunication = new MercadoPagoSdkApiCommunication();
  }

  async configure(accessToken) {
    this.apiCommunication.setAccessToken(accessToken);
  }
  async createOrder(orderData) {
    // Cria o pedido usando a classe de comunicação com a API
    return await this.apiCommunication.createOrder(orderData);
  }
  async cancelOrder(orderId) {
    // Cancela o pedido usando a classe de comunicação com a API
    return await this.apiCommunication.cancelOrder(orderId);
  }

  async getOrderStatus(orderId) {
    // Obtém o status do pedido usando a classe de comunicação com a API
    return await this.apiCommunication.getOrderStatus(orderId);
  }
}

exports.MercadoPagoBrPix = MercadoPagoBrPix;
