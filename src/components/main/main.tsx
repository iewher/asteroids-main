import React, { useState } from "react";
import "../../scss/main/main.scss";

import Asteroids from "../asteroids/asteroids.tsx";

import planet from "../svg/planet.svg";

import Header from "../header/header.tsx";
import Footer from "../footer/footer.tsx";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const [active, setActive] = useState<boolean>(false);
  const [cartValue, setCartValue] = useState<number>(0);

  const handleSetActive = (value: boolean) => {
    if (value !== active) {
      setActive(value);
    }
  };

  const handleCartValueChange = (value: number) => {
    setCartValue(value);
  };

  // console.log(active);

  return (
    <>
      <Header />
      <div className="main">
        <img src={planet} alt="Planet" className="planet" />
        <div className="container">
          <div className="container__asteroids">
            <h1>Ближайшие подлёты астероидов</h1>
            <div className="choice">
              <p
                className={!active ? "active" : ""}
                onClick={() => handleSetActive(false)}
              >
                в киллометрах
              </p>
              <span>|</span>
              <p
                className={active ? "active" : ""}
                onClick={() => handleSetActive(true)}
              >
                в лунных орбитах
              </p>
            </div>
            <Asteroids
              active={active}
              onCartValueChange={handleCartValueChange}
            />
          </div>
          <div className="container__cart">
            <div className="container__cart-text">
              <h1>Корзина</h1>
              <p>{cartValue} астероидов</p>
            </div>
            <div className="container__cart-button">
              <button>Отправить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
