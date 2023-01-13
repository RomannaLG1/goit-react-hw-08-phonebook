import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const RegisterButton = () => {
    return(
        <Button type="submit" variant="contained" startIcon={<HowToRegIcon />}>
        Register
      </Button>
    )
}


// import React, { useState } from "react";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be 8 characters or longer")
//     .required("Password is required"),
// });

// const Form = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validationSchema
//       .validate(formState, { abortEarly: false })
//       .then(() => {
//         // submit form
//       })
//       .catch((err) => {
//         const validationErrors = {};
//         err.inner.forEach((error) => {
//           validationErrors[error.path] = error.message;
//         });
//         setErrors(validationErrors);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={formState.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p>{errors.name}</p>}
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={formState.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p>{errors.email}</p>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={formState.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p>{errors.password}</p>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;