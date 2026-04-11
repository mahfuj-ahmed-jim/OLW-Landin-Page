import Image from "next/image";

interface Tool {
  id: string;
  image: string;
  width: number;
  height: number;
}

const TOOLS: Tool[] = [
  {
    id: "1",
    image: "/tools-1.svg",
    width: 174,
    height: 46,
  },
  {
    id: "2",
    image: "/tools-2.svg",
    width: 210,
    height: 27,
  },
  {
    id: "3",
    image: "/tools-3.svg",
    width: 193,
    height: 31,
  },
  {
    id: "4",
    image: "/tools-4.svg",
    width: 151,
    height: 56,
  },
  {
    id: "5",
    image: "/tools-5.svg",
    width: 135,
    height: 55,
  },
  {
    id: "6",
    image: "/tools-6.svg",
    width: 193,
    height: 31,
  },
  {
    id: "7",
    image: "/tools-4.svg",
    width: 151,
    height: 56,
  },
  {
    id: "8",
    image: "/tools-5.svg",
    width: 135,
    height: 55,
  },
  {
    id: "9",
    image: "/tools-6.svg",
    width: 193,
    height: 31,
  },
];

export const Tools = () => {
  return (
    <section className="mt-21 flex flex-col items-center">
      <h1 id="services-heading" className="text-[32px] font-bold">
        <span style={{ color: "var(--color-heading-black)" }}>Our </span>
        <span style={{ color: "var(--color-accent)" }}>Tools</span>
      </h1>
      <p
        className="max-w-184.5 mt-3.5 px-5 font-medium text-[14px] leading-[120%] tracking-[0%] text-center"
        style={{ color: "var(--color-heading-black)" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <div className="w-full flex justify-center items-center mt-34 bg-[var(--color-partners-bg)] pt-[38px] pb-[85px] px-25">
        <ul className="w-full max-w-[938px] grid grid-cols-3 gap-x-8.5 gap-y-10">
          {TOOLS.map((tool) => (
            <li
              key={tool.id}
              className="h-[139px] flex items-center justify-center bg-(--color-white-background) rounded-[12px] hover:shadow-[0_8px_24px_var(--color-tools-shadow)] transition-shadow duration-200"
            >
              <Image
                src={tool.image}
                width={tool.width}
                height={tool.height}
                alt={`Tool ${tool.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
