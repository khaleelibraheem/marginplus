import * as Yup from "yup";

export const CreateWaitListSchema = Yup.object({
  firstName: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
    .required("Please enter your email"),
});
