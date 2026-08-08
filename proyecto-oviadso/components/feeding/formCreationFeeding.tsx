"use client";

import { useState } from "react";

function FormCreationFeeding() {

  const [formData, setFormData] = useState({
    date: "",
    ovine_id: "",
    food_type: "",
    quantity: "",
    postJob: "",
    active: true,
    notes: ""
  });

  const handleChange = (e: any) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:3000/api/feeding/feedings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        alert("Alimentación creada correctamente");

        setFormData({
          date: "",
          ovine_id: "",
          food_type: "",
          quantity: "",
          postJob: "",
          active: true,
          notes: ""
        });

      } else {

        alert("Error al crear alimentación");

      }

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 border-t-4 border-orange-500">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Crear Alimentación
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ID Ovino
            </label>

            <input
              type="number"
              name="ovine_id"
              value={formData.ovine_id}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de alimento
            </label>

            <input
              type="text"
              name="food_type"
              value={formData.food_type}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cantidad
            </label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Procedimiento
            </label>

            <input
              type="text"
              name="postJob"
              value={formData.postJob}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notas
            </label>

            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full rounded-lg border border-orange-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Crear Alimentación
            </button>
          </div>

        </form>

      </div>

    </div>

  );

}

export default FormCreationFeeding;