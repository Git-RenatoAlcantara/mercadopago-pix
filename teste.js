import MercadoPagoBrPix from "./src/mercadopago-br-pix";

const client = {
  transaction_amount: 1.0,
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

const mercadopagoBrPix = new MercadoPagoBrPix();
mercadopagoBrPix.configure("");
mercadopagoBrPix.createOrder(client);
