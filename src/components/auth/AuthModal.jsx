import LoginCard from "../WebDesign/cards/LoginCard";

export default function AuthModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="relative z-10 w-full max-w-md">
        <LoginCard onClose={onClose} />
      </div>

    </div>
  );
}