import { Button } from "@material-tailwind/react";
const ButtonV2=(props) => {
    const { label, color, fn, disabled } = props;
    return (
        <div>
            <Button onClick={fn} disabled={disabled} color={color}>{label}</Button>
        </div>
    )
}
export default ButtonV2