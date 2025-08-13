export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: 'carant',
  name: 'CAR.ANT',
  adress: null,
  city: null,
  email: 'carant.automotores@gmail.com',
  instagram: 'carant.automotores',
  facebook: 'https://www.facebook.com/automotorescarant',
  whatsapp: ['1122993305'],
  googlemapsLink: null,
  googlemaps: null,
  openDays: null,
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://only-motors.agenciagrvity.com';
export const TENANT = 'car-ant';

export const metadataCompany = {
  metadataBase: 'https://carant.vercel.app/',
  title: 'CAR.ANT - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const sedes = [
  {
    id: 1,
    title: 'CAR.ANT El Indio',
    adress: 'El Indio 1668',
    city: 'Villa Adelina',
    tel: null,
    whatsapp: '1127488775',
    schedule: ['Lunes a Viernes 09:00 a 19:00hs', 'Sábados 09:00 a 13:00hs'],
    appointment: 'https://maps.app.goo.gl/LoyJEfazGBUg6T1X7',
    image: 'sede-1.webp',
  },
  {
    id: 2,
    title: 'CAR.ANT Los Platanos',
    adress: 'Los Platanos 1516',
    city: 'Villa Adelina',
    tel: null,
    whatsapp: '1147650425',
    schedule: ['Lunes a Viernes 9 a 13 y 15 a 19hs', 'Sábados 9 a 13hs'],
    appointment: 'https://maps.app.goo.gl/2twHoVod5RCryMvL6',
    image: 'sede-2.webp',
  },
];

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué opciones de pago ofrecen?',
    answer:
      'Ofrecemos diferentes opciones de pago para adaptarnos a tus necesidades. Consultanos sobre las alternativas disponibles y te asesoramos para encontrar la mejor opción para ti.',
  },
  {
    id: 'preg-2',
    question: '¿Cómo verifican el estado de los vehículos?',
    answer:
      'Todos nuestros vehículos son revisados antes de ser ofrecidos. Realizamos las verificaciones necesarias para asegurar que estén en las mejores condiciones para nuestros clientes.',
  },
  {
    id: 'preg-3',
    question: '¿Incluyen algún tipo de garantía?',
    answer:
      'Sí, nuestros vehículos incluyen garantía según corresponda. Te informamos sobre los términos y condiciones al momento de la compra para tu tranquilidad.',
  },
  {
    id: 'preg-4',
    question: '¿Puedo ver el vehículo antes de decidir?',
    answer:
      'Por supuesto, te invitamos a conocer nuestros vehículos personalmente. Coordina una visita con nuestro equipo y te mostramos todo lo que necesites saber.',
  },
  {
    id: 'preg-5',
    question: '¿Brindan asesoramiento después de la compra?',
    answer:
      'Sí, nuestro compromiso continúa después de la compra. Estamos disponibles para resolver tus dudas y brindarte el apoyo que necesites con tu vehículo.',
  },
];

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: true,
  },
];
