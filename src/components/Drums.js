import _drums from "./_drums.js";
import Drum from "./drum.js";
import { useEffect, useState } from "react";

export default function Drums() {
  const [drums] = useState(_drums);
  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  // const [playing, setPlaying] = useState(false);
  // const [currentDrum, setCurrentDrum] = useState();

  useEffect(() => {
    const drum1 = document.querySelector("#BOOM");
    const drum2 = document.querySelector("#CLAP");
    const drum3 = document.querySelector("#HIHAT");
    const drum4 = document.querySelector("#KICK");
    const drum5 = document.querySelector("#OPENHAT");
    const drum6 = document.querySelector("#RIDE");
    const drum7 = document.querySelector("#SNARE");
    const drum8 = document.querySelector("#TINK");
    const drum9 = document.querySelector("#TOM");

    function handleKeyDown(e) {
      console.log(e.key);
      if (e.key === "a") {
        drum1.currentTime = 0;
        drum1.play();
      }
      if (e.key === "s") {
        drum2.currentTime = 0;
        drum2.play();
      }
      if (e.key === "d") {
        drum3.currentTime = 0;
        drum3.play();
      }
      if (e.key === "f") {
        drum4.currentTime = 0;
        drum4.play();
      }
      if (e.key === "g") {
        drum5.currentTime = 0;
        drum5.play();
      }
      if (e.key === "h") {
        drum6.currentTime = 0;
        drum6.play();
      }
      if (e.key === "j") {
        drum7.currentTime = 0;
        drum7.play();
      }
      if (e.key === "k") {
        drum8.currentTime = 0;
        drum8.play();
      }
      if (e.key === "l") {
        drum9.currentTime = 0;
        drum9.play();
      }
    }
    document.addEventListener("keypress", handleKeyDown);
  }, [drums]);
  return (
    <div className="Drums">
      <div className="Drums-container">
        {drums.map((drum, i) => (
          <Drum
            key={i}
            keycode={keys[i]}
            id={drum.split("/")[3].split(".")[0].toUpperCase()}
            className={drum.split("/")[3].split(".")[0].toUpperCase()}
            name={drum.split("/")[3].split(".")[0].toUpperCase()}
            src={drum}
          />
        ))}
      </div>
    </div>
  );
}
