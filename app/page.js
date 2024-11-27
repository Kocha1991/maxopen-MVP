import Layout from "@/components/layout/Layout";

import Banner from '@/components/sections/customHome/Banner';
import { Services } from '@/components/sections/customHome/Services';
import { Projects } from '@/components/sections/customHome/Projects';
import WhyWe from '@/components/sections/customHome/WhyWe';
import Process from '@/components/sections/customHome/Process';
import ContactUs from '@/components/sections/customHome/ContactUs';

export default function Home() {

    return (
        <>
          <Layout useCustomHeader={true} footerStyle={'customFooter'} logoWhite>
            <Banner />
            <Services />
            <Projects />
            <WhyWe />
            <Process />
            <ContactUs />
          </Layout>
        </>
    )
}