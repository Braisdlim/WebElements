import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { id: 1, date: "2024-01-15", title: "Reunión de equipo", type: "meeting" },
    { id: 2, date: "2024-01-20", title: "Cumpleaños Ana", type: "birthday" },
    { id: 3, date: "2024-01-25", title: "Deadline proyecto", type: "deadline" },
    { id: 4, date: "2024-01-28", title: "Conferencia tech", type: "event" }
  ]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Días del mes anterior
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  const addEvent = (eventData) => {
    const newEvent = {
      id: Date.now(),
      ...eventData,
      date: selectedDate.toISOString().split('T')[0]
    };
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case "meeting": return "bg-blue-500";
      case "birthday": return "bg-pink-500";
      case "deadline": return "bg-red-500";
      case "event": return "bg-green-500";
      default: return "bg-zinc-500";
    }
  };

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const codeString = `import { useState } from "react";

export default function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { id: 1, date: "2024-01-15", title: "Reunión de equipo", type: "meeting" },
    { id: 2, date: "2024-01-20", title: "Cumpleaños Ana", type: "birthday" }
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Días del mes anterior
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateStr);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Hoy
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700"
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map(day => (
          <div key={day} className="p-2 text-center text-zinc-400 text-sm font-medium">
            {day}
          </div>
        ))}
        
        {getDaysInMonth(currentDate).map((date, index) => (
          <div
            key={index}
            className={\`p-2 min-h-[60px] border border-zinc-800 \${date ? 'hover:bg-zinc-800 cursor-pointer' : 'bg-zinc-900'}\`}
            onClick={() => date && setSelectedDate(date)}
          >
            {date && (
              <>
                <div className="text-white text-sm">{date.getDate()}</div>
                <div className="space-y-1 mt-1">
                  {getEventsForDate(date).map(event => (
                    <div
                      key={event.id}
                      className={\`\${getEventTypeColor(event.type)} text-xs text-white px-1 py-0.5 rounded\`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
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
          <h1 className="text-3xl font-bold text-white">Calendar</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Calendario Interactivo</h2>
              <div className="bg-zinc-900 rounded-lg p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                      className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentDate(new Date())}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Hoy
                    </button>
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                      className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {weekDays.map(day => (
                    <div key={day} className="p-2 text-center text-zinc-400 text-sm font-medium">
                      {day}
                    </div>
                  ))}
                  
                  {getDaysInMonth(currentDate).map((date, index) => (
                    <motion.div
                      key={index}
                      className={`p-2 min-h-[60px] border border-zinc-800 ${
                        date ? 'hover:bg-zinc-800 cursor-pointer' : 'bg-zinc-900'
                      } ${selectedDate && date && selectedDate.toDateString() === date.toDateString() ? 'bg-blue-600' : ''}`}
                      onClick={() => date && setSelectedDate(date)}
                      whileHover={{ scale: date ? 1.05 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {date && (
                        <>
                          <div className="text-white text-sm">{date.getDate()}</div>
                          <div className="space-y-1 mt-1">
                            {getEventsForDate(date).map(event => (
                              <div
                                key={event.id}
                                className={`${getEventTypeColor(event.type)} text-xs text-white px-1 py-0.5 rounded`}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Eventos del día seleccionado */}
            {selectedDate && (
              <div className="bg-zinc-900 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    Eventos del {selectedDate.toLocaleDateString()}
                  </h3>
                  <button
                    onClick={() => setShowEventForm(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    + Agregar Evento
                  </button>
                </div>
                
                <div className="space-y-2">
                  {getEventsForDate(selectedDate).map(event => (
                    <div key={event.id} className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`}></div>
                      <span className="text-white">{event.title}</span>
                    </div>
                  ))}
                  {getEventsForDate(selectedDate).length === 0 && (
                    <p className="text-zinc-400 text-center py-4">No hay eventos para este día</p>
                  )}
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
                  Navegación entre meses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Selección de fechas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Gestión de eventos por fecha
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Diferentes tipos de eventos con colores
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Interfaz responsive y accesible
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Animaciones suaves
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal para agregar evento */}
        <AnimatePresence>
          {showEventForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-zinc-900 rounded-lg p-6 w-full max-w-md mx-4"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Agregar Evento</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Título</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                      placeholder="Nombre del evento"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Tipo</label>
                    <select className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
                      <option value="meeting">Reunión</option>
                      <option value="birthday">Cumpleaños</option>
                      <option value="deadline">Deadline</option>
                      <option value="event">Evento</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowEventForm(false)}
                      className="flex-1 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => setShowEventForm(false)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 