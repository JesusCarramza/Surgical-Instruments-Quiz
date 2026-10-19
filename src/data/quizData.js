import img01 from '../assets/instruments/01_charola_de_mayo.jpg';
import img02 from '../assets/instruments/02_valva_suprapubica.webp';
import img03 from '../assets/instruments/03_pinzas_forester.jpg';
import img04 from '../assets/instruments/04_pinzas_babcock.webp';
import img05 from '../assets/instruments/05_tijeras_metzenbaum.jpg';
import img06 from '../assets/instruments/06_pinzas_kelly.jpg';
import img07 from '../assets/instruments/07_Pinzas_Rochester_Ochsner.png';
import img08 from '../assets/instruments/08_Pinzas_Allis.webp';
import img09 from '../assets/instruments/09_Canula_de_Aspiracion_Yankauer.jpg';
import img10 from '../assets/instruments/10_Mango_de_Bisturi.webp';
import img11 from '../assets/instruments/11_Separadores_Farabeu.jpg';
import img12 from '../assets/instruments/12_Pinzas_de_Diseccion_con_dientes.webp';
import img13 from '../assets/instruments/13_Pinzas_de_Diseccion_sin_dientes.jpg';
import img14 from '../assets/instruments/14_Separadores_Army.webp';
import img15 from '../assets/instruments/15_Aspirador_Poole.jpg';
import img16 from '../assets/instruments/16_Pinzas_Kelly_Hemostasica.jpg';
import img17 from '../assets/instruments/17_Porta_Agujas_Hegar.webp';
import img18 from '../assets/instruments/18_Separadores_Farabeu.webp';
import img19 from '../assets/instruments/19_Pinzas_Brown_Adson.webp';
import img20 from '../assets/instruments/20_Tijeras_Mayo.webp';
import img21 from '../assets/instruments/21_Tijeras_Metzenbaum.webp';
import img22 from '../assets/instruments/22_Gasas_con_Trama.webp';
import img23 from '../assets/instruments/23_Lapiz_de_Electrocauterio_de_Core_Ray.webp';
import img24 from '../assets/instruments/24_Tijeras_Onfalotomo.jpg';
import img25 from '../assets/instruments/25_Compresas.jpg';
import img26 from '../assets/instruments/26_Pinzas_Umbilicales.jpg';
import img27 from '../assets/instruments/27_Histerometro.jpg';

/**
 * Surgical Instruments Quiz Data
 * Each question has an id, the correct answer, three options, and the corresponding instrument image.
 */
const quizData = [
  {
    id: 1,
    image: img01,
    options: ["Flanera", "Riñon", "Charola de Mayo"],
    correctAnswer: "Charola de Mayo",
  },
  {
    id: 2,
    image: img02,
    options: ["Vulva suprapubica", "Pinzas Allis", "Separadores Farabeu"],
    correctAnswer: "Vulva suprapubica",
  },
  {
    id: 3,
    image: img03,
    options: ["Pinzas Forester/Anillo", "Pinzas Mixter Curvas", "Pinzas Herinas/De campo"],
    correctAnswer: "Pinzas Forester/Anillo",
  },
  {
    id: 4,
    image: img04,
    options: ["Pinzas Babcock", "Pinzas Allis", "Pinzas Rochester Ochsner"],
    correctAnswer: "Pinzas Babcock",
  },
  {
    id: 5,
    image: img05,
    options: ["Tijeras Metzenbaum", "Pinzas Mixter Curvas", "Porta Agujas Hegar"],
    correctAnswer: "Tijeras Metzenbaum",
  },
  {
    id: 6,
    image: img06,
    options: ["Pinzas Babcock", "Pinzas Allis", "Pinzas Kelly/Hemostasica"],
    correctAnswer: "Pinzas Kelly/Hemostasica",
  },
  {
    id: 7,
    image: img07,
    options: ["Pinzas Rochester Ochsner", "Pinzas Kelly/Hemostasica", "Pinzas Forester/Anillo"],
    correctAnswer: "Pinzas Rochester Ochsner",
  },
  {
    id: 8,
    image: img08,
    options: ["Pinzas Herinas/De campo", "Pinzas Rochester Ochsner", "Pinzas Allis"],
    correctAnswer: "Pinzas Allis",
  },
  {
    id: 9,
    image: img09,
    options: ["Aspirador Poole", "Histerometro", "Canula de Aspiracion Yankauer"],
    correctAnswer: "Canula de Aspiracion Yankauer",
  },
  {
    id: 10,
    image: img10,
    options: ["Mango de Bisturi", "Pinzas Brown Adson", "Pinzas de Diseccion sin dientes"],
    correctAnswer: "Mango de Bisturi",
  },
  {
    id: 11,
    image: img11,
    options: ["Separadores Richardson", "Separadores Army", "Separadores Farabeu"],
    correctAnswer: "Separadores Farabeu",
  },
  {
    id: 12,
    image: img12,
    options: ["Pinzas Brown Adson", "Pinzas de Diseccion con dientes", "Mango de Bisturi"],
    correctAnswer: "Pinzas de Diseccion con dientes",
  },
  {
    id: 13,
    image: img13,
    options: ["Pinzas de Diseccion sin dientes", "Mango de Bisturi", "Pinzas Brown Adson"],
    correctAnswer: "Pinzas de Diseccion sin dientes",
  },
  {
    id: 14,
    image: img14,
    options: ["Separadores Army", "Separadores Richardson", "Separadores Farabeu"],
    correctAnswer: "Separadores Army",
  },
  {
    id: 15,
    image: img15,
    options: ["Aspirador Poole", "Canula de Aspiracion Yankauer", "Histeromero"],
    correctAnswer: "Aspirador Poole",
  },
  {
    id: 16,
    image: img16,
    options: ["Pinzas Kelly/Hemostasica", "Pinzas Rochester Ochsner", "Pinzas Forester/Anillo"],
    correctAnswer: "Pinzas Kelly/Hemostasica",
  },
  {
    id: 17,
    image: img17,
    options: ["Pinzas Pean/Fuertes", "Porta Agujas Hegar", "Tijeras Metzenbaum"],
    correctAnswer: "Porta Agujas Hegar",
  },
  {
    id: 18,
    image: img18,
    options: ["Separadores Farabeu", "Separadores Army", "Separadores Richardson"],
    correctAnswer: "Separadores Farabeu",
  },
  {
    id: 19,
    image: img19,
    options: ["Mango de Bisturi", "Pinzas de Diseccion sin dientes", "Pinzas Brown Adson"],
    correctAnswer: "Pinzas Brown Adson",
  },
  {
    id: 20,
    image: img20,
    options: ["Tijeras Mayo", "Pinzas Pean/Fuertes", "Tijeras Metzenbaum"],
    correctAnswer: "Tijeras Mayo",
  },
  {
    id: 21,
    image: img21,
    options: ["Pinzas Pean/Fuertes", "Tijeras Mayo", "Tijeras Metzenbaum"],
    correctAnswer: "Tijeras Metzenbaum",
  },
  {
    id: 22,
    image: img22,
    options: ["Compresas", "Gasas con Trama", "Separadores Army"],
    correctAnswer: "Gasas con Trama",
  },
  {
    id: 23,
    image: img23,
    options: ["Pinzas Umbilicales", "Aspirador Poole", "Lapiz de Electrocauterio de Core Ray"],
    correctAnswer: "Lapiz de Electrocauterio de Core Ray",
  },
  {
    id: 24,
    image: img24,
    options: ["Tijeras Onfalotomo", "Tijeras Mayo", "Tijeras Metzenbaum"],
    correctAnswer: "Tijeras Onfalotomo",
  },
  {
    id: 25,
    image: img25,
    options: ["Pinzas Umbilicales", "Compresas", "Gasas con Trama"],
    correctAnswer: "Compresas",
  },
  {
    id: 26,
    image: img26,
    options: ["Lapiz de Electrocauterio de Core Ray", "Gasas con Trama", "Pinzas Umbilicales"],
    correctAnswer: "Pinzas Umbilicales",
  },
  {
    id: 27,
    image: img27,
    options: ["Canula de Aspiracion Yankauer", "Histerometro", "Aspirador Poole"],
    correctAnswer: "Histerometro",
  },
];

export default quizData;
