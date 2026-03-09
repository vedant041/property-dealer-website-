import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";
import ContactInfoCard from "../../components/contact/ContactInfoCard";
import ContactFormCard from "../../components/contact/ContactFormCard";
import VideoBackground from "../../components/common/VideoBackground";

export default function ContactUs() {
  return (
    <VideoBackground>

      <Navbar />

      <main
        className="
        w-full
        max-w-[1440px]
        mx-auto
        px-4
        sm:px-6
        lg:px-10
        py-8
        md:py-10
        "
      >

        {/* Breadcrumb */}
        <p className="text-xs md:text-sm text-white/60 mb-2">
          Home &gt; Contact Us
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Contact Us
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-white/70 mb-6 md:mb-8 max-w-[700px]">
          We’re here to help you with investments, partnerships, and support.
        </p>

        {/* CARDS GRID */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          lg:gap-8
          "
        >
          <ContactInfoCard />
          <ContactFormCard />
        </div>

      </main>

      <Footer />

    </VideoBackground>
  );
}