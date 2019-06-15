import React from 'react';
import uuid4 from 'uuid';
import { Formik } from 'formik';
import { addCloth } from '../services/ClothesApi';

const colors = ['dark indigo', 'light wash blue', 'white', 'navy blue', 'grey'];

const AddClothForm = (props) => {
  return (
    <Formik
      initialValues={{ uuid: '', type: '', model: '', size: '', forMen: false, price: '', outlet: false }}
      onSubmit={async (values, { setSubmitting }) => {
        values.uuid = uuid4();

        try {
          await addCloth(values);
        } catch (error) {
          throw error;
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {props => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="type" style={{ display: 'block' }}>Type</label>
            <input
              id="type"
              placeholder="enter type..."
              type="text"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="model" style={{ display: 'block' }}>Model</label>
            <input
              id="model"
              placeholder="enter model..."
              type="text"
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="size" style={{ display: 'block' }}>Size</label>
            <input
              id="size"
              placeholder="enter size..."
              type="number"
              value={values.size}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="forMen" style={{ display: 'block' }}>For men?</label>
            <input
              id="forMen"
              type="checkbox"
              value={values.forMen}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="price" style={{ display: 'block' }}>
              Price
            </label>
            <input
              id="price"
              placeholder="enter price..."
              type="number"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <label htmlFor="outlet" style={{ display: 'block' }}>Outlet?</label>
            <input
              id="outlet"
              type="checkbox"
              value={values.outlet}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <br />

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
  )
}

export default AddClothForm;