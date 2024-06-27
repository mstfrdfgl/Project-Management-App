import React, { useRef, useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [addProjectActive, setAddProjectActive] = useState(false);
  const [projects, setProjects] = useState([]);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        setAddProjectActive={setAddProjectActive}
        projects={projects}
      />
      {addProjectActive ? (
        <NewProject
          setAddProjectActive={setAddProjectActive}
          projects={projects}
          setProjects={setProjects}
        />
      ) : (
        <NoProjectSelected setAddProjectActive={setAddProjectActive} />
      )}
    </main>
  );
}

export default App;
