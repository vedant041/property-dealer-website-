export default function ProfilePopup({ onLogout }) {
  return (
    <div className="absolute right-0 mt-2 z-50 w-56 sm:w-60 bg-[#43557A] border border-white/20 rounded-md shadow-lg overflow-hidden">
      
      <div className="px-4 py-3 border-b border-white/20">
        <p className="text-sm font-medium text-white">James Bon</p>
        <p className="text-xs text-white/70 break-all">
          user234@gmail.com
        </p>
      </div>

      <div className="p-2 space-y-1">
        <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-white/10 transition">
          Manage Profile
        </button>

        <button
          onClick={onLogout}
          className="w-full text-left px-3 py-2 text-sm text-red-400 rounded hover:bg-white/10 transition"
        >
          Log out
        </button>
      </div>

    </div>
  );
}