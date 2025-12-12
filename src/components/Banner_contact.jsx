import ButtonSencillo from "./Button_simple";
const Banner_contact = () => {
    return (
      <section className="w-11/12 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-red-700 to-orange-500 text-white px-6 py-10 md:px-12 shadow-2xl">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, #fff 0, transparent 25%), radial-gradient(circle at 80% 0%, #fff 0, transparent 30%), radial-gradient(circle at 50% 80%, #fff 0, transparent 28%)" }} aria-hidden />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 md:max-w-xl">
              <p className="uppercase tracking-widest text-sm text-white/80">¿Necesitas ayuda ahora?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Agenda tu visita técnica o recarga inmediata</h2>
              <p className="text-white/80 text-lg">Coordinamos WhatsApp, llamada o correo para que recibas una respuesta ágil con costos claros y fechas confirmadas.</p>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">Atención 24/7</span>
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">Cobertura Bogotá y cercanías</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <ButtonSencillo
                text="Hablar por WhatsApp"
                image="/whatsapp-min.png"
                href="https://wa.me/573001234567123?text=Necesito%20cotizar%20extintores"
                color="success"
              />
              <p className="text-white/75 text-sm">O escríbenos a <a className="underline" href="mailto:micorreoextintores@apagate.com">micorreoextintores@apagate.com</a></p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner_contact;
  