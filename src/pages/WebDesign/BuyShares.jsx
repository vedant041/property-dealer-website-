import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyAbout from "../../components/property/PropertyAbout";
import PropertyDetails from "../../components/property/PropertyDetails";
import PropertyImages from "../../components/property/PropertyImages";
import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";
import VideoBackground from "../../components/common/VideoBackground";

export default function BuyShares() {
  return (
    <VideoBackground>
      <Navbar />
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-10">
            <PropertyHeader mode="buy" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-start">
            <div className="flex flex-col gap-6">
              <PropertyAbout />
              <PropertyImages />
            </div>
            <div>
              <PropertyDetails />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </VideoBackground>
  );
}
