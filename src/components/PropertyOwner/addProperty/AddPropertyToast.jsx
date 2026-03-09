export default function AddPropertyToast({ show, title, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="
        fixed top-5 right-5 z-50
        px-4 py-3
        rounded-lg
        bg-[#0f766e]/90
        backdrop-blur
        border border-white/20
        text-white text-sm
        flex items-center gap-3
        shadow-lg
      "
    >
      <span>
        {title} Property successfully added
      </span>
      <button
        onClick={onClose}
        className="text-white/70 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

