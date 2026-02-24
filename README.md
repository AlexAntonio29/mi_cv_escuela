

## Práctica CV Web para Perfil de TI (HTML, CSS, JS, Git/GitHub y Docker)

### 1. Objetivo

- Diseñar y desarrollar un CV web de una sola página para un perfil de TI utilizando HTML5, CSS3 y JavaScript. 
- Practicar el uso de Git y GitHub: commits frecuentes, ramas de trabajo y merges hacia la rama principal.
- Contenerizar el proyecto con Docker para ejecutarlo en un entorno controlado.

***

### 2. Estructura del repositorio (obligatoria)


```text
CV_TI_ApellidoNombre/
├─ README.md
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ assets/
│  └─ (imágenes, íconos si los usas)
├─ Dockerfile
└─ .gitignore   (opcional, recomendado)
```

- `index.html`: página principal del CV. 
- `css/styles.css`: hoja de estilos principal del sitio. 
- `js/main.js`: funcionalidades JavaScript del CV. 
- `assets/`: guarda aquí imágenes o íconos (por ejemplo, logos de redes sociales). 
- `Dockerfile`: instrucciones para crear la imagen Docker que servirá tu CV.
- `README.md`: descripción breve del proyecto (qué es, para qué sirve, tecnologías usadas). 

No cambies los nombres de carpetas ni archivos indicados arriba.  

***

### 3. Contenido obligatorio del CV

Tu CV web debe ser una **single page** que contenga, como mínimo, las siguientes secciones visibles en pantalla:

1. **Encabezado**  
   - Nombre completo.  
   - Rol deseado: por ejemplo, “Desarrollador Web Junior” o “Estudiante de Ingeniería en Sistemas”. 

2. **Sobre mí / Resumen profesional**  
   - 3 a 5 líneas que describan quién eres, tu perfil y objetivos profesionales en TI. 

3. **Habilidades técnicas**  
   - Lista de tecnologías que conoces: HTML5, CSS3, JavaScript, Git/GitHub, Docker (si ya lo has usado), y otras que domines. 

4. **Habilidades blandas**  
   - Ejemplos: trabajo en equipo, comunicación, organización, resolución de problemas. 

5. **Formación académica**  
   - Nombre de la carrera o curso, institución, periodo (ej. 2022–actualidad). 

6. **Proyectos**  
   - Al menos 2 proyectos: pueden ser tareas de la carrera, mini apps, repositorios de GitHub.  
   - Incluye nombre del proyecto, breve descripción (1–3 líneas) y enlace al repo o demo si existe.

7. **Contacto e integración con redes**  
   - Correo electrónico profesional (no apodos). 
   - Enlace obligatorio a tu perfil de GitHub. 
   - Opcional: LinkedIn y/o otra red profesional. 
   - Deben mostrarse como enlaces o íconos clicables claramente etiquetados.  

***

### 4. Uso obligatorio de Git y GitHub

1. **Crear el repositorio remoto**  
   - En GitHub crea un repositorio público con el nombre: `CV_TI_ApellidoNombre`. [docs.github](https://docs.github.com/es/repositories/creating-and-managing-repositories/best-practices-for-repositories)
   - Añade un `README.md` con una breve descripción del proyecto. [docs.github](https://docs.github.com/es/repositories/creating-and-managing-repositories/best-practices-for-repositories)

2. **Clonar e inicializar el trabajo local**  
   - Clona el repositorio en tu máquina.  
   - Crea la estructura de carpetas y archivos indicada en el punto 2. 
   - Realiza un **primer commit** con el mensaje: `XSXX: estructura inicial del proyecto`.

3. **Rama para estilos (CSS)**  
   - Crea y cambia a una rama llamada exactamente: `rama-estilos`.  
   - Desarrolla **solo** el diseño en `css/styles.css` y los enlaces de estilos en `index.html`. 
   - Realiza al menos **2 commits** en esta rama con mensajes descriptivos (por ejemplo: `feat: layout principal`, `feat: estilos responsivos`). 

4. **Merge de estilos a main**  
   - Cambia de nuevo a la rama `main`.  
   - Ejecuta un merge de `rama-estilos` hacia `main`.  
   - Si hay conflictos, resuélvelos antes de confirmar. 

5. **Rama para JavaScript (funcionalidad)**  
   - Crea y cambia a una rama llamada exactamente: `rama-js`.  
   - Añade funcionalidad en `js/main.js` (ver punto 6).  
   - Realiza al menos **2 commits** con mensajes descriptivos (por ejemplo: `feat: menú de navegación dinámico`, `feat: contador de proyectos`). 

6. **Merge de JavaScript a main**  
   - Cambia a `main` y haz merge de `rama-js` hacia `main`. 

Tu historial final debe mostrar **varios commits** distribuidos entre las ramas y merges claramente visibles en GitHub. [docs.github](https://docs.github.com/es/repositories/creating-and-managing-repositories/best-practices-for-repositories)

***

### 5. Docker: ejecución del CV en contenedor

1. En la raíz del proyecto (`CV_TI_ApellidoNombre/`) crea el archivo `Dockerfile`.
2. Usa una imagen base simple (por ejemplo Nginx) para servir tu `index.html` y archivos estáticos.
3. Asegúrate de que, al construir la imagen y correr el contenedor, puedas acceder a tu CV desde el navegador en `http://localhost:<puerto>`.

*(Si tu profesor lo indica en clase, te proporcionará un ejemplo básico de Dockerfile y comandos para construir y ejecutar la imagen.)*

***

### 6. Código base obligatorio (punto de partida)

Todos los alumnos **deben partir del siguiente código base** y personalizar el contenido y estilos. 

#### 6.1 `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CV - Nombre Apellido</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header class="header">
    <div class="container">
      <h1 class="name">Nombre Apellido</h1>
      <p class="role">Rol deseado (ej. Desarrollador Web Junior)</p>
      <nav class="nav">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#formacion">Formación</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  <main class="main">
    <section id="sobre-mi" class="section">
      <div class="container">
        <h2>Sobre mí</h2>
        <p>
          Escribe aquí un resumen breve (3–5 líneas) sobre tu perfil, intereses en TI
          y objetivos profesionales.
        </p>
      </div>
    </section>

    <section id="habilidades" class="section">
      <div class="container">
        <h2>Habilidades</h2>
        <h3>Habilidades técnicas</h3>
        <ul class="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Git / GitHub</li>
          <li>Docker (básico)</li>
        </ul>

        <h3>Habilidades blandas</h3>
        <ul class="skills-list">
          <li>Trabajo en equipo</li>
          <li>Comunicación</li>
          <li>Organización</li>
          <li>Resolución de problemas</li>
        </ul>
      </div>
    </section>

    <section id="formacion" class="section">
      <div class="container">
        <h2>Formación académica</h2>
        <article class="item">
          <h3>Nombre del programa / carrera</h3>
          <p>Institución educativa · Año de inicio – Año de fin (o Actualidad)</p>
        </article>
      </div>
    </section>

    <section id="proyectos" class="section">
      <div class="container">
        <h2>Proyectos</h2>
        <article class="item">
          <h3>Nombre del proyecto 1</h3>
          <p>Breve descripción del proyecto (1–3 líneas).</p>
          <a href="https://github.com/usuario/proyecto1" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </article>
        <article class="item">
          <h3>Nombre del proyecto 2</h3>
          <p>Breve descripción del proyecto (1–3 líneas).</p>
          <a href="https://github.com/usuario/proyecto2" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </article>

        <p id="contador-proyectos" class="project-counter">
          Total de proyectos: <span>2</span>
        </p>
      </div>
    </section>

    <section id="contacto" class="section">
      <div class="container">
        <h2>Contacto</h2>
        <p>Email: <a href="mailto:tu.correo@ejemplo.com">tu.correo@ejemplo.com</a></p>
        <ul class="social-list">
          <li>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <!-- Agrega otras redes profesionales si las tienes -->
        </ul>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <button id="btn-ir-arriba" class="btn">Ir al inicio</button>
      <p>&copy; <span id="anio-actual"></span> Nombre Apellido</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

#### 6.2 `css/styles.css`

```css
/* Estilos base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
  color: #222;
  background-color: #f5f5f5;
}

/* Contenedor general */
.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}

/* Header */
.header {
  background-color: #1f2933;
  color: #ffffff;
  padding: 1.5rem 0;
}

.name {
  font-size: 1.8rem;
  font-weight: 700;
}

.role {
  font-size: 1rem;
  margin-top: 0.25rem;
  opacity: 0.9;
}

/* Navegación */
.nav {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav a:hover {
  background-color: #ffffff;
  color: #1f2933;
}

/* Secciones */
.main {
  padding: 2rem 0 3rem;
}

.section {
  margin-bottom: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem 1rem;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
}

.section h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #111827;
}

.section h3 {
  font-size: 1.1rem;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  color: #1f2933;
}

/* Listas de habilidades y redes */
.skills-list,
.social-list {
  list-style: none;
  margin-top: 0.5rem;
}

.skills-list li,
.social-list li {
  margin-bottom: 0.25rem;
}

/* Items de formación y proyectos */
.item {
  margin-bottom: 1rem;
}

.item h3 {
  margin-bottom: 0.25rem;
}

.item a {
  color: #2563eb;
  text-decoration: none;
}

.item a:hover {
  text-decoration: underline;
}

/* Contador de proyectos */
.project-counter {
  margin-top: 0.75rem;
  font-weight: 600;
}

/* Footer */
.footer {
  background-color: #111827;
  color: #d1d5db;
  padding: 1rem 0;
}

.footer p {
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

/* Botón */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #1d4ed8;
}

/* Enlaces de redes sociales */
.social-list a {
  color: #2563eb;
  text-decoration: none;
}

.social-list a:hover {
  text-decoration: underline;
}

/* Responsivo básico */
@media (min-width: 768px) {
  .header {
    padding: 2rem 0;
  }

  .name {
    font-size: 2rem;
  }

  .nav {
    justify-content: flex-start;
  }

  .section {
    padding: 2rem 1.5rem;
  }
}
```

#### 6.3 `js/main.js`

```javascript
// Al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
  // Actualizar año del footer
  const yearSpan = document.getElementById("anio-actual");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Botón "Ir al inicio"
  const btnIrArriba = document.getElementById("btn-ir-arriba");
  if (btnIrArriba) {
    btnIrArriba.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Contador dinámico de proyectos (contando elementos .item dentro de #proyectos)
  const proyectosSection = document.getElementById("proyectos");
  const contador = document.querySelector("#contador-proyectos span");

  if (proyectosSection && contador) {
    const proyectos = proyectosSection.querySelectorAll(".item");
    contador.textContent = proyectos.length.toString();
  }
});
```

El alumno **no** debe eliminar estas funcionalidades básicas, pero sí puede mejorarlas (más efectos, más interacciones, etc.). 

***

### 7. Entregables

En Classroom deberás subir:  

1. URL del repositorio público en GitHub (`CV_TI_ApellidoNombre`). [docs.github](https://docs.github.com/es/repositories/creating-and-managing-repositories/best-practices-for-repositories)
2. Captura(s) de pantalla del CV corriendo en el navegador. 
3. Captura(s) de pantalla o descripción breve de los comandos usados en Docker para levantar el contenedor.
4. Opcional: URL de GitHub Pages si publicas tu CV. 

