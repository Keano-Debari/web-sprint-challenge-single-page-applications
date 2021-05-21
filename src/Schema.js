import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().trim().required('Name is required.').min(2, 'Name must be at least 2 characters long'),
    size: yup.string().required('Size is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    basil: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    olives: yup.boolean(),
    instructions: yup.string()
})