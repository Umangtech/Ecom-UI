import React, { Fragment } from "react";
import { Form, FormGroup, Input } from "reactstrap";

const AddProduct = () => {
  return (
    <div>
      <Fragment>
        <Form>
          <FormGroup>
            <label for="productId">Product Id</label>
            <Input
              type="text"
              name="prodId"
              id="productId"
              placeholder="Enter Product Id"
            />
          </FormGroup>
        </Form>
      </Fragment>
    </div>
  );
};

export default AddProduct;
