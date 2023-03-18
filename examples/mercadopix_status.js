const { mercadoPagoBrPix } = require("mercadopago-br-pix");

mercadoPagoBrPix.configure("YOUR_ACCESS_TOKEN");

mercadoPagoBrPix
  .getOrderStatus({ order_id: "55825357735" })
  .then((response) => console.log(response.status))
  .catch((err) => console.error(err));
