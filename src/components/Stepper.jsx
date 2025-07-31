import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showCode, setShowCode] = useState(false);

  const steps = [
    { id: 1, title: "Información", description: "Datos básicos", status: "completed" },
    { id: 2, title: "Validación", description: "Verificación", status: "current" },
    { id: 3, title: "Confirmación", description: "Revisión final", status: "pending" },
    { id: 4, title: "Finalizado", description: "Completado", status: "pending" }
  ];

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "pending";
  };

  const getStepIcon = (status) => {
    switch (status) {
      case "completed": return "✓";
      case "current": return "●";
      case "pending": return stepId;
      default: return stepId;
    }
  };

  const getStepColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-500 border-green-500";
      case "current": return "bg-blue-500 border-blue-500";
      case "pending": return "bg-zinc-700 border-zinc-600";
      default: return "bg-zinc-700 border-zinc-600";
    }
  };

  const getLineColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "current": return "bg-blue-500";
      case "pending": return "bg-zinc-700";
      default: return "bg-zinc-700";
    }
  };

  const codeString = `import { useState } from "react";

export default function StepperComponent() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Información", description: "Datos básicos" },
    { id: 2, title: "Validación", description: "Verificación" },
    { id: 3, title: "Confirmación", description: "Revisión final" },
    { id: 4, title: "Finalizado", description: "Completado" }
  ];

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "pending";
  };

  const getStepIcon = (status, stepId) => {
    switch (status) {
      case "completed": return "✓";
      case "current": return "●";
      case "pending": return stepId;
      default: return stepId;
    }
  };

  const getStepColor = (status) => {
    switch (status) {
      case "completed": return "bg-green-500 border-green-500";
      case "current": return "bg-blue-500 border-blue-500";
      case "pending": return "bg-zinc-700 border-zinc-600";
      default: return "bg-zinc-700 border-zinc-600";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={\`w-10 h-10 rounded-full border-2 flex items-center justify-center text-white font-semibold \${getStepColor(status)}\`}>
                  {getStepIcon(status, step.id)}
                </div>
                <div className="mt-2 text-center">
                  <div className={\`text-sm font-medium \${
                    status === "completed" ? "text-green-400" : 
                    status === "current" ? "text-blue-400" : "text-zinc-400"
                  }\`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-zinc-500">{step.description}</div>
                </div>
              </div>
              
              {!isLast && (
                <div className={\`w-16 h-1 mx-4 \${getLineColor(status)}\`}></div>
              )}
            </div>
          );
        })}
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
          <h1 className="text-3xl font-bold text-white">Stepper</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Indicadores de Progreso</h2>
              
              {/* Controles */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Siguiente
                </button>
                <span className="px-4 py-2 bg-zinc-800 text-white rounded-lg">
                  Paso {currentStep} de 4
                </span>
              </div>

              {/* Stepper Horizontal */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 mb-6">
                <h3 className="text-white font-semibold mb-4">Horizontal</h3>
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => {
                    const status = getStepStatus(step.id);
                    const isLast = index === steps.length - 1;
                    
                    return (
                      <div key={step.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <motion.div
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-white font-semibold ${getStepColor(status)}`}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {status === "completed" ? "✓" : status === "current" ? "●" : step.id}
                          </motion.div>
                          <div className="mt-2 text-center">
                            <div className={`text-sm font-medium ${
                              status === "completed" ? "text-green-400" : 
                              status === "current" ? "text-blue-400" : "text-zinc-400"
                            }`}>
                              {step.title}
                            </div>
                            <div className="text-xs text-zinc-500">{step.description}</div>
                          </div>
                        </div>
                        
                        {!isLast && (
                          <motion.div
                            className={`w-16 h-1 mx-4 ${getLineColor(status)}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          ></motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stepper Vertical */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 mb-6">
                <h3 className="text-white font-semibold mb-4">Vertical</h3>
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const status = getStepStatus(step.id);
                    const isLast = index === steps.length - 1;
                    
                    return (
                      <div key={step.id} className="flex items-start">
                        <div className="flex flex-col items-center">
                          <motion.div
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-white font-semibold ${getStepColor(status)}`}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {status === "completed" ? "✓" : status === "current" ? "●" : step.id}
                          </motion.div>
                          {!isLast && (
                            <motion.div
                              className={`w-1 h-8 mt-2 ${getLineColor(status)}`}
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ duration: 0.5 }}
                            ></motion.div>
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className={`text-sm font-medium ${
                            status === "completed" ? "text-green-400" : 
                            status === "current" ? "text-blue-400" : "text-zinc-400"
                          }`}>
                            {step.title}
                          </div>
                          <div className="text-xs text-zinc-500 mt-1">{step.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stepper Compacto */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <h3 className="text-white font-semibold mb-4">Compacto</h3>
                <div className="flex items-center justify-center">
                  {steps.map((step, index) => {
                    const status = getStepStatus(step.id);
                    const isLast = index === steps.length - 1;
                    
                    return (
                      <div key={step.id} className="flex items-center">
                        <motion.div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-sm font-semibold ${getStepColor(status)}`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {status === "completed" ? "✓" : status === "current" ? "●" : step.id}
                        </motion.div>
                        {!isLast && (
                          <motion.div
                            className={`w-12 h-1 mx-2 ${getLineColor(status)}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          ></motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
                  Estados visuales (completado, actual, pendiente)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Orientación horizontal y vertical
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Iconos dinámicos por estado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Líneas de conexión animadas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Colores diferenciados por estado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Responsive y accesible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 