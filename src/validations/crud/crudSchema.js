import * as Yup from 'yup';
import {
  nameField,
  descriptionField,
  priceField,
  quantityField,
  categoryField,
  imagePostField,
  imagePutField,
} from './crudFields';

export function crudSchema({ isProduct, id }) {
  const body = {};

  if (isProduct) {
    if (!id) {
      body.image = imagePostField;
    } else {
      body.image = imagePutField;
    }
    body.name = nameField;
    body.description = descriptionField;
    body.price = priceField;
    body.quantity = quantityField;
    body.category_id = categoryField;
  } else {
    body.name = nameField;
  }

  return Yup.object().shape(body);
}
