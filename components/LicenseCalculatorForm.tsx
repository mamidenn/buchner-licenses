import classNames from "classnames";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import React, { FunctionComponent } from "react";

interface FormValues {
  numLicenses: number;
  numFloating: number;
}

type LicenseCalculatorFormProps = {
  onSubmit: (values: FormValues) => void;
};

export const LicenseCalculatorForm: FunctionComponent<LicenseCalculatorFormProps> =
  ({ onSubmit }) => {
    return (
      <>
        <div className="pb-3 mb-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Erstellen Sie Ihr Lizenzpaket</h1>
        </div>
        <div className="row">
          <Formik
            initialValues={{ numLicenses: 1, numFloating: 0 }}
            validate={(values) => {
              let errors: FormikErrors<FormValues> = {};
              if (values.numLicenses < 1) {
                errors.numLicenses = "Bitte wählen Sie mindestens eine Lizenz";
              }
              if (values.numFloating < 0) {
                errors.numFloating =
                  "Sie können keine negative Anzahl an Lizenzen erwerben";
              }
              if (values.numFloating > values.numLicenses) {
                errors.numFloating =
                  "Sie können nicht mehr Floating Lizenzen erwerben als die Gesamtzahl";
              }
              return errors;
            }}
            onSubmit={onSubmit}
          >
            {({
              isSubmitting,
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
            }) => (
              <Form>
                <div className="col-12">
                  <label htmlFor="numLicenses" className="form-label">
                    Anzahl Lizenzen
                  </label>
                  <Field
                    className={classNames("form-control", {
                      "is-invalid": touched.numLicenses && errors.numLicenses,
                    })}
                    name="numLicenses"
                    type="number"
                    min="1"
                    onChange={(e: React.ChangeEvent<any>) => {
                      handleChange(e);
                      setFieldValue(
                        "numFloating",
                        Math.max(
                          0,
                          Math.min(values.numFloating, e.currentTarget.value)
                        )
                      );
                    }}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="numLicenses"
                    component="div"
                  />
                </div>
                <div className="col-12 my-2">
                  <div className="row">
                    <label htmlFor="numFloating" className="form-label">
                      Davon Floating Lizenzen
                    </label>
                    <div className="col-10 d-flex align-items-center">
                      <Field
                        type="range"
                        className={classNames("form-range", "align-middle", {
                          "is-invalid":
                            touched.numFloating && errors.numFloating,
                        })}
                        min="0"
                        max={Math.max(0, values.numLicenses)}
                        name="numFloating"
                      />
                    </div>
                    <div className="col-2">
                      <Field
                        type="number"
                        min="0"
                        max={Math.max(0, values.numLicenses)}
                        name="numFloating"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.numFloating && errors.numFloating,
                        })}
                      />
                      <ErrorMessage
                        className="invalid-feedback"
                        name="numFloating"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="w-100 btn btn-primary my-3"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "Berechnen"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  };
