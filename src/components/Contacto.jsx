// src/components/Contacto.jsx
import React from "react";

function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 sm:text-2xl">
        Contacto
      </h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md sm:max-w-sm sm:p-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 sm:text-sm">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full p-2 border rounded sm:p-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 sm:text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded sm:p-1"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700 sm:text-sm">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="w-full p-2 border rounded sm:p-1"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 sm:p-1"
          >
            Enviar
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center sm:text-sm">
          O contáctame en:{" "}
          <a
            href="mailto:tu-email@example.com"
            className="text-blue-500 hover:underline"
          >
            tu-email@example.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contacto;
