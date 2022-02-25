import LogoModel from '../models/businesslogomodel';
const logoModel = new LogoModel('business_logo');
export const logoPage = async (req, res) => {
  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);

    switch (method) {
      case 'GET_PARTNER_LOGOS':
        {
          const partners = req.body.partner;

          if (partners != null) {
            var logoentries = [partners.length];

            for (let i = 0; i < partners.length; i++) {
              const data = await logoModel.selectBusinessLogo(partners[i]);
              logoentries[i] = data.rows;
            }

            var jsonArray;

            for (let j = 0; j < logoentries.length; j++) {
              if (j == 0) {
                jsonArray = logoentries[j];
              } else {
                jsonArray = jsonArray.concat(logoentries[j]);
              }
            }

            console.log(jsonArray);

            if (jsonArray.length != 0) {
              res.status(200).json({
                partners: jsonArray
              });
            } else {
              var response = [{
                successfull: 'false'
              }];
              res.status(200).json({
                feedback: response
              });
            }
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