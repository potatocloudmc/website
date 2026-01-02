import Image from "next/image";
import {PotatoCloudHome} from "@/components/PotatoCloudHome";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Installation from "@/components/Installation";

export default function Home() {
  return (
    <>

        <main className={"min-h-screen mx-auto"}>

            <Header />

            <Hero />

            <Features />

            <CTA />

            <Footer />
        </main>

    </>
  );
}
