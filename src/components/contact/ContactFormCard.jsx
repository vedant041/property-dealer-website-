import Button from "../ui/Button";

export default function ContactFormCard() {
  return (
    /* OUTER CARD */
    <div
      className="
      w-full
      rounded-[16px]
      border border-white/30
      bg-[#1F3A5F1A]/10
      backdrop-blur-[4px]
      p-4 sm:p-5 md:p-6
      "
    >
      <h3 className="text-base sm:text-lg font-semibold text-[#FFD166] mb-4 md:mb-5">
        Send Us a Message
      </h3>

      {/* INNER CARD */}
      <div
        className="
        rounded-[14px]
        border border-white/20
        bg-white/10
        backdrop-blur-[4px]
        p-4 sm:p-5 md:p-6
        "
      >
        <form className="flex flex-col gap-4 md:gap-5">

          <Input label="Name" placeholder="Full Name" />
          <Input label="Email" placeholder="Email Address" />
          <Input label="Phone" placeholder="Phone Number" />

          {/* MESSAGE */}
          <div>
            <label className="text-xs sm:text-sm text-white/80">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Type your message..."
              className="
              w-full
              mt-1
              rounded-[10px]
              px-3 sm:px-4
              py-2 sm:py-3
              bg-white/65
              text-[#0B1F3A]
              placeholder:text-[#6B7280]
              outline-none
              resize-none
              text-sm
              "
            />
          </div>

          {/* BUTTON */}
          <Button
            variant="auth"
            className="mt-2 w-full text-sm sm:text-base"
          >
            Send Message
          </Button>

        </form>
      </div>
    </div>
  );
}

/* INPUT COMPONENT */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs sm:text-sm text-white/80">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="
        w-full
        mt-1
        h-[40px] sm:h-[42px]
        rounded-[10px]
        px-3 sm:px-4
        bg-white/65
        text-[#0B1F3A]
        placeholder:text-[#6B7280]
        outline-none
        text-sm
        "
      />
    </div>
  );
}