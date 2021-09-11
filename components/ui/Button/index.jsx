import React from "react";
import classNames from "classnames";
import { string, func, bool, oneOf } from "prop-types";

const paddings = {
  medium: "py-2 px-4 text-sm font-medium",
};

const ButtonVariant = {
  primary: "primary",
};

const Button = ({
  label,
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
    disabled:opacity-25 disabled:pointer-events-none disabled:cursor-not-allowed text-white bg-indigo-600`,
    {
      // Primary Variant
      "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500":
        variant === ButtonVariant.primary,
    }
  );

  return (
    <button
      type={type}
      className={classNameButton}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propDefault = {
  label: string,
  size: oneOf(["large", "medium", "small"]),
  type: oneOf(["submit", "button"]),
  disabled: bool,
  className: string,
  onClick: func.isRequired,
};

Button.defaultProps = {
  label: "",
  size: "medium",
  type: "submit",
  variant: "primary",
  className: "",
  disabled: false,
};

export default Button;
