"use client";

import { Header } from "@/components/Header";
import { HeroNew } from "@/components/HeroNew";
import { Endorsements } from "@/components/Endorsements";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Services } from "@/components/Services";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reviews } from "@/components/Reviews";
import { ContactOptions } from "@/components/ContactOptions";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { useData } from "@/contexts/DataContext";

export default function Home() {
  const { loading } = useData();

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroNew />
        <Endorsements />
        <WhoWeAre />
        <Services />
        <ProjectShowcase id="showcase" />
        <PhotoGallery />
        <Reviews />
        <ContactOptions />
        <EnquiryForm />
        <Footer />
      </main>
    </>
  );
}
