import React from "react";
import Button from "./Button";
import SelectedProject from "./SelectedProject";

export default function ProjectsSidebar({
  setAddProjectActive,
  projects,
  setSelectedProject,
}) {
  function activeAddProject() {
    setAddProjectActive(true);
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={activeAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <button
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
