"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/services/api";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  documentId: string;
}

export default function ResponsiblePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        console.log("Respuesta del backend:", data);

        setUsers(data.info || []);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los usuarios.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10">
        Cargando usuarios...
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
          Gestión de Usuarios
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Usuario</th>
                <th className="p-3">Correo Electrónico</th>
                <th className="p-3">Rol</th>
                <th className="p-3">Documento</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-orange-50 transition-colors duration-200"
                  >
                    <td className="p-3">{user.id}</td>
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">{user.documentId}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-5 text-gray-500">
                    No hay usuarios registrados.
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