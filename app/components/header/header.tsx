import Image from "next/image";
import Button from "../commons/button";

const navItems = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

const Header = () => {
  return (
    <section
      className="w-full px-25 py-5 flex items-center justify-between"
      style={{ backgroundColor: "var(--color-white-background)" }}
    >
      {" "}
      <Image
        src="/google_logo.svg"
        alt="Google logo"
        width={125}
        height={45}
        className="h-11 w-auto"
        priority
      />
      <nav>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-(--color-nav-text) text-lg font-normal no-underline underline-offset-8 transition-all duration-150 ease-in-out hover:text-(--color-accent) hover:font-bold hover:underline hover:decoration-(--color-accent)"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        type="base"
        verticalPadding="py-[13.5px]"
        horizontalPadding="px-[22px]"
        child={
          <>
            <span className="font-bold text-[14px]">Schedule A Meeting</span>
            <Image
              src="/arrow_right.svg"
              alt="arrow"
              width={10}
              height={9}
              className="ml-2"
            />
          </>
        }
      />
    </section>
  );
};

export default Header;
