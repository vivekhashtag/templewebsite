/* export default function ContentBlock({ heading, image, text }) {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-4 text-green-900">{heading}</h2>
      <img
        src={image}
        alt={heading}
        className="w-full rounded-lg shadow mb-4"
      />
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
} */

export default function ContentBlock({ heading, image, children }) {
  return (
    <div className="my-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-amber-950 mb-4">{heading}</h2>

      {/* Main Image */}
      <img
        src={image}
        alt={heading}
        className="w-full rounded-lg shadow-xl mb-6"
      />

      {/* Content Block with Dark Brown Card and Shadow Effect */}
      <div
        className="p-8 rounded-xl text-[#f6f6f6] shadow-2xl min-h-[200px] max-h-[1000px] overflow-y-auto"
        style={{
          background: "linear-gradient(to right, #3f3b1f, #3e4a2f)",
        }}
      >
        {/* Render children here */}
        <div className="text-md">{children}</div>
      </div>
    </div>
  );
}
