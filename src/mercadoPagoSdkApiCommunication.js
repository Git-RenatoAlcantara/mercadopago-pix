const { axios } = require("./interceptor");

class MercadoPagoSdkApiCommunication {
  async setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async createOrder(orderData, options) {
    if (!this.accessToken)
      return new Error("Your access token can't be ampty!");
    const response = await axios.post(
      "https://api.mercadopago.com/v1/payments",
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    return response.data;
  }

  async cancelOrder(orderId) {
    if (!this.accessToken)
      return new Error("Your access token can't be ampty!");

    let time = Date.now().toString();
    const data = {
      status: "cancelled",
    };

    const response = await axios.put(
      `https://api.mercadopago.com/v1/payments/${orderId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`,
          timestamp: time,
        },
      }
    );

    return response.data;
  }

  async getOrderStatus(orderId) {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${orderId}`,
      {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      }
    );
    return response.data;
  }
}

exports.MercadoPagoSdkApiCommunication = MercadoPagoSdkApiCommunication;
