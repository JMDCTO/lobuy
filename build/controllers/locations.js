import LocationModel from '../models/locationmodel';
const locationModel = new LocationModel('user_location_data');
export const locationPage = async (req, res) => {
  try {
    //login or reg tag ?
    const id = req.body.id;
    const method = req.body.method;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const city = req.body.city;
    console.log(id); //continue

    if (method == "SET_LOCATION") ;
    const isupdate = await locationModel.getLastLocation(id);
    var count = isupdate.rows[0].count;
    console.log(count);

    if (count) {
      const update = await locationModel.updateLocation(id, longitude, latitude, city);
      console.log(update.rows);

      if (update.rowCount) {
        var response = [{
          updatelocation: 'true'
        }];
        res.status(200).json({
          feedback: response
        });
      } else {
        var response = [{
          updatelocation: 'false'
        }];
        res.status(200).json({
          feedback: response
        });
      }
    } else {
      const data = await locationModel.insertLocation(id, longitude, latitude, city);
      console.log(data.rows);

      if (data.rowCount) {
        var response = [{
          fetchedlocation: 'true'
        }];
        res.status(200).json({
          feedback: response
        });
      } else {
        var response = [{
          fetchedlocation: 'false'
        }];
        res.status(200).json({
          feedback: response
        });
      }
    }
  } catch (err) {
    res.status(200).json({
      messages: err.stack
    });
  }
};