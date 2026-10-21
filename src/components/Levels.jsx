function Levels() {
  const levels = [
    {
      icon: "🌱",
      title: "KG Level",
      text: "Phonics, letters, sounds and basic English skills.",
    },

    {
      icon: "📚",
      title: "Primary Level",
      text: "Reading, grammar, vocabulary and writing skills.",
    },

    {
      icon: "⭐",
      title: "Preparatory Level",
      text: "Advanced grammar, writing and communication skills.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
        Choose Your Child's Level
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {levels.map((level, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow hover:-translate-y-2 transition text-center"
          >
            <div className="text-5xl">{level.icon}</div>

            <h3 className="text-2xl font-bold mt-5">{level.title}</h3>

            <p className="text-gray-600 mt-3">{level.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Levels;
