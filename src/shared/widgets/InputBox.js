import { Input } from "@material-tailwind/react";

const InputBox = (props) => {
  const { label, fn, ref, val } = props;
  return (
    <div className="w-72 m-2">
      <Input type={'number'} ref={ref} onChange={(obj)=>fn(obj.target.value)} label={label} value={val}/>
    </div>
  );
}
export default InputBox;