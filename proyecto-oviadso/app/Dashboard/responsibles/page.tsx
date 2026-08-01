"use client";

import { useEffect, useState } from "react";

export default function ResponsiblePage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user/users");

        const data = await response.json();

        console.log("Respuesta del backend:", data);

        setUsers(data.info);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuarios</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Documento</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.documentId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No hay usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}