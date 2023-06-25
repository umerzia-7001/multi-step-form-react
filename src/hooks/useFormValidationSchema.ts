import * as yup from "yup";

export const useFormValidationSchema = (): yup.AnyObjectSchema => {
  return yup.object({
    make: yup.string().required("Please Enter Car Make"),
    colour: yup.string().required("Please Enter Car Colour"),
    code: yup
      .string()
      .min(4, "code should be atleast 4 digits long")
      .required("Please Enter Car Code"),
  });
};
