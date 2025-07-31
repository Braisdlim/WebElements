import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    payment: "",
    confirm: false
  });
  const [showCode, setShowCode] = useState(false);

  const steps = [
    {
      title: "Información Personal",
      description: "Ingresa tus datos básicos",
      icon: "👤"
    },
    {
      title: "Selección de Plan",
      description: "Elige el plan que mejor se adapte a ti",
      icon: "📋"
    },
    {
      title: "Método de Pago",
      description: "Configura tu forma de pago",
      icon: "💳"
    },
    {
      title: "Confirmación",
      description: "Revisa y confirma tu información",
      icon: "✅"
    }
  ];

  const plans = [
    { id: "basic", name: "Básico", price: "$9.99/mes", features: ["1 usuario", "5GB almacenamiento", "Soporte por email"] },
    { id: "pro", name: "Profesional", price: "$19.99/mes", features: ["5 usuarios", "25GB almacenamiento", "Soporte prioritario"] },
    { id: "enterprise", name: "Empresarial", price: "$49.99/mes", features: ["Usuarios ilimitados", "100GB almacenamiento", "Soporte 24/7"] }
  ];

  const paymentMethods = [
    { id: "credit", name: "Tarjeta de Crédito", icon: "💳" },
    { id: "debit", name: "Tarjeta de Débito", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "📧" },
    { id: "transfer", name: "Transferencia Bancaria", icon: "🏦" }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email;
      case 1:
        return formData.plan;
      case 2:
        return formData.payment;
      case 3:
        return formData.confirm;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Nombre completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                placeholder="tu@email.com"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-zinc-400 mb-4">Selecciona el plan que mejor se adapte a tus necesidades:</p>
            <div className="grid gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    formData.plan === plan.id
                      ? "border-blue-500 bg-blue-500 bg-opacity-10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                  onClick={() => updateFormData("plan", plan.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{plan.name}</h3>
                    <span className="text-blue-400 font-semibold">{plan.price}</span>
                  </div>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-zinc-400 text-sm flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-zinc-400 mb-4">Elige tu método de pago preferido:</p>
            <div className="grid gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    formData.payment === method.id
                      ? "border-blue-500 bg-blue-500 bg-opacity-10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                  onClick={() => updateFormData("payment", method.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{method.icon}</span>
                    <span className="text-white">{method.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <p className="text-zinc-400 mb-4">Revisa tu información antes de confirmar:</p>
            <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-zinc-400">Nombre:</span>
                <span className="text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Email:</span>
                <span className="text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Plan:</span>
                <span className="text-white">{plans.find(p => p.id === formData.plan)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Pago:</span>
                <span className="text-white">{paymentMethods.find(p => p.id === formData.payment)?.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="confirm"
                checked={formData.confirm}
                onChange={(e) => updateFormData("confirm", e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-zinc-800 border-zinc-700 rounded"
              />
              <label htmlFor="confirm" className="text-white">
                Confirmo que he revisado y acepto los términos y condiciones
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const codeString = `import { useState } from "react";

export default function WizardComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    payment: "",
    confirm: false
  });

  const steps = [
    { title: "Información Personal", description: "Ingresa tus datos básicos" },
    { title: "Selección de Plan", description: "Elige el plan que mejor se adapte" },
    { title: "Método de Pago", description: "Configura tu forma de pago" },
    { title: "Confirmación", description: "Revisa y confirma tu información" }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.name && formData.email;
      case 1: return formData.plan;
      case 2: return formData.payment;
      case 3: return formData.confirm;
      default: return false;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold \${
                index <= currentStep ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'
              }\`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={\`w-16 h-1 mx-2 \${
                  index < currentStep ? 'bg-blue-600' : 'bg-zinc-700'
                }\`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
        <h2 className="text-xl font-semibold text-white mb-4">
          {steps[currentStep].title}
        </h2>
        <p className="text-zinc-400 mb-6">{steps[currentStep].description}</p>
        
        {/* Render step content based on currentStep */}
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
          disabled={!isStepValid()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
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
          <h1 className="text-3xl font-bold text-white">Wizard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Asistente Paso a Paso</h2>
              
              <div className="max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <motion.div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                            index <= currentStep ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'
                          }`}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {index < currentStep ? "✓" : step.icon}
                        </motion.div>
                        {index < steps.length - 1 && (
                          <div className={`w-16 h-1 mx-2 ${
                            index < currentStep ? 'bg-blue-600' : 'bg-zinc-700'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {steps.map((step, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-sm font-medium ${
                          index <= currentStep ? 'text-white' : 'text-zinc-400'
                        }`}>
                          {step.title}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {step.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-zinc-800 rounded-lg p-6 border border-zinc-700"
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">
                      {steps[currentStep].title}
                    </h2>
                    <p className="text-zinc-400 mb-6">{steps[currentStep].description}</p>
                    
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
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente →'}
                  </button>
                </div>
              </div>
            </div>

            {/* Progreso */}
            <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Progreso</span>
                <span className="text-zinc-400 text-sm">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
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
                  Navegación paso a paso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Validación por paso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Barra de progreso visual
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Animaciones suaves entre pasos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Formularios dinámicos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Confirmación final
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 