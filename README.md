# Documentação da biblioteca MercadoPagoPix

A biblioteca MercadoPagoPix é uma solução para integração de pagamentos com a plataforma MercadoPago, utilizando a forma de pagamento PIX. A seguir, estão listados os métodos disponíveis na biblioteca:

## Installing

`$ npm i mercadopago-pix`

To import the `mercadopagoPix` library in your Node.js application, you can use the `require` statement as follows:

```javascript
const mercadopagoPix = require("mercadopago-pix");
```

This will import the `mercadopagoPix` object which contains the methods `configure`, `create`, `cancel` and `status`, and the `client` object which contains the payment information.

To use the library, first call the `configure` method passing in your MercadoPago access token:

```javascript
mercadopagoPix.configure({
  access_token: "YOUR_ACCESS_TOKEN",
});
```

Then, you can create a payment by calling the `create` method, passing in the `client` object with the payment information:

```javascript
const client = {
  transaction_amount: "100",
  description: "Test payment",
  payment_method_id: "pix",
  payer: {
    email: "test@test.com",
    first_name: "John",
    last_name: "Doe",
    identification: {
      type: "CPF",
      number: "12345678900",
    },
    address: {
      zip_code: "12345678",
      street_name: "Test street",
      street_number: "123",
      neighborhood: "Test neighborhood",
      city: "Test city",
      federal_unit: "Test state",
    },
  },
};

const payment = await mercadopagoPix.create({ client });
```

To cancel a payment, you can call the `cancel` method passing in the `order_id`:

```javascript
const result = await mercadopagoPix.cancel({
  order_id: "YOUR_ORDER_ID",
});
```

To check the status of a payment, you can call the `status` method passing in the `order_id`:

```javascript
const result = await mercadopagoPix.status({
  order_id: "YOUR_ORDER_ID",
});
```
