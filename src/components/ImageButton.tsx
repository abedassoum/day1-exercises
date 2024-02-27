import { ImageButtonProps } from "../types";

export default function ImageButton({ image, onClick }: ImageButtonProps) {
    return (
      <img
        src={image}
        alt="button"
        style={{ width: "50px", height: "50px", margin: "5px" }}
        onClick={onClick}
      />
    );
  }