import { toast } from "react-toastify";

export const successToast = (message,position) => {
    toast.success(message, {
        position: position,
    });
};

export const errorToast = (message,position) => {
    toast.error(message, {
        position: position
    });
}
export const infoToast = (message,position)=>{
    toast.info(message, {
          position: position
        });
}