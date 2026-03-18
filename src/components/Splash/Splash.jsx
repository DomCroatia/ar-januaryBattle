import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Splash.css";

export default function Splash({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const displayTime = 1000;
    const fadeTime = 1000;

    const timer1 = setTimeout(() => {
      setFade(true);
    }, displayTime);

    const timer2 = setTimeout(() => {
      onFinish();
    }, displayTime + fadeTime);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`adidas ${fade ? "fade-out" : ""}`}>
      <img src={logo} alt="adidas logo" />
    </div>
  );
}
