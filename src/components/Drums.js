import _drums from "./_drums.js";
import { React, useRef, useEffect } from "react";

export default function Drums() {
  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const aRef = useRef();
  const sRef = useRef();
  const dRef = useRef();
  const fRef = useRef();
  const gRef = useRef();
  const hRef = useRef();
  const jRef = useRef();
  const kRef = useRef();
  const lRef = useRef();
  const drumKeyPair = {
    a: aRef,
    s: sRef,
    d: dRef,
    f: fRef,
    g: gRef,
    h: hRef,
    j: jRef,
    k: kRef,
    l: lRef,
  };
  function handleKeyPress(e) {
    switch (e.key) {
      case "a": {
        if (aRef.current) {
          aRef.current.currentTime = 0;
          aRef.current.play();
        }
        break;
      }
      case "s": {
        if (sRef.current) {
          sRef.current.currentTime = 0;
          sRef.current.play();
        }
        break;
      }
      case "d": {
        if (dRef.current) {
          dRef.current.currentTime = 0;
          dRef.current.play();
        }
        break;
      }
      case "f": {
        if (fRef.current) {
          fRef.current.currentTime = 0;
          fRef.current.play();
        }
        break;
      }
      case "g": {
        if (gRef.current) {
          gRef.current.currentTime = 0;
          gRef.current.play();
        }
        break;
      }
      case "h": {
        if (hRef.current) {
          hRef.current.currentTime = 0;
          hRef.current.play();
        }
        break;
      }
      case "j": {
        if (jRef.current) {
          jRef.current.currentTime = 0;
          jRef.current.play();
        }
        break;
      }
      case "k": {
        if (kRef.current) {
          kRef.current.currentTime = 0;
          kRef.current.play();
        }
        break;
      }
      case "l": {
        if (lRef.current) {
          lRef.current.currentTime = 0;
          lRef.current.play();
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);
  return (
    <div className="Drums">
      <div onKeyPress={handleKeyPress} className="Drums-container">
        {_drums.map((drum, i) => (
          <div
            onClick={(e) => {
              e.target.children[0].currentTime = 0;
              e.target.children[0].play();
            }}
            key={drum}
            className="drum-name"
          >
            {drum.split(".")[0].split("/")[3]}
            <div className="drum-key">
              <audio
                ref={drumKeyPair[keys[i]]}
                className="clip"
                key={keys[i]}
                src={drum}
              ></audio>
              <span>{keys[i]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
