import { ContactMe, Hero, SelectedProjects, SkillSet, SlashDivider } from '@/components/structure';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Services } from '@/components/structure/Services/Services';
import { homeMeta } from '@/data/meta';

export const metadata  = homeMeta;

export default function Home() {
  return (
    <div className="">
     
     {/* <Navbar/> */}
     <MainLayout>
      <Hero />
       <SlashDivider />
      <SelectedProjects />
      <Services />
      <SkillSet />
     <ContactMe />
    </MainLayout>
    </div>
  );
}
