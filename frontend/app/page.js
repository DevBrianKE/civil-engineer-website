export default function ServicesPage() {
  return (
    <section className="bg-slate-50 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Engineering Services
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We provide reliable civil engineering solutions that meet modern
            construction standards and client expectations.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Structural Design
            </h3>

            <p className="text-slate-600 mb-4">
              Professional structural analysis and building design that
              guarantees safety, durability, and compliance with standards.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Construction Supervision
            </h3>

            <p className="text-slate-600 mb-4">
              On-site supervision to ensure quality workmanship, safety
              compliance, and timely project completion.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Project Management
            </h3>

            <p className="text-slate-600 mb-4">
              End-to-end project coordination including budgeting, scheduling,
              procurement, and stakeholder communication.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}
