import NodummieLogoModel from '../models/nodummielogomodel';

const nodummieLogoModel = new NodummieLogoModel('business_logo');

export const nodummieLogoPage = async (req, res) => {

  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);
    switch (method) {

      case 'ADD_BUSINESS_LOGO': {
        const officialname = req.body.official;
        const image = req.body.image;
        const data = await nodummieLogoModel.insertBusinessLogo(officialname, image);

        if(data.rowCount) {
            var successful = "true";
            res.status(200).json({ successful });
        } else {
            var response = [{
              successfull: 'false'
            }];
            res.status(200).json({ feedback: response });
        }
        break;}

      default: {
        console.log("METHOD UNDEFINED");
         break;}
    }

  }
  catch (err) {
  res.status(200).json({ messages: err });
  }

}
