import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Tour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const tourSteps = [
    {
      id: 1,
      title: "¡Bienvenido!",
      content: "Te guiaremos a través de las principales características de nuestra aplicación.",
      target: "welcome",
      position: "bottom"
    },
    {
      id: 2,
      title: "Navegación",
      content: "Usa el menú lateral para navegar entre las diferentes secciones.",
      target: "navigation",
      position: "right"
    },
    {
      id: 3,
      title: "Búsqueda",
      content: "Encuentra rápidamente lo que necesitas con nuestra búsqueda inteligente.",
      target: "search",
      position: "bottom"
    },
    {
      id: 4,
      title: "Configuración",
      content: "Personaliza tu experiencia desde el panel de configuración.",
      target: "settings",
      position: "left"
    },
    {
      id: 5,
      title: "¡Listo!",
      content: "Ya conoces los elementos principales. ¡Disfruta explorando!",
      target: "finish",
      position: "center"
    }
  ];

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const endTour = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  const skipTour = () => {
    endTour();
  };

  const getPosition = (position) => {
    switch (position) {
      case "top": return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom": return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left": return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right": return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      case "center": return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      default: return "top-full left-1/2 transform -translate-x-1/2 mt-2";
    }
  };

  const codeString = `import { useState } from "react";

export default function TourComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const tourSteps = [
    {
      id: 1,
      title: "¡Bienvenido!",
      content: "Te guiaremos a través de las principales características.",
      target: "welcome",
      position: "bottom"
    },
    {
      id: 2,
      title: "Navegación",
      content: "Usa el menú lateral para navegar entre secciones.",
      target: "navigation",
      position: "right"
    }
  ];

  const startTour = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const endTour = () => {
    setIsActive(false);
    setCurrentStep(0);
  };

  const getPosition = (position) => {
    switch (position) {
      case "top": return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom": return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left": return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right": return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default: return "top-full left-1/2 transform -translate-x-1/2 mt-2";
    }
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Tour Tooltip */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={\`fixed z-50 \${getPosition(tourSteps[currentStep].position)}\`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">
                  {tourSteps[currentStep].title}
                </h3>
                <button
                  onClick={endTour}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {tourSteps[currentStep].content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {tourSteps.map((_, index) => (
                    <div
                      key={index}
                      className={\`w-2 h-2 rounded-full \${
                        index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                      }\`}
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    {currentStep === tourSteps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Elements */}
      <div className="space-y-6">
        <div id="welcome" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <h2 className="text-white font-semibold mb-2">Bienvenido a la Aplicación</h2>
          <p className="text-zinc-400">Esta es la página principal de nuestra aplicación.</p>
        </div>

        <div id="navigation" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <h2 className="text-white font-semibold mb-2">Menú de Navegación</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600">
              Inicio
            </button>
            <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600">
              Productos
            </button>
            <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600">
              Contacto
            </button>
          </div>
        </div>

        <div id="search" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <h2 className="text-white font-semibold mb-2">Búsqueda</h2>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white"
          />
        </div>

        <div id="settings" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <h2 className="text-white font-semibold mb-2">Configuración</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-zinc-300">Notificaciones</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-zinc-300">Modo oscuro</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="bg-[#111] min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Volver
          </button>
          <h1 className="text-3xl font-bold text-white">Tour Guide</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Tutorial Interactivo</h2>
              
              {/* Controles */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={startTour}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🚀 Iniciar Tour
                </button>
                <button
                  onClick={skipTour}
                  className="px-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors"
                >
                  ⏭️ Saltar Tour
                </button>
              </div>

              {/* Demo Elements */}
              <div className="space-y-6">
                <div id="welcome" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <h2 className="text-white font-semibold mb-2">Bienvenido a la Aplicación</h2>
                  <p className="text-zinc-400">Esta es la página principal de nuestra aplicación. Aquí encontrarás toda la información importante.</p>
                </div>

                <div id="navigation" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <h2 className="text-white font-semibold mb-2">Menú de Navegación</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600 transition-colors">
                      🏠 Inicio
                    </button>
                    <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600 transition-colors">
                      📦 Productos
                    </button>
                    <button className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600 transition-colors">
                      📞 Contacto
                    </button>
                  </div>
                </div>

                <div id="search" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <h2 className="text-white font-semibold mb-2">Búsqueda Inteligente</h2>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Buscar productos, usuarios, contenido..."
                      className="flex-1 px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      🔍
                    </button>
                  </div>
                </div>

                <div id="settings" className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                  <h2 className="text-white font-semibold mb-2">Panel de Configuración</h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-zinc-700 border-zinc-600 rounded" />
                      <span className="text-zinc-300">Notificaciones push</span>
                        </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-zinc-700 border-zinc-600 rounded" />
                      <span className="text-zinc-300">Modo oscuro</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 bg-zinc-700 border-zinc-600 rounded" />
                      <span className="text-zinc-300">Autoguardado</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Progreso del tour */}
            {isActive && (
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Progreso del Tour</span>
                  <span className="text-zinc-400 text-sm">{currentStep + 1} de {tourSteps.length}</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              </div>
            )}
          </div>

          {/* Código */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Código</h2>
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
              >
                {showCode ? "Ocultar" : "Mostrar"} Código
              </button>
            </div>
            
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <SyntaxHighlighter
                    language="jsx"
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      borderRadius: "8px",
                      fontSize: "14px"
                    }}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-lg font-semibold text-white mb-4">Características</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Navegación paso a paso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Overlay con resaltado de elementos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Posicionamiento dinámico de tooltips
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Indicadores de progreso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Opción de saltar tour
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Animaciones suaves
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tour Overlay */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={endTour}
            ></motion.div>
          )}
        </AnimatePresence>

        {/* Tour Tooltip */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className={`fixed z-50 ${getPosition(tourSteps[currentStep].position)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border border-zinc-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {tourSteps[currentStep].title}
                  </h3>
                  <button
                    onClick={endTour}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {tourSteps[currentStep].content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {tourSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 transition-colors"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      {currentStep === tourSteps.length - 1 ? 'Finalizar' : 'Siguiente →'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 