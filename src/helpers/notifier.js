import { toast } from "react-toastify";

export const error = (
  message = "Ocorreu um erro, tente novamente mais tarder.",
  autoClose = 2000
) => {
  toast.error(message, {
    autoClose
  });
};

export const success = (message, autoClose = 1000) => {
  toast.success(message, {
    autoClose
  });
};
