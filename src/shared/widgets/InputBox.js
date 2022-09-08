import { Input } from "@material-tailwind/react";

const InputBox = (props) => {
  const { label, fn, ref } = props;
  return (
    <div className="w-72 m-2">
      <Input ref={ref} onChange={(obj)=>fn(obj.target.value)} label={label} />
    </div>
  );
}
export default InputBox;