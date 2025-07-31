import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Download() {
  const [downloads, setDownloads] = useState([
    { id: 1, name: "documento.pdf", size: "2.4 MB", progress: 0, status: "pending" },
    { id: 2, name: "imagen.jpg", size: "1.8 MB", progress: 45, status: "downloading" },
    { id: 3, name: "video.mp4", size: "15.2 MB", progress: 100, status: "completed" },
    { id: 4, name: "archivo.zip", size: "8.7 MB", progress: 0, status: "error" }
  ]);

  const [showCode, setShowCode] = useState(false);

  const startDownload = (id) => {
    setDownloads(prev => prev.map(d => 
      d.id === id ? { ...d, status: "downloading", progress: 0 } : d
    ));

    // Simular progreso de descarga
    const interval = setInterval(() => {
      setDownloads(prev => prev.map(d => {
        if (d.id === id && d.status === "downloading") {
          const newProgress = d.progress + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            return { ...d, progress: 100, status: "completed" };
          }
          return { ...d, progress: newProgress };
        }
        return d;
      }));
    }, 200);
  };

  const retryDownload = (id) => {
    setDownloads(prev => prev.map(d => 
      d.id === id ? { ...d, status: "pending", progress: 0 } : d
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "text-green-400";
      case "error": return "text-red-400";
      case "downloading": return "text-blue-400";
      default: return "text-zinc-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed": return "✅";
      case "error": return "❌";
      case "downloading": return "⏳";
      default: return "⏸️";
    }
  };

  const codeString = `import { useState } from "react";

export default function DownloadComponent() {
  const [downloads, setDownloads] = useState([
    { id: 1, name: "documento.pdf", size: "2.4 MB", progress: 0, status: "pending" },
    { id: 2, name: "imagen.jpg", size: "1.8 MB", progress: 45, status: "downloading" },
    { id: 3, name: "video.mp4", size: "15.2 MB", progress: 100, status: "completed" }
  ]);

  const startDownload = (id) => {
    setDownloads(prev => prev.map(d => 
      d.id === id ? { ...d, status: "downloading", progress: 0 } : d
    ));

    // Simular progreso de descarga
    const interval = setInterval(() => {
      setDownloads(prev => prev.map(d => {
        if (d.id === id && d.status === "downloading") {
          const newProgress = d.progress + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            return { ...d, progress: 100, status: "completed" };
          }
          return { ...d, progress: newProgress };
        }
        return d;
      }));
    }, 200);
  };

  return (
    <div className="space-y-4">
      {downloads.map((download) => (
        <div key={download.id} className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getStatusIcon(download.status)}</span>
              <div>
                <h3 className="text-white font-medium">{download.name}</h3>
                <p className="text-zinc-400 text-sm">{download.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {download.status === "pending" && (
                <button
                  onClick={() => startDownload(download.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Descargar
                </button>
              )}
              {download.status === "error" && (
                <button
                  onClick={() => retryDownload(download.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Reintentar
                </button>
              )}
              {download.status === "completed" && (
                <span className="text-green-400 text-sm">Completado</span>
              )}
            </div>
          </div>
          
          {download.status === "downloading" && (
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: \`\${download.progress}%\` }}
              ></div>
            </div>
          )}
          
          {download.status === "completed" && (
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          )}
        </div>
      ))}
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
          <h1 className="text-3xl font-bold text-white">Download</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Descarga de Archivos</h2>
              <div className="space-y-4">
                {downloads.map((download) => (
                  <motion.div
                    key={download.id}
                    className="bg-zinc-800 rounded-lg p-4 border border-zinc-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getStatusIcon(download.status)}</span>
                        <div>
                          <h3 className="text-white font-medium">{download.name}</h3>
                          <p className="text-zinc-400 text-sm">{download.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {download.status === "pending" && (
                          <button
                            onClick={() => startDownload(download.id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Descargar
                          </button>
                        )}
                        {download.status === "error" && (
                          <button
                            onClick={() => retryDownload(download.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          >
                            Reintentar
                          </button>
                        )}
                        {download.status === "completed" && (
                          <span className="text-green-400 text-sm">Completado</span>
                        )}
                      </div>
                    </div>
                    
                    {download.status === "downloading" && (
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <motion.div 
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${download.progress}%` }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      </div>
                    )}
                    
                    {download.status === "completed" && (
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    )}

                    {download.status === "error" && (
                      <div className="w-full bg-zinc-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Botones de descarga adicionales */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Tipos de Descarga</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📄</div>
                    <div className="text-white font-medium">Documento</div>
                    <div className="text-zinc-400 text-sm">PDF, DOC, TXT</div>
                  </div>
                </button>
                <button className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🖼️</div>
                    <div className="text-white font-medium">Imagen</div>
                    <div className="text-zinc-400 text-sm">JPG, PNG, GIF</div>
                  </div>
                </button>
                <button className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎵</div>
                    <div className="text-white font-medium">Audio</div>
                    <div className="text-zinc-400 text-sm">MP3, WAV, FLAC</div>
                  </div>
                </button>
                <button className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="text-white font-medium">Archivo</div>
                    <div className="text-zinc-400 text-sm">ZIP, RAR, 7Z</div>
                  </div>
                </button>
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
                  Progreso de descarga en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Estados de descarga (pendiente, descargando, completado, error)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Botón de reintento para descargas fallidas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Soporte para diferentes tipos de archivos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Animaciones suaves de progreso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Interfaz responsive y accesible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 