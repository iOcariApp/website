import React from "react";
import style from "./mobile-preview.scss";

import { isMobile } from "react-device-detect";
import Swipeable from "react-swipeable";

import arrowRight from "./arrow-right.svg";

const screens = Array(5)
  .fill()
  .map((whatever, index) => require(`./screen-${index}.png`));

// Home screen first
if (isMobile) {
  screens.sort((a, b) => (a.includes("screen-2") ? -1 : 1));
}

class MobilePreview extends React.Component {
  state = { screenIndex: isMobile ? 0 : 2 };

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

  swipedLeft = () => {
    this.nextScreen();
  };

  swipedRight = () => {
    this.prevScreen();
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
        <Swipeable
          onSwipedLeft={this.swipedLeft}
          onSwipedRight={this.swipedRight}
        >
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
                  alt="App screenshot"
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
        </Swipeable>
      </div>
    );
  };
}

export default MobilePreview;
