//@ts-nocheck
import React, { useState } from 'react';
import './grid.css';
import styles from '../Meeting/Meeting.module.css';

function Grid() {
  const [values, setValues] = useState(1);
  const [openNav, setOpenNav] = useState(false);
  const [title, setTitle] = useState('Music Fun with your Little One');

  console.log(openNav);
  const handleOnOpenNav = () => {
    setOpenNav(!openNav);
  };
  const handleOnChange = (event) => {
    const { value, id } = event.target;
    if (typeof value === 'string') {
      setValues(value ? parseInt(value) : 1);
    } else {
      setValues(value ? value : 1);
    }
  };

  const handleLeftImages = () => {
    let elements = [<img src='./assets/vidPlaceholder.png' className={`changeNewBorderColor vidCapture${values}_${1}`} />];

    for (let i = 1; i <= values; i++) {
      if (i === 4) {
        elements.push(<img src='./assets/vidPlaceholder.png' className={`changeNewBorderColor vidCapture${values}_${2}`} />);
      }
    }
    return elements;
  };

  const handleRightImages = () => {
    let elements = [];
    for (let i = 1; i <= values; i++) {
      let condition1 = values >= 4 && i == 2;
      let condition2 = values >= 13 && i >= 13;

      if (i === 1 || condition1 || condition2) {
        // console.log('>>>>>if', i);
      } else {
        elements.push(<img src='./assets/vidPlaceholder.png' className={`changeNewBorderColor vidCapture${values}_${i}`} />);
      }
    }
    // console.log(elements);

    return elements;
  };
  const handleBottomImages = () => {
    let elements = [];
    if (values >= 13) {
      for (let i = 13; i <= values; i++) {
        elements.push(<img src='./assets/vidPlaceholder.png' className={`changeNewBorderColor vidCapture${values}_${i}`} />);
      }

      return elements;
    }
  };
  return (
    <div id='container'>
      <div id='contentContainer'>
        <aside id='nav_side'>
          {openNav ? (
            <div id='mySidepanel' class='sidepanel'>
              <a className='closebtn' onClick={handleOnOpenNav}>
                &times;
              </a>
              <a>For Kids</a>
            </div>
          ) : (
            <button className='openbtn' id='openbtn' onClick={handleOnOpenNav}>
              &#9776;
            </button>
          )}
        </aside>
        <main>
          <div className='mainTop'>
            {values >= 27 ? null : values === 26 ? (
              <div id='newMainContentAreaX26'>
                <div class='x22Header'>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture22_22' />
                  <div class='newMainContentHeaderBg26'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div class='changeNewBorderColor vidCapture26_26'>Balcony Seats</div>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture25_25' />
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture24_24' />
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture23_23' />
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 25 ? (
              <div id='newMainContentAreaX25'>
                <div class='x22Header'>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture22_22' />
                  <div class='newMainContentHeaderBg25'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture25_25' />
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture24_24' />
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture23_23' />
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 24 ? (
              <div id='newMainContentAreaX24'>
                <div class='x22Header'>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture22_22' />
                  <div class='newMainContentHeaderBg24'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture24_24' />
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture23_23' />
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 23 ? (
              <div id='newMainContentAreaX23'>
                <div class='x22Header'>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture22_22' />
                  <div class='newMainContentHeaderBg23'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture23_23' />
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 22 ? (
              <div id='newMainContentAreaX22'>
                <div class='x22Header'>
                  <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture22_22' />
                  <div class='newMainContentHeaderBg22'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 21 ? (
              <div id='newMainContentAreaX21'>
                <div class='newMainContentHeaderBg21'>
                  <h3 className='banner_title'>{title} </h3>
                </div>
                <div class='x21Lower'>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_11' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_21' />
                  </div>
                  <div class='x18Middle'>
                    <div class='newMainContentMiddleX13'>
                      <div class='newMainContentRightInner'>
                        <div class='newMainContentRightInnerMenu'>
                          <div class='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div class='newMainContentRightInnerTextarea'>
                          <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                        </div>
                      </div>
                    </div>
                    <div class='x13BottomVidsAlt'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_17' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_16' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_15' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_14' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_13' />
                    </div>
                  </div>
                  <div class='x18Right'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_3' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_4' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_5' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_6' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_7' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_8' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_9' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture21_10' />
                  </div>
                </div>
              </div>
            ) : values === 20 ? (
              <div id='newMainContentAreaX20'>
                <div class='x11Left18'>
                  <div class='newMainContentLeftX20'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_1' />
                  </div>
                  <div class='x20BottomVidsAlt'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_20' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_11' />
                  </div>
                </div>
                <div class='x11Right18'>
                  <div class='x18Upper'>
                    <div class='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div class='x18Lower'>
                    <div class='x18Middle'>
                      <div class='newMainContentMiddleX13'>
                        <div class='newMainContentRightInner'>
                          <div class='newMainContentRightInnerMenu'>
                            <div class='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div class='newMainContentRightInnerTextarea'>
                            <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                          </div>
                        </div>
                      </div>
                      <div class='x13BottomVidsAlt'>
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_17' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_16' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_15' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_14' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_13' />
                      </div>
                    </div>
                    <div class='x18Right'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_3' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_4' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_5' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_6' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_7' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_8' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_9' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture20_10' />
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 19 ? (
              <div id='newMainContentAreaX19'>
                <div class='x11Left18'>
                  <div class='newMainContentLeftX18'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_1' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_2' />
                  </div>
                  <div class='x18BottomVidsAlt'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_19' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_11' />
                  </div>
                </div>
                <div class='x11Right18'>
                  <div class='x18Upper'>
                    <div class='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div class='x18Lower'>
                    <div class='x18Middle'>
                      <div class='newMainContentMiddleX13'>
                        <div class='newMainContentRightInner'>
                          <div class='newMainContentRightInnerMenu'>
                            <div class='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div class='newMainContentRightInnerTextarea'>
                            <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                          </div>
                        </div>
                      </div>
                      <div class='x13BottomVidsAlt'>
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_17' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_16' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_15' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_14' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_13' />
                      </div>
                    </div>
                    <div class='x18Right'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_3' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_4' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_5' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_6' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_7' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_8' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_9' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture19_10' />
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 18 ? (
              <div id='newMainContentAreaX18'>
                <div class='x11Left18'>
                  <div class='newMainContentLeftX18'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_1' />
                  </div>
                  <div class='x18BottomVidsAlt'>
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_2' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_18' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_12' />
                    <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_11' />
                  </div>
                </div>
                <div class='x11Right18'>
                  <div class='x18Upper'>
                    <div class='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div class='x18Lower'>
                    <div class='x18Middle'>
                      <div class='newMainContentMiddleX13'>
                        <div class='newMainContentRightInner'>
                          <div class='newMainContentRightInnerMenu'>
                            <div class='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div class='newMainContentRightInnerTextarea'>
                            <textarea class='newMainContentTextarea' placeholder='...'></textarea>
                          </div>
                        </div>
                      </div>
                      <div class='x13BottomVidsAlt'>
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_17' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_16' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_15' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_14' />
                        <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_13' />
                      </div>
                    </div>
                    <div class='x18Right'>
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_3' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_4' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_5' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_6' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_7' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_8' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_9' />
                      <img src='./assets/vidPlaceholder.png' class='changeNewBorderColor vidCapture18_10' />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id={`newMainContentAreaX${values}`}>
                {values >= 11 ? (
                  <React.Fragment>
                    <div className={'x11Left'}>
                      <div class='newMainContentHeaderBgX12'>
                        <h3 className='banner_title'>{title} </h3>
                      </div>
                      <div className={'newMainContentMain'}>
                        <div className={`newMainContentLeft${values >= 12 ? 'X11' : values > 1 ? `X${values}` : ''}`}>
                          {handleLeftImages().map((item) => item)}
                        </div>
                        {values >= 13 ? (
                          <div class='x13Middle'>
                            <div className='newMainContentMiddleX13'>
                              <div className='newMainContentRightInner'>
                                <div className='newMainContentRightInnerMenu'>
                                  <div className='newMainContentRightInnerMenuContainer'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                  </div>
                                </div>
                                <div className='newMainContentRightInnerTextarea'>
                                  <textarea className='newMainContentTextarea' placeholder='...'></textarea>
                                </div>
                              </div>
                            </div>
                            <div class='x13BottomVids'>{handleBottomImages().map((item) => item)}</div>
                          </div>
                        ) : (
                          <div
                            className={`${
                              values >= 12 ? 'newMainContentMiddleX11' : values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'
                            }`}>
                            <div className='newMainContentRightInner'>
                              <div className='newMainContentRightInnerMenu'>
                                <div className='newMainContentRightInnerMenuContainer'>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>
                              </div>
                              <div className='newMainContentRightInnerTextarea'>
                                <textarea className='newMainContentTextarea' placeholder='...'></textarea>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div class='x11Right'>{handleRightImages().map((item) => item)}</div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div class='newMainContentHeaderBg'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                    <div className='newMainContentMain'>
                      <div className={`newMainContentLeft${values > 1 ? `X${values}` : ''}`}>{handleLeftImages().map((item) => item)}</div>
                      <div className={`${values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'}`}>
                        <div className='newMainContentRightInner'>
                          <div className='newMainContentRightInnerMenu'>
                            <div className='newMainContentRightInnerMenuContainer'>
                              <div></div>

                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div className='newMainContentRightInnerTextarea'>
                            <textarea className='newMainContentTextarea' placeholder='...'></textarea>
                          </div>
                        </div>
                      </div>
                      <div className={`newMainContentRightX${values}`}>{handleRightImages().map((item) => item)}</div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            )}

            <input
              type='number'
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
              onChange={handleOnChange}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Grid;
