const Label = ({ ...props }) => {
  return (
    <label {...props} className="block text-sm font-medium text-gray-700">
      {props.children}
    </label>
  );
};

export default Label;
