import CategoryModel from '../models/categorymodel';

const categoryModel = new CategoryModel('product_category');

export const categoryPage = async (req, res) => {

  try {
    const method = req.body.method;
    console.log(method);
    switch (method) {

      case 'CREATE_CATEGORY': {
        const title = req.body.title;
        const description = req.body.description;
        const logo = req.body.logo;
        console.log(description);

        const data = await categoryModel.insertCategory(title, description, logo);

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

      case 'GET_CATEGORY': {
        const title = req.body.title;
        console.log(title);

        const data = await categoryModel.getCategory();

         if(data.rowCount) {
             var category = data.rows;
             res.status(200).json({ category });
         } else {
             var response = [{
               message: 'no category with this name exists'
             }];
             res.status(200).json({ feedback: response });
         }
      } break;

      case 'GET_CATEGORIES': {
        console.log("all categories");
        const data = await categoryModel.getAllCategories();
         if(data.rowCount) {
             var categories = data.rows;
             res.status(200).json({ categories });
         } else {
             var response = [{
               message: 'no categories available'
             }];
             res.status(200).json({ feedback: response });
         }
      } break;

      case 'UPDATE_CATEGORY': {
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;
        const logo = req.body.logo;
        console.log(id);

        const data = await categoryModel.updateCategory(id, title, description, logo);
         if(data.rowCount) {
             var categories = data.rows;
             res.status(200).json({ partners });
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
