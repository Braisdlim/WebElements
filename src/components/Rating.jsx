import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [reviews, setReviews] = useState([
    { id: 1, user: "Ana García", rating: 5, comment: "Excelente producto, muy recomendado.", date: "2024-01-15" },
    { id: 2, user: "Carlos López", rating: 4, comment: "Buen producto, cumple las expectativas.", date: "2024-01-14" },
    { id: 3, user: "María Rodríguez", rating: 5, comment: "Superó mis expectativas, lo recomiendo.", date: "2024-01-13" },
    { id: 4, user: "David Martínez", rating: 3, comment: "Producto regular, podría mejorar.", date: "2024-01-12" },
    { id: 5, user: "Laura Sánchez", rating: 5, comment: "Increíble calidad, muy satisfecha.", date: "2024-01-11" }
  ]);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const getRatingText = (rating) => {
    switch (rating) {
      case 1: return "Muy malo";
      case 2: return "Malo";
      case 3: return "Regular";
      case 4: return "Bueno";
      case 5: return "Excelente";
      default: return "Sin calificar";
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return "text-green-400";
    if (rating >= 3) return "text-yellow-400";
    return "text-red-400";
  };

  const Star = ({ filled, onMouseEnter, onMouseLeave, onClick, size = "text-xl" }) => (
    <motion.span
      className={`cursor-pointer ${size} ${filled ? 'text-yellow-400' : 'text-zinc-600'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ★
    </motion.span>
  );

  const RatingStars = ({ value, onChange, readonly = false, size = "text-xl" }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= (readonly ? value : hoverRating || value)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => !readonly && onChange(star)}
          size={size}
        />
      ))}
    </div>
  );

  const codeString = `import { useState } from "react";

export default function RatingComponent() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const Star = ({ filled, onMouseEnter, onMouseLeave, onClick }) => (
    <span
      className={\`cursor-pointer text-xl \${filled ? 'text-yellow-400' : 'text-zinc-600'}\`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      ★
    </span>
  );

  const RatingStars = ({ value, onChange, readonly = false }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= (readonly ? value : hoverRating || value)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
          onClick={() => !readonly && onChange(star)}
        />
      ))}
    </div>
  );

  const getRatingText = (rating) => {
    switch (rating) {
      case 1: return "Muy malo";
      case 2: return "Malo";
      case 3: return "Regular";
      case 4: return "Bueno";
      case 5: return "Excelente";
      default: return "Sin calificar";
    }
  };

  return (
    <div className="space-y-6">
      {/* Calificación interactiva */}
      <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
        <h3 className="text-white font-semibold mb-4">Califica este producto</h3>
        <div className="flex items-center gap-4 mb-4">
          <RatingStars value={rating} onChange={setRating} />
          <span className="text-white font-semibold">{rating}/5</span>
        </div>
        <p className="text-zinc-400">{getRatingText(rating)}</p>
      </div>

      {/* Calificación de solo lectura */}
      <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
        <h3 className="text-white font-semibold mb-4">Calificación promedio</h3>
        <div className="flex items-center gap-4">
          <RatingStars value={4.2} readonly />
          <div>
            <span className="text-white font-semibold">4.2/5</span>
            <p className="text-zinc-400 text-sm">Basado en 127 reseñas</p>
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
          <h1 className="text-3xl font-bold text-white">Rating System</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Sistema de Calificación</h2>
              
              {/* Calificación interactiva */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 mb-6">
                <h3 className="text-white font-semibold mb-4">Califica este producto</h3>
                <div className="flex items-center gap-4 mb-4">
                  <RatingStars value={rating} onChange={setRating} />
                  <span className="text-white font-semibold">{rating}/5</span>
                </div>
                <p className={`text-lg ${getRatingColor(rating)}`}>{getRatingText(rating)}</p>
              </div>

              {/* Calificación promedio */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 mb-6">
                <h3 className="text-white font-semibold mb-4">Calificación promedio</h3>
                <div className="flex items-center gap-4 mb-4">
                  <RatingStars value={averageRating} readonly />
                  <div>
                    <span className="text-white font-semibold text-2xl">{averageRating.toFixed(1)}/5</span>
                    <p className="text-zinc-400 text-sm">Basado en {totalReviews} reseñas</p>
                  </div>
                </div>
                
                {/* Distribución de calificaciones */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = reviews.filter(r => r.rating === star).length;
                    const percentage = (count / totalReviews) * 100;
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-zinc-400 text-sm w-4">{star}★</span>
                        <div className="flex-1 bg-zinc-700 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-zinc-400 text-sm w-8">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reseñas */}
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <h3 className="text-white font-semibold mb-4">Reseñas recientes</h3>
                <div className="space-y-4">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="border-b border-zinc-700 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{review.user}</span>
                        <span className="text-zinc-400 text-sm">{review.date}</span>
                      </div>
                      <RatingStars value={review.rating} readonly size="text-sm" />
                      <p className="text-zinc-300 text-sm mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Diferentes tamaños */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Diferentes tamaños</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400 w-16">Grande:</span>
                  <RatingStars value={4} readonly size="text-3xl" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400 w-16">Mediano:</span>
                  <RatingStars value={4} readonly size="text-xl" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400 w-16">Pequeño:</span>
                  <RatingStars value={4} readonly size="text-sm" />
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
                  Calificación interactiva con hover
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Múltiples tamaños de estrellas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Modo de solo lectura
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Texto descriptivo por calificación
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Distribución de calificaciones
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Animaciones suaves
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 