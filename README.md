## Fire Extinguishers landing

Sitio en Next.js para venta, recarga y mantenimiento de extintores. Incluye una landing con hero llamativo, servicios destacados, sectores atendidos y CTA a WhatsApp.

### Requisitos
- Node.js 18+
- npm (o pnpm/yarn/bun)

### Ejecutar en desarrollo
```bash
npm install
npm run dev
# abre http://localhost:3000
```

### Qué hay en la página principal
- Hero con CTA a WhatsApp, métricas de servicio y lista de kit listo para instalar.
- Tarjetas de servicios (venta, mantenimiento, inspecciones) con textos orientados al cliente.
- Grid visual de servicios rápidos y sectores atendidos con imágenes y overlays.
- Banner de contacto con acceso directo a correo y WhatsApp.
- Footer oscuro con chips de certificaciones, contacto y bloques de aliados/redes sociales.

### Personalizar copys y enlaces
- Edita la sección hero y los CTA en `src/components/Hero_image.jsx` y `src/components/Banner_contact.jsx`.
- Ajusta sectores y rutas en `src/components/Services_locations.jsx`.
- Actualiza contactos en `src/containers/Footer.jsx`.

### Producción
Construye con:
```bash
npm run build
npm run start
```
Despliega en tu plataforma preferida (Vercel recomendado para Next.js).
