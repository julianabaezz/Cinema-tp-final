import * as yup from 'yup';
import { FORM_VALIDATIONS } from '../../../constants/formValidations';

export const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    lastName: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    date: yup
        .date()
        .required(FORM_VALIDATIONS.REQUIRED),
    email: yup
        .string()
        .email(FORM_VALIDATIONS.WRONG_FORMAT)
        .required(FORM_VALIDATIONS.REQUIRED),
    password: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED)
        .min(8, FORM_VALIDATIONS.SIZE)
        .matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/),

    
});