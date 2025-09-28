export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-750 to-gray-900 p-6">
      <div className="text-center max-w-2xl p-10 bg-black rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-600 mb-6">
          API Application
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          This project provides{" "}
          <span className="font-semibold text-blue-600">API routes </span>
          to perform{" "}
          <span className="font-semibold text-green-600">CRUD operations</span>
          with <span className="font-semibold text-purple-600">MongoDB</span>.
          It is built with{" "}
          <span className="font-semibold text-gray-500">Next.js </span>
          and serves as the backend for frontend applications.
        </p>
        <div className="mt-8">
          <a
            href="/api"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Explore API Routes
          </a>
        </div>
      </div>
    </main>
  );
}
