import cinemaImg from "../assets/infinity-cinema.png";
import schoolhubImg from "../assets/schoolhub.png";
import invoiceImg from "../assets/novainvoice.png";

const projects = [
  {
    id: 1,
    name: "Infinity Cinema",
    image: cinemaImg,
    description:
      "A modern movie theater website with interactive UI and responsive design.",
    link: "https://codestrom001.github.io/movie-theater-page/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },

  {
    id: 2,
    name: "SchoolHub",
    image: schoolhubImg,
    description:
      "A school portal interface designed for students and teachers.",
    link: "https://codestrom001.github.io/school-portal/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },

  {
    id: 3,
    name: "NovaInvoice",
    image: invoiceImg,
    description:
      "A freelance invoice application for creating and managing invoices.",
    link: "https://codestrom001.github.io/freelance-invoice-app_/",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
];

export default projects;