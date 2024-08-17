import Link from "next/link";
import Image from "next/image";

export default function RedesSociales() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 m-2">
      <h3 className="text-center text-xl font-semibold">Redes sociales</h3>
      <ul className="flex justify-center m-4">
        <li className="mx-4">
          <Link href="https://facebook.com" passHref>
            <div className="social-icon-wrapper">
              <Image
                src="/facebook.jpg"
                width={50}
                height={50}
                alt="Facebook"
              />
            </div>
          </Link>
        </li>
        <li className="mx-4">
          <Link href="https://instagram.com" passHref>
            <div className="social-icon-wrapper">
              <Image
                src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136_1280.png"
                width={50}
                height={50}
                alt="Instagram"
              />
            </div>
          </Link>
        </li>
        <li className="mx-4">
          <Link href="https://twitter.com" passHref>
            <div className="social-icon-wrapper">
              <Image
                src="https://cdn.pixabay.com/photo/2016/11/01/12/09/twitter-logo-1788039_1280.jpg"
                width={50}
                height={50}
                alt="Twitter"
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
