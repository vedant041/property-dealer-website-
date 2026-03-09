import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";
import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyInfoCard from "../../components/property/PropertyInfoCard";
import PropertyMoreDetails from "../../components/property/PropertyMoreDetails";
import AboutProperty from "../../components/property/AboutProperty";
import VideoBackground from "../../components/common/VideoBackground";

export default function PropertyDetails() {
  return (
    <VideoBackground>
      <Navbar />

      <main
        className="
        w-full
        max-w-[1312px]
        mx-auto
        px-4
        sm:px-6
        lg:px-10
        py-8
        space-y-8
        "
      >

        {/* BREADCRUMB */}
        <p className="text-xs sm:text-sm text-white/60">
          Home &gt; Property Listings &gt; 2 BHK Apartment in Andheri East
        </p>

        {/* GALLERY + INFO */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[1.5fr_1fr]
          gap-6
          items-start
          "
        >
          <PropertyGallery />
          <PropertyInfoCard />
        </div>

        {/* MORE DETAILS */}
        <PropertyMoreDetails />

        {/* ABOUT PROPERTY */}
        <AboutProperty />

      </main>

      <Footer />
    </VideoBackground>
  );
}