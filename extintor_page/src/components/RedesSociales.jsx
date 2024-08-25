import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FaCreditCard,
  FaPaypal,
  FaBitcoin,
  FaMoneyBillWave,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    color: "bg-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    color: "bg-pink-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    color: "bg-sky-500",
  },
];

const paymentMethods = [
  { name: "Tarjeta de Crédito", icon: FaCreditCard },
  { name: "PayPal", icon: FaPaypal },
  { name: "Bitcoin", icon: FaBitcoin },
  { name: "Efectivo", icon: FaMoneyBillWave },
];

export default function FooterSocial() {
  return (
    <div className="w-full sm:full md:w-1/2 m-2 bg-gray-100 rounded-lg p-6 shadow-md flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-center mb-6">
        <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Redes sociales
        </h3>
        <ul className="flex justify-center space-x-6">
          {socialMedia.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                className={`block p-3 rounded-full ${social.color} text-white hover:opacity-80 transition duration-300`}
              >
                <social.icon className="text-2xl" />
                <span className="sr-only">{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Medios de pago
        </h3>
        <ul className="flex justify-center flex-wrap gap-4">
          {paymentMethods.map((method) => (
            <li key={method.name} className="flex flex-col items-center">
              <div className="p-3 bg-gray-200 rounded-full">
                <method.icon className="text-3xl text-gray-600" />
              </div>
              <span className="mt-2 text-sm text-gray-600">{method.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
