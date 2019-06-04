const Spoiler = require("../model/spoiler");
const status = require("http-status");
var oracledb = require('oracledb');

exports.teste = (teste) => {
    console.log(teste);
};

exports.inserir = async function run() {
  let connection;

  try {

    let sql, binds, options, result;

    connection = await oracledb.getConnection(  {
      user          : "loj",
      password      :  "lojusr",
      connectString : "TST"
    });

    // Insert some data

    sql = `insert into xgeq_order_headers_int
        values
          (:v_header_id, :v_freight_terms_code)`;

          binds = [
            {
              v_header_id: 82649, v_freight_terms_code: 'teste'
            }
          ];
    
          sql = `insert into xgeq_order_headers_int
          values
            (:v_header_id,
            :v_context, :v_order_number, :v_customer_po_number, :v_organization, :v_ordered_date, 
            :v_order_type, :v_order_object, :v_salesrep, :v_sales_channel_code, :v_payment_term, :v_payment_type, 
            :v_fob_point, :v_shipping_instructions, :v_warehouse, :v_cust_num_ref, :v_ship_cust_num_ref, 
            :v_invoice_cust_num_ref, :v_context_attribute, :v_attribute1, :v_attribute2, :v_attribute3, 
            :v_attribute4, :v_attribute5, :v_attribute6, :v_attribute7, :v_attribute8, :v_idproc, 
            :v_dtproc, :v_status, :v_error_msg, :v_freight_terms_code, :v_attribute9)`;
  
            binds = [
              {v_header_id: 82649,
              v_context: 'teste', v_order_number: 1, v_customer_po_number: 'teste', v_organization: 1, v_ordered_date: '30/09/2014 14:01:30' , 
              v_order_type: 'teste', v_order_object:'teste', v_salesrep: 'teste', v_sales_channel_code: 'teste', v_payment_term: 'teste', v_payment_type: 'teste', 
              v_fob_point: 'teste', v_shipping_instructions: 'teste', v_warehouse: 'teste', v_cust_num_ref: 'teste', v_ship_cust_num_ref: 'teste', 
              v_invoice_cust_num_ref: 'teste', v_context_attribute: 'teste', v_attribute1: 'teste', v_attribute2: 'teste', v_attribute3: 'teste', 
              v_attribute4: 'teste', v_attribute5: 'teste', v_attribute6: 'teste', v_attribute7: 'teste', v_attribute8: 'teste', v_idproc: 1, 
              v_dtproc: '30/09/2014 14:01:30', v_status: 's', v_error_msg: 'teste' ,v_freight_terms_code: 'teste', v_attribute9: 'teste'
              }
            ];
          

    // For a complete list of options see the documentation.
    options = {
      autoCommit: true,
      bindDefs: {
        v_ordered_date: { type: oracledb.DATE },
        v_dtproc: { type: oracledb.DATE }
      }
    };

    result = await connection.executeMany(sql, binds, options);

    //console.log(sql);
    //console.log(binds);

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

