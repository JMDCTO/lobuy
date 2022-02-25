import NodummieLocationModel from '../models/nodummielocationmodel';

const nodummieLocationModel = new NodummieLocationModel('user_location_data');

export const nodummieLocationPage = async (req, res) => {

  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);
    switch (method) {

      case 'ALL_LOCATION': {
        const id = req.body.id;
        const data = await nodummieLocationModel.getLocation(id);
        if(data.rowCount) {
            var location = data.rows;
            res.status(200).json({ location });
        } else {
            var response = [{
              message: 'no user login data'
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
