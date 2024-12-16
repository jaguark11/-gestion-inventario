📦 Gestión de Inventario con Node.js, Express y MongoDB
Este proyecto es una API REST para gestionar productos de inventario. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos MongoDB utilizando Node.js y Express.

🚀 Tecnologías Utilizadas
Node.js: Entorno de ejecución de JavaScript en el servidor.
Express: Framework para crear aplicaciones web y APIs.
MongoDB: Base de datos NoSQL para almacenar los productos.
Mongoose: ODM (Object Data Modeling) para interactuar con MongoDB.
Nodemon: Herramienta para el desarrollo que reinicia automáticamente el servidor al detectar cambios.
📥 Instalación
1. Clonar el Repositorio

git clone https://github.com/jaguark11/gestion-inventario.git
2. Instalar Dependencias
Navega a la carpeta del proyecto y ejecuta:


cd gestion-inventario
npm install
3. Iniciar MongoDB
Asegúrate de que el servicio de MongoDB esté en ejecución. Si tienes MongoDB instalado localmente, puedes iniciarlo con:


mongod
4. Iniciar el Servidor
Ejecuta el siguiente comando para iniciar el servidor con Nodemon:


npm run dev
El servidor se ejecutará en:


http://localhost:3000
🗂️ Estructura del Proyecto

gestion-inventario/
│-- models/
│   └── Producto.js       # Modelo de producto con validaciones
│-- routes/
│   └── productoRutas.js  # Rutas CRUD para productos
│-- src/
│   └── index.js          # Archivo principal para configurar el servidor
│-- package.json          # Configuración del proyecto y dependencias
└-- README.md             # Documentación del proyecto
📑 Endpoints de la API
📌 1. Crear un Producto
Método: POST
URL: /api/productos
Body (JSON):


{
  "nombre": "Teclado",
  "precio": 50,
  "cantidad": 10,
  "categoria": "Periféricos"
}
Respuesta:


{
  "message": "Producto creado",
  "producto": {
    "_id": "675f72b48b77272add989b89",
    "nombre": "Teclado",
    "precio": 50,
    "cantidad": 10,
    "categoria": "Periféricos",
    "createdAt": "2024-12-16T00:22:12.851Z",
    "updatedAt": "2024-12-16T00:22:12.851Z",
    "__v": 0
  }
}
📌 2. Obtener Todos los Productos
Método: GET
URL: /api/productos
Respuesta:


[
  {
    "_id": "675f72b48b77272add989b89",
    "nombre": "Teclado",
    "precio": 50,
    "cantidad": 10,
    "categoria": "Periféricos",
    "createdAt": "2024-12-16T00:22:12.851Z",
    "updatedAt": "2024-12-16T00:22:12.851Z",
    "__v": 0
  }
]
📌 3. Obtener un Producto por ID
Método: GET
URL: /api/productos/:id
📌 4. Actualizar un Producto por ID
Método: PUT
URL: /api/productos/:id
Body (JSON):


{
  "nombre": "Ratón",
  "precio": 25,
  "cantidad": 5,
  "categoria": "Periféricos"
}
📌 5. Eliminar un Producto por ID
Método: DELETE
URL: /api/productos/:id
⚠️ Validaciones del Modelo
Nombre: Obligatorio (required) y de tipo String.
Precio: Obligatorio, de tipo Number y no puede ser negativo.
Cantidad: Obligatorio, de tipo Number y no puede ser negativa.
Categoría: Obligatoria y de tipo String.
🌐 Pruebas en Postman
Importa los Endpoints en Postman para realizar pruebas.

Asegúrate de que los Headers incluyan:


Content-Type: application/json
📝 Notas Importantes
Asegúrate de que MongoDB esté ejecutándose antes de iniciar el servidor.
Puedes modificar la configuración del servidor en src/index.js.
📜 Licencia
Este proyecto está bajo la licencia MIT.
