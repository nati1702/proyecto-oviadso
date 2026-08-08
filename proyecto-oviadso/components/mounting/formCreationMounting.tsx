function FormCreationMounting() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Crear Monta
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha
            </label>

            <input
              type="date"
              id="date"
              name="date"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ID Macho
            </label>

            <input
              type="number"
              id="male_id"
              name="male_id"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ID Hembra
            </label>

            <input
              type="number"
              id="female_id"
              name="female_id"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Resultado
            </label>

            <input
              type="text"
              id="result"
              name="result"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notas
            </label>

            <input
              type="text"
              id="notes"
              name="notes"
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Crear Monta
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default FormCreationMounting;