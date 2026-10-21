function Features() {
  const features = [
    {
      icon: "📚",
      title: "Reading Skills",
      text: "Improve reading and comprehension skills.",
    },

    {
      icon: "🎧",
      title: "Listening Practice",
      text: "Develop strong listening abilities.",
    },

    {
      icon: "🗣",
      title: "Speaking",
      text: "Build confidence in communication.",
    },

    {
      icon: "✏️",
      title: "Writing",
      text: "Learn how to write correctly.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
        Why Choose Our Classes? ⭐
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
          >
            <div className="text-5xl">{item.icon}</div>

            <h3 className="text-xl font-bold mt-4">{item.title}</h3>

            <p className="text-gray-600 mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
