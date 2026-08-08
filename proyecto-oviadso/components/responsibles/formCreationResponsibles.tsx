function FormCreationResponsibles() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-orange-500 text-center mb-8">
          Crear Responsable
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre
            </label>

            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Apellido
            </label>

            <input
              type="text"
              name="lastname"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Documento
            </label>

            <input
              type="text"
              name="document"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono
            </label>

            <input
              type="text"
              name="phone"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo electrónico
            </label>

            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
            >
              Crear Responsable
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default FormCreationResponsibles;