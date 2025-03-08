# typeScriptReactExpress
learning

ESTRUCTURA DESEADA:

typeScriptReactExpress/
│
├── src/                              # Código fuente
│    ├── controllers/                  # Lógica de control (rutas)
│    │     └── usuarioController.ts
│    │
│    ├── models/                       # Esquemas y modelos de la base de datos
│    │     └── Usuario.ts
│    │
│    ├── services/                     # Lógica de negocio (interacción con BD)
│    │     └── usuarioService.ts
│    │
│    ├── routes/                       # Definición de rutas
│    │     └── usuarioRoutes.ts
│    │
│    ├── middleware/                   # Funciones intermedias (validaciones, autenticación)
│    │     ├── validarUsuario.ts
│    │     └── manejoErrores.ts
│    │
│    ├── config/                       # Configuración de la base de datos y otros servicios
│    │     └── database.ts
│    │
│    └── index.ts                      # Punto de entrada de la aplicación
│
├── package.json                       # Dependencias y scripts del proyecto
├── tsconfig.json                      # Configuración de TypeScript
└── node_modules/                      # Módulos de Node.js
