// src/components/Contacto.jsx
import React from 'react';

function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contacto</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
            <input type="text" id="nombre" name="nombre" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-gray-700">Mensaje</label>
            <textarea id="mensaje" name="mensaje" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Enviar
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          O contáctame en: <a href="mailto:tu-email@example.com" className="text-blue-500 hover:underline">tu-email@example.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contacto;