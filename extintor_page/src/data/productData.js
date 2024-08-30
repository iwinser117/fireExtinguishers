export const products = [
  {
    id: 1,
    name: "extintores secos",
    image: "./extintores/EXTINTOR_CON_CO2.jpg",
    description:
      "Los extintores secos contienen polvo químico seco y son efectivos contra fuegos de clase A, B y C. Son ideales para áreas con equipos eléctricos y líquidos inflamables.",
  },
  {
    id: 2,
    name: "extintores húmedos",
    image: "./extintores/EXTINTOR_CON_ESPUMA.jpg",
    description:
      "Los extintores húmedos utilizan agua con aditivos especiales. Son excelentes para fuegos de clase A y seguros para usar en áreas con presencia humana. Ofrecen un enfriamiento rápido y eficaz.",
  },
  {
    id: 3,
    name: "extintores de espuma",
    image: "./extintores/EXTINTOR_CON_CO2.jpg",
    description:
      "Los extintores de espuma son efectivos contra fuegos de clase A y B. Crean una capa que sofoca el fuego y evita la reignición, siendo ideales para incendios de líquidos inflamables.",
  },
  {
    id: 4,
    name: "extintores de polvo",
    image: "./extintores/EXTINTOR_CON_POLVO_QUIMICO_SECO.jpg",
    description:
      "Los extintores de polvo contienen polvo químico seco y son versátiles, efectivos contra fuegos de clase A, B y C. Son ideales para áreas de alto riesgo como talleres y cocinas industriales.",
  },
  {
    id: 5,
    name: "extintores de dióxido de carbono",
    image: "./extintores/EXTINTOR_CON_CO2.jpg",
    description:
      "Los extintores de CO2 son ideales para fuegos eléctricos y de líquidos inflamables (clase B y C). No dejan residuos, lo que los hace perfectos para áreas con equipos sensibles como servidores o laboratorios.",
  },
];
export const gabinetes = [
  {
    id: 1,
    name: "gabinete de madera",
    description:
      "Gabinetes fabricados en madera resistente, ideales para interiores y entornos con bajo riesgo de corrosión. Proporcionan un almacenamiento estético y funcional para equipos de emergencia.",
    image: "./gabinetes/gabinete1.webp",
  },
  {
    id: 2,
    name: "gabinete de acero",
    description:
      "Gabinetes de acero inoxidable diseñados para máxima durabilidad en ambientes industriales y exteriores. Resisten condiciones adversas y protegen eficazmente el equipo contra daños.",
    image: "./gabinetes/gabinete2.webp",
  },
  {
    id: 3,
    name: "gabinete de vidrio",
    description:
      "Gabinetes de vidrio templado que ofrecen visibilidad completa del contenido. Ideales para áreas donde se requiere acceso rápido y fácil al equipo de emergencia.",
    image: "./gabinetes/Gabinetetipo.jpg",
  },
];

export const senales = [
  {
    id: 1,
    name: "señal de emergencia",
    description:
      "Señales de emergencia altamente visibles que indican rutas de escape y puntos de reunión. Esenciales para guiar a las personas en situaciones de emergencia.",
    image: "./senales/senal1.jpg",
  },
  {
    id: 2,
    name: "señal de advertencia",
    description:
      "Señales de advertencia que alertan sobre posibles peligros o riesgos en el área. Utilizadas para prevenir accidentes y mantener la seguridad en el lugar de trabajo.",
    image: "./senales/senal2.jpg",
  },
  {
    id: 3,
    name: "señal de información",
    description:
      "Señales informativas que proporcionan instrucciones y detalles importantes en diversas situaciones. Esenciales para la orientación y la comunicación clara.",
    image: "../senales/senal3.jpg",
  },
];
export const tanques = [
  {
    id: 1,
    name: "tanques subterráneos",
    description:
      "Tanques subterráneos diseñados para almacenar grandes volúmenes de agua o combustibles de manera segura y eficiente. Ideales para instalaciones industriales y comerciales.",
    image: "./tanques/tanque1.jpg",
  },
  {
    id: 2,
    name: "tanques elevados",
    description:
      "Tanques elevados que proporcionan almacenamiento de agua a gran altura, garantizando una presión constante en sistemas de distribución. Son comunes en edificios y comunidades.",
    image: "./tanques/tanque2.jpg",
  },
  {
    id: 3,
    name: "impermeabilización",
    description:
      "Servicios de impermeabilización para tanques que aseguran la protección contra filtraciones y daños estructurales. Garantizan la durabilidad y seguridad del almacenamiento.",
    image: "./tanques/tanque3.jpg",
  },
];

export const luces = [
  {
    id: 1,
    name: "luces de emergencia",
    description:
      "Luces de emergencia que se activan automáticamente en caso de corte de energía. Proporcionan iluminación esencial para la evacuación segura y rápida en situaciones críticas.",
    image: "./luces/luces1.jpg",
  },
  {
    id: 2,
    name: "luces externas",
    description:
      "Luces externas diseñadas para iluminar áreas al aire libre, como estacionamientos y entradas. Son resistentes a la intemperie y ofrecen una iluminación potente y duradera.",
    image: "./luces/luces2.jpg",
  },
  {
    id: 3,
    name: "cambio de lámparas",
    description:
      "Servicios de cambio de lámparas para mantener una iluminación eficiente y adecuada en cualquier entorno. Incluye la instalación y sustitución de lámparas de diversas especificaciones.",
    image: "./luces/luces3.jpg",
  },
];

export const category = [
  {
    name: "Extintores",
    description: "Ideales para fuegos eléctricos y líquidos inflamables.",
    imageSrc: "./extintores/EXTINTOR_CON_CO2.jpg"
  },
  {
    name: "Señalización",
    description: "Para alertar y guiar a las personas en situaciones de peligro, como evacuaciones o emergencias.",
    imageSrc: "./senales/senal3.jpg"
  },
  {
    name: "Iluminación",
    description: "Su función principal es asegurar la seguridad de las personas, guiándolas hacia las salidas o zonas seguras y evitando el pánico.",
    imageSrc: "./luces/luces2.jpg"
  }
]