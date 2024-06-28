import React, { useRef, useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [addProjectActive, setAddProjectActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        setAddProjectActive={setAddProjectActive}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      {addProjectActive ? (
        <NewProject
          setAddProjectActive={setAddProjectActive}
          projects={projects}
          setProjects={setProjects}
        />
      ) : selectedProject ? (
        <SelectedProject
          setProjects={setProjects}
          project={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <NoProjectSelected setAddProjectActive={setAddProjectActive} />
      )}
    </main>
  );
}

export default App;
