import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! ¿Cómo estás?", sender: "user", timestamp: new Date(Date.now() - 60000) },
    { id: 2, text: "¡Hola! Muy bien, gracias. ¿Y tú?", sender: "other", timestamp: new Date(Date.now() - 45000) },
    { id: 3, text: "Perfecto. ¿Tienes planes para el fin de semana?", sender: "user", timestamp: new Date(Date.now() - 30000) },
    { id: 4, text: "Sí, voy a ir al cine. ¿Te gustaría venir?", sender: "other", timestamp: new Date(Date.now() - 15000) },
    { id: 5, text: "¡Claro! ¿Qué película quieres ver?", sender: "user", timestamp: new Date(Date.now() - 5000) }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage("");
      
      // Simular respuesta automática
      setIsTyping(true);
      setTimeout(() => {
        const responses = [
          "¡Interesante!",
          "Entiendo perfectamente.",
          "¿Podrías contarme más?",
          "¡Genial idea!",
          "Me parece bien."
        ];
        const response = {
          id: Date.now() + 1,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "other",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const codeString = `import { useState, useRef, useEffect } from "react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola!", sender: "user", timestamp: new Date() },
    { id: 2, text: "¡Hola! ¿Cómo estás?", sender: "other", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage("");
      
      // Simular respuesta automática
      setIsTyping(true);
      setTimeout(() => {
        const response = {
          id: Date.now() + 1,
          text: "Respuesta automática",
          sender: "other",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-96 bg-zinc-900 rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-zinc-700">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">U</span>
        </div>
        <div>
          <h3 className="text-white font-semibold">Usuario</h3>
          <p className="text-zinc-400 text-sm">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={\`flex \${message.sender === "user" ? "justify-end" : "justify-start"}\`}
          >
            <div
              className={\`max-w-xs px-4 py-2 rounded-lg \${message.sender === "user" 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-700 text-white"}\`}
            >
              <p>{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-zinc-700 text-white px-4 py-2 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          />
          <button
            onClick={sendMessage}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Enviar
          </button>
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
          <h1 className="text-3xl font-bold text-white">Chat</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Interfaz de Chat</h2>
              <div className="flex flex-col h-96 bg-zinc-900 rounded-lg border border-zinc-700">
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b border-zinc-700">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">U</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Usuario</h3>
                    <p className="text-zinc-400 text-sm">En línea</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                      📞
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                      📹
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                      ⚙️
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {message.sender === "other" && (
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-sm">O</span>
                          </div>
                        )}
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.sender === "user" 
                              ? "bg-blue-600 text-white" 
                              : "bg-zinc-700 text-white"
                          }`}
                        >
                          <p>{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                        {message.sender === "user" && (
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                            <span className="text-white text-sm">U</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div 
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-sm">O</span>
                      </div>
                      <div className="bg-zinc-700 text-white px-4 py-2 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-zinc-700">
                  <div className="flex gap-2">
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                      📎
                    </button>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                    />
                    <button
                      onClick={sendMessage}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Características adicionales */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <h3 className="text-white font-semibold mb-2">Estado de conexión</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-zinc-400 text-sm">Conectado</span>
                </div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                <h3 className="text-white font-semibold mb-2">Notificaciones</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-zinc-400 text-sm">Activadas</span>
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
                  Mensajes en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Indicador de escritura
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Timestamps en mensajes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Auto-scroll al último mensaje
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Envío con Enter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Avatares de usuarios
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 