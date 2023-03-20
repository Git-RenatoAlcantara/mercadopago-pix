"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoSdkApiCommunication = void 0;
const axios_1 = require("axios");
class MercadoPagoSdkApiCommunication {
    setAccessToken(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!accessToken) {
                return new Error("Your access token can't be ampty!");
            }
            this.accessToken = accessToken;
        });
    }
    createOrder(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accessToken) {
                throw new Error("Seu token de acesso não pode estar vazio!");
            }
            const response = yield axios_1.default.post("https://api.mercadopago.com/v1/payments", orderData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.accessToken}`,
                },
            });
            return response.data;
        });
    }
    cancelOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.accessToken)
                return new Error("Your access token can't be ampty!");
            let time = Date.now().toString();
            const data = {
                status: "cancelled",
            };
            const response = yield axios_1.default.put(`https://api.mercadopago.com/v1/payments/${orderId}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.accessToken}`,
                    timestamp: time,
                },
            });
            return response.data;
        });
    }
    getOrderStatus(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`https://api.mercadopago.com/v1/payments/${orderId}`, {
                headers: { Authorization: `Bearer ${this.accessToken}` },
            });
            return response.data;
        });
    }
}
exports.MercadoPagoSdkApiCommunication = MercadoPagoSdkApiCommunication;
//# sourceMappingURL=mercadoPagoSdkApiCommunication.js.map