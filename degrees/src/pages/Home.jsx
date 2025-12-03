import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DegreeContext } from "../context/DegreesContext";

/// Ojo con esto no chequeado.
import { Search, MapPin, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';


const Home = () => {
    const { degrees } = useContext(DegreeContext)

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    }

    /// De esto mucho no entiendo xd 
    const handleDegreeClick = (id) => {
        const navigate = useNavigate();
        navigate(`/degrees/${id}`);
    }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {/* Navbar eliminado */}

      {/* HERO SECTION */}
      <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Imagen de Fondo */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* 2. Capa de Degradado (Overlay) */}
        {/* Cambiado a un tono oscuro uniforme para mejor legibilidad centrada */}
        <div className="absolute inset-0 z-10 bg-gray-900/70"></div>

        {/* 3. Contenido del Hero - Centrado */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="max-w-4xl text-white">
            
            {/* Badge opcional */}
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400 text-indigo-200 text-xs font-semibold tracking-wider mb-4 uppercase mx-auto">
              Tu futuro comienza hoy
            </span>

            {/* Título H3 como solicitado */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Descubre el camino hacia <span className="text-indigo-400">tu vocación</span>
            </h3>

            {/* Descripción requerida */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Busca información de la carrera que te apasiona, compara universidades y toma la mejor decisión para tu futuro profesional.
            </p>

            {/* Componente de Búsqueda integrado en el Hero */}
            <div className="bg-white p-2 rounded-lg shadow-xl max-w-lg w-full mx-auto transform transition-all hover:scale-[1.01]">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-md border border-gray-100 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                  <Search className="text-gray-400 w-5 h-5 mr-3" />
                  <input 
                    type="text"
                    placeholder="Ej. Arquitectura, Medicina..." 
                    className="w-full bg-transparent py-3 outline-none text-gray-700 placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Buscar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Estadísticas rápidas (opcional para dar credibilidad) */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>+2,000 Carreras</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>500 Universidades</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LISTADO DE CARRERAS (Columna) */}

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explora las Carreras Disponibles</h4>
        
        <div className="flex flex-col gap-4">
          {degrees.map((deg) => (
            <div 
              key={deg.id}
              onClick={() => handleDegreeClick(deg.id)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-between hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                {/* Icono de carrera */}
                <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <BookOpen size={20} />
                </div>
                {/* Información Textual */}
                <div>
                  <h5 className="font-semibold text-gray-800 text-lg group-hover:text-indigo-700 transition-colors">
                    {deg.name}
                  </h5>
                  <p className="text-sm text-gray-500">{deg.university}</p>
                </div>
              </div>
              
              {/* Flecha indicadora */}
              <div className="pr-2">
                <ChevronRight className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón ver más (opcional) */}
        <div className="mt-8 text-center">
          <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
            Ver todas las carreras &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;