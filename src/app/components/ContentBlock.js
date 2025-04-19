export default function ContentBlock({ heading, image, text }) {
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
}
