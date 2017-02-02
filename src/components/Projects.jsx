var React = require('react');

var Projects = (props) => {
  return (
    <div className="project-list">
    {props.projectArray.map((project) =>
      <div>
        <ProjectsList
          project={project}
        />
      </div>
    )}
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Projects = Projects;