import CartesiImg from '../../assets/img/EthereumCartesi.jpg';
import Poliedro from '../../assets/img/poliedro.svg';
import Acquatec from '../../assets/img/acquatec.png';
import CCAB from '../../assets/img/ccab.png';
import Plumas from '../../assets/img/plumas.png';
import Sejoga from '../../assets/img/sejoga.png';
import Heali from '../../assets/img/heali.png';
import AdvService from '../../assets/img/adv-service.png';

const projects = [
    {
      index: 0,
      year: 2021,
      title: "Internship - Car Wash System",
      description: "Development of a management system for a car wash, integrating .NET and Angular technologies.",
      details: "This project consisted of creating a comprehensive system to manage the operations of a car wash. We used .NET for the back-end and Angular for the front-end, ensuring an intuitive and efficient user experience. Additionally, the system was deployed on the Azure platform, leveraging its resources for scalability and security. The project was successfully completed in 2021.",
      imgUrl: Acquatec,
      technologies: ["Angular", ".NET"]
    },
    {
      index: 1,
      year: 2021,
      title: "Poliedro",
      description: "Development of a complete school management system for Colégio Poliedro.",
      details: "This project involved creating a complete system to manage the operations of a renowned educational institution. We used Node.js to develop the system, ensuring scalability and performance. Additionally, we incorporated advanced import and export tools to facilitate data exchange. The system was successfully deployed and used by Colégio Poliedro until 2023.",
      imgUrl: Poliedro,
      technologies: ["Node.js", "Azure"]
    },
    {
      index: 2,
      year: 2022,
      title: "CCAB",
      description: "Development of an export system for the Arab-Brazilian Chamber of Commerce.",
      details: "This project aimed to streamline the process of exporting products to Arab countries, ensuring security and transparency through blockchain technology. We used Angular and .NET to develop the system, and leveraged AWS services for additional support. The project was successfully completed in 2023, contributing to simplifying commercial operations between Brazil and Arab countries.",
      imgUrl: CCAB,
      technologies: ["Angular", ".NET", "blockchain", "AWS", "Azure"]
    },
    {
      index: 3,
      year: 2022,
      title: "Catalog",
      description: "Project to create a study materials catalog.",
      details: "Integrated Systems with Poliedro - Data storage and study materials. Azure queue services were used. Completed in 2023.",
      imgUrl: Poliedro,
      technologies: ["Azure", "Node.js"]
    },
    {
      index: 4,
      year: 2022,
      title: "Question Bank and Assessments",
      description: "Project to create a question bank and assessments.",
      details: "Integrated Systems with Poliedro - Data storage and ability to take tests. Completed in 2023.",
      imgUrl: Poliedro,
      technologies: ["Azure", "Node.js"]
    },
    {
      index: 5,
      year: 2022,
      title: "Plumas",
      description: "Project to create an accounting system.",
      details: ".NET was used in the system creation. Completed in 2022.",
      imgUrl: Plumas,
      technologies: [".NET"]
    },
    {
      index: 6,
      year: 2023,
      title: "Heali - Medical System",
      description: "Project of a medical system for medical care, consultations, and report generation.",
      details: "Made in Node.js. Use of various AWS services, such as queue, SQS, email, and the creation of auxiliary microservices for generating and signing PDFs. Completed in 2024.",
      imgUrl: Heali,
      technologies: ["Node.js", "AWS"]
    },
    {
      index: 7,
      year: 2023,
      title: "App-Sejoga",
      description: "Project of a system to show sports locations near the user.",
      details: "Made in Node.js. Use of AWS services for SQS and email sending. Completed in 2024.",
      imgUrl: Sejoga,
      technologies: ["Node.js", "AWS"]
    },
    {
      index: 8,
      year: 2024,
      title: "Adv-Service",
      description: "Project of a law firm system to offer services related to the legal area.",
      details: "Made in Node.js. Creation of an auxiliary system using artificial intelligence, in addition to AWS services. Scheduled for completion in 2024.",
      imgUrl: AdvService,
      technologies: ["Node.js", "AWS", "AI"]
    },
    {
      index: 9,
      year: 2023,
      title: "Project with Cartesi",
      description: "Blockchain extension and scientific initiation project in partnership with Cartesi.",
      details: "Service creation system, enabling the sale and purchase of products, using the exchange currency provided by the application and the security of blockchain and scalability provided by Cartesi. Developed with React and Python technologies. Using Cartesi services for Smart Contracts creation. Completed in 2023.",
      imgUrl: CartesiImg,
      technologies: ["React", "Python", "blockchain"]
    }
  ];
  


export default projects;
