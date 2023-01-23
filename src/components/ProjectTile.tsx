interface Props {
  title: string;
  tags: string[];
}

const ProjectTile = ({ title, tags }: Props) => {
  return (
    <div>
      <div className="bg-grey-1 rounded-8px h-[308px] border border-black">
        {/*<img />*/}
      </div>
      <div className="mt-4">
        <div>
          <p className="text-title-md text-grey-1 uppercase mb-2">
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
