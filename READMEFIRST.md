#################### Autogenerado ####################
Prueba tecnica Nexion Forms

Objetivo:
    Se requiere una aplicación web desarrollada con el framework de angular en la cual el usuario(Admin) pueda crear formularios dinámicos para que un usuario(cliente) deba responder y se pueda almacenar su información, un login sencillo donde tengamos un usuario admin y otro cliente. También se necesita que el menú se cargue dependiendo el rol del usuario.
    Backend y BD:
        Para simular el consumo de servicios y la persistencias de datos se recomienda utilizar:
        https://www.npmjs.com/package/json-server

Pasos:
    Instalar Node.js y Angular CLI en MacOS:
        Descarga e instala Node.js en MacOS desde el sitio oficial https://nodejs.org/
        Abre una terminal y ejecuta el comando npm install -g @angular/cli para instalar Angular CLI
OK 08/05/2023

    Crear un nuevo proyecto Angular:
        Abre una terminal y ejecuta el comando ng new nombre-proyecto para crear un nuevo proyecto de Angular
OK 08/05/2023

    Configurar el backend con json-server:
        Instala json-server en tu proyecto Angular mediante el comando npm install --save json-server
        Crea un archivo db.json en la raíz de tu proyecto y configura los datos que necesitas almacenar
            GET /users: Devuelve la lista de usuarios.
            GET /users/:id: Devuelve un usuario específico por su identificador único.
            POST /users: Agrega un nuevo usuario a la lista.
            PUT /users/:id: Actualiza un usuario existente por su identificador único.
            DELETE /users/:id: Elimina un usuario existente por su identificador único.
            GET /forms: Devuelve la lista de formularios.
            GET /forms/:id: Devuelve un formulario específico por su identificador único.
            POST /forms: Agrega un nuevo formulario a la lista.
            PUT /forms/:id: Actualiza un formulario existente por su identificador único.
            DELETE /forms/:id: Elimina un formulario existente por su identificador único.
        En el archivo package.json de tu proyecto, agrega un script para iniciar json-server con el comando json-server --watch db.json
            Para ejecutar el script, abre una terminal en la raíz de tu proyecto y escribe 
            npm run json-server
OK 08/05/2023

    Crear el sistema de login:
        Crea un componente para el login y utiliza Reactive Forms para manejar el formulario de inicio de sesión
            Ejecuta ng generate component login -> (.css, .html, .spec.ts, .ts)
            En el archivo login.component.html, crea un formulario utilizando Reactive Forms (para usuario y la contraseña)
            En el archivo login.component.ts, importa FormGroup y FormBuilder desde @angular/forms e instancialo (con sus respectivas validaciones)
            Agrega la lógica de inicio de sesión en la función onSubmit() (De los siguientes pasos)
        Utiliza LocalStorage para almacenar el token de autenticación del usuario
            Crea la variable para el token
            Guarda el token al momento de inicio de sesion
            Verifica si el token sta en LocalStorage
            Recupera el token del LocalStorage (getter)
        Crea un Guard para proteger las rutas que solo el usuario administrador pueda acceder
            Crear el servicio AdminAuthGuardService 
                ng generate service AdminAuthGuard
            Verificar los roles del usuario (ver si es admin)
            Agregar el servicio de guardia de la ruta a proteger con el rol (importar AdminAuthGuardService a las rutas que se desea proteger)
            import { AdminAuthGuardService } from './admin-auth-guard.service';
OK 08/05/2023

    Crear el sistema de formularios dinámicos:
        Utiliza Reactive Forms para crear los formularios dinámicos que el cliente debe responder
        Utiliza Directivas personalizadas para validar los input del formulario
        Utiliza Pipes personalizados para mostrar el nombre completo del usuario
OK 08/05/2023

    Usar lazy loading para cargar los módulos de manera eficiente:
        Crea un módulo para el administrador y otro para el cliente y utiliza la estrategia de precarga para optimizar la carga de los módulos

    Usar Interceptors para enviar el token de autenticación en las peticiones:
        Crea un Interceptor para agregar el token de autenticación en las peticiones
        Utiliza Interceptors para manejar los errores de la petición y mostrar alertas de error

    Utilizar BehaviorSubject o ngrx para manejar el estado de la aplicación:
        Utiliza BehaviorSubject o ngrx para manejar el estado de la aplicación y asegurar que la aplicación sea modular

    Utilizar animaciones y SEO:
        Utiliza las animaciones de Angular para mejorar la experiencia de usuario
        Utiliza técnicas de SEO para optimizar la visibilidad de la aplicación en los motores de búsqueda.

    Recuerda que para evaluar la aplicación, se valorará la modularidad, el uso de estrategias de precarga de módulos, el manejo de estados con BehaviorSubject o ngrx, el uso de Directivas y Pipes personalizados, el uso de Reactive Forms, el manejo de errores con Interceptors y la retroalimentación al usuario a través de alertas de errores y animaciones