import NodummieLoginModel from '../models/nodummieloginmodel';

const nodummieLoginModel = new NodummieLoginModel('user_login_data');

export const nodummieLoginPage = async (req, res) => {

  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);
    switch (method) {

      case 'ALL_LOGIN': {
        const id = req.body.id;
        const data = await nodummieLoginModel.getLoginInfo(id);
        if(data.rowCount) {
            var userlogins = data.rows;
            res.status(200).json({ userlogins });
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
