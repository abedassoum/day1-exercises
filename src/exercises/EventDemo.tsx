import { BaseProps } from "../types";
import { useState } from "react";
import ImageButton from "../components/ImageButton";

export default function EventDemo1({ title }: BaseProps) {
  const [textFromBtn, setTextFromBtn] = useState("");
  return (
    <>
      <h2>{title}</h2>
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        onClick={() => setTextFromBtn("Phone Button")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/d/dc/Teacup.svg"
        onClick={() => setTextFromBtn("TeaCup Button Clicked!")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/d/d4/Star_by_Gis%C3%A8le.png"
        onClick={() => setTextFromBtn("Start Button Clicked!")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/6/6c/Thumbs_up_green_with_plus_sign.svg"
        onClick={() => setTextFromBtn("+ Button Clicked!")}
      />
      <ImageButton
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/240px-Flat_minus_icon_-_red.svg.png"
        onClick={() => setTextFromBtn("- Button Clicked!")}
      />
      <h3>{textFromBtn}</h3>
    </>
  );
}
