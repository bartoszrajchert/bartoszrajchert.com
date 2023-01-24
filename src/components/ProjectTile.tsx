interface Props {
  title: string;
  tags: string[];
}

const ProjectTile = ({ title, tags }: Props) => {
  return (
    <div>
      <div className="h-[308px] rounded-8px border border-black bg-grey-1">
        {/*<img />*/}
      </div>
      <div className="mt-4">
        <div>
          <p className="mb-2 text-title-md uppercase text-grey-1">
            {tags.map((value, i) => (
              <span key={value}>
                {value}
                {i + 1 < tags.length ? ' • ' : ''}
              </span>
            ))}
          </p>
          <h3 className="text-header-md">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
