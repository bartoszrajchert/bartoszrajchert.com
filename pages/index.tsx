import { timelineRecords } from '@content/timelineRecords';
import type { NextPage } from 'next';
import Head from 'next/head';
import SocialButtons from '@components/SocialButtons';
import TimelineRecord from '@components/TimelineRecord';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bartosz Rajchert Portfolio</title>
        <meta
          name="description"
          content="Bartosz Rajchert Portfolio, Front-end Developer, Product Designer, Design System, Creative Technologist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="mt-12 mb-16 lg:my-24">
          <h1 className="mb-3 text-header-md lg:text-header-lg">
            Hello there <span className="wave">👋</span>, I’m Bartosz!
          </h1>
          <p className="text-body-lg lg:text-body-xl">
            I’m currently working as Creative Technologist at{' '}
            <span className="text-blue-normal">HSBC</span>, bridging the gap
            between Technology and Design using my knowledge in both fields.
          </p>
          <div className="mt-4 lg:mt-6">
            <SocialButtons />
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-title-md uppercase text-grey-1">Timeline</h2>
          <div className="space-y-12 sm:space-y-6">
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
