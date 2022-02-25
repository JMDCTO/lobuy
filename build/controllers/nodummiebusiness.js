import NoDummieBusinessModel from '../models/nodummiebusinessmodel';
const nodummieBusinessModel = new NoDummieBusinessModel('business_main_data');
export const nodummieBusinessPage = async (req, res) => {
  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);

    switch (method) {
      case 'CREATE_BUSINESS':
        {
          const official = req.body.officialname;
          const alias = req.body.alias;
          const street = req.body.street;
          const number = req.body.number;
          const postal = req.body.postal;
          const city = req.body.city;
          const lat = req.body.latitude;
          const long = req.body.longitude;
          var address = street + " " + number + ", " + postal + " " + city;
          console.log(address);
          const data = await nodummieBusinessModel.insertBusiness(official, alias, street, number, postal, city, lat, long);

          if (data.rowCount) {
            var inserted = "true";
            res.status(200).json({
              inserted
            });
          } else {
            var response = [{
              message: 'business not inserted'
            }];
            res.status(200).json({
              feedback: response
            });
          }
        }
        break;

      case 'GET_PARTNERS':
        {
          const city = req.body.city;
          console.log(city);
          const data = await nodummieBusinessModel.getBusinessesHome(city);

          if (data.rowCount) {
            var partners = data.rows;
            res.status(200).json({
              partners
            });
          } else {
            var response = [{
              message: 'no businesses there'
            }];
            res.status(200).json({
              feedback: response
            });
          }
        }
        break;

      case 'GET_PARTNERS_BY_NAME':
        {
          const name = req.body.name;
          console.log(name);
          const data = await nodummieBusinessModel.getBusinessesByName(name);

          if (data.rowCount) {
            var partners = data.rows;
            res.status(200).json({
              partners
            });
          } else {
            var response = [{
              message: 'no businesses there'
            }];
            res.status(200).json({
              feedback: response
            });
          }
        }
        break;

      default:
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      messages: err
    });
  }
};