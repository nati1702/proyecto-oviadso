"use client";

import { useEffect, useState } from "react";

interface Feeding {
  id: number;
  date: string;
  ovine_id: number;
  food_type: string;
  quantity: string;
  postJob: string;
  active: boolean;
  notes: string;
}

export default function TableFeeding() {
  const [feedings, setFeedings] = useState<Feeding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedings = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/feeding/feedings"
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información");
        }

        const result = await response.json();

        console.log("Respuesta de la API:", result);

        // La API devuelve los registros en "info"
        setFeedings(result.info || []);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los registros.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedings();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Cargando registros...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Listar Alimentación
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full rounded-lg overflow-hidden shadow-md">

            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Fecha</th>
                <th className="p-3">ID Ovino</th>
                <th className="p-3">Tipo de Alimento</th>
                <th className="p-3">Cantidad</th>
                <th className="p-3">Procedimiento</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Notas</th>
              </tr>
            </thead>

            <tbody className="text-center text-gray-700">

              {feedings.length > 0 ? (
                feedings.map((feeding) => (
                  <tr
                    key={feeding.id}
                    className="border-b hover:bg-orange-50"
                  >
                    <td className="p-3">{feeding.id}</td>
                    <td className="p-3">{feeding.date}</td>
                    <td className="p-3">{feeding.ovine_id}</td>
                    <td className="p-3">{feeding.food_type}</td>
                    <td className="p-3">{feeding.quantity}</td>
                    <td className="p-3">{feeding.postJob}</td>
                    <td className="p-3">
                      {feeding.active ? (
                        <span className="text-green-600 font-semibold">
                          Activo
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Inactivo
                        </span>
                      )}
                    </td>
                    <td className="p-3">{feeding.notes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-5 text-gray-500">
                    No hay registros de alimentación.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}