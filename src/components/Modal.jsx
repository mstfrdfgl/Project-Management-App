import { createPortal } from "react-dom";

export default function Modal({ dialogRef }) {
  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
      <p className="text-stone-600 mb-4">
        Looks like you forgot to enter a value.
      </p>
      <p className="text-stone-600 mb-4">
        Please make sure you provide a valid value every input field.
      </p>
      <form method="dialog" className="mt-4 text-right">
        <button className="text-stone-800 hover:text-stone-950">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
