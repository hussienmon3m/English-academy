function Contact() {
  return (
    <section id="contact" className="bg-blue-50 px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
        Let's Talk! 💬
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Ready to start your English learning journey? Contact us on WhatsApp for
        more information.
      </p>

      <a
        href="https://wa.me/201000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-7 bg-yellow-400 hover:bg-yellow-500
                   text-gray-900 font-semibold px-8 py-3 rounded-full
                   transition"
      >
        Contact Us on WhatsApp
      </a>
    </section>
  );
}

export default Contact;
