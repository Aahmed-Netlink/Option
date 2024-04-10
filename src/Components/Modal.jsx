import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(({ children, btnCaption, handleSave }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 h-2/5 p-10 rounded-md shadow-md w-2/5 overflow-scroll no-scrollbar ">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <button onClick={handleSave} className="bg-blue-400 rounded-md shadow-lg shadow-rose-200 flex justify-between p-4 w-1/4">
                    {btnCaption}
                </button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
})

export default Modal;