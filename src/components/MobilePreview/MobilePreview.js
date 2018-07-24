import React from "react";
import style from "./mobile-preview.scss";

import arrowRight from "./arrow-right.svg";

const screens = Array(5)
  .fill()
  .map((whatever, index) => require(`./screen-${index}.png`));

class MobilePreview extends React.Component {
  state = { screenIndex: 0 };

  prevScreen = () => {
    this.setState(state => ({
      screenIndex: Math.max(0, state.screenIndex - 1),
    }));
  };

  nextScreen = () => {
    this.setState(state => ({
      screenIndex: Math.min(screens.length - 1, state.screenIndex + 1),
    }));
  };

  goToScreen = screenIndex => {
    this.setState({ screenIndex });
  };

  getSizeClass = index => {
    const { screenIndex } = this.state;
    const dif = Math.abs(screenIndex - index);
    if (dif === 0) return "";
    if (dif > 1) return style.verySmallScreen;
    return style.smallScreen;
  };

  render = () => {
    const { screenIndex } = this.state;

    return (
      <div className={style.main}>
        <h1 className={style.sectionTitle}>Tu nuevo mundo</h1>
        <div className={style.mobileZone}>
          <img
            className={style.arrowLeft}
            src={arrowRight}
            alt="Arrow pointing to the left"
            onClick={this.prevScreen}
          />
          <div className={style.mobile}>
            {screens.map((screen, index) => (
              <img
                key={`mobile-screen-${index}`}
                className={`${style.screen} ${this.getSizeClass(index)}`}
                style={{ left: 10 + (index - screenIndex) * 240 }}
                src={screen}
                onClick={() => this.goToScreen(index)}
              />
            ))}
          </div>
          <img
            className={style.arrowRight}
            src={arrowRight}
            alt="Arrow pointing to the right"
            onClick={this.nextScreen}
          />
        </div>
      </div>
    );
  };
}

export default MobilePreview;
