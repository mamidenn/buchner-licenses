import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// interface Values {
//   email: string;
// }

const LicenseCalculator = () => {
  return (
    <>
      <div className="pb-3 mb-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Erstellen Sie Ihr Lizenzpaket</h1>
      </div>
      <div className="row">
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors = { email: "" };
            if (!values.email) {
              errors.email = "Foo!";
            }
            return errors;
          }}
          onSubmit={async () => {
            console.log("Submitting...");
            await sleep(1000);
            console.log("Done.");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field className="form-control" type="email" name="email" />
              <ErrorMessage
                className="invalid-feedback"
                name="email"
                component="div"
              />
              <button
                className="w-100 btn btn-primary my-3"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LicenseCalculator;
