// Configuración optimizada del pool de conexiones para Prisma
// Este archivo contiene configuraciones para evitar timeouts de conexión

module.exports = {
  // Configuración del pool de conexiones
  pool: {
    // Número máximo de conexiones en el pool
    max: 20,
    // Número mínimo de conexiones en el pool
    min: 2,
    // Tiempo máximo de espera para obtener una conexión (ms)
    acquire: 30000,
    // Tiempo máximo de espera para crear una conexión (ms)
    create: 30000,
    // Tiempo máximo de espera para destruir una conexión (ms)
    destroy: 5000,
    // Tiempo máximo que una conexión puede estar inactiva (ms)
    idle: 30000,
    // Intervalo para limpiar conexiones inactivas (ms)
    reap: 1000,
    // Intervalo para reintentar crear conexiones (ms)
    createRetryInterval: 200,
  },
  
  // Configuración de timeouts
  timeouts: {
    // Timeout de conexión
    connection: 30000,
    // Timeout de consulta
    query: 60000,
    // Timeout de transacción
    transaction: 60000,
  },
  
  // Configuración de reintentos
  retries: {
    // Número máximo de reintentos
    max: 3,
    // Tiempo de espera entre reintentos (ms)
    backoff: 1000,
  }
}; 