import { Button } from "@material-tailwind/react";
const ButtonV2=(props) => {
    const { label, color } = props;
    return (
        <div>
            <Button color={color}>{label}</Button>
        </div>
    )
}
export default ButtonV2