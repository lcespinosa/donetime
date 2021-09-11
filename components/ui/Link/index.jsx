import NextLink from "next/link";
import classNames from "classnames";

const Link = ({ href, className, ...props }) => {
  const linkClassNames = classNames(
    className,
    "font-medium text-indigo-600 hover:text-indigo-500"
  );

  return (
    <NextLink href={href}>
      <a className={linkClassNames}>{props.children}</a>
    </NextLink>
  );
};

export default Link;
