const API = process.env.NEXT_PUBLIC_API!;

export async function getUsers() {
  try {
    const response = await fetch(`${API}/user/users`);

    if (!response.ok) {
      throw new Error("No fue posible obtener los usuarios.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw error;
  }
}