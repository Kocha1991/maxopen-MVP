import Layout from "@/components/layout/Layout";

import Banner from '@/components/sections/customHome/Banner';
import { Services } from '@/components/sections/customHome/Services';
import { Projects } from '@/components/sections/customHome/Projects';
import WhyWe from '@/components/sections/customHome/WhyWe';
import Process from '@/components/sections/customHome/Process';
import ContactUs from '@/components/sections/customHome/ContactUs';
import Prices from '@/components/sections/customHome/Prices';
import GoodsAnimation from '@/components/sections/customHome/GoodsAnimation';
import { Games } from '@/components/sections/customHome/Games';

export default function Home() {
    return (
        <>
          <Layout useCustomHeader={true} footerStyle={'customFooter'} logoWhite>
            <Banner />
            <GoodsAnimation />
            <Services />
            <Projects />
            <WhyWe />
            <Games />
            <Process />
            <Prices />
            <ContactUs />
          </Layout>
        </>
    )
}