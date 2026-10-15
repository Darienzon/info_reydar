# Triada CID: seguridad digital en claro

Infografia web en espanol que explica los tres principios fundamentales de la seguridad de la informacion con ejemplos cotidianos y recomendaciones faciles de aplicar. Esta pensada para que cualquier persona pueda comprenderlos, incluso sin experiencia en informatica o ciberseguridad.

## La triada CID

- **Confidencialidad:** la informacion solo debe estar al alcance de las personas autorizadas.
- **Integridad:** la informacion debe mantenerse correcta y completa, sin cambios no autorizados.
- **Disponibilidad:** la informacion debe poder consultarse cuando una persona autorizada la necesite.

La pagina presenta una analogia inicial, ejemplos de la vida diaria y acciones practicas para cada principio. La interfaz es adaptable a pantallas pequenas.

## Tecnologias

- React
- Vite
- CSS

## Requisitos

- Node.js y npm instalados.

## Empezar

Instala las dependencias y levanta el servidor local:

```bash
npm install
npm run dev
```

Vite mostrara en la terminal la direccion local para abrir la infografia.

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Genera la version de produccion en dist/
npm run preview  # Previsualiza la version compilada
npm run lint     # Revisa el codigo con Oxlint
```

## Estructura principal

- `src/App.jsx`: contenido y estructura de la infografia.
- `src/App.css`: estilos de los componentes y diseno adaptable.
- `src/index.css`: estilos globales.
- `index.html`: idioma, metadatos y titulo de la pagina.

## Autoria

Desarrollado por **Dariens Reyes**.
