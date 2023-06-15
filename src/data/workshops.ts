import { StaticImageData } from "next/image";

interface Link {
  text: string;
  url: string;
}

export interface Workshop {
  title: string;
  speakers: string[];
  imgUrl: StaticImageData | string | undefined;
  description: string;
  date: Link;
  tags: string[];
  location: Link;
  registerLink: `https://${string}`;
}

export const workshops: Workshop[] = [
  // {
  //   title: "De mortal a Dios con Rust I: Fundamentos.",
  //   speakers: ["Carlos Rodriguez"],
  //   imgUrl: undefined,
  //   description:
  //     "Aprende los fundamentos y las particularidades del lenguajes de programación Rust. Uno de los lenguajes más amados en la industria.",
  //   date: {
  //     text: "05/6/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230406T190000Z%2F20230406T220000Z&details=Aprende%20los%20fundamentos%20y%20las%20particularidades%20del%20lenguajes%20de%20programaci%C3%B3n%20Rust.%20Uno%20de%20los%20lenguajes%20m%C3%A1s%20amados%20en%20la%20industria.&location=Globant%2C%20One%20Plaza&text=De%20mortal%20a%20Dios%20con%20Rust%20I%3A%20Fundamentos.",
  //   },
  //   tags: ["Blockchain", "Rust", "Smart Contracts", "CLI"],
  //   location: {
  //     text: "Globant, One Plaza.",
  //     url: "https://goo.gl/maps/5LiYA1zuj5Xz7WrU8",
  //   },
  // },
  // {
  //   title: "De mortal a Dios con Rust II: Astar Network.",
  //   speakers: ["Carlos Rodriguez"],
  //   imgUrl: undefined,
  //   description:
  //     "Conoce la parachain más popular del ecosistema de Polkadot. Crea tus primeros Smart Contracts en Astar Network y diseña tu primer proyecto.",
  //   date: {
  //     text: "05/13/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230413T190000Z%2F20230413T220000Z&details=Conoce%20la%20parachain%20m%C3%A1s%20popular%20del%20ecosistema%20de%20Polkadot.%20Crea%20tus%20primeros%20Smart%20Contracts%20en%20Astar%20Network%20y%20dise%C3%B1a%20tu%20primer%20proyecto.&location=Hash%20House%2C%20Medellin&text=De%20mortal%20a%20Dios%20con%20Rust%20II%3A%20Astar%20Network.",
  //   },
  //   tags: [
  //     "Blockchain",
  //     "Rust",
  //     "Smart Contracts",
  //     "Astar",
  //     "Polkadot",
  //     "Substrate",
  //   ],
  //   location: {
  //     text: "Hash House",
  //     url: "https://goo.gl/maps/pBg3aBvVaspTwY9R6",
  //   },
  // },
  // {
  //   title: "De mortal a Dios con Rust III: Astar Network.",
  //   speakers: ["Carlos Rodriguez"],
  //   imgUrl: undefined,
  //   description:
  //     "Para finalizar con esta sega crea una DApp de tokenizacion en Astar Network. Tokeniza cualquier activo digital y compartelo.",
  //   date: {
  //     text: "05/20/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230420T190000Z%2F20230420T220000Z&details=Para%20finalizar%20con%20esta%20sega%20crea%20una%20DApp%20de%20tokenizacion%20en%20Astar%20Network.%20Tokeniza%20cualquier%20activo%20digital%20y%20compartelo.&location=Globant%2C%20One%20Plaza&text=De%20mortal%20a%20Dios%20con%20Rust%20III%3A%20Astar%20Network.",
  //   },
  //   tags: [
  //     "Blockchain",
  //     "Rust",
  //     "Smart Contracts",
  //     "Astar",
  //     "Polkadot",
  //     "Substrate",
  //   ],
  //   location: {
  //     text: "Co-Work Latam Campestre.",
  //     url: "https://goo.gl/maps/WWBJiHCJdVxCcbdS9",
  //   },
  // },
  // {
  //   title: "De mortal a Dios con Rust IV: Presentación de proyectos",
  //   speakers: ["dotlabs() team"],
  //   imgUrl: undefined,
  //   description:
  //     "¡Llegó el momento! En esta sesión haremos presentación de los proyectos construidos en clase. Ven y disfruta de este grandioso espacio y conecta con personas.",
  //   date: {
  //     text: "05/27/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230527T190000Z%2F20230603T220000Z&details=%C2%A1Lleg%C3%B3%20el%20momento%21%20En%20esta%20sesi%C3%B3n%20haremos%20presentaci%C3%B3n%20de%20los%20proyectos%20construidos%20en%20clase.%20Ven%20y%20disfruta%20de%20este%20grandioso%20espacio%20y%20conecta%20con%20personas.&location=Hash%20House%2C%20Medell%C3%ADn&text=De%20mortal%20a%20Dios%20con%20Rust%20IV%3A%20Presentaci%C3%B3n%20de%20proyectos",
  //   },
  //   tags: [
  //     "Blockchain",
  //     "Rust",
  //     "Smart Contracts",
  //     "Astar",
  //     "Polkadot",
  //     "Substrate",
  //   ],
  //   location: {
  //     text: "Co-Work Latam Campestre.",
  //     url: "https://goo.gl/maps/WWBJiHCJdVxCcbdS9",
  //   },
  // },
  // {
  //   title: "Estudiando el ataque a Tornado Cash",
  //   speakers: ["Juan Cogollo"],
  //   imgUrl: undefined,
  //   description:
  //     "En esta sesión recrearemos el ataque a Tornado Cash para conocer un nuevo vector de ataque y la forma de prevenirlo.",
  //   date: {
  //     text: "06/03/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230603T190000Z%2F20230603T220000Z&details=En%20esta%20sesi%C3%B3n%20recrearemos%20el%20ataque%20a%20Tornado%20Cash%20para%20conocer%20un%20nuevo%20vector%20de%20ataque%20y%20la%20forma%20de%20prevenirlo.&location=Co-Work%20LATAM%2C%20Campestre&text=Estudiando%20el%20ataque%20a%20Tornado%20Cash",
  //   },
  //   tags: [
  //     "Blockchain",
  //     "Horizen",
  //     "Horizen EON",
  //     "Zero Knowledge",
  //     "Solidity",
  //   ],
  //   location: {
  //     text: "Co-Work Latam Campestre.",
  //     url: "https://goo.gl/maps/WWBJiHCJdVxCcbdS9",
  //   },
  // },
  // {
  //   title: "ERC-20 & ERC-721 en CELO",
  //   speakers: ["Alejandro Soto"],
  //   imgUrl: undefined,
  //   description:
  //     "Ven y conoce a Celo, la Blockchain de huella de carbono cero con mayor impacto en América Latina. En esta sesión aprenderemos sobre su ecosistema y cómo crear un Smart contracts en su red.",
  //   date: {
  //     text: "06/10/2023",
  //     url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230610T190000Z%2F20230610T220000Z&details=Ven%20y%20conoce%20a%20Celo%2C%20la%20Blockchain%20de%20huella%20de%20carbono%20cero%20con%20mayor%20impacto%20en%20Am%C3%A9rica%20Latina.%20En%20esta%20sesi%C3%B3n%20aprenderemos%20sobre%20su%20ecosistema%20y%20c%C3%B3mo%20crear%20un%20Smart%20contracts%20en%20su%20red.&location=Co-Work%20LATAM%2C%20Campestre&text=ERC-20%20%26%20ERC-721%20en%20CELO",
  //   },
  //   tags: [
  //     "Blockchain",
  //     "Celo",
  //     "Solidity",
  //   ],
  //   location: {
  //     text: "Co-Work Latam Campestre.",
  //     url: "https://goo.gl/maps/WWBJiHCJdVxCcbdS9",
  //   },
  // },
  {
    title: "Descubramos algunos usos de ThirdWeb",
    speakers: ["Sergio Martinez"],
    imgUrl: undefined,
    description:
    "Herramientas de alta productividad, despliegue de contrato  en múltiples redes  y scaffolding al alcance de 1 click. Incorporación de billetera y manejo de contratos inteligentes de forma sencilla en una dApp. Esto y mucho más es lo que aprenderemos en el taller de este sábado, donde nos expondremos a la herramienta Thirdweb, ¡Será un evento para conocer nuevas herramientas!",
    date: {
      text: "06/17/2023",
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230617T190000Z%2F20230617T220000Z&details=Herramientas%20de%20alta%20productividad%2C%20despliegue%20de%20contrato%20%20en%20m%C3%BAltiples%20redes%20%20y%20scaffolding%20al%20alcance%20de%201%20click.%20Incorporaci%C3%B3n%20de%20billetera%20y%20manejo%20de%20contratos%20inteligentes%20de%20forma%20sencilla%20en%20una%20dApp.%20Esto%20y%20mucho%20m%C3%A1s%20es%20lo%20que%20aprenderemos%20en%20el%20taller%20de%20este%20s%C3%A1bado%2C%20donde%20nos%20expondremos%20a%20la%20herramienta%20Thirdweb%2C%20%C2%A1Ser%C3%A1%20un%20evento%20para%20conocer%20nuevas%20herramientas%21&location=Hash%20House%20Club&text=Descubramos%20algunos%20usos%20de%20ThirdWeb",
    },
    tags: [
      "Blockchain",
      "ThirdWeb",
      "Solidity",
      "Web3",
      "Desarrollo Web"
    ],
    location: {
      text: "Hash House Club",
      url: "https://goo.gl/maps/pBg3aBvVaspTwY9R6",
    },
    registerLink: "https://forms.gle/7yehySTZdt64sBpg6"
  },
  /**
    {
      title: "Proxy's Avanzados",
      speakers: ["Junior Calle"],
      imgUrl: undefined,
      description:
        "¿Cómo las empresas gestionan grandes cantidades de datos? Aprende técnicas avanzadas de proxys, migración de datos y actualización de objetos complejos en Solidity de la mano de uno de los desarrolladores blockchain del equipo de Unergy.",
      date: {
        text: "06/17/2023",
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230617T190000Z%2F20230617T220000Z&details=%C2%BFC%C3%B3mo%20las%20empresas%20gestionan%20grandes%20cantidades%20de%20datos%3F%20Aprende%20t%C3%A9cnicas%20avanzadas%20de%20proxys%2C%20migraci%C3%B3n%20da%20datos%20y%20actualizaci%C3%B3n%20de%20objetos%20complejos%20en%20Solidity%20de%20la%20mano%20de%20uno%20de%20los%20desarrolladores%20blockchain%20del%20equipo%20de%20Unergy.&location=Cowork%20LATAM%2C%20Campestre&text=Proxy%27s%20Avanzado",
      },
      tags: [
        "Blockchain",
        "Proxy's",
        "Solidity",
      ],
      location: {
        text: "Co-Work Latam Campestre.",
        url: "https://goo.gl/maps/WWBJiHCJdVxCcbdS9",
      },
    },
    */
];
