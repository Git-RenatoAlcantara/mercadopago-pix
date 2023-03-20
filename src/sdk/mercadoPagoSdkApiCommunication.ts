import Payment from "./interface/payment";
import axios from "axios";

class MercadoPagoSdkApiCommunication {
  accessToken: String;
  async setAccessToken(accessToken: String) {
    if (!accessToken) {
      return new Error("Your access token can't be ampty!");
    }
    this.accessToken = accessToken;
  }

  async createOrder(orderData: Payment): Promise<any> {
    if (!this.accessToken) {
      throw new Error("Seu token de acesso não pode estar vazio!");
    }
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

  async cancelOrder(orderId: String): Promise<any> {
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

  async getOrderStatus(orderId: String): Promise<any> {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${orderId}`,
      {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      }
    );
    return response.data;
  }
}

export { MercadoPagoSdkApiCommunication };
