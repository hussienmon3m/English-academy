function AboutTeacher() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        {/* Text */}

        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-700">About Me 👩‍🏫</h2>

          <p className="mt-5 text-gray-600 text-lg">
            Hello! I am an English teacher helping children improve their
            language skills through fun and interactive lessons.
          </p>

          <ul className="mt-6 space-y-3">
            <li>✅ KG & Primary English Classes</li>

            <li>✅ Reading and Speaking Practice</li>

            <li>✅ Supportive Learning Environment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutTeacher;
