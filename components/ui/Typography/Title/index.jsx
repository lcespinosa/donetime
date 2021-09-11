import classNames from "classnames";

const sizes = ["text-4xl", "text-3xl", "text-2xl", "text-xl", "text-lg"];

const Title = ({ level, className, ...props }) => {
  if (!(level > 0 && level <= sizes.length)) {
    level = 1;
  }

  const HElement = `h${level}`;
  const titleClassNames = classNames(
    className,
    `font-extrabold text-gray-900 ${sizes[level - 1]}`
  );

  return <HElement className={titleClassNames}>{props.children}</HElement>;
};

export default Title;
