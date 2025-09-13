import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/Team"
import About from "@/components/sections/About"
import Banner from "@/components/sections/Banner"
import Chooseus from "@/components/sections/Chooseus"
import Feature from "@/components/sections/Feature"
import Funfact from "@/components/sections/Funfact"
import Service from "@/components/sections/Service"
import Testimonial from "@/components/sections/Testimonial"
import Process from "@/components/sections/Process"
import Skills from "@/components/sections/Skills"
import Project from "@/components/sections/Project"
import Cta from "@/components/sections/Cta"
export default function Home_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={1}>
                <Banner/>
                <Feature/>
                <About/>
                <Service/>
                <Chooseus/>
                <Funfact/>
                <Team/>
                <Testimonial/>
                <Process/>
                <Skills/>
                <Project/>
                <Cta/>
            </Layout>
        </div>
    )
}