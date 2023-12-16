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
        <section className="mt-28 mb-16 lg:my-24 lg:mt-12">
          <h1 className="mb-3 text-header-md lg:text-header-lg">
            Hello there <span className="wave">👋</span>, I’m Bartosz!
          </h1>
          <p className="text-body-lg opacity-95 lg:text-body-xl">
            I’m currently working as Creative Technologist at{' '}
            <a
              href="https://www.hsbc.com/"
              className="font-medium text-blue-normal"
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
          <h2 className="mb-6 text-title-md uppercase text-grey-1">Timeline</h2>
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
