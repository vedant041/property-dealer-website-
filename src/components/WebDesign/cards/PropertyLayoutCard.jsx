import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyLayoutCard() {
  const navigate = useNavigate();

  const layouts = [
    {
      id: "layout-1",
      image: "/PropertyLayoutimg2.png",
      projects: [
        {
          title: "Modern Residences",
          percent: 20,
          image: "/Property2.png",
          route: "/property/modern-residences",
        },
        {
          title: "2 BHK Apartment",
          percent: 80,
          image: "/Property1.png",
          route: "/property/2-bhk-apartment",
        },
      ],
    },
    {
      id: "layout-2",
      image: "/Layoutimg1.png",
      projects: [
        {
          title: "Luxury Villas",
          percent: 55,
          image: "/Property1.png",
          route: "/property/luxury-villas",
        },
        {
          title: "Studio Apartment",
          percent: 35,
          image: "/Property2.png",
          route: "/property/studio-apartment",
        },
        {
          title: "Penthouse",
          percent: 70,
          image: "/Property1.png",
          route: "/property/penthouse",
        },
      ],
    },
    {
      id: "layout-3",
      image: "/Layoutimg2.png",
      projects: [
        {
          title: "Affordable Homes",
          percent: 60,
          image: "/Property1.png",
          route: "/property/affordable-homes",
        },
        {
          title: "Office Hub",
          percent: 90,
          image: "/Property1.png",
          route: "/property/office-hub",
        },
      ],
    },
    {
      id: "layout-4",
      image: "/Layoutimg3.png",
      projects: [
        {
          title: "Affordable Homes",
          percent: 60,
          image: "/Property1.png",
          route: "/property/affordable-homes",
        },
        {
          title: "Office Hub",
          percent: 90,
          image: "/Property1.png",
          route: "/property/office-hub",
        },
      ],
    },
    {
      id: "layout-5",
      image: "/Layoutimg4.png",
      projects: [
        {
          title: "Office Hub",
          percent: 60,
          image: "/Property1.png",
          route: "/property/affordable-homes",
        },
        {
          title: "Affordable Homes",
          percent: 90,
          image: "/Property1.png",
          route: "/property/office-hub",
        },
      ],
    },
  ];

  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);
  const [showInlineLayout, setShowInlineLayout] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const activeLayout = layouts[activeLayoutIndex];
  const projects = activeLayout.projects;

  return (
    <div
      className="
      relative
      w-full
      lg:h-[550px]
      rounded-[15px]
      border border-white/30
      backdrop-blur-[2px]
      p-4
      text-white
      flex flex-col
      gap-3
      overflow-hidden
      mx-auto
      "
      style={{ background: "rgba(31,58,95,0.10)" }}
    >
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">Property Layout</h2>
        <p className="text-xs text-white/70">
          Click on a plot to view details
        </p>
      </div>

      {/* LAYOUT IMAGE */}
      <div className="flex gap-3 items-start">
        <div className="flex flex-col gap-2">
          <StatusPill color="bg-green-400" label="Available" />
          <StatusPill color="bg-red-400" label="Sold" />
          <StatusPill color="bg-yellow-400" label="Reserved" />

          <button
            onClick={() => setShowInlineLayout(true)}
            className="mt-2 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center"
          >
            ⬚
          </button>
        </div>

        <img
          src={activeLayout.image}
          className="
          w-full
          lg:w-[455px]
          h-[140px]
          sm:h-[160px]
          lg:h-[170px]
          object-cover
          rounded-[12px]
          "
          alt="layout"
        />
      </div>

      {/* LAYOUT SWITCHER */}
      {showInlineLayout && (
        <div
          className="
          absolute
          left-4
          right-4
          top-[210px]
          sm:top-[180px]
          lg:left-[80px]
          lg:right-auto
          lg:w-[420px]
          h-[70px]
          rounded-xl
          flex
          items-center
          px-2
          gap-2
          backdrop-blur-md
          z-20
          "
          style={{
            background: "rgba(31,58,95,0.12)",
            border: "1px solid rgba(238,238,238,0.3)",
          }}
        >
          <button
            onClick={() => setShowInlineLayout(false)}
            className="absolute -left-8 w-7 h-7 rounded-full bg-white/20"
          >
            ✕
          </button>

          {layouts.map((layout, index) => (
            <button
              key={layout.id}
              onClick={() => {
                setActiveLayoutIndex(index);
                setCardIndex(0);
              }}
              className={`w-[60px] h-[42px] rounded-[8px] overflow-hidden border ${
                index === activeLayoutIndex
                  ? "border-white bg-white/10"
                  : "border-white/20"
              }`}
            >
              <img
                src={layout.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </button>
          ))}
        </div>
      )}

      <div className="border-t border-white/20" />

      {/* PROJECT SECTION */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-semibold">Construction Project</h3>
        <p className="text-xs text-white/60 mb-2">
          Available properties
        </p>

        <div className="relative flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.slice(cardIndex, cardIndex + 2).map((p) => (
              <ProjectCard
                key={p.title}
                {...p}
                onClick={() => navigate(p.route)}
              />
            ))}
          </div>

          {/* ARROWS only desktop */}
          {projects.length > 2 && cardIndex + 2 < projects.length && (
            <Arrow
              direction="right"
              onClick={() => setCardIndex(cardIndex + 1)}
            />
          )}

          {projects.length > 2 && cardIndex > 0 && (
            <Arrow
              direction="left"
              onClick={() => setCardIndex(cardIndex - 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* STATUS PILL */

function StatusPill({ color, label }) {
  return (
    <div className="px-2 py-[3px] text-[11px] rounded-md border border-white/30 bg-white/10 flex items-center gap-1">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}

/* ARROWS */

function Arrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${
        direction === "right" ? "-right-4" : "-left-4"
      } w-8 h-8 rounded-md bg-white/20 backdrop-blur-md items-center justify-center`}
    >
      {direction === "right" ? "❯" : "❮"}
    </button>
  );
}

/* PROJECT CARD */

function ProjectCard({ title, percent, image, onClick }) {
  return (
    <div
      className="
      rounded-[16px]
      p-4
      flex flex-col
      backdrop-blur-lg
      border border-white/20
      bg-[#29354DB0]
      h-[210px]
      sm:h-[220px]
      lg:h-[230px]
      "
    >
      <h4 className="text-sm sm:text-md font-semibold mb-2">{title}</h4>

      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          className="max-h-[100px] sm:max-h-[110px] lg:max-h-[100px] object-contain"
          alt=""
        />
      </div>

      <p className="text-xs text-white/60 text-center mb-1">
        {percent}% Funded
      </p>

      <div className="h-[5px] bg-white/30 rounded-full mb-3 overflow-hidden">
        <div
          className="h-full bg-green-400"
          style={{ width: `${percent}%` }}
        />
      </div>

      <button
        onClick={onClick}
        className="h-[34px] rounded-md bg-white/20 border border-white/20 hover:bg-white/30 text-xs sm:text-sm"
      >
        More Details
      </button>
    </div>
  );
}