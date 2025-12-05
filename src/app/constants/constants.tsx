export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: 'nzautomotores',
  name: 'NZ Automotores',
  adress: 'Derqui 942',
  city: 'Mar del Plata',
  email: 'nzautomotores@gmail.com',
  instagram: 'nz.automotores',
  facebook: null,
  whatsapp: ['2235900653', '2235637827'],
  googlemapsLink: 'https://maps.app.goo.gl/cpZMxEgvxdmPTvGH9',
  googlemaps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.2782138370017!2d-57.5452227!3d-37.9706361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dbe77dc51d1d%3A0x4ac91ebdb76a3169!2sDerqui%20942%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1760305551919!5m2!1sen!2sar',
  openDays: [
    'Lunes a Viernes 09:00 a 18:00hs',
    'Sábado 09:00 a 12:00hs',
    // { day: 'Domingo', hours: ['09:00 a 13:00hs'] },
  ],
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://only-motors.agenciagrvity.com';
export const TENANT = 'car-ant';

export const metadataCompany = {
  metadataBase: 'https://nzautomotores.vercel.app/',
  title: 'NZ Automotores - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos diferentes modalidades de pago: efectivo, transferencia bancaria y otras opciones que pueden variar según el vehículo. Te recomendamos consultar directamente con nuestro equipo para conocer las alternativas disponibles para el modelo que te interesa.',
  },
  {
    id: 'preg-2',
    question: '¿Aceptan vehículos como parte de pago?',
    answer:
      'Evaluamos permutas y canjes según cada caso particular. El valor de tu vehículo se determina mediante una inspección presencial. Contactanos para coordinar una evaluación y conocer las condiciones específicas.',
  },
  {
    id: 'preg-3',
    question: '¿Ofrecen financiación?',
    answer:
      'Trabajamos con diferentes opciones de financiación. Las condiciones y requisitos pueden variar según el vehículo y tu perfil crediticio. Te invitamos a consultarnos para conocer las alternativas disponibles y los requisitos necesarios.',
  },
  {
    id: 'preg-4',
    question: '¿Los vehículos tienen toda la documentación en regla?',
    answer:
      'Todos nuestros vehículos cuentan con la documentación correspondiente. Al momento de la compra, te entregamos toda la documentación necesaria para la transferencia. Te recomendamos revisar los detalles específicos de cada unidad con nuestro equipo.',
  },
  {
    id: 'preg-5',
    question: '¿Cómo puedo ver los vehículos disponibles?',
    answer:
      'Podes ver todos nuestros vehículos disponibles en nuestro catálogo online. Si te interesa algún modelo en particular, te invitamos a contactarnos para coordinar una visita y conocer más detalles sobre la unidad que te interesa.',
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
