import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";
import DashboardGrid from "../../layout/WebDesign/DashboardGrid";
import VideoBackground from "../../components/common/VideoBackground";

export default function Home() {
  return (
    <VideoBackground>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
      <div className="w-full pt-6">
      <DashboardGrid />
    </div>
      </main>
      <Footer />
    </VideoBackground>
  );
}