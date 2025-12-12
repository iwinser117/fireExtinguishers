import React from "react";
import Image from "next/image";

export default function Image_render({ image, text }) {
  return (
    <article className="group relative h-64 md:h-72 w-full overflow-hidden rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition duration-300 bg-slate-900">
      <Image
        src={image.url}
        alt={text}
        fill
        className="object-cover brightness-95 group-hover:scale-105 transition duration-500"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 p-5 space-y-2 text-white">
        <p className="text-lg font-semibold">{text}</p>
        {image.detail && (
          <p className="text-sm text-white/80 leading-relaxed max-w-md">{image.detail}</p>
        )}
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300">
          Ver más detalles
          <span className="h-px w-8 bg-amber-300" />
        </span>
      </div>
    </article>
  );
}