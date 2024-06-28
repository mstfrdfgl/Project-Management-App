import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({
  setAddProjectActive,
  projects,
  setProjects,
}) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const dialogRef = useRef();
  const [isValid, setIsValid] = useState(false);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;
    if (!title || !description || !date) {
      dialogRef.current.showModal();
    } else {
      const id = Math.random() * 100;
      const newProject = { title, description, date, id };
      setProjects([...projects, newProject]);
      setAddProjectActive(false);
    }
  }
  function passiveAddProject() {
    setAddProjectActive(false);
  }

  return (
    <>
      <Modal dialogRef={dialogRef} />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={passiveAddProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" reff={titleRef} />
          <Input label="Description" textarea="true" reff={descriptionRef} />
          <Input label="Due Date" type="date" reff={dateRef} />
        </div>
      </div>
    </>
  );
}
