import { Divider, Avatar } from "@nextui-org/react";
const Footer = () => {
  return (
    <section className="container">
      <Divider />
      <footer className="flex flex-col w-full">
        <div className="footerHeader m-4">
          <h3 className="text-xl text-center font-mono font-semibold m-2">
            Encabezado del footer
          </h3>
          <p className="flex">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, earum
            velit! Laudantium officia excepturi nobis suscipit doloremque minus,
            possimus quae veritatis et ut tenetur ex amet libero neque, earum
            alias!
          </p>
        </div>
        <main className="m-4 flex flex-col sm:flex-row md:flex-row">
          <div className="w-full sm:w-1/3 md:w-1/3 m-2">
            <h3 className="text-center text-xl font-semibold">
              Información de contacto
            </h3>
            <p className="p-2 text-pretty">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolorem aut nemo eligendi odit at excepturi placeat atque numquam
              veniam maiores non, nostrum voluptatibus provident molestias
              tempora ab debitis consequatur.
            </p>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 m-2">
            <h3 className="text-center text-xl font-semibold">
              Redes sociales
            </h3>
            <ul className="flex ul-footer m-4">
              <li>
                <a href="#">
                  <Avatar
                    isBordered
                    radius="sm"
                    src="facebook.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Avatar
                    isBordered
                    radius="sm"
                    src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136_1280.png"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Avatar
                    isBordered
                    radius="sm"
                    src="https://cdn.pixabay.com/photo/2016/11/01/12/09/twitter-logo-1788039_1280.jpg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 m-2">
            <h3 className="text-center text-xl font-semibold">Contacto</h3>
            <p>telefono</p>
            <p>correo</p>
          </div>
        </main>
        <section className="m-4">
          <p className="text-center text-small p-footer">v-2024.09.08</p>
        </section>
      </footer>
    </section>
  );
};
export default Footer;
