import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import DropdownMenu from "./components/DropdownMenu";
import ModalDialog from "./components/ModalDialog";
import Tooltip from "./components/Tooltip";
import Tabs from "./components/Tabs";
import Popover from "./components/Popover";
import Loader from "./components/Loader";
import Badge from "./components/Badge";
import Alert from "./components/Alert";
import Avatar from "./components/Avatar";
import ProgressBar from "./components/ProgressBar";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import AlertPage from "./components/AlertPage";
import Form from "./components/Form";
import TabsPage from "./components/TabsPage";
import Modal from "./components/Modal";
import Progress from "./components/Progress";
import BadgePage from "./components/BadgePage";
import AvatarPage from "./components/AvatarPage";
import TooltipPage from "./components/TooltipPage";
import Spinner from "./components/Spinner";
import Notification from "./components/Notification";
import Dropdown from "./components/Dropdown";
import Switch from "./components/Switch";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import PopoverPage from "./components/PopoverPage";
import Textarea from "./components/Textarea";
import Select from "./components/Select";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Table from "./components/Table";
import List from "./components/List";
import Accordion from "./components/Accordion";
import Breadcrumb from "./components/Breadcrumb";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Tree from "./components/Tree";
import Review from "./components/Review";
import Skeleton from "./components/Skeleton";
import Sidebar from "./components/Sidebar";
import Pagination from "./components/Pagination";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Carousel from "./components/Carousel";
import ContextMenu from "./components/ContextMenu";
import Autocomplete from "./components/Autocomplete";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";
import ColorPicker from "./components/ColorPicker";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Image from "./components/Image";
import Lightbox from "./components/Lightbox";
import Chart from "./components/Chart";
import DataTable from "./components/DataTable";
import Kanban from "./components/Kanban";
import Parallax from "./components/Parallax";
import Hover from "./components/Hover";
import Loading from "./components/Loading";
import Transition from "./components/Transition";
import Copy from "./components/Copy";
import Share from "./components/Share";
import Download from "./components/Download";
import QR from "./components/QR";
import Barcode from "./components/Barcode";
import Calendar from "./components/Calendar";
import Chat from "./components/Chat";
import Comment from "./components/Comment";
import Rating from "./components/Rating";
import Wizard from "./components/Wizard";
import Stepper from "./components/Stepper";
import Tour from "./components/Tour";
import Onboarding from "./components/Onboarding";
import Print from "./components/Print";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route, useNavigate, useSearchParams } from "react-router-dom";

// Hook personalizado para manejar favoritos
function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('webelements-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('webelements-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (componentName) => {
    setFavorites(prev => 
      prev.includes(componentName) 
        ? prev.filter(name => name !== componentName)
        : [...prev, componentName]
    );
  };

  const isFavorite = (componentName) => favorites.includes(componentName);

  return { favorites, toggleFavorite, isFavorite };
}







// Sistema de notificaciones
function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // Auto-remover después de 3 segundos
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };
  
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };
  
  return { notifications, addNotification, removeNotification };
}

const components = [
  // Navegación y Layout
  {
    name: "Button",
    category: "Navegación",
    description: "Botones interactivos con múltiples variantes y estados",
    route: "/button",
    tags: ["interactivo", "click", "acción", "primario"],
    preview: <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors">Button</button>
  },
  {
    name: "Navigation",
    category: "Navegación", 
    description: "Barra de navegación responsive con menú hamburguesa",
    route: "/navigation",
    tags: ["header", "responsive", "menú", "hamburguesa"],
    preview: <div className="flex items-center gap-4 p-2 bg-zinc-800 rounded-lg"><div className="w-6 h-0.5 bg-white"></div><span className="text-white text-sm">Navigation</span></div>
  },
  {
    name: "Sidebar",
    category: "Navegación",
    description: "Panel lateral con navegación y submenús",
    route: "/sidebar", 
    tags: ["lateral", "menú", "submenús", "navegación"],
    preview: <div className="w-16 h-12 bg-zinc-800 rounded-lg flex items-center justify-center"><div className="w-4 h-4 bg-white rounded"></div></div>
  },
  {
    name: "Breadcrumb",
    category: "Navegación",
    description: "Indicador de navegación jerárquica",
    route: "/breadcrumb",
    preview: <div className="flex items-center gap-2 text-zinc-400 text-sm"><span>Home</span><span>/</span><span>Page</span></div>
  },
  {
    name: "Pagination",
    category: "Navegación", 
    description: "Navegación entre páginas con números y flechas",
    route: "/pagination",
    preview: <div className="flex gap-1"><div className="w-6 h-6 bg-zinc-800 rounded text-center text-xs text-white">1</div><div className="w-6 h-6 bg-zinc-700 rounded text-center text-xs text-white">2</div></div>
  },

  // Formularios y Entrada
  {
    name: "Input",
    category: "Formularios",
    description: "Campos de entrada con validación y estados",
    route: "/input",
    preview: <input className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm" placeholder="Input" />
  },
  {
    name: "Form",
    category: "Formularios",
    description: "Formularios completos con validación y envío",
    route: "/form",
    preview: <div className="space-y-2"><div className="w-32 h-2 bg-zinc-800 rounded"></div><div className="w-24 h-2 bg-zinc-800 rounded"></div></div>
  },
  {
    name: "Checkbox",
    category: "Formularios",
    description: "Casillas de verificación con estados personalizados",
    route: "/checkbox",
    preview: <div className="w-4 h-4 border border-zinc-600 rounded bg-zinc-800"></div>
  },
  {
    name: "Radio",
    category: "Formularios",
    description: "Botones de opción con selección única",
    route: "/radio",
    preview: <div className="w-4 h-4 border border-zinc-600 rounded-full bg-zinc-800"></div>
  },
  {
    name: "Select",
    category: "Formularios",
    description: "Menús desplegables con opciones múltiples",
    route: "/select",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Select ▼</div>
  },
  {
    name: "Textarea",
    category: "Formularios",
    description: "Áreas de texto redimensionables",
    route: "/textarea",
    preview: <div className="w-24 h-16 bg-zinc-800 border border-zinc-700 rounded-lg"></div>
  },
  {
    name: "Slider",
    category: "Formularios",
    description: "Controles deslizantes para rangos de valores",
    route: "/slider",
    preview: <div className="w-20 h-1 bg-zinc-800 rounded-full"><div className="w-8 h-1 bg-white rounded-full"></div></div>
  },
  {
    name: "Switch",
    category: "Formularios",
    description: "Interruptores de encendido/apagado",
    route: "/switch",
    preview: <div className="w-10 h-6 bg-zinc-700 rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div></div>
  },
  {
    name: "Search",
    category: "Formularios",
    description: "Buscadores con autocompletado y filtros",
    route: "/search",
    preview: <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg"><span className="text-zinc-400">🔍</span><span className="text-white text-sm">Search</span></div>
  },

  // Contenido y Layout
  {
    name: "Card",
    category: "Contenido",
    description: "Tarjetas para mostrar información estructurada",
    route: "/card",
    preview: <div className="w-20 h-16 bg-zinc-800 rounded-lg border border-zinc-700"></div>
  },
  {
    name: "Modal",
    category: "Contenido",
    description: "Ventanas modales con overlay y animaciones",
    route: "/modal",
    preview: <div className="w-12 h-8 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">Modal</span></div>
  },
  {
    name: "Tabs",
    category: "Contenido",
    description: "Pestañas para organizar contenido en secciones",
    route: "/tabs",
    preview: <div className="flex gap-1"><div className="px-2 py-1 bg-zinc-700 rounded text-white text-xs">Tab 1</div><div className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 text-xs">Tab 2</div></div>
  },
  {
    name: "Accordion",
    category: "Contenido",
    description: "Acordeones expandibles para contenido organizado",
    route: "/accordion",
    preview: <div className="w-24 h-6 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-between px-2"><span className="text-white text-xs">Section</span><span className="text-zinc-400">▼</span></div>
  },
  {
    name: "Table",
    category: "Contenido",
    description: "Tablas de datos con ordenamiento y paginación",
    route: "/table",
    preview: <div className="space-y-1"><div className="flex gap-2"><div className="w-8 h-2 bg-zinc-700 rounded"></div><div className="w-6 h-2 bg-zinc-700 rounded"></div></div><div className="flex gap-2"><div className="w-8 h-2 bg-zinc-800 rounded"></div><div className="w-6 h-2 bg-zinc-800 rounded"></div></div></div>
  },
  {
    name: "List",
    category: "Contenido",
    description: "Listas ordenadas y no ordenadas con estilos",
    route: "/list",
    preview: <div className="space-y-1"><div className="w-16 h-1 bg-zinc-800 rounded"></div><div className="w-12 h-1 bg-zinc-800 rounded"></div><div className="w-14 h-1 bg-zinc-800 rounded"></div></div>
  },
  {
    name: "Timeline",
    category: "Contenido",
    description: "Líneas de tiempo para mostrar eventos cronológicos",
    route: "/timeline",
    preview: <div className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-12 h-0.5 bg-zinc-700"></div><div className="w-2 h-2 bg-zinc-600 rounded-full"></div></div>
  },
  {
    name: "Gallery",
    category: "Contenido",
    description: "Galerías de imágenes con lightbox y navegación",
    route: "/gallery",
    preview: <div className="grid grid-cols-2 gap-1"><div className="w-4 h-4 bg-zinc-800 rounded"></div><div className="w-4 h-4 bg-zinc-800 rounded"></div><div className="w-4 h-4 bg-zinc-800 rounded"></div><div className="w-4 h-4 bg-zinc-800 rounded"></div></div>
  },
  {
    name: "Carousel",
    category: "Contenido",
    description: "Carruseles con navegación y autoplay",
    route: "/carousel",
    preview: <div className="flex items-center gap-1"><div className="w-2 h-2 bg-zinc-600 rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-zinc-600 rounded-full"></div></div>
  },

  // Feedback y Estados
  {
    name: "Alert",
    category: "Feedback",
    description: "Alertas informativas con diferentes tipos y estados",
    route: "/alert",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Alert</div>
  },
  {
    name: "Notification",
    category: "Feedback",
    description: "Notificaciones toast con auto-dismiss",
    route: "/notification",
    preview: <div className="px-3 py-2 bg-zinc-800 rounded-lg text-white text-sm">Notification</div>
  },
  {
    name: "Progress",
    category: "Feedback",
    description: "Barras de progreso lineales y circulares",
    route: "/progress",
    preview: <div className="w-20 h-2 bg-zinc-800 rounded-full"><div className="w-12 h-2 bg-white rounded-full"></div></div>
  },
  {
    name: "Skeleton",
    category: "Feedback",
    description: "Esqueletos de carga para mejorar UX",
    route: "/skeleton",
    preview: <div className="space-y-1"><div className="w-16 h-2 bg-zinc-800 rounded animate-pulse"></div><div className="w-12 h-2 bg-zinc-800 rounded animate-pulse"></div></div>
  },
  {
    name: "Spinner",
    category: "Feedback",
    description: "Indicadores de carga con animaciones",
    route: "/spinner",
    preview: <div className="w-4 h-4 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div>
  },
  {
    name: "Badge",
    category: "Feedback",
    description: "Insignias para mostrar estados y contadores",
    route: "/badge",
    preview: <div className="px-2 py-1 bg-zinc-700 rounded-full text-white text-xs">Badge</div>
  },
  {
    name: "Tooltip",
    category: "Feedback",
    description: "Información contextual al hacer hover",
    route: "/tooltip",
    preview: <div className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-white text-xs">Tooltip</div>
  },

  // Interacción y Overlays
  {
    name: "Dropdown",
    category: "Interacción",
    description: "Menús desplegables con opciones y submenús",
    route: "/dropdown",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Dropdown ▼</div>
  },
  {
    name: "Popover",
    category: "Interacción",
    description: "Contenido flotante posicionado dinámicamente",
    route: "/popover",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Popover</div>
  },
  {
    name: "Menu",
    category: "Interacción",
    description: "Menús contextuales con opciones",
    route: "/menu",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Menu</div>
  },
  {
    name: "ContextMenu",
    category: "Interacción",
    description: "Menús de clic derecho con opciones contextuales",
    route: "/context-menu",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Context</div>
  },
  {
    name: "Autocomplete",
    category: "Interacción",
    description: "Entrada con sugerencias automáticas",
    route: "/autocomplete",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">Auto...</div>
  },
  {
    name: "DatePicker",
    category: "Interacción",
    description: "Selectores de fecha con calendario",
    route: "/datepicker",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">📅 Date</div>
  },
  {
    name: "TimePicker",
    category: "Interacción",
    description: "Selectores de hora con formato personalizable",
    route: "/timepicker",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">🕐 Time</div>
  },
  {
    name: "ColorPicker",
    category: "Interacción",
    description: "Selectores de color con paleta y valores",
    route: "/colorpicker",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">🎨 Color</div>
  },

  // Multimedia y Media
  {
    name: "Video",
    category: "Multimedia",
    description: "Reproductores de video con controles personalizados",
    route: "/video",
    preview: <div className="w-16 h-10 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">▶</span></div>
  },
  {
    name: "Audio",
    category: "Multimedia",
    description: "Reproductores de audio con visualización",
    route: "/audio",
    preview: <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-lg"><span className="text-white text-xs">🔊</span><div className="w-8 h-1 bg-zinc-700 rounded-full"></div></div>
  },
  {
    name: "Image",
    category: "Multimedia",
    description: "Componentes de imagen con lazy loading y zoom",
    route: "/image",
    preview: <div className="w-12 h-8 bg-zinc-800 rounded border border-zinc-700"></div>
  },
  {
    name: "Lightbox",
    category: "Multimedia",
    description: "Visores de imágenes a pantalla completa",
    route: "/lightbox",
    preview: <div className="w-8 h-6 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">🔍</span></div>
  },

  // Datos y Visualización
  {
    name: "Chart",
    category: "Datos",
    description: "Gráficos y visualizaciones de datos",
    route: "/chart",
    preview: <div className="w-16 h-8 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">📊</span></div>
  },
  {
    name: "DataTable",
    category: "Datos",
    description: "Tablas de datos avanzadas con filtros",
    route: "/datatable",
    preview: <div className="space-y-1"><div className="flex gap-2"><div className="w-6 h-1 bg-zinc-700 rounded"></div><div className="w-4 h-1 bg-zinc-700 rounded"></div></div><div className="flex gap-2"><div className="w-6 h-1 bg-zinc-800 rounded"></div><div className="w-4 h-1 bg-zinc-800 rounded"></div></div></div>
  },
  {
    name: "Tree",
    category: "Datos",
    description: "Árboles jerárquicos expandibles",
    route: "/tree",
    preview: <div className="space-y-1"><div className="flex items-center gap-1"><span className="text-zinc-400">▶</span><span className="text-white text-xs">Node</span></div><div className="ml-4 flex items-center gap-1"><span className="text-zinc-400">▶</span><span className="text-white text-xs">Child</span></div></div>
  },
  {
    name: "Kanban",
    category: "Datos",
    description: "Tableros Kanban para gestión de tareas",
    route: "/kanban",
    preview: <div className="flex gap-2"><div className="w-8 h-12 bg-zinc-800 rounded border border-zinc-700"></div><div className="w-8 h-12 bg-zinc-800 rounded border border-zinc-700"></div><div className="w-8 h-12 bg-zinc-800 rounded border border-zinc-700"></div></div>
  },

  // Efectos y Animaciones
  {
    name: "Parallax",
    category: "Efectos",
    description: "Efectos de paralaje para scroll",
    route: "/parallax",
    preview: <div className="w-16 h-8 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">🌊</span></div>
  },
  {
    name: "Hover",
    category: "Efectos",
    description: "Efectos de hover y microinteracciones",
    route: "/hover",
    preview: <div className="w-12 h-8 bg-zinc-800 rounded border border-zinc-700 hover:bg-zinc-700 transition-colors"></div>
  },
  {
    name: "Loading",
    category: "Efectos",
    description: "Animaciones de carga y transiciones",
    route: "/loading",
    preview: <div className="w-6 h-6 border-2 border-zinc-700 border-t-white rounded-full animate-spin"></div>
  },
  {
    name: "Transition",
    category: "Efectos",
    description: "Transiciones suaves entre estados",
    route: "/transition",
    preview: <div className="w-8 h-8 bg-zinc-800 rounded border border-zinc-700 animate-pulse"></div>
  },

  // Utilidades y Helpers
  {
    name: "Copy",
    category: "Utilidades",
    description: "Botones de copia con feedback visual",
    route: "/copy",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">📋 Copy</div>
  },
  {
    name: "Share",
    category: "Utilidades",
    description: "Botones de compartir con redes sociales",
    route: "/share",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">📤 Share</div>
  },
  {
    name: "Print",
    category: "Utilidades",
    description: "Funcionalidad de impresión optimizada",
    route: "/print",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">🖨️ Print</div>
  },
  {
    name: "Download",
    category: "Utilidades",
    description: "Botones de descarga con progreso",
    route: "/download",
    preview: <div className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm">⬇️ Download</div>
  },
  {
    name: "QR",
    category: "Utilidades",
    description: "Generadores de códigos QR",
    route: "/qr",
    preview: <div className="w-8 h-8 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">QR</span></div>
  },
  {
    name: "Barcode",
    category: "Utilidades",
    description: "Generadores de códigos de barras",
    route: "/barcode",
    preview: <div className="w-12 h-6 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">📊</span></div>
  },

  // Especializados
  {
    name: "Calendar",
    category: "Especializados",
    description: "Calendarios interactivos con eventos",
    route: "/calendar",
    preview: <div className="w-16 h-12 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">📅</span></div>
  },
  {
    name: "Chat",
    category: "Especializados",
    description: "Interfaces de chat con mensajes",
    route: "/chat",
    preview: <div className="space-y-1"><div className="w-12 h-4 bg-zinc-700 rounded"></div><div className="w-8 h-4 bg-zinc-800 rounded ml-4"></div></div>
  },
  {
    name: "Comment",
    category: "Especializados",
    description: "Sistemas de comentarios anidados",
    route: "/comment",
    preview: <div className="space-y-1"><div className="w-16 h-2 bg-zinc-800 rounded"></div><div className="w-12 h-2 bg-zinc-800 rounded"></div></div>
  },
  {
    name: "Rating",
    category: "Especializados",
    description: "Sistemas de calificación con estrellas",
    route: "/rating",
    preview: <div className="flex gap-1"><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-zinc-600">★</span><span className="text-zinc-600">★</span><span className="text-zinc-600">★</span></div>
  },
  {
    name: "Review",
    category: "Especializados",
    description: "Sistemas de reseñas con formularios",
    route: "/review",
    preview: <div className="space-y-1"><div className="flex gap-1"><span className="text-yellow-400 text-xs">★★★★☆</span></div><div className="w-12 h-2 bg-zinc-800 rounded"></div></div>
  },
  {
    name: "Wizard",
    category: "Especializados",
    description: "Asistentes paso a paso",
    route: "/wizard",
    preview: <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-full text-xs text-black flex items-center justify-center">1</div><div className="w-8 h-0.5 bg-zinc-700"></div><div className="w-4 h-4 bg-zinc-700 rounded-full text-xs text-white flex items-center justify-center">2</div></div>
  },
  {
    name: "Stepper",
    category: "Especializados",
    description: "Indicadores de progreso por pasos",
    route: "/stepper",
    preview: <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-full text-xs text-black flex items-center justify-center">1</div><div className="w-8 h-0.5 bg-zinc-700"></div><div className="w-4 h-4 bg-zinc-700 rounded-full text-xs text-white flex items-center justify-center">2</div></div>
  },
  {
    name: "Tour",
    category: "Especializados",
    description: "Tutoriales guiados interactivos",
    route: "/tour",
    preview: <div className="w-8 h-8 bg-zinc-800 rounded-full border-2 border-white flex items-center justify-center"><span className="text-white text-xs">?</span></div>
  },
  {
    name: "Onboarding",
    category: "Especializados",
    description: "Flujos de onboarding para nuevos usuarios",
    route: "/onboarding",
    preview: <div className="w-12 h-8 bg-zinc-800 rounded border border-zinc-700 flex items-center justify-center"><span className="text-white text-xs">👋</span></div>
  }
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function MainGallery() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const searchQuery = searchParams.get('search') || '';
  const showFavorites = searchParams.get('favorites') === 'true';
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { notifications, addNotification, removeNotification } = useNotifications();

  // Filtrar componentes por categoría, búsqueda y favoritos
  const filteredComponents = components.filter(comp => {
    const matchesCategory = !selectedCategory || comp.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFavorites = !showFavorites || isFavorite(comp.name);
    return matchesCategory && matchesSearch && matchesFavorites;
  });

  const clearFilters = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <header className="flex flex-col items-center mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <img 
              src="/logo.png" 
              alt="WebElements Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover shadow-lg"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">WebElements</h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--text-secondary)] text-center max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl font-light px-4">
            Colección visual de componentes frontend reutilizables. Inspírate, copia y usa en tus proyectos.
          </p>
          

          

          
          {/* Filtros activos */}
          {(selectedCategory || searchQuery || showFavorites) && (
            <motion.div 
              className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6 p-3 sm:p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-primary)] mx-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[var(--text-secondary)] text-xs sm:text-sm">Filtros activos:</span>
              {selectedCategory && (
                <span className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm">
                  Categoría: {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="px-2 sm:px-3 py-1 bg-green-600 text-white rounded-full text-xs sm:text-sm">
                  Búsqueda: "{searchQuery}"
                </span>
              )}
              {showFavorites && (
                <span className="px-2 sm:px-3 py-1 bg-yellow-600 text-white rounded-full text-xs sm:text-sm">
                  Favoritos ({favorites.length})
                </span>
              )}
              <button
                onClick={clearFilters}
                className="px-2 sm:px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-full text-xs sm:text-sm hover:bg-[var(--border-primary)] transition-colors"
              >
                Limpiar filtros
              </button>
            </motion.div>
          )}
        </header>
        
        {/* Contador de resultados */}
        {(selectedCategory || searchQuery || showFavorites) && (
          <motion.div 
            className="mb-4 sm:mb-6 text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Mostrando {filteredComponents.length} de {components.length} componentes
              {selectedCategory && ` en la categoría "${selectedCategory}"`}
              {searchQuery && ` que coinciden con "${searchQuery}"`}
              {showFavorites && ` en favoritos`}
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((comp, i) => (
              <motion.div
                key={comp.name}
                className={
                  'relative rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] shadow-[0_2px_24px_0_rgba(0,0,0,0.45)] border border-[var(--border-primary)] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 group cursor-pointer overflow-hidden transition-all duration-200 hover:ring-2 hover:ring-[var(--accent-primary)]/20'
                }
                whileHover={{ scale: 1.025, boxShadow: '0 4px 32px 0 rgba(0,0,0,0.65)' }}
                onClick={() => comp.route ? navigate(comp.route) : null}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]">
                  {comp.preview}
                </div>
                <div className="mt-2 sm:mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--text-primary)]">{comp.name}</h2>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(comp.name);
                        addNotification(
                          isFavorite(comp.name) 
                            ? `${comp.name} removido de favoritos` 
                            : `${comp.name} agregado a favoritos`,
                          'success'
                        );
                      }}
                      className={`p-1 sm:p-2 rounded-full transition-colors ${
                        isFavorite(comp.name)
                          ? 'text-yellow-500 hover:text-yellow-400'
                          : 'text-gray-400 hover:text-yellow-500'
                      }`}
                      title={isFavorite(comp.name) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    >
                      {isFavorite(comp.name) ? '★' : '☆'}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-[var(--text-secondary)]">{comp.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] rounded-full">
                      {comp.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-8 sm:py-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2">No se encontraron componentes</h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4">
                {selectedCategory 
                  ? `No hay componentes en la categoría "${selectedCategory}"`
                  : searchQuery 
                    ? `No se encontraron resultados para "${searchQuery}"`
                    : "Intenta ajustar los filtros de búsqueda"
                }
              </p>
              <button
                onClick={clearFilters}
                className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Limpiar filtros
              </button>
            </motion.div>
          )}
        </div>
        
        {/* Notificaciones */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              className={`px-4 py-3 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' ? 'bg-green-500 text-white' :
                notification.type === 'error' ? 'bg-red-500 text-white' :
                notification.type === 'warning' ? 'bg-yellow-500 text-white' :
                'bg-blue-500 text-white'
              }`}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              onClick={() => removeNotification(notification.id)}
              style={{ cursor: 'pointer' }}
            >
              {notification.message}
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainGallery />} />
        <Route path="/button" element={<Button />} />
        <Route path="/input" element={<Input />} />
        <Route path="/card" element={<Card />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tabs" element={<TabsPage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/tooltip" element={<TooltipPage />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/popover" element={<PopoverPage />} />
        <Route path="/textarea" element={<Textarea />} />
        <Route path="/select" element={<Select />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/table" element={<Table />} />
        <Route path="/list" element={<List />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/breadcrumb" element={<Breadcrumb />} />
        <Route path="/search" element={<Search />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/review" element={<Review />} />
        <Route path="/skeleton" element={<Skeleton />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/context-menu" element={<ContextMenu />} />
        <Route path="/autocomplete" element={<Autocomplete />} />
        <Route path="/datepicker" element={<DatePicker />} />
        <Route path="/timepicker" element={<TimePicker />} />
        <Route path="/colorpicker" element={<ColorPicker />} />
        <Route path="/video" element={<Video />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/image" element={<Image />} />
        <Route path="/lightbox" element={<Lightbox />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/parallax" element={<Parallax />} />
        <Route path="/hover" element={<Hover />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/copy" element={<Copy />} />
        <Route path="/share" element={<Share />} />
        <Route path="/download" element={<Download />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/barcode" element={<Barcode />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </Router>
  );
}
