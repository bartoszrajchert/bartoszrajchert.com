import styles from './SelectedProjects.module.css';

const SelectedProjects = () => {
  return (
    <section className="relative">
      <div className={styles.waves}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-darkBackgroundGradient-to"
          ></path>
        </svg>
      </div>
      <div className="container-content">
        <h2 className="mb-32">Selected projects</h2>
        <div className="space-y-40 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-40">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
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
