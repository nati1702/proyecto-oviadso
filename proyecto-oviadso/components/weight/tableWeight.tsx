export default function TableWeight() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Listar Peso
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full rounded-lg overflow-hidden shadow">

            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Fecha</th>
                <th className="p-3">ID Ganado</th>
                <th className="p-3">Peso</th>
                <th className="p-3">Descripción</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>

            <tbody className="text-center text-gray-700">

              <tr className="border-b hover:bg-orange-50">
                <td className="p-3">1</td>
                <td className="p-3">09/06/2026</td>
                <td className="p-3">101</td>
                <td className="p-3">45 kg</td>
                <td className="p-3">Peso normal</td>

                <td className="p-3 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-orange-50 bg-gray-50">
                <td className="p-3">2</td>
                <td className="p-3">08/06/2026</td>
                <td className="p-3">102</td>
                <td className="p-3">52 kg</td>
                <td className="p-3">Aumento de peso</td>

                <td className="p-3 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-orange-50">
                <td className="p-3">3</td>
                <td className="p-3">07/06/2026</td>
                <td className="p-3">103</td>
                <td className="p-3">38 kg</td>
                <td className="p-3">Bajo peso</td>

                <td className="p-3 space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}