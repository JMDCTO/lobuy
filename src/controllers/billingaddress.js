import BillingAddressModel from '../models/billingaddressmodel';

const billingAddressModel = new BillingAddressModel('user_billing_address');

export const billingAddressPage = async (req, res) => {

  try {
    //login or reg tag ?
    const method = req.body.method;

    if(method == "SET_BILLING_ADDRESS") {
      const id = req.body.id;
      const street = req.body.street;
      const number = req.body.housenumber;
      const postalcode = req.body.postalcode;
      const postalcodeint = parseInt(postalcode);
      const city = req.body.city;

      const isupdate = await billingAddressModel.getAddressCount(id);

      var count = isupdate.rows[0].count;
      
      if(count) {
        const update = await billingAddressModel.updateAddress(id, street, number, postalcodeint, city);
        console.log("update");

        if(update.rowCount) {
          var response = [{
              successfull: 'true'
            }];
            res.status(200).json({ response });
        } else {
            var response = [{
              successfull: 'false'
            }];
            res.status(200).json({ feedback: response });
        }

      } else {
        const data = await billingAddressModel.setAddress(id, street, number, postalcodeint, city);
        console.log(data.rows);

        if(data.rowCount) {
          var response = [{
              successfull: 'true'
            }];
            res.status(200).json({ response });
        } else {
            var response = [{
              successfull: 'false'
            }];
            res.status(200).json({ feedback: response });
        }
      }
    } else {

      const id = req.body.id;

      const data = await billingAddressModel.getAddressIntern(id);

      console.log(data.rows);
      var address = data.rows;

      if(data.rowCount) {

          res.status(200).json({ address });
      } else {
          var response = [{
            successfull: 'false'
          }];
          res.status(200).json({ feedback: response });
      }

    }
  }
  catch (err) {
  res.status(200).json({ messages: err });
  }

}
