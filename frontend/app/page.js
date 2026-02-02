export default function HomePage() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Professional Civil Engineering Solutions
        </h1>

        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          We provide high-quality structural design, construction management,
          and infrastructure development services tailored to meet modern
          engineering standards.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Request Consultation
          </a>

          <a
            href="/projects"
            className="bg-white text-blue-600 border border-blue-600 px-8 py-4 rounded-lg shadow hover:bg-blue-50 transition"
          >
            View Our Projects
          </a>

        </div>

      </div>

    </section>
  )
}
