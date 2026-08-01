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


      if(response.ok){

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

      }else{

        alert("Error al crear alimentación");

      }


    } catch(error){

      console.error(error);

    }

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">


      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border-t-4 border-orange-500">


        <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
          Crear Alimentación
        </h2>



        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <div>

            <label className="block">
              Fecha:
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>



          <div>

            <label>
              ID Ovino:
            </label>

            <input
              type="number"
              name="ovine_id"
              value={formData.ovine_id}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>




          <div>

            <label>
              Tipo de alimento:
            </label>

            <input
              type="text"
              name="food_type"
              value={formData.food_type}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>




          <div>

            <label>
              Cantidad:
            </label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>



          <div>

            <label>
              Procedimiento:
            </label>

            <input
              type="text"
              name="postJob"
              value={formData.postJob}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>




          <div>

            <label>
              Notas:
            </label>

            <input
              type="text"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            />

          </div>



          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg"
          >
            Crear Alimentación
          </button>



        </form>


      </div>


    </div>

  );

}


export default FormCreationFeeding;