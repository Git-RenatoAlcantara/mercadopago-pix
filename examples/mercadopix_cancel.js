const { mercadoPagoBrPix } = require("mercadopago-br-pix");

mercadoPagoBrPix.configure("YOUR_ACCESS_TOKEN");

mercadoPagoBrPix
  .cancelOrder("55825357735")
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
