import { Outlet } from "react-router-dom";
import Sidebar from "../../components/PropertyOwner/Sidebar";
import Header from "../../components/PropertyOwner/Header";
import VideoBackground from "../../components/common/VideoBackground";

export default function Layout() {
  return (
    <VideoBackground className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Outlet />
        </main>
      </div>
    </VideoBackground>
  );
}
