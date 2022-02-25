import UserModel from '../models/usermodel';
import LoginModel from '../models/loginmodel';

const userModel = new UserModel('user_main_data');
const loginModel = new LoginModel('user_login_data');

export const userPage = async (req, res) => {

  if(req.method == "POST") {
    try {

      const method = req.body.method;

      if(method == null) {
      const email = req.body.email;
      const password = req.body.password;
      const data = await userModel.selectLogin('id, email, password', email, password);
      console.log("user log in : " + email);
      if(data) {
      res.status(200).json({ user: data.rows });
      }
    } else {
      const id = req.body.id;
      var idInt = parseInt(id);
      console.log(method);
      const data = await userModel.getAllCredentials(idInt);
      if(data.rows) {
      res.status(200).json({ user: data.rows });
      }

    }
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  }

  if(req.method == "GET") {

    try {
    const email = req.query.email;
    const feedback = await userModel.validate(email);
    console.log("user was requested : " + email);
      if(feedback.rowCount) {
        var response = [{
            continue_reg: 'false',
            error: 'user exists'
        }];

        res.status(200).json({ feedback: response });

      } else {
        var response = [{
            continue_reg: 'true',
            error: ''
        }];

        res.status(200).json({ feedback: response });
      }
    }
    catch (err) {
     res.status(200).json({ messages: err.stack });
    }

  }
};

export const userRegPage = async (req, res) => {

  try {
    const email = req.body.email;
    const password = req.body.password;
    const alias = req.body.alias;
    const year = req.body.year;
    const month = req.body.month;
    const day = req.body.day;
    const premium = req.body.premium;
    var dayInt = parseInt(day);
    var finalDay = dayInt.toString();

    var date = new Date(year + "-" + month + "-" + finalDay);

    //insert
    const data = await userModel.insertUser(email, password, alias, date, premium);
    //get id
    const userFeedback = await userModel.getUserIdIntern(email, password);
    const userId = parseInt(userFeedback.rows[0]['id']);
    //insert login infos
    const firstLogin = await loginModel.insertLoginInfo(userId, email, "true", date);

    var currentDate = new Date();

    console.log("user was registered at : " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());

    if(data) {
      var response = [{
          finished_reg: 'true'
      }];
    res.status(200).json({ feedback: response });
  } else {

  }
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
