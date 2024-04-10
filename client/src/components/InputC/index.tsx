interface InputCProps {
  heading: string;
  type: string;
  register: any;
  id: string;
  placeholder: string;
}
export const InputC = (props: InputCProps) => {
  const { heading, type, register, placeholder, id } = props;
  return (
    <div>
      <h4>{heading}</h4>
      <input
        {...register(id)}
        type={type}
        className="border p-2 rounded outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
