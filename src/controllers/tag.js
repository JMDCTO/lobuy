import TagModel from '../models/tagmodel';

const tagModel = new TagModel('product_tag');

export const tagPage = async (req, res) => {

  try {
    const method = req.body.method;
    console.log(method);
    switch (method) {

      case 'CREATE_TAG': {
        const title = req.body.name;
        const description = req.body.description;
        const logo = req.body.logo;
        const categoryid = req.body.category;
        const id = parseInt(categoryid);
        console.log(description);

        const data = await tagModel.insertTag(title, description, logo, id);

        if(data.rowCount) {
            var inserted = "true";
            res.status(200).json({ inserted });
        } else {
            var response = [{
              message: 'category not inserted'
            }];
            res.status(200).json({ feedback: response });
        }
      } break;

      case 'GET_TAG': {
        const title = req.body.title;
        console.log(title);

        const data = await tagModel.getTag();

         if(data.rowCount) {
             var tag = data.rows;
             res.status(200).json({ tag });
         } else {
             var response = [{
               message: 'no category with this name exists'
             }];
             res.status(200).json({ feedback: response });
         }
      } break;

      case 'GET_TAGS': {
        console.log("all categories");
        const data = await tagModel.getAllTags();
         if(data.rowCount) {
             var tags = data.rows;
             res.status(200).json({ tags });
         } else {
             var response = [{
               message: 'no categories available'
             }];
             res.status(200).json({ feedback: response });
         }
      } break;

      case 'UPDATE_TAG': {
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;
        const logo = req.body.logo;
        const categoryid = req.body.category;

        console.log(id);

        const data = await tagModel.updateTag(id, title, description, logo, categoryid);
         if(data.rowCount) {
             var updated = true;
             res.status(200).json({ updated });
         } else {
             var response = [{
               message: 'no categories available'
             }];
             res.status(200).json({ feedback: response });
         }
      } break;
      default: break;

    }
  }
  catch (err) {
    console.log(err);
  res.status(200).json({ messages: err });
  }

}
