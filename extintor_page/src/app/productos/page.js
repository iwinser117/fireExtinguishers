import Footer from "@/containers/Footer";
export default function Productos() {
  const listProductsCategory = [
    { id: 1, name: "extintores secos" },
    { id: 2, name: "extintores húmedos" },
    { id: 3, name: "extintores de espuma" },
    { id: 4, name: "extintores de polvo" },
    { id: 5, name: "extintores de dióxido de carbon" },
  ];
  const listGabinetes = [
    { id: 1, name: "gabinete de madera" },
    { id: 2, name: "gabinete de acero" },
    { id: 3, name: "gabinete de vidrio" },
  ];
  return (
    <main>
      <article>
        <header>
          <h2>Productos</h2>
        </header>
        <figure></figure>
        <p>lorem</p>
      </article>

      <section className="bg-yellow-600">
        <h2 className="text-2xl font-medium font-serif">Productos</h2>
        <main>
          <h3>Extintores</h3>
          <ul>
            {listProductsCategory.map((product, id) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <h3>Gabinetes</h3>
          <ul>
            {listGabinetes.map((itemGabinete) => (
              <li key={itemGabinete.id}>{itemGabinete.name}</li>
            ))}
          </ul>
        </main>
      </section>
      <Footer />
    </main>
  );
}
