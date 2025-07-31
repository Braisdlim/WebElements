import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    interests: [],
    notifications: true,
    theme: "dark"
  });

  const onboardingSteps = [
    {
      id: 1,
      title: "¡Bienvenido!",
      subtitle: "Nos alegra tenerte aquí",
      description: "Vamos a configurar tu cuenta para que tengas la mejor experiencia posible.",
      icon: "👋",
      type: "welcome"
    },
    {
      id: 2,
      title: "Cuéntanos sobre ti",
      subtitle: "Información básica",
      description: "Ayúdanos a personalizar tu experiencia con algunos datos básicos.",
      icon: "👤",
      type: "profile"
    },
    {
      id: 3,
      title: "¿Qué te interesa?",
      subtitle: "Selecciona tus intereses",
      description: "Elige las categorías que más te interesan para recibir contenido relevante.",
      icon: "🎯",
      type: "interests"
    },
    {
      id: 4,
      title: "Personaliza tu experiencia",
      subtitle: "Configuración inicial",
      description: "Ajusta las preferencias según tus necesidades.",
      icon: "⚙️",
      type: "preferences"
    },
    {
      id: 5,
      title: "¡Todo listo!",
      subtitle: "Ya puedes empezar",
      description: "Tu cuenta está configurada. ¡Disfruta explorando nuestra plataforma!",
      icon: "🎉",
      type: "complete"
    }
  ];

  const interests = [
    { id: "tech", label: "Tecnología", icon: "💻" },
    { id: "design", label: "Diseño", icon: "🎨" },
    { id: "business", label: "Negocios", icon: "💼" },
    { id: "marketing", label: "Marketing", icon: "📈" },
    { id: "education", label: "Educación", icon: "📚" },
    { id: "health", label: "Salud", icon: "🏥" },
    { id: "sports", label: "Deportes", icon: "⚽" },
    { id: "travel", label: "Viajes", icon: "✈️" }
  ];

  const roles = [
    { id: "developer", label: "Desarrollador", icon: "👨‍💻" },
    { id: "designer", label: "Diseñador", icon: "🎨" },
    { id: "manager", label: "Gerente", icon: "👔" },
    { id: "student", label: "Estudiante", icon: "🎓" },
    { id: "entrepreneur", label: "Emprendedor", icon: "🚀" },
    { id: "other", label: "Otro", icon: "👤" }
  ];

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    setCurrentStep(onboardingSteps.length - 1);
  };

  const updateUserData = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const toggleInterest = (interestId) => {
    const newInterests = userData.interests.includes(interestId)
      ? userData.interests.filter(id => id !== interestId)
      : [...userData.interests, interestId];
    updateUserData("interests", newInterests);
  };

  const renderStepContent = () => {
    const step = onboardingSteps[currentStep];
    
    switch (step.type) {
      case "welcome":
        return (
          <div className="text-center">
            <div className="text-6xl mb-4">{step.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
            <p className="text-zinc-400 text-lg">{step.description}</p>
          </div>
        );
      
      case "profile":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Nombre completo</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => updateUserData("name", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => updateUserData("email", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-white mb-2">¿Cuál es tu rol principal?</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      userData.role === role.id
                        ? "border-blue-500 bg-blue-500 bg-opacity-10"
                        : "border-zinc-700 hover:border-zinc-600"
                    }`}
                    onClick={() => updateUserData("role", role.id)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{role.icon}</div>
                      <div className="text-white text-sm">{role.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case "interests":
        return (
          <div className="space-y-4">
            <p className="text-zinc-400 text-center mb-4">Selecciona hasta 4 intereses</p>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    userData.interests.includes(interest.id)
                      ? "border-blue-500 bg-blue-500 bg-opacity-10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                  onClick={() => toggleInterest(interest.id)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{interest.icon}</div>
                    <div className="text-white text-sm">{interest.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "preferences":
        return (
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={userData.notifications}
                  onChange={(e) => updateUserData("notifications", e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-700 rounded"
                />
                <span className="text-white">Recibir notificaciones</span>
              </label>
            </div>
            <div>
              <label className="block text-white mb-2">Tema preferido</label>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    userData.theme === "dark"
                      ? "border-blue-500 bg-blue-500 bg-opacity-10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                  onClick={() => updateUserData("theme", "dark")}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">🌙</div>
                    <div className="text-white text-sm">Oscuro</div>
                  </div>
                </div>
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    userData.theme === "light"
                      ? "border-blue-500 bg-blue-500 bg-opacity-10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                  onClick={() => updateUserData("theme", "light")}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">☀️</div>
                    <div className="text-white text-sm">Claro</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "complete":
        return (
          <div className="text-center">
            <div className="text-6xl mb-4">{step.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
            <p className="text-zinc-400 text-lg mb-6">{step.description}</p>
            <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-white font-semibold mb-3">Resumen de tu configuración:</h3>
              <div className="text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Nombre:</span>
                  <span className="text-white">{userData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Rol:</span>
                  <span className="text-white">{roles.find(r => r.id === userData.role)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Intereses:</span>
                  <span className="text-white">{userData.interests.length} seleccionados</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Tema:</span>
                  <span className="text-white">{userData.theme === "dark" ? "Oscuro" : "Claro"}</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const codeString = `import { useState } from "react";

export default function OnboardingComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    interests: [],
    notifications: true,
    theme: "dark"
  });

  const onboardingSteps = [
    {
      id: 1,
      title: "¡Bienvenido!",
      description: "Vamos a configurar tu cuenta.",
      type: "welcome"
    },
    {
      id: 2,
      title: "Cuéntanos sobre ti",
      description: "Información básica",
      type: "profile"
    },
    {
      id: 3,
      title: "¿Qué te interesa?",
      description: "Selecciona tus intereses",
      type: "interests"
    },
    {
      id: 4,
      title: "Personaliza tu experiencia",
      description: "Configuración inicial",
      type: "preferences"
    },
    {
      id: 5,
      title: "¡Todo listo!",
      description: "Ya puedes empezar",
      type: "complete"
    }
  ];

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const updateUserData = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {onboardingSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold \${
                index <= currentStep ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'
              }\`}>
                {index + 1}
              </div>
              {index < onboardingSteps.length - 1 && (
                <div className={\`w-16 h-1 mx-2 \${
                  index < currentStep ? 'bg-blue-600' : 'bg-zinc-700'
                }\`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {currentStep === onboardingSteps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
}`;

  return (
    <div className="bg-[#111] min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Volver
          </button>
          <h1 className="text-3xl font-bold text-white">Onboarding</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Flujo de Onboarding</h2>
              
              <div className="max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {onboardingSteps.map((step, index) => (
                      <div key={step.id} className="flex items-center">
                        <motion.div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                            index <= currentStep ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'
                          }`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {index < currentStep ? "✓" : index + 1}
                        </motion.div>
                        {index < onboardingSteps.length - 1 && (
                          <motion.div
                            className={`w-16 h-1 mx-2 ${
                              index < currentStep ? 'bg-blue-600' : 'bg-zinc-700'
                            }`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                          ></motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-zinc-800 rounded-lg p-8 border border-zinc-700"
                  >
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">{onboardingSteps[currentStep].icon}</div>
                      <h2 className="text-xl font-semibold text-white mb-1">
                        {onboardingSteps[currentStep].title}
                      </h2>
                      <p className="text-zinc-400">{onboardingSteps[currentStep].subtitle}</p>
                    </div>
                    
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 disabled:opacity-50 transition-colors"
                  >
                    ← Anterior
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={skipOnboarding}
                      className="px-6 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-500 transition-colors"
                    >
                      ⏭️ Saltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {currentStep === onboardingSteps.length - 1 ? 'Finalizar' : 'Siguiente →'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-white font-semibold mb-3">Progreso del Onboarding</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round(((currentStep + 1) / onboardingSteps.length) * 100)}%
                  </div>
                  <div className="text-zinc-400 text-sm">Completado</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {userData.interests.length}
                  </div>
                  <div className="text-zinc-400 text-sm">Intereses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {currentStep + 1}
                  </div>
                  <div className="text-zinc-400 text-sm">Paso actual</div>
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
                  Flujo paso a paso guiado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Recolección de datos del usuario
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Selección de intereses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Configuración de preferencias
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Opción de saltar onboarding
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Resumen final de configuración
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 