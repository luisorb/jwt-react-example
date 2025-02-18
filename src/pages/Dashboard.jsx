// src/pages/Dashboard.jsx
import React from "react";
import TableDocuments from "../components/TableDocuments";

const documentos = [
  { nombre: 'Listados REGRESO CUADROS UCI 8-1-2025 (v1)', fechaCreacion: '2025-01-04', categoria: 'Informes' },
  { nombre: 'Listados Transportacion UCI Diciembre 2024 (v1)(1)', fechaCreacion: '2024-12-10', categoria: 'Informes' },
  { nombre: 'Lista de reservaciones 1-7-24', fechaCreacion: '2024-12-05', categoria: 'Informes' },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center  bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 ml-10 mt-5">Dashboard</h1>
      <p className="text-lg ml-10">Bienvenido al área privada.</p>

      <TableDocuments data={documentos} />
    </div>
  );
};

export default Dashboard;