import LoginModel from '../models/loginmodel';
const loginModel = new LoginModel('user_login_data');
export const loginCachePage = async (req, res) => {
  try {
    //login or reg tag ?
    const method = req.body.method;

    if (method == null) {
      const id = req.body.userid;
      const email = req.body.email;
      const isLoggedIn = true;
      const year = req.body.year;
      const month = req.body.month;
      const day = req.body.day;
      var idInt = parseInt(id);
      var dayInt = parseInt(day);
      var finalDay = dayInt.toString();
      var date = new Date(year + "-" + month + "-" + finalDay);
      console.log(idInt, email, isLoggedIn, date);
      const data = await loginModel.updateLoginInfo(idInt, email, isLoggedIn, date);
      console.log(data.rows);

      if (data.rowCount) {
        var response = [{
          loggedIn: 'true'
        }];
        res.status(200).json({
          feedback: response
        });
      } else {
        var response = [{
          loggedIn: 'false'
        }];
        res.status(200).json({
          feedback: response
        });
      }
    } else {
      if (method == "LOGOUT") {
        const id = req.body.id;
        console.log(id);
        const isLoggedIn = false;
        const year = req.body.year;
        const month = req.body.month;
        const day = req.body.day;
        var idInt = parseInt(id);
        var dayInt = parseInt(day);
        var finalDay = dayInt.toString();
        var date = new Date(year + "-" + month + "-" + finalDay);
        const data = await loginModel.logoutUser(idInt, isLoggedIn, date);

        if (data.rowCount) {
          var response = [{
            logout: 'true'
          }];
          res.status(200).json({
            feedback: response
          });
        } else {
          var response = [{
            logout: 'false'
          }];
          res.status(200).json({
            feedback: response
          });
        }
      }
    }
  } catch (err) {
    res.status(200).json({
      messages: err.stack
    });
  }
};