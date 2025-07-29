import { timelineRecords } from '@content/timelineRecords';
import type { NextPage } from 'next';
import SocialButtons from '@components/SocialButtons';
import TimelineRecord from '@components/TimelineRecord';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <section className="mb-16 mt-28 lg:my-28">
          <h1 className="text-header-md lg:text-header-lg mb-1">
            Bartosz Rajchert
          </h1>
          <h2 className="text-header-sm lg:text-header-md mb-6">
            Creative Technologist
          </h2>
          <p className="text-body-lg lg:text-body-xl opacity-95">
            I’m currently working as Creative Technologist at{' '}
            <a
              href="https://www.hsbc.com/"
              className="text-blue-normal font-medium"
            >
              HSBC
            </a>
            , bridging the gap between Design and Technology.
          </p>
          <div className="mt-4 lg:mt-6">
            <SocialButtons />
          </div>
        </section>

        <section>
          <div className="space-y-12 sm:space-y-8">
            {timelineRecords.map((item, i) => (
              <TimelineRecord
                key={i}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
