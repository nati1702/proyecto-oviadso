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
  notes: string | null;
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
        alert(JSON.stringify(result));

        console.log("Respuesta API:", result);
        console.log("Datos:", result.data);

        setFeedings(result.data || []);
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
      <div className="text-center p-10">
        Cargando registros de alimentación...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-10">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 border-t-4 border-orange-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
          Tabla de Alimentación
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Fecha</th>
                <th className="p-3">ID Ovino</th>
                <th className="p-3">Tipo de Alimento</th>
                <th className="p-3">Cantidad</th>
                <th className="p-3">Notas</th>
              </tr>
            </thead>

            <tbody className="text-center">
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
                    <td className="p-3">
                      {feeding.notes ?? "Sin notas"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-5 text-gray-500">
                    No hay registros de alimentación
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