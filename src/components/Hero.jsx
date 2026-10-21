function Hero() {
  // Add your WhatsApp number here later
  const whatsappNumber = "01111784109";

  const message = "Hello! I would like to book an English class for my child.";

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;

  return (
    <section
      id="home"
      className="bg-blue-50 min-h-[600px] flex items-center px-6 md:px-16"
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
          Learn English
          <br />
          In A Fun Way 🚀
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Online English classes designed to help children improve speaking,
          reading and communication skills.
        </p>

        {/* Booking Button */}
        <button
          type="button"
          disabled={!whatsappLink}
          onClick={() => {
            if (whatsappLink) {
              window.open(whatsappLink, "_blank", "noopener,noreferrer");
            }
          }}
          className={`mt-8 px-8 py-3 rounded-full font-semibold transition ${
            whatsappLink
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-yellow-300 opacity-60 cursor-not-allowed"
          }`}
        >
          Book Your Place
        </button>
      </div>

      {/* Image Side */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="Children learning in a classroom"
          className="rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;
