import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

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

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  // Verificar si estamos en la vista de favoritos
  const isInFavoritesView = location.search.includes('favorites=true');

  // Componentes disponibles para búsqueda
  const allComponents = [
    { name: "Button", category: "Navegación", route: "/button" },
    { name: "Input", category: "Formularios", route: "/input" },
    { name: "Card", category: "Contenido", route: "/card" },
    { name: "Modal", category: "Contenido", route: "/modal" },
    { name: "Alert", category: "Feedback", route: "/alert" },
    { name: "Navigation", category: "Navegación", route: "/navigation" },
    { name: "Sidebar", category: "Navegación", route: "/sidebar" },
    { name: "Breadcrumb", category: "Navegación", route: "/breadcrumb" },
    { name: "Pagination", category: "Navegación", route: "/pagination" },
    { name: "Form", category: "Formularios", route: "/form" },
    { name: "Checkbox", category: "Formularios", route: "/checkbox" },
    { name: "Radio", category: "Formularios", route: "/radio" },
    { name: "Select", category: "Formularios", route: "/select" },
    { name: "Textarea", category: "Formularios", route: "/textarea" },
    { name: "Slider", category: "Formularios", route: "/slider" },
    { name: "Switch", category: "Formularios", route: "/switch" },
    { name: "Search", category: "Formularios", route: "/search" },
    { name: "Tabs", category: "Contenido", route: "/tabs" },
    { name: "Accordion", category: "Contenido", route: "/accordion" },
    { name: "Table", category: "Contenido", route: "/table" },
    { name: "List", category: "Contenido", route: "/list" },
    { name: "Timeline", category: "Contenido", route: "/timeline" },
    { name: "Gallery", category: "Contenido", route: "/gallery" },
    { name: "Carousel", category: "Contenido", route: "/carousel" },
    { name: "Notification", category: "Feedback", route: "/notification" },
    { name: "Progress", category: "Feedback", route: "/progress" },
    { name: "Skeleton", category: "Feedback", route: "/skeleton" },
    { name: "Spinner", category: "Feedback", route: "/spinner" },
    { name: "Badge", category: "Feedback", route: "/badge" },
    { name: "Tooltip", category: "Feedback", route: "/tooltip" },
    { name: "Dropdown", category: "Interacción", route: "/dropdown" },
    { name: "Popover", category: "Interacción", route: "/popover" },
    { name: "Menu", category: "Interacción", route: "/menu" },
    { name: "ContextMenu", category: "Interacción", route: "/context-menu" },
    { name: "Autocomplete", category: "Interacción", route: "/autocomplete" },
    { name: "DatePicker", category: "Interacción", route: "/datepicker" },
    { name: "TimePicker", category: "Interacción", route: "/timepicker" },
    { name: "ColorPicker", category: "Interacción", route: "/colorpicker" },
    { name: "Video", category: "Multimedia", route: "/video" },
    { name: "Audio", category: "Multimedia", route: "/audio" },
    { name: "Image", category: "Multimedia", route: "/image" },
    { name: "Lightbox", category: "Multimedia", route: "/lightbox" },
    { name: "Chart", category: "Datos", route: "/chart" },
    { name: "DataTable", category: "Datos", route: "/datatable" },
    { name: "Tree", category: "Datos", route: "/tree" },
    { name: "Kanban", category: "Datos", route: "/kanban" },
    { name: "Parallax", category: "Efectos", route: "/parallax" },
    { name: "Hover", category: "Efectos", route: "/hover" },
    { name: "Loading", category: "Efectos", route: "/loading" },
    { name: "Transition", category: "Efectos", route: "/transition" },
    { name: "Copy", category: "Utilidades", route: "/copy" },
    { name: "Share", category: "Utilidades", route: "/share" },
    { name: "Print", category: "Utilidades", route: "/print" },
    { name: "Download", category: "Utilidades", route: "/download" },
    { name: "QR", category: "Utilidades", route: "/qr" },
    { name: "Barcode", category: "Utilidades", route: "/barcode" },
    { name: "Calendar", category: "Especializados", route: "/calendar" },
    { name: "Chat", category: "Especializados", route: "/chat" },
    { name: "Comment", category: "Especializados", route: "/comment" },
    { name: "Rating", category: "Especializados", route: "/rating" },
    { name: "Wizard", category: "Especializados", route: "/wizard" },
    { name: "Stepper", category: "Especializados", route: "/stepper" },
    { name: "Tour", category: "Especializados", route: "/tour" },
    { name: "Onboarding", category: "Especializados", route: "/onboarding" }
  ];

  // Filtrar resultados de búsqueda
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allComponents.filter(component =>
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 8)); // Limitar a 8 resultados
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSearchResults(false);
      setIsSearchFocused(false);
    };

    if (showSearchResults) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showSearchResults]);

  const handleSearchSelect = (component) => {
    navigate(component.route);
    setSearchQuery("");
    setShowSearchResults(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearchResults(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      handleSearchSelect(searchResults[0]);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Navegación": "text-blue-400",
      "Formularios": "text-green-400",
      "Contenido": "text-purple-400",
      "Feedback": "text-yellow-400",
      "Interacción": "text-pink-400",
      "Multimedia": "text-orange-400",
      "Datos": "text-indigo-400",
      "Efectos": "text-red-400",
      "Utilidades": "text-cyan-400",
      "Especializados": "text-emerald-400"
    };
    return colors[category] || "text-zinc-400";
  };

  return (
    <header className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y navegación principal */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              <img 
                src="/logo.png" 
                alt="WebElements Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">WebElements</span>
            </button>

            {/* Navegación desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate("/")}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                Inicio
              </button>

              <div className="relative group">
                <button className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Categorías
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    {["Navegación", "Formularios", "Contenido", "Feedback", "Interacción", "Multimedia", "Datos", "Efectos", "Utilidades", "Especializados"].map((category) => (
                      <button
                        key={category}
                        onClick={() => navigate(`/?category=${encodeURIComponent(category)}`)}
                        className="w-full text-left px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Barra de búsqueda */}
          <div className="flex-1 max-w-2xl mx-8 relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onKeyPress={handleKeyPress}
                placeholder="Buscar componentes..."
                className="w-full px-4 py-2 pl-10 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            {/* Resultados de búsqueda */}
            <AnimatePresence>
              {showSearchResults && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg shadow-lg z-50"
                >
                  <div className="p-2">
                    {searchResults.map((component, index) => (
                      <button
                        key={component.name}
                        onClick={() => handleSearchSelect(component)}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-[var(--bg-secondary)] rounded transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[var(--text-primary)] font-medium">{component.name}</span>
                          <span className={`text-xs ${getCategoryColor(component.category)}`}>
                            {component.category}
                          </span>
                        </div>
                        <span className="text-[var(--text-tertiary)] text-xs">Enter</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center gap-4">
            {/* Botón de favoritos */}
            <div className="relative">
              <button
                onClick={() => {
                  if (isInFavoritesView) {
                    navigate('/');
                  } else {
                    navigate('/?favorites=true');
                  }
                }}
                className={`p-2 transition-colors relative ${
                  isInFavoritesView 
                    ? 'text-yellow-500 hover:text-yellow-400' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                title={isInFavoritesView ? "Ver todos" : "Ver favoritos"}
              >
                <span className="text-xl">
                  {isInFavoritesView ? '★' : '☆'}
                </span>
              </button>
            </div>

            <button 
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" 
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              onClick={toggleTheme}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a 
              href="https://github.com/braisdlim/webelements" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-text-primary transition-colors" 
              title="Ver en GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* Menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[var(--border-primary)]"
            >
              <div className="px-4 py-4 space-y-2">
                <button
                  onClick={() => {
                    navigate("/");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded transition-colors"
                >
                  Inicio
                </button>

                <div className="px-3 py-2 text-[var(--text-tertiary)] text-sm font-medium">
                  Categorías
                </div>
                {["Navegación", "Formularios", "Contenido", "Feedback", "Interacción", "Multimedia", "Datos", "Efectos", "Utilidades", "Especializados"].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      navigate(`/?category=${encodeURIComponent(category)}`);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 