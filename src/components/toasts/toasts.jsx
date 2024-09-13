import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successToast } from "./toasts-functions";

const CustomToast = () => {
  const notify = () => {

    successToast("I am clicked","top-right")
    
  };

  return (
    <>
      <button onClick={notify} color={"red"}>Notify</button>
      <ToastContainer />
    </>
  );
};

export default CustomToast;
