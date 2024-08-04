import { MessageCircle, Target, Telescope } from "lucide-react";
import { cn } from "./lib/utils";

export const navlinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    image: "/random.webp",
    title: "Custom Application Development",
    description:
      "We design and develop tailored software solutions that meet the unique needs of your business, ensuring functionality, scalability, and user-friendliness.",
    tags: "Promotes Global Reach",
  },
  {
    image: "/random.webp",
    title: "Small Business Solutions",
    description:
      "Tailored digital strategies and tools designed for small and medium-sized enterprises to compete effectively in the digital landscape.",
    tags: "cost-effective solutions",
  },
  {
    image: "/random.webp",
    title: "Product Launch Landing Sites",
    description:
      "Our design team crafts intuitive and visually appealing interfaces that enhance user satisfaction and engagement across all digital platforms.",
    tags: "Brand perception with design",
  },
];

export const CardItems = [
  {
    id: 0,
    title: "Our Mission",
    content: (
      <p>
        Empower businesses to embrace the digital era with tailored solutions
        that enhance <strong>efficiency, engagement, and success</strong>.
      </p>
    ),
    icon: <Target size={18} />,
  },
  {
    id: 1,
    title: "Our Vision",
    content: (
      <p>
        To be the{" "}
        <strong>leading provider of innovative digital solutions</strong>,
        helping businesses across the globe unlock their full potential.
      </p>
    ),
    icon: <Telescope size={18} />,
  },
  {
    id: 2,
    title: "Founder's Message",
    content: (
      <p>
        We believe in the power of technology to transform businesses. Our team
        is dedicated to providing{" "}
        <strong>customized solutions that drive growth</strong> and success.
      </p>
    ),
    icon: <MessageCircle size={18} />,
  },
];

export const FAQItems = [
  {
    title: "What is Arcavian?",
    description:
      "Arcavian is a leading custom application development company that specializes in helping businesses thrive in the digital world. We offer a wide range of services, from e-commerce solutions to mobile app development, to transform your vision into reality.",
  },
  {
    title: "What services do you offer?",
    description:
      "We offer a wide range of services, including custom application development, small business solutions, and product launch landing sites. Our team of experts will work with you to create a tailored solution that meets your unique needs and helps you achieve your business goals.",
  },
  {
    title: "How can Arcavian help my business?",
    description:
      "Arcavian can help your business by providing you with innovative digital solutions that enhance efficiency, engagement, and success. Whether you're a small startup or a large enterprise, we have the expertise and experience to help you thrive in the digital world.",
  },
  {
    title: "Why choose Arcavian?",
    description:
      "Arcavian is dedicated to providing customized solutions that drive growth and success. Our team of experts will work with you to create a tailored solution that meets your unique needs and helps you achieve your business goals. With our help, you can embrace the digital era and take your business to the next level.",
  },
  {
    title: "What's your process of working?",
    description:
      "At Arcavian, we follow a collaborative approach to ensure your project's success. We start by understanding your business goals and requirements, then we work closely with you to design and develop a solution that meets your needs. Throughout the process, we provide regular updates and support to ensure a seamless experience.",
  },
  {
    title: "What technologies do you use?",
    description:
      "At Arcavian, we stay up-to-date with the latest technologies and frameworks to ensure we deliver the most efficient and effective solutions. Our team is proficient in a wide range of technologies, including React, Node.js, .NET, and various cloud platforms like AWS and Azure.",
  },
  {
    title: "What is the pricing for your services?",
    description:
      "The pricing for our services varies depending on the scope and complexity of your project. We offer flexible pricing models, including fixed-price and time-and-materials approaches, to ensure we find the best solution for your budget. We're happy to provide a detailed quote based on your specific requirements.",
  },
];
