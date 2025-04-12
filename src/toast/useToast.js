import React from "react";
import { useState } from "react";
import Toast from "./Toast";

const useToast = () => {
    const [toasts, setToasts] = useState([])

    const onClose = (id) => {
        setToasts((prev) => prev?.filter((t) => t.id !== id))
    }
    const toastHandler = ({ type, message, duration, postion }) => {
        const id = Date.now(); // unique id based on timestamp
        const newToast = { id, type, message, postion };

        setToasts((prev) => [...prev, newToast]);
        // Remove the toast after the duration
        setTimeout(() => {
            setToasts((prev) => prev?.filter((t) => t.id !== id));
        }, duration);
    }

    const ToastComponent = toasts?.length ? (toasts?.map(toast => <Toast {...{ ...toast, onClose }} />)) : null

    return { toastHandler, ToastComponent }
}

export default useToast;
