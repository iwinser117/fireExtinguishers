import Image_render from "@/components/Image_rendering";

const ImageContainerMain = () => {
  const images = [
    {
      id: 1,
      url: "/img3-min.jpg",
      text: "Venta inmediata",
      detail: "Stock disponible y entrega en 24h para proyectos y renovaciones.",
    },
    {
      id: 2,
      url: "/img2-min.jpg",
      text: "Mantenimiento programado",
      detail: "Visitas periódicas, pruebas hidrostáticas y recargas certificadas.",
    },
    {
      id: 3,
      url: "/img2-min.jpg",
      text: "Recarga en sitio",
      detail: "Técnicos móviles con evidencia fotográfica y sello de vigencia.",
    },
  ];

  return (
    <section className="w-11/12 mx-auto max-w-6xl">
      <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">Servicios rápidos</p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Equipo listo cuando lo necesitas</h3>
          </div>
          <p className="text-slate-600 md:max-w-md">Coordinamos logística y documentación para que tu operación no se detenga: evidencias, actas y entrega inmediata.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {images.map((image) => (
            <Image_render key={image.id} image={image} text={image.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContainerMain;
