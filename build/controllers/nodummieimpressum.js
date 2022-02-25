import NodummieImpressumModel from '../models/nodummieimpressummodel';
const nodummieImpressumModel = new NodummieImpressumModel('business_impressum');
export const nodummieImpressumPage = async (req, res) => {
  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);

    switch (method) {
      case 'ADD_EXTRA_DATA_BUSINESS':
        {
          const officialname = req.body.officialname;
          const officialBusiness = req.body.officialnamebusiness;
          const email = req.body.email;
          const street = req.body.street;
          const number = req.body.number;
          const postal = req.body.postal;
          const city = req.body.city;
          const data = await nodummieImpressumModel.insertBusinessImpressum(officialname, officialBusiness, email, street, number, postal, city);

          if (data.rowCount) {
            var successful = "true";
            res.status(200).json({
              successful
            });
          } else {
            var response = [{
              successfull: 'false'
            }];
            res.status(200).json({
              feedback: response
            });
          }

          break;
        }

      case 'GET_IMPRESSUM':
        {
          const officialname = req.body.officialname;
          const data = await nodummieImpressumModel.getBusinessImpressum(officialname);

          if (data.rowCount) {
            var impressum = data.rows;
            res.status(200).json({
              impressum
            });
          } else {
            var response = [{
              successfull: 'false'
            }];
            res.status(200).json({
              feedback: response
            });
          }

          break;
        }

      default:
        {
          console.log("METHOD UNDEFINED");
          break;
        }
    }
  } catch (err) {
    res.status(200).json({
      messages: err
    });
  }
};