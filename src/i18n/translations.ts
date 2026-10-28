export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      demos: "Demos",
    },
    a11y: {
      skipToContent: "Saltar al contenido",
    },
    hero: {
      kicker: "// Desarrollador Full Stack · Jujuy, AR",
      greeting: "HOLA, SOY MAURICIO RIOS.",
      value: "Construyo interfaces web rápidas y accesibles con React y TypeScript, y las conecto de punta a punta con Node.js.",
      availability: "Disponible para nuevos proyectos",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      scroll: "Ver más",
    },
    about: {
      title: "Un poco sobre mí",
      paragraph:
        "¡Hola! Soy Mauricio, desarrollador web y analista programador universitario con experiencia en proyectos individuales y colaborativos. A lo largo de mi trayectoria, he trabajado con diversas tecnologías, adaptándome rápidamente a diferentes entornos y roles. Me destaco por ser una persona social, con excelentes habilidades de comunicación y versatilidad tanto técnica como profesional. Mi objetivo es crecer constantemente en mi carrera, aprendiendo y adquiriendo nuevas habilidades que me permitan llevar cada proyecto al siguiente nivel y superar mis propios estándares.",
    },
    formation: {
      title: "Mi formación",
      tabs: {
        works: "Trabajos",
        education: "Educación",
        skills: "Habilidades",
        contact: "Contacto",
      },
    },
    work: [
      {
        title: "YagLab — julit",
        period: "en curso",
        points: [
          "Colaboración en el desarrollo de julit, plataforma B2B de pagos con stablecoins (USDC).",
          "Integración de la aplicación con la blockchain de Solana.",
        ],
      },
      {
        title: "Ministerio Público de la Acusación",
        points: [
          "Implementación de tecnologías web como JavaScript en ReactJs para el desarrollo de interfaces de usuario dinámicas e interactivas.",
          "Creación y uso de servicios, para la gestión y visualización de datos utilizando NodeJs.",
        ],
      },
      {
        title: "Freelancer",
        points: [
          "Página web para registro de Check-in en hotel, utilizando MySql, NodeJs, Angular y Typescript.",
          "Proyecto de aplicación web estilo red social, utilizando el ORM Prisma con Mysql, NodeJs, Angular y Typescript.",
        ],
      },
      {
        title: "Facultad de ciencias economicas",
        points: [
          "Ayudante en capacitación de herramientas ofimáticas",
          "Planificación de programa de aprendizaje.",
          "Dictado de clases virtuales y presenciales.",
        ],
      },
    ],
    education: [
      { title: "Técnico informático", place: "Escuela de minas Dr. Horacio Carrillo." },
      { title: "Analista programador universitario", place: "Universidad Nacional de Jujuy." },
    ],
    skills: {
      text: "Formé parte de proyectos donde empleé diversas tecnologías. En el desarrollo frontend, implementé TypeScript con Angular y JavaScript/TypeScript con React y Next.js, adaptándome a las necesidades específicas de cada proyecto. Para el desarrollo backend, trabajé con Node.js y gestioné bases de datos relacionales (MySQL, PostgreSQL) y no relacionales (MongoDB). Actualmente también desarrollo en el ecosistema Web3 con Solana y USDC, y utilizo Supabase como backend.",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos trabajos y colaboraciones en los que participé",
      repoLabel: "Ver en GitHub",
      liveLabel: "Ver sitio en vivo",
      cards: [
        {
          title: "Pomoplane.",
          body: "App de estudio estilo pomodoro con metáfora de vuelo: cada bloque de foco avanza un avión sobre un globo 3D hacia el destino elegido, y al arribar el pasaporte queda sellado. PWA instalable que funciona offline, con timers que sobreviven recargas y sincronización entre dispositivos mediante Supabase y login con Google.",
          footer: "Proyecto personal — diseño y desarrollo",
        },
        {
          title: "Mapa de herramientas.",
          body: "Desarrollé un mapa de herramientas para el alta y baja de marcadores personalizados utilizando la API oficial de Google maps, renderizando los mismos de acuerdo a la zona mostrada en pantalla. Se gestionaron los estados de las herramientas activas con Redux toolkit.",
          footer: "Rol: Front-end developer con React",
        },
        {
          title: "Agenda de turnos.",
          body: "Desarrollé una agenda para la gestión ordenada de turnos del ministerio de salud de mi provincia. El mismo carga automaticamente la información del/los turnos desde la base de datos y permite administrar sus estados de manera rapida y sencilla. Se utilizo Redux toolkit para metodos y estados.",
          footer: "Rol: Front-end developer con React",
        },
        {
          title: "Dashboard para calculos de costos.",
          body: "Desarrollé un dashboard para gestionar pedidos de información de costos, mediante el cual se calculan los precios de los insumos utilizados en cada pedido a traves de indices especificados por el usuario, ademas de contar con el resto de operaciones necesarias en el sector, como editar o asignar responsable, eliminar pedido, etc.",
          footer: "Rol: Front-end developer con React",
        },
        {
          title: "Sistema de check-in para hotel.",
          body: "Participé en el desarrollo de un sistema de registro de ingresos en mi provincia, registrando la entrada al establecimiento con un formulario de ingreso y la posibilidad de firmar mediante canvas en pantalla. Además, es posible administrar empleados mediante permisos almacenados en base de datos.",
          footer: "Rol: Fullstack con Angular, NodeJs y MongoDB",
        },
        {
          title: "julit — Pagos B2B con USDC.",
          body: "Colaboro en el desarrollo de julit, una plataforma B2B de pagos con stablecoins (USDC), dentro de la organización YagLab. Trabajo en la integración de la aplicación con la blockchain de Solana.",
          footer: "Rol: Full Stack / Web3 developer (proyecto en curso)",
        },
        {
          title: "Landing page para lugar de atracciones naturales",
          body: "Fui parte del desarrollo de una landing page promocional de un emprendimiento local, enfocado en actividades interactivas en terreno montañoso.",
          footer: "Rol: Front-end",
        },
      ],
    },
    demos: {
      heading: "Demos interactivas",
      subtitle: "Probá las aplicaciones del escritorio",
      dock: {
        stats: "Estadísticas",
        calendar: "Calendario",
        form: "Formularios",
        terminal: "Terminal",
      },
      dialogTitles: {
        stats: "Estadísticas",
        calendar: "Calendario",
        map: "Mapa",
        form: "Formulario",
        terminal: "Terminal",
      },
      screenTitle: "demos — mauricio.rios",
      calendar: {
        heading: "En este calendario están reflejados los días feriados en Argentina del corriente año.",
        error: "Error al cargar los feriados",
      },
      form: {
        name: "Nombre",
        lastName: "Apellido",
        email: "Correo Electrónico",
        password: "Contraseña",
        phone: "Teléfono",
        placeholders: {
          name: "Ingresa tu nombre",
          lastName: "Ingresa tu apellido",
          email: "Ingresa tu correo electrónico",
          password: "Ingresa tu contraseña",
          phone: "Ingresa tu número de teléfono",
        },
        errors: {
          name: "El nombre es obligatorio",
          lastName: "El apellido es obligatorio",
          emailInvalid: "El correo debe ser válido",
          email: "El correo es obligatorio",
          passwordMin: "La contraseña debe tener al menos 6 caracteres",
          password: "La contraseña es obligatoria",
          phoneDigits: "El número de teléfono debe contener solo números",
          phone: "El número de teléfono es obligatorio",
          general: "Algunos campos son inválidos. Por favor, verifica la información.",
        },
        submit: "Registrarse",
      },
      stats: {
        league: "Liga:",
        season: "Temporada:",
        error: "Error al cargar los datos",
        empty: "No hay datos disponibles",
        champion: "CAMPEÓN DE LIGA",
        labels: { played: "PJ", win: "V", draw: "E", loss: "D" },
      },
      error: "Esta demo falló al cargar. Cerrá la ventana y probá de nuevo.",
      terminal: {
        welcome: "Bienvenido. Escribí 'help' para ver los comandos disponibles.",
        help: "comandos:  whoami · skills · projects · experience · contact · clear",
        whoami: "Mauricio Ríos — Software developer / Analista Programador Universitario.\nJujuy, Argentina.",
        skills: "TypeScript · React · Next.js · Angular · Node.js\nMySQL · PostgreSQL · MongoDB · Solana · Web3 · Supabase",
        projects: "julit (pagos B2B con USDC — integración con Solana)\npomoplane · agenda de turnos · dashboard de costos · check-in hotel · mapa de herramientas",
        experience: "YagLab — julit (en curso)\nMinisterio Público de la Acusación\nFreelance\nFacultad de Ciencias Económicas (asistente)",
        contact: "riosmaurii@gmail.com\ngithub.com/RiosMauricio\nlinkedin.com/in/rios-mauricio-4504532b9",
        unknown: (cmd: string) => `comando no encontrado: "${cmd}". Probá 'help'.`,
      },
    },
    footer: {
      role: "Analista Programador Universitario",
      location: "Jujuy, Argentina",
      builtWith: "Hecho con React · Vite · Chakra UI",
      backToTop: "Volver arriba",
    },
    notFound: {
      text: "Esta página no existe — como esos bugs que solo pasan en producción.",
      button: "Volver al inicio",
    },
  },
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      demos: "Demos",
    },
    a11y: {
      skipToContent: "Skip to content",
    },
    hero: {
      kicker: "// Full Stack Developer · Jujuy, AR",
      greeting: "HI, I'M MAURICIO RIOS.",
      value: "I build fast, accessible web interfaces with React and TypeScript, and wire them end to end with Node.js.",
      availability: "Open to new opportunities",
      ctaProjects: "View projects",
      ctaCv: "Download CV (ES)",
      scroll: "See more",
    },
    about: {
      title: "A bit about me",
      paragraph:
        "Hi! I'm Mauricio, a web developer and university programming analyst with experience in individual and collaborative projects. Throughout my career I've worked with a wide range of technologies, adapting quickly to different environments and roles. I'm a social person with strong communication skills and both technical and professional versatility. My goal is to keep growing in my career, learning and gaining new skills that let me take every project to the next level and exceed my own standards.",
    },
    formation: {
      title: "My background",
      tabs: {
        works: "Experience",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
      },
    },
    work: [
      {
        title: "YagLab — julit",
        period: "ongoing",
        points: [
          "Contributor to julit, a B2B stablecoin (USDC) payments platform.",
          "Integration of the app with the Solana blockchain.",
        ],
      },
      {
        title: "Public Prosecutor's Office (Ministerio Público de la Acusación)",
        points: [
          "Built dynamic, interactive user interfaces with JavaScript and React.",
          "Created and consumed Node.js services for data management and visualization.",
        ],
      },
      {
        title: "Freelancer",
        points: [
          "Hotel check-in web app built with MySQL, Node.js, Angular and TypeScript.",
          "Social-network-style web app using Prisma ORM with MySQL, Node.js, Angular and TypeScript.",
        ],
      },
      {
        title: "Faculty of Economic Sciences",
        points: [
          "Teaching assistant — office tools training",
          "Designed the learning program.",
          "Taught virtual and in-person classes.",
        ],
      },
    ],
    education: [
      { title: "Computer Technician", place: "Escuela de minas Dr. Horacio Carrillo." },
      { title: "University Programming Analyst", place: "Universidad Nacional de Jujuy." },
    ],
    skills: {
      text: "I've worked on projects using a wide range of technologies. On the frontend I build with TypeScript and Angular, and JavaScript/TypeScript with React and Next.js, adapting to each project's needs. On the backend I work with Node.js and manage both relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases. I currently also build in the Web3 ecosystem with Solana and USDC, and use Supabase as a backend.",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work and collaborations",
      repoLabel: "View on GitHub",
      liveLabel: "Visit live site",
      cards: [
        {
          title: "Pomoplane.",
          body: "Pomodoro-style study app with a flight metaphor: each focus block moves a plane across a 3D globe toward the chosen destination, and arriving stamps your passport. Installable offline PWA with timers that survive reloads and cross-device sync via Supabase and Google login.",
          footer: "Personal project — design and development",
        },
        {
          title: "Tool map.",
          body: "Built a custom marker management map using the official Google Maps API, rendering markers based on the area visible on screen. Active tool state managed with Redux Toolkit.",
          footer: "Role: Front-end developer with React",
        },
        {
          title: "Appointment scheduler.",
          body: "Built an appointment scheduler for my province's Ministry of Health. It loads appointment data automatically from the database and lets staff manage statuses quickly and easily. Redux Toolkit for methods and state.",
          footer: "Role: Front-end developer with React",
        },
        {
          title: "Cost-calculation dashboard.",
          body: "Built a dashboard to manage cost-information requests, calculating supply prices from indices defined by the user, plus the sector's other operations like editing, assigning an owner or deleting a request.",
          footer: "Role: Front-end developer with React",
        },
        {
          title: "Hotel check-in system.",
          body: "Helped build a guest registration system for my province: entry form plus on-screen canvas signature. Employees are managed through permissions stored in the database.",
          footer: "Role: Full stack with Angular, Node.js & MongoDB",
        },
        {
          title: "julit — B2B USDC payments.",
          body: "I collaborate on julit, a B2B stablecoin (USDC) payments platform, at the YagLab organization. I work on integrating the app with the Solana blockchain.",
          footer: "Role: Full stack / Web3 developer (ongoing)",
        },
        {
          title: "Landing page for a nature-attractions venue",
          body: "Part of the team that built a promotional landing page for a local business focused on interactive outdoor mountain activities.",
          footer: "Role: Front-end",
        },
      ],
    },
    demos: {
      heading: "Interactive demos",
      subtitle: "Try the desktop apps",
      dock: {
        stats: "Stats",
        calendar: "Calendar",
        form: "Forms",
        terminal: "Terminal",
      },
      dialogTitles: {
        stats: "Stats",
        calendar: "Calendar",
        map: "Map",
        form: "Form",
        terminal: "Terminal",
      },
      screenTitle: "demos — mauricio.rios",
      calendar: {
        heading: "This calendar shows Argentina's public holidays for the current year.",
        error: "Failed to load holidays",
      },
      form: {
        name: "First name",
        lastName: "Last name",
        email: "Email",
        password: "Password",
        phone: "Phone",
        placeholders: {
          name: "Enter your first name",
          lastName: "Enter your last name",
          email: "Enter your email",
          password: "Enter your password",
          phone: "Enter your phone number",
        },
        errors: {
          name: "First name is required",
          lastName: "Last name is required",
          emailInvalid: "Email must be valid",
          email: "Email is required",
          passwordMin: "Password must be at least 6 characters",
          password: "Password is required",
          phoneDigits: "Phone number must contain digits only",
          phone: "Phone number is required",
          general: "Some fields are invalid. Please check the information.",
        },
        submit: "Sign up",
      },
      stats: {
        league: "League:",
        season: "Season:",
        error: "Failed to load data",
        empty: "No data available",
        champion: "LEAGUE CHAMPION",
        labels: { played: "GP", win: "W", draw: "D", loss: "L" },
      },
      error: "This demo failed to load. Close the window and try again.",
      terminal: {
        welcome: "Welcome. Type 'help' to see the available commands.",
        help: "commands:  whoami · skills · projects · experience · contact · clear",
        whoami: "Mauricio Ríos — Software developer / University Programming Analyst.\nJujuy, Argentina.",
        skills: "TypeScript · React · Next.js · Angular · Node.js\nMySQL · PostgreSQL · MongoDB · Solana · Web3 · Supabase",
        projects: "julit (B2B USDC payments — Solana integration)\npomoplane · appointment scheduler · cost dashboard · hotel check-in · tool map",
        experience: "YagLab — julit (ongoing)\nPublic Prosecutor's Office\nFreelance\nFaculty of Economic Sciences (assistant)",
        contact: "riosmaurii@gmail.com\ngithub.com/RiosMauricio\nlinkedin.com/in/rios-mauricio-4504532b9",
        unknown: (cmd: string) => `command not found: "${cmd}". Try 'help'.`,
      },
    },
    footer: {
      role: "University Programming Analyst",
      location: "Jujuy, Argentina",
      builtWith: "Built with React · Vite · Chakra UI",
      backToTop: "Back to top",
    },
    notFound: {
      text: "This page doesn't exist — like those bugs that only happen in production.",
      button: "Back home",
    },
  },
};

export type Translations = (typeof translations)["es"];
