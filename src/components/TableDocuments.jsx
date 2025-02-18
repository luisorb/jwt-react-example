import React from 'react';

const TablaDocumentos = ({ data }) => {
    return (
      <div className="overflow-x-auto m-2 md:m-10 text-left bg-white p-4 rounded">
        <h2 className="p-4 mb-5 text-2xl font-semibold">Tabla de documentos con datos dinámicos</h2>
        <table className="table-auto w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Nombre del documento</th>
              <th className="px-4 py-2">Fecha de creación</th>
              <th className="px-4 py-2">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {data.map((documento, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">{documento.nombre}</td>
                <td className="px-4 py-2">{documento.fechaCreacion}</td>
                <td className="px-4 py-2">{documento.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaDocumentos;