import * as yup from "yup";

export const useMakeSchema = (): yup.AnyObjectSchema => {
  return yup.object({
    make: yup.string().required("Please Enter Car Make"),
  });
};

export const useColourSchema = (): yup.AnyObjectSchema => {
  return yup.object({
    colour: yup.string().required("Please Enter Car Colour"),
  });
};

export const useCodeSchema = (): yup.AnyObjectSchema => {
  return yup.object({
    code: yup
      .string()
      .min(4, "code should be atleast 4 digits long")
      .required("Please Enter Car Code"),
  });
};
