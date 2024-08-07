import ButtonSencillo from "./Button_simple";
const Banner_contact = () => {
    return (
      <section className="">
        <div className="container h-48 bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center text-white">
          <div className="row text-center fire">
            <a href="" className="text-4xl font-bold drop-shadow-lg">Contacto</a>
            <p className="m-2 text-lg">Estamos aquí para ayudarte</p>
            <ButtonSencillo image="whatsapp.png" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner_contact;
  