import { Icon } from "@iconify/react";

export default function ContactInfoCard() {
  return (
    <div
      className="
      w-full
      rounded-[16px]
      border border-white/20
      bg-[rgba(31,58,95,0.2)]
      backdrop-blur-[4px]
      p-5 md:p-6
      flex flex-col
      gap-6
      "
    >
      
      {/* TITLE */}
      <h3 className="text-lg md:text-xl font-semibold text-[#D7A95D]">
        Get In Touch
      </h3>

      {/* CONTACT INFO */}
      <div className="space-y-4 text-white/80 text-sm md:text-base">

        <div className="flex items-center gap-3">
          <Icon icon="mdi:map-marker-outline" width={20} />
          <span>123 Business Ave, Mumbai, India</span>
        </div>

        <div className="flex items-center gap-3">
          <Icon icon="mdi:phone-outline" width={20} />
          <span>+91 9876543210</span>
        </div>

        <div className="flex items-center gap-3">
          <Icon icon="mdi:email-outline" width={20} />
          <span>support@budhis.com</span>
        </div>

      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3">
        <Tag type="investor" text="Investor Support" />
        <Tag type="enquiry" text="Property Enquiry" />
        <Tag type="business" text="Business Partnership" />
      </div>

    </div>
  );
}

function Tag({ text, type }) {

  const config = {
    investor: {
      icon: "mdi:check-bold",
      color: "text-green-400",
      bg: "bg-[#29354DB0]",
    },
    enquiry: {
      icon: "mdi:chart-line",
      color: "text-yellow-400",
      bg: "bg-[#29354DB0]",
    },
    business: {
      icon: "mdi:handshake-outline",
      color: "text-yellow-400",
      bg: "bg-[#29354DB0]",
    },
  };

  const { icon, color, bg } = config[type];

  return (
    <div
      className={`
      flex items-center gap-2
      px-4 py-2
      rounded-md
      ${bg}
      border border-white/30
      text-xs md:text-sm
      text-white
      backdrop-blur-sm
      `}
    >
      <Icon icon={icon} className={color} width={16} />
      {text}
    </div>
  );
}