const SelectedProjects = () => {
  return (
    <div>
      <h2 className="mb-32">Selected projects</h2>
      <div className="space-y-40 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-40">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      <div
        className="w-full bg-placeholder rounded-4 mb-16"
        style={{ height: '280px' }}
      ></div>
      <div className="mb-16">
        <h4 className="mb-8">EPICPLAYZ.pl</h4>
        <div className="flex gap-20">
          <p>UX/UI</p>
          <p>Entertainment</p>
        </div>
      </div>
      <p>
        As my first project at Berkeley Innovation, a student-led design
        consultancy at UC Berkeley, I had the exciting opportunity to work with
        YouTube
      </p>
    </div>
  );
};

export default SelectedProjects;
