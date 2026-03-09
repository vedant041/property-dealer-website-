export default function MembershipCard() {
  return (
    <div
      className="
      w-full
      h-[200px]
      rounded-[18px]
      border border-white/20
      backdrop-blur-md
      px-5
      py-1
      flex
      flex-col
      justify-between
      "
      style={{ background: "rgba(31,58,95,0.12)" }}
    >
      {/* TITLE */}
      <h2 className="text-[16px] font-semibold text-white">
        Budhis Foundation Membership
      </h2>

      {/* INFO */}
      <div className="border border-[#FFD24A] rounded-[12px] px-4 py-3 text-[14px] text-white/90 leading-relaxed">
        Become a part of BUDHIS FOUNDATION and get exclusive benefits,
        networking opportunities, and investment insights as a member.
      </div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <button
          className="
          bg-[#FFD24A]
          text-black
          font-medium
          text-[14px]
          px-10
          py-2
          rounded-[10px]
          hover:brightness-110
          transition
          "
        >
          Join Now
        </button>
      </div>
    </div>
  );
}