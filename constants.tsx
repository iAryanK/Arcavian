import {
  Brain,
  Code2,
  MessageCircle,
  Rocket,
  Search,
  TabletSmartphone,
  Target,
  Telescope,
} from "lucide-react";

export const navlinks = [
  { name: "About Us", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Process", link: "#process" },
  { name: "Contact", link: "#contact" },
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

const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-zinc-950 max-sm:aspect-video"></div>
);

export const serviceItems = [
  {
    header: <Skeleton />,
    title: "Custom Application Development",
    description:
      "Get tailored software solutions that meet the unique needs of your business.",
    tags: "Promotes Global Reach",
    className: "md:col-span-2",
  },
  {
    header: <Skeleton />,
    title: "All Business Solutions",
    description: "Available for big enterprise to startups to MSMEs.",
    tags: "cost-effective solutions",
    className: "md:col-span-1",
  },
  {
    header: <Skeleton />,
    title: "Available accross the Globe",
    description: "No matter wherever you're, you can always reach to us.",
    tags: "Brand perception with design",
    className: "md:col-span-1",
  },
  {
    header: <Skeleton />,
    title: "Both website and app for your business",
    description:
      "You get website as well as app for mobile as well as PCs, according to your business needs.",
    tags: "Brand perception with design",
    className: "md:col-span-2",
  },
];

export const ProcessItems = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business goals and requirements.",
    icon: <Search />,
  },
  {
    title: "Design",
    description:
      "We work closely with you to design a solution that meets your needs.",
    icon: <Brain />,
  },
  {
    title: "Development",
    description:
      "Our team of experts will develop a solution that drives growth and success.",
    icon: <Code2 />,
  },
  {
    title: "Testing",
    description:
      "We rigorously test the solution to ensure it meets your requirements.",
    icon: <TabletSmartphone />,
  },
  {
    title: "Launch",
    description:
      "We provide regular updates and support to ensure a seamless experience.",
    icon: <Rocket />,
  },
];

export const PreviousWorksItems = [
  {
    description: "Uniport",
    title: "AI park for various AI tools",
    src: "https://github.com/iAryanK/Uniport/raw/main/public/screenshots/landing.png?raw=true",
    ctaText: "Visit",
    ctaLink: "https://uniport.vercel.app",
    content: () => {
      return (
        <p>
          Uniport serves as a single port where users can seamlessly access and
          utilize different AI functionalities to enhance their workflows and
          creative endeavors, hence the name Uniport. The project leverages
          cutting-edge technologies such as Next.js 14 for both backend and
          frontend development, React for dynamic user interfaces, Tailwind CSS
          for sleek and responsive design, and Prisma for seamless connectivity
          with a MySQL database hosted on Aiven.
        </p>
      );
    },
  },
  {
    description: "Devforces",
    title: "Community Driven Platform",
    src: "https://github.com/iAryanK/DevOverflow/raw/main/app/opengraph-image.png?raw=true",
    ctaText: "Visit",
    ctaLink: "https://www.devforces.tech",
    content: () => {
      return (
        <p>
          DevForces, a Next.JS 14 Full Stack application, is a community driven
          platform that enables us to ask questions, get answered by others and
          answer other&apos;s questions as well. It also provides us the
          facility to write beautiful blog articles and post it on DevForces.
          This peace of work is inspired from the application DevOverflow by
          javascriptmastery, who helped me create this mega project with highly
          detailed features.
        </p>
      );
    },
  },

  {
    description: "Whatflow",
    title: "Whatsapp bulk message sender",
    src: "https://github.com/iAryanK/WhatsFlow/raw/main/screenshots/ui_light.png?raw=true",
    ctaText: "Visit",
    ctaLink: "https://github.com/iAryanK/WhatsFlow",
    content: () => {
      return (
        <p>
          A desktop application that sends bulk messages on whatsapp. WhatsFlow
          is a highly efficient bulk message sender due to its unique algorithm
          for sending message. Also, the application has some features that
          makes it stand out from others.
        </p>
      );
    },
  },
  {
    description: "Personal Portfolio",
    title: "A modern portfolio app",
    src: "https://github.com/iAryanK/nextjs-portfolio/raw/main/app/opengraph-image.png?raw=true",
    ctaText: "Visit",
    ctaLink: "https://www.iaryan.tech",
    content: () => {
      return (
        <p>
          None other than the website you are surfing right now! This website
          respresents my personal portfolio - who I am, My skills, project works
          and contact details with some blogs that is weaved with my knowledge
          and information. If this website feels amazing to you, you should try
          using technologies like Next JS, tailwind CSS, Aceternity UI, shadcn
          UI and my favourite, GSAP for animations.
        </p>
      );
    },
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
