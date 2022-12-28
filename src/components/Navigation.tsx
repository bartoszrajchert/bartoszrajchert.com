const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <p className="text-header-sm">Bartosz Rajchert</p>
      <ul className="flex gap-4 underline">
        <li>About</li>
        <li>Projects</li>
        <li>Book notes</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
