const RecentArticles = () => {
  return (
    <div>
      <h2 className="mb-32">Recent articles</h2>
      <div className="lg:grid lg:grid-cols-3 lg:gap-32">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

const Article = () => {
  return (
    <div>
      <div
        className="w-full bg-placeholder rounded-4 mb-16"
        style={{ height: '280px' }}
      ></div>
      <p className="mb-16">Dec 8, 2021</p>
      <div>
        <h4 className="mb-12">How To Structure Your Presentation</h4>
        <p className="mb-16">
          3 simple tips to do that — Everyone who has done a presentation knows
          the feeling of fear, doubt and being judged.
        </p>
        <p>Read more</p>
      </div>
    </div>
  );
};

export default RecentArticles;
