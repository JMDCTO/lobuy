import NodummieUserModel from '../models/nodummieusermodel';
const nodummieUserModel = new NodummieUserModel('user_main_data');
export const nodummieUserPage = async (req, res) => {
  try {
    //login or reg tag ?
    const method = req.body.method;
    console.log(method);

    switch (method) {
      case 'EMAIL':
        {
          const email = req.body.email;
          const data = await nodummieUserModel.selectUserWithEmail(email);

          if (data.rowCount) {
            var rows = data.rows;
            res.status(200).json({
              rows
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

      case 'ALIAS':
        {
          const alias = req.body.alias;
          const data = await nodummieUserModel.selectUserWithAlias(alias);

          if (data.rowCount) {
            var rows = data.rows;
            res.status(200).json({
              rows
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

      case 'EMAIL_DATE':
        {
          const email = req.body.email;
          const date = req.body.date;
          const data = await nodummieUserModel.selectUserWithEmailAndDate(email, date);

          if (data.rowCount) {
            var rows = data.rows;
            res.status(200).json({
              rows
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

      case 'ALIAS_DATE':
        {
          const alias = req.body.alias;
          const date = req.body.date;
          const data = await nodummieUserModel.selectUserWithAliasAndDate(alias, date);

          if (data.rowCount) {
            var rows = data.rows;
            res.status(200).json({
              rows
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

      case 'GET_USER_COUNT':
        {
          const data = await nodummieUserModel.getUserCount();

          if (data.rowCount) {
            var totalUserCount = data.rows;
            res.status(200).json({
              count
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