import { toast } from "react-hot-toast";

export const validateRegisterForm = (name, email, password) => {
    if (!name || !email || !password) {
        toast.error("This didn't work.")
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        toast.error("Please, enter valid e-mail")
      return false;
    }
    if (password.length < 8) {
        toast.error("Please, enter valid password")
      return false;
    }
    return true;
  };