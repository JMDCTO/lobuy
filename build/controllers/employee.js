import EmployeeModel from '../models/employeemodel';
const employeeModel = new EmployeeModel('user_internal');
export const employeePage = async (req, res) => {
  try {
    //login or reg tag ?
    const username = req.body.username;
    const password = req.body.password;
    const data = await employeeModel.selectEmployee(username, password);
    console.log(data.rows);

    if (data.rowCount) {
      var response = [{
        successfull: 'true'
      }];
      res.status(200).json({
        response
      });
    } else {
      var response = [{
        successfull: 'false'
      }];
      res.status(200).json({
        feedback: response
      });
    }
  } catch (err) {
    res.status(200).json({
      messages: err
    });
  }
};