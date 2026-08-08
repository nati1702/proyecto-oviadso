export default function TableOvine() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
          Listar Ovinos
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full rounded-lg overflow-hidden shadow-md">

            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Etiqueta</th>
                <th className="p-3">Raza</th>
                <th className="p-3">Sexo</th>
                <th className="p-3">Fecha Nacimiento</th>
                <th className="p-3">Peso</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>

            <tbody className="text-center text-gray-700">

              <tr className="border-b hover:bg-orange-50 transition">
                <td className="p-3">1</td>
                <td className="p-3">OV-001</td>
                <td className="p-3">Merino</td>
                <td className="p-3">Macho</td>
                <td className="p-3">10/01/2026</td>
                <td className="p-3">45 kg</td>
                <td className="p-3 text-green-600 font-bold">Activo</td>

                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr className="border-b hover:bg-orange-50 transition bg-gray-50">
                <td className="p-3">2</td>
                <td className="p-3">OV-002</td>
                <td className="p-3">Blackface</td>
                <td className="p-3">Hembra</td>
                <td className="p-3">15/02/2026</td>
                <td className="p-3">40 kg</td>
                <td className="p-3 text-green-600 font-bold">Activo</td>

                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-orange-50 transition">
                <td className="p-3">3</td>
                <td className="p-3">OV-003</td>
                <td className="p-3">Dorper</td>
                <td className="p-3">Macho</td>
                <td className="p-3">20/03/2026</td>
                <td className="p-3">50 kg</td>
                <td className="p-3 text-red-600 font-bold">Inactivo</td>

                <td className="p-3 flex justify-center gap-2">
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