import classNames from "classnames";

const Panel = ({ heading, footer, className, ...props }) => {
  const panelClassNames = classNames(
    "bg-white overflow-hidden shadow sm:rounded-lg",
    className
  );

  return (
    <div className={panelClassNames}>
      <div className="px-4 py-5 sm:p-6">
        {heading}
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
