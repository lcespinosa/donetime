const Panel = ({ heading, footer, ...props }) => {
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {heading}
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
