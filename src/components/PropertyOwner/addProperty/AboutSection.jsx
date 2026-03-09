export default function AboutSection({ value, onChange }) {
  return (
    <>
      <h2 className="font-semibold mb-2">
        About Property
      </h2>

      <textarea
        name="about"
        value={value}
        onChange={onChange}
        placeholder="Write property description..."
        className="
          w-full h-28
          bg-white/10
          border border-white/20
          rounded-md
          p-3
          text-sm
          outline-none
          resize-none
        "
      />
    </>
  );
}

