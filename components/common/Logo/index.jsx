import Image from "next/image";
import classNames from "classnames";

const Logo = ({ dark }) => {
  const backgroundClassName = classNames("w-auto px-6 py-2 rounded", {
    "bg-gray-700": dark,
    "bg-transparent": !dark,
  });

  return (
    <div className={backgroundClassName}>
      <Image src="/logo.png" alt="Workflow" width="320" height="59" />
    </div>
  );
};

export default Logo;
