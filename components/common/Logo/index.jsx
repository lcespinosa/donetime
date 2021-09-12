import Image from "next/image";
import classNames from "classnames";

const LogoVariants = {
  large: "/logo.png",
  minimal: "/miniLogo.png",
};

const Logo = ({ variant = "large", dark }) => {
  const backgroundClassName = classNames("w-auto rounded", {
    "bg-gray-700": dark,
    "bg-transparent": !dark,
    "px-6 py-2": variant === "large",
    "p-1": variant === "minimal",
  });

  const getDimensions = () => {
    return variant === "large"
      ? { width: 320, height: 59 }
      : { width: 54, height: 54 };
  };

  return (
    <div className={backgroundClassName}>
      <Image src={LogoVariants[variant]} alt="Workflow" {...getDimensions()} />
    </div>
  );
};

export default Logo;
