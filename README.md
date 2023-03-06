# code-verifier-backend

#    DEPENDENCIAS:

    Dotenv: Dotenv es un módulo de dependencia cero que carga variables de entorno desde un archivo .env en process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación The Twelve-Factor.

    Express: Express es un marco de aplicación web de Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para aplicaciones web y móviles.

#    DEV-DEPENDENCIAS:

    @types/express: Este paquete contiene definiciones de type para Express

    @types/jest: Este paquete contiene definiciones de type para Jest
    
    @types/node: Este paquete contiene definiciones de type para Node
    
    @typescript-eslint/eslint-plugin: Este paquete contiene definiciones de type para Eslint
    
    concurrently: Ejecute varios comandos al mismo tiempo. Como npm run watch-js y npm run watch-less pero mejor.
    
    eslint: ESLint es una herramienta para identificar e informar sobre patrones encontrados en el código ECMAScript/JavaScript.
    
    eslint-config-standard-with-typescript: Una configuración compartible de ESLint para TypeScript que se basa en eslint-config-standard y tiene reglas específicas de TypeScript de @typescript-eslint/eslint-plugin.
    
    eslint-plugin-import: Este complemento tiene la intención de admitir la eliminación de pelusa de la sintaxis de importación/exportación de ES2015+ (ES6+) y evitar problemas con la ortografía incorrecta de las rutas de archivo y los nombres de importación.
    
    eslint-plugin-n: bifurcado de eslint-plugin-node v11.1.0. ya que el repositorio original parece que ya no se mantiene.
    
    eslint-plugin-promise: Aplique las mejores prácticas para las promesas de JavaScript.
    
    jest: Encantadoras pruebas de JavaScript
    
    nodemon: nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js al reiniciar automáticamente la aplicación del nodo cuando se detectan cambios en los archivos del directorio.
    
    serve: Serve lo ayuda a servir un sitio estático, una aplicación de una sola página o simplemente un archivo estático (no importa si está en su dispositivo o en la red local)
    
    ts-jest: Un transformador de Jest compatible con mapas de origen que le permite usar Jest para probar proyectos escritos en TypeScript.
    
    ts-node: Ejecución de TypeScript y REPL para node.js, con mapa de origen y compatibilidad nativa con ESM.
    
    typescript: TypeScript es un lenguaje para JavaScript a escala de aplicación. TypeScript agrega tipos opcionales a JavaScript que admiten herramientas para aplicaciones de JavaScript a gran escala para cualquier navegador, para cualquier host, en cualquier sistema operativo
    
    webpack: Webpack es un paquete de módulos. Su objetivo principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo.
    
    webpack-cli: webpack CLI proporciona un conjunto flexible de comandos para que los desarrolladores aumenten la velocidad al configurar un proyecto de paquete web personalizado.
    
    webpack-node-externals: Webpack le permite definir elementos externos: módulos que no se deben agrupar.
    
    webpack-shell-plugin: Este complemento le permite ejecutar cualquier comando de shell antes o después de las compilaciones del paquete web. 



# SCRIPTS:

build: Crea la transpilacion de TypeScript

start: Inicia el servidor

dev: Inicia el servidor utilizando concurrently y nodemon para que escuche los cambios de typescript y el codigo js

test: Inicia el test con jest

serve:coverage: Inicia el test de Jest, luego accede al reporte y levanta el servidor para mostrarlos por pantalla


# VARIABLES DE ENTORNO

PORT: Puerto donde se levantara el servidor