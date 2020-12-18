import * as yup from "yup";

export default yup.object().shape({
    size: yup.string().required("Please pick a size for your pizza")
});