const Spoiler = require("../model/spoiler");
const status = require("http-status");
var oracledb = require('oracledb');

exports.teste1 = (teste) => {
    console.log(teste);
};

exports.teste1 = () => {
  var doconnect = function(cb) {
    oracledb.getConnection(
      {
        user          : "loj",
        password      :  "lojusr",
        connectString : "TST"
      },
      cb);
  };
};

exports.inserirPedidos = async () => {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "loj",
      password      :  "lojusr",
      connectString : "TST"
    });

    let result = await connection.execute(
      `
      insert into xgeq_order_headers_int
        (header_id, context, order_number, customer_po_number, organization, ordered_date, order_type, 
        order_object, salesrep, sales_channel_code, payment_term, payment_type, fob_point, shipping_instructions, 
        warehouse, cust_num_ref, ship_cust_num_ref, invoice_cust_num_ref, context_attribute, attribute1, attribute2, 
        attribute3, attribute4, attribute5, attribute6, attribute7, attribute8, idproc, dtproc, status, error_msg, 
        freight_terms_code, attribute9)
    values
      (v_header_id, v_context, v_order_number, v_customer_po_number, v_organization, v_ordered_date, v_order_type, v_order_object, v_salesrep, v_sales_channel_code, v_payment_term, v_payment_type, v_fob_point, v_shipping_instructions, v_warehouse, v_cust_num_ref, v_ship_cust_num_ref, v_invoice_cust_num_ref, v_context_attribute, v_attribute1, v_attribute2, v_attribute3, v_attribute4, v_attribute5, v_attribute6, v_attribute7, v_attribute8, v_idproc, v_dtproc, v_status, v_error_msg, v_freight_terms_code, v_attribute9);
      
      `
    );
    //console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

