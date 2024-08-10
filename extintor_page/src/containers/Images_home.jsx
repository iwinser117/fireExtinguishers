import Image_render from "@/components/Image_rendering";

const image_container_main = () => {
  const images = [
    { id: 1, url: "img1.jpg", text: "Venta" },
    { id: 2, url: "img2.jpg", text: "Recarga" },
    { id: 3, url: "img3.jpg", text: "Mantenimiento" },
  ];

  return (
    <main className="w-10/12 mx-auto container">
      <div className="flex flex-col content-around items-center text-medium sm:flex-col md:flex-row">
        {images.map((image) => (
          <div key={image.id} className="m-2 w-full flex justify-center">
            <Image_render image={image} text={image.text} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default image_container_main;
