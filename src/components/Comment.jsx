import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Ana García",
      avatar: "AG",
      content: "¡Excelente artículo! Muy informativo y bien estructurado.",
      timestamp: "2024-01-15T10:30:00",
      likes: 12,
      replies: [
        {
          id: 2,
          author: "Carlos López",
          avatar: "CL",
          content: "Totalmente de acuerdo, muy útil para principiantes.",
          timestamp: "2024-01-15T11:15:00",
          likes: 5,
          replies: []
        },
        {
          id: 3,
          author: "María Rodríguez",
          avatar: "MR",
          content: "Me gustaría ver más ejemplos prácticos.",
          timestamp: "2024-01-15T12:00:00",
          likes: 3,
          replies: []
        }
      ]
    },
    {
      id: 4,
      author: "David Martínez",
      avatar: "DM",
      content: "¿Podrías explicar más sobre la sección de implementación?",
      timestamp: "2024-01-15T14:20:00",
      likes: 8,
      replies: []
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Usuario",
        avatar: "U",
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const addReply = (parentId) => {
    if (newComment.trim()) {
      const reply = {
        id: Date.now(),
        author: "Usuario",
        avatar: "U",
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: []
      };

      const updateComments = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, reply] };
          }
          if (comment.replies.length > 0) {
            return { ...comment, replies: updateComments(comment.replies) };
          }
          return comment;
        });
      };

      setComments(updateComments(comments));
      setNewComment("");
      setReplyingTo(null);
    }
  };

  const likeComment = (commentId) => {
    const updateLikes = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateLikes(comment.replies) };
        }
        return comment;
      });
    };
    setComments(updateLikes(comments));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Ahora";
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString();
  };

  const renderComment = (comment, level = 0) => (
    <motion.div
      key={comment.id}
      className={`${level > 0 ? 'ml-8' : ''} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">{comment.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold">{comment.author}</span>
              <span className="text-zinc-400 text-sm">{formatTime(comment.timestamp)}</span>
            </div>
            <p className="text-zinc-300 mb-3">{comment.content}</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => likeComment(comment.id)}
                className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              >
                <span>👍</span>
                <span className="text-sm">{comment.likes}</span>
              </button>
              <button
                onClick={() => setReplyingTo(comment.id)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                💬 Responder
              </button>
            </div>
            
            {replyingTo === comment.id && (
              <motion.div
                className="mt-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Escribe tu respuesta..."
                    className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white text-sm"
                  />
                  <button
                    onClick={() => addReply(comment.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Enviar
                  </button>
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {comment.replies.length > 0 && (
        <div className="mt-3">
          {comment.replies.map(reply => renderComment(reply, level + 1))}
        </div>
      )}
    </motion.div>
  );

  const codeString = `import { useState } from "react";

export default function CommentComponent() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Ana García",
      avatar: "AG",
      content: "¡Excelente artículo!",
      timestamp: "2024-01-15T10:30:00",
      likes: 12,
      replies: [
        {
          id: 2,
          author: "Carlos López",
          avatar: "CL",
          content: "Totalmente de acuerdo",
          timestamp: "2024-01-15T11:15:00",
          likes: 5,
          replies: []
        }
      ]
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Usuario",
        avatar: "U",
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: []
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const addReply = (parentId) => {
    if (newComment.trim()) {
      const reply = {
        id: Date.now(),
        author: "Usuario",
        avatar: "U",
        content: newComment,
        timestamp: new Date().toISOString(),
        likes: 0,
        replies: []
      };

      const updateComments = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, reply] };
          }
          if (comment.replies.length > 0) {
            return { ...comment, replies: updateComments(comment.replies) };
          }
          return comment;
        });
      };

      setComments(updateComments(comments));
      setNewComment("");
      setReplyingTo(null);
    }
  };

  const renderComment = (comment, level = 0) => (
    <div key={comment.id} className={\`\${level > 0 ? 'ml-8' : ''} mb-4\`}>
      <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{comment.avatar}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold">{comment.author}</span>
              <span className="text-zinc-400 text-sm">{formatTime(comment.timestamp)}</span>
            </div>
            <p className="text-zinc-300 mb-3">{comment.content}</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-zinc-400 hover:text-white">
                <span>👍</span>
                <span className="text-sm">{comment.likes}</span>
              </button>
              <button
                onClick={() => setReplyingTo(comment.id)}
                className="text-zinc-400 hover:text-white"
              >
                💬 Responder
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {comment.replies.length > 0 && (
        <div className="mt-3">
          {comment.replies.map(reply => renderComment(reply, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Nuevo comentario */}
      <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">U</span>
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe un comentario..."
              className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white resize-none"
              rows="3"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={addComment}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de comentarios */}
      <div className="space-y-4">
        {comments.map(comment => renderComment(comment))}
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
          <h1 className="text-3xl font-bold text-white">Comment System</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Sistema de Comentarios</h2>
              
              {/* Nuevo comentario */}
              <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 mb-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">U</span>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escribe un comentario..."
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white resize-none"
                      rows="3"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={addComment}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Comentar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista de comentarios */}
              <div className="space-y-4">
                <AnimatePresence>
                  {comments.map(comment => renderComment(comment))}
                </AnimatePresence>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
              <h3 className="text-white font-semibold mb-3">Estadísticas</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {comments.length}
                  </div>
                  <div className="text-zinc-400 text-sm">Comentarios</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {comments.reduce((total, comment) => 
                      total + comment.replies.length, 0
                    )}
                  </div>
                  <div className="text-zinc-400 text-sm">Respuestas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">
                    {comments.reduce((total, comment) => 
                      total + comment.likes + comment.replies.reduce((sum, reply) => 
                        sum + reply.likes, 0
                      ), 0
                    )}
                  </div>
                  <div className="text-zinc-400 text-sm">Me gusta</div>
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
                  Comentarios anidados ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Sistema de likes por comentario
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Timestamps relativos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Avatares de usuarios
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Respuestas en tiempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Interfaz intuitiva y responsive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 