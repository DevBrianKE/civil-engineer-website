export default function HomePage() {
  return (
    <section className="bg-slate-50 py-28 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Reliable Civil Engineering & Construction Solutions
          </h1>

          <p className="text-slate-600 text-lg mb-8">
            We deliver professional engineering services including structural
            design, project supervision, and infrastructure development with a
            focus on quality, safety, and sustainability.
          </p>

          <div className="flex gap-4">

            <a
              href="/contact"
              className="bg-blue-700 text-white px-7 py-3 rounded-md font-medium shadow hover:bg-blue-800 transition"
            >
              Get Consultation
            </a>

            <a
              href="/projects"
              className="border border-slate-300 text-slate-800 px-7 py-3 rounded-md font-medium hover:bg-white transition"
            >
              View Projects
            </a>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-10 rounded-xl shadow-md">

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Why Choose Us?
          </h3>

          <ul className="space-y-3 text-slate-600">

            <li>✔ Certified Professional Engineers</li>
            <li>✔ On-time Project Delivery</li>
            <li>✔ Modern Construction Technology</li>
            <li>✔ Client-focused Approach</li>

          </ul>

        </div>

      </div>

    </section>
  )
}
