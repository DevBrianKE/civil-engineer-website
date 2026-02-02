export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Our Engineering Projects
          </h1>
          <p className="text-slate-600">
            Selected industrial, commercial, and structural engineering works by Cubic Engineering Design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Project Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Industrial Factory Building Design
            </h3>
            <p className="text-slate-600 text-sm">
              Structural design and planning of reinforced concrete and steel factory
              buildings to support heavy machinery and continuous production operations.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Warehouse & Storage Facilities
            </h3>
            <p className="text-slate-600 text-sm">
              Engineering design of modern warehouse facilities with optimized layouts,
              loading bays, and long-span roofing systems for logistics operations.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Commercial & Office Buildings
            </h3>
            <p className="text-slate-600 text-sm">
              Design and construction supervision of office buildings and mixed-use
              developments for corporate and institutional clients.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
