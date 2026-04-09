import Image from "next/image";
import Button from "../commons/button";

const navItems = ["Home", "About", "Services", "Pricing", "Blog", "Resources"];

const Header = () => {
  return (
    <div className="w-full px-25 py-5 flex items-center justify-between">
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
              <a href="#" className="nav-link">
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
    </div>
  );
};

export default Header;
