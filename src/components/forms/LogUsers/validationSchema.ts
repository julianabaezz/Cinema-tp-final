import * as yup from "yup"
import { FORM_VALIDATIONS } from "../../../constants/formValidations"

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email(FORM_VALIDATIONS.WRONG_FORMAT)
        .required(FORM_VALIDATIONS.REQUIRED),

    password: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED)
})