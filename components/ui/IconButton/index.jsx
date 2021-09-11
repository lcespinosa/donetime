import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { string, func, bool, oneOf } from "prop-types";

const paddings = {
  medium: "py-2 px-4 text-sm font-medium",
};

const ButtonVariant = {
  ghost: "ghost",
};

const IconButton = ({
  label,
  href,
  type,
  size,
  variant,
  disabled,
  className,
  onClick,
  ...props
}) => {
  const classNameButton = classNames(
    `whitespace-nowrap ${paddings[size]} ${className}
    w-full flex justify-center border border-transparent rounded-md shadow-sm
    disabled:opacity-25 disabled:pointer-events-none disabled:cursor-not-allowed`,
    {
      // Primary Variant
      "border-gray-300 bg-white text-gray-500 hover:bg-gray-50":
        variant === ButtonVariant.ghost,
    }
  );

  return (
    <div>
      <Link href={href}>
        <a href="#" className={classNameButton}>
          <span className="sr-only">{label}</span>
          {props.children}
        </a>
      </Link>
    </div>
  );
};

IconButton.propDefault = {
  label: string,
  size: oneOf(["large", "medium", "small"]),
  type: oneOf(["submit", "button"]),
  disabled: bool,
  className: string,
  onClick: func.isRequired,
};

IconButton.defaultProps = {
  label: "",
  size: "medium",
  type: "submit",
  variant: "ghost",
  className: "",
  disabled: false,
};

export default IconButton;
