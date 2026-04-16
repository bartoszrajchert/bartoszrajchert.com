import { CompaniesSection } from '@/components/companies-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-[62px]">
        <HeroSection />
        <ProjectsSection />
        <CompaniesSection />
      </div>
    </main>
  );
}
