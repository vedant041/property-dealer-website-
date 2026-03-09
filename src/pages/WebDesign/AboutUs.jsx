import Navbar from "../../components/WebDesign/Navbar";
import Footer from "../../components/WebDesign/Footer";
import VideoBackground from "../../components/common/VideoBackground";

export default function AboutUs() {
  return (
    <VideoBackground>
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 space-y-10">

        <p className="text-sm text-white/70">
          Home / About Us
        </p>

        {/* HERO SECTION */}
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-[1.4fr_1fr]
          gap-6 md:gap-10
          bg-[#1F3A5F]/20
          backdrop-blur-[4px]
          border border-white/30
          rounded-[16px]
          p-6 md:p-10
          "
        >
          <div className="space-y-4 md:space-y-5">

            <h1 className="text-2xl md:text-4xl font-semibold">
              About Us
            </h1>

            <p className="text-white/90 text-sm md:text-base">
              Building a transparent techno-driven property ecosystem.
            </p>

            <h3 className="text-[#D7A95D] font-semibold mt-4 md:mt-6 text-lg">
              Who We Are
            </h3>

            <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-[620px]">
              We are a technology-enabled real estate platform focused on
              simplifying property investment and ownership. By combining data,
              transparency, and smart tools, we help individuals and institutions
              invest with confidence.
            </p>

          </div>

          <div className="flex justify-center items-center">
            <img
              src="/AboutUsimg.png"
              className="w-[260px] sm:w-[320px] md:w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              alt="city"
            />
          </div>

        </section>

        {/* MISSION & VISION */}
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6 md:gap-8
          "
        >
          {[
            {
              title: "Our Mission",
              text:
                "Our mission is to make property ownership and investment transparent, accessible, and future-ready by leveraging technology, data, and trust. We aim to empower individuals and communities to participate in sustainable real-estate growth.",
            },
            {
              title: "Our Vision",
              text:
                "Our vision is to build a technology-driven property ecosystem that connects investors, developers, and communities on a single trusted platform.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
              bg-[#1F3A5F]/20
              backdrop-blur-[4px]
              border border-white/30
              rounded-[16px]
              p-6 md:p-8
              "
            >
              <h3 className="text-[#D7A95D] font-semibold mb-3 md:mb-4 text-lg">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </section>

        {/* WHAT WE DO */}
        <section className="space-y-4 md:space-y-6">

          <h2 className="text-xl md:text-2xl font-semibold">
            What We Do
          </h2>

          <p className="text-white/80 max-w-[900px] text-sm md:text-base">
            We are a technology-enabled real estate platform focused on
            simplifying property investment and ownership.
          </p>

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5 md:gap-6
            "
          >
            {[
              {
                title: "Property Management",
                desc: "List and manage properties easily through our intuitive platform",
                icon: "/icon1.png",
              },
              {
                title: "Smart Investments",
                desc: "Access fractional investments in high-value properties for better returns",
                icon: "/icon2.png",
              },
              {
                title: "Investor Insights",
                desc: "Transparent reporting and analytics to track portfolio performance",
                icon: "/icon3.png",
              },
              {
                title: "Secure & Trustworthy",
                desc: "Industry-leading security measures to protect investments",
                icon: "/icon4.png",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="
                bg-[#1F3A5F]/25
                backdrop-blur-[4px]
                border border-white/30
                rounded-[16px]
                p-5 md:p-6
                space-y-3 md:space-y-4
                "
              >
                <img src={card.icon} className="w-10 h-10 md:w-12 md:h-12" alt="" />

                <h3 className="font-semibold text-[#D7A95D] text-sm md:text-base">
                  {card.title}
                </h3>

                <p className="text-xs md:text-sm text-white/75">
                  {card.desc}
                </p>

              </div>
            ))}
          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="space-y-4 md:space-y-6">

          <h2 className="text-xl md:text-2xl font-semibold">
            Why Choose Us
          </h2>

          <p className="text-white/80 text-sm md:text-base">
            Trusted properties. Transparent processes. Smarter investments.
          </p>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5 md:gap-6
            bg-[#1F3A5F]/25
            backdrop-blur-[4px]
            border border-white/30
            rounded-[16px]
            p-5 md:p-6
            "
          >
            <div className="flex items-start gap-4">
              <div className="text-green-400 text-xl">✔</div>

              <div>
                <h4 className="font-semibold">
                  Transparent Process
                </h4>

                <p className="text-sm text-white/70">
                  Full visibility into investments and returns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#FFD166] text-xl">📊</div>

              <div>
                <h4 className="font-semibold">
                  Data-Driven Insights
                </h4>

                <p className="text-sm text-white/70">
                  Accurate analytics to make informed decisions.
                </p>
              </div>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </VideoBackground>
  );
}