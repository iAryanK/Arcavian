import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute top-[40%] w-full text-center">
      <Image
        src="/arcavian-logo.png"
        width={100}
        height={100}
        alt="Hero"
        className="mx-auto h-20 w-20 animate-pulse object-cover invert dark:invert-0 max-sm:mt-5"
      />
    </div>
  );
};

export default Loader;
