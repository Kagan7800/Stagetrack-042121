//@ts-nocheck
import React, { useState } from 'react';
import './grid.css';
import styles from '../Meeting/Meeting.module.css';
import { IonImg } from '@ionic/react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

function Grid(props) {
  var { values } = props

  var values = values || 1;

  console.log(values);
  
  const [openNav, setOpenNav] = useState(false);
  const [title, setTitle] = useState('Music Fun with your Little One');
  const handleOnOpenNav = () => {
    setOpenNav(!openNav);
  };
  const handleLeftImages = () => {
    let elements = [<div className={`changeNewBorderColor vidCapture${values}_${1}`}>{props.getFirstVideo}</div>];

    for (let i = 1; i <= values; i++) {
      if (i === 4) {
        elements.push(<div className={`changeNewBorderColor vidCapture${values}_${2}`}>{props.videos}</div>);
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
        elements.push(<div className={`changeNewBorderColor vidCapture${values}_${i}`}>{props.videos}</div>);
      }
    }
    // console.log(elements);

    return elements;
  };
  const handleBottomImages = () => {
    let elements = [];
    if (values >= 13) {
      for (let i = 13; i <= values; i++) {
        elements.push(<div className={`changeNewBorderColor vidCapture${values}_${i}`}>{props.videos}</div>);
      }

      return elements;
    }
  };
  return (
    <div id='container'>
      <div id='contentContainer'>
        <aside id='nav_side'>
          {openNav ? (
            <div id='mySidepanel' className='sidepanel'>
              <a className='closebtn' onClick={handleOnOpenNav}>
                &times;
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuRaiseHandClick}>
                Raise hand
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuEndMeetingClick}>
                End meeting
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuVideoClick}>
                Video Enable
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuAudioClick}>
                Audio enable
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuScreenShareClick}>
                {' '}
                Screen share
              </a>
              <a href='javascript:void(0)' onClick={props.handleMenuWhiteboardClick}>
                White Board
              </a>
              <div id='session'>
                <IonImg className='session' src='/assets/sessionLeave.png' />
                <IonImg className='session' src='/assets/sessionPause.png' />
                <IonImg className='session' src='/assets/sessionStart.png' />
              </div>
              <div id='newCaptureBorderColorsContainer'>
                <button id='newCaptureGreen'></button>
                <button id='newCaptureAqua'></button>
                <button id='newCaptureRed'></button>
                <button id='newCaptureOrange'></button>
              </div>
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
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{props.videos}</div>
                  <div className='newMainContentHeaderBg26'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture26_26'>Balcony Seats</div>
                  <div className='changeNewBorderColor vidCapture25_25'>{props.videos}</div>
                  <div className='changeNewBorderColor vidCapture24_24'>{props.videos}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{props.videos}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>

                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 25 ? (
              <div id='newMainContentAreaX25'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{props.videos}</div>
                  <div className='newMainContentHeaderBg25'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture25_25'>{props.videos}</div>
                  <div className='changeNewBorderColor vidCapture24_24'>{props.videos}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{props.videos}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 24 ? (
              <div id='newMainContentAreaX24'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{props.videos}</div>
                  <div className='newMainContentHeaderBg24'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture24_24'>{props.videos}</div>
                  <div className='changeNewBorderColor vidCapture23_23'>{props.videos}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 23 ? (
              <div id='newMainContentAreaX23'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{props.videos}</div>
                  <div className='newMainContentHeaderBg23'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                  <div className='changeNewBorderColor vidCapture23_23'>{props.videos}</div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 22 ? (
              <div id='newMainContentAreaX22'>
                <div className='x22Header'>
                  <div className='changeNewBorderColor vidCapture22_22'>{props.videos}</div>
                  <div className='newMainContentHeaderBg22'>
                    <h3 className='banner_title'>{title} </h3>
                  </div>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 21 ? (
              <div id='newMainContentAreaX21'>
                <div className='newMainContentHeaderBg21'>
                  <h3 className='banner_title'>{title} </h3>
                </div>
                <div className='x21Lower'>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_11'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_21'>{props.videos}</div>
                  </div>
                  <div className='x18Middle'>
                    <div className='newMainContentMiddleX13'>
                      <div className='newMainContentRightInner'>
                        <div className='newMainContentRightInnerMenu'>
                          <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                        <div className='newMainContentRightInnerTextarea'>
                          <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                        </div>
                      </div>
                    </div>
                    <div className='x13BottomVidsAlt'>
                      <div className='changeNewBorderColor vidCapture21_17'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_16'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_15'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_14'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture21_13'>{props.videos}</div>
                    </div>
                  </div>
                  <div className='x18Right'>
                    <div className='changeNewBorderColor vidCapture21_3'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_4'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_5'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_6'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_7'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_8'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_9'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture21_10'>{props.videos}</div>
                  </div>
                </div>
              </div>
            ) : values === 20 ? (
              <div id='newMainContentAreaX20'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX20'>
                    <div className='changeNewBorderColor vidCapture20_1'>{props.videos}</div>
                  </div>
                  <div className='x20BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture20_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture20_20'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture20_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture20_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture20_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture20_11'>{props.videos}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture20_17'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture20_16'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture20_15'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture20_14'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture20_13'>{props.videos}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture20_3'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_4'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_5'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_6'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_7'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_8'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_9'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture20_10'>{props.videos}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 19 ? (
              <div id='newMainContentAreaX19'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX18'>
                    <div className='changeNewBorderColor vidCapture19_1'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture19_2'>{props.videos}</div>
                  </div>
                  <div className='x18BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture19_19'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture19_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture19_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture19_11'>{props.videos}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture19_17'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture19_16'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture19_15'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture19_14'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture19_13'>{props.videos}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture19_3'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_4'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_5'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_6'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_7'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_8'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_9'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture19_10'>{props.videos}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : values === 18 ? (
              <div id='newMainContentAreaX18'>
                <div className='x11Left18'>
                  <div className='newMainContentLeftX18'>
                    <div className='changeNewBorderColor vidCapture18_1'>{props.videos}</div>
                  </div>
                  <div className='x18BottomVidsAlt'>
                    <div className='changeNewBorderColor vidCapture18_2'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture18_18'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture18_12'>{props.videos}</div>
                    <div className='changeNewBorderColor vidCapture18_11'>{props.videos}</div>
                  </div>
                </div>
                <div className='x11Right18'>
                  <div className='x18Upper'>
                    <div className='newMainContentHeaderBgX18'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                  </div>
                  <div className='x18Lower'>
                    <div className='x18Middle'>
                      <div className='newMainContentMiddleX13'>
                        <div className='newMainContentRightInner'>
                          <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          <div className='newMainContentRightInnerTextarea'>
                            <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                          </div>
                        </div>
                      </div>
                      <div className='x13BottomVidsAlt'>
                        <div className='changeNewBorderColor vidCapture18_17'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture18_16'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture18_15'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture18_14'>{props.videos}</div>
                        <div className='changeNewBorderColor vidCapture18_13'>{props.videos}</div>
                      </div>
                    </div>
                    <div className='x18Right'>
                      <div className='changeNewBorderColor vidCapture18_3'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_4'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_5'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_6'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_7'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_8'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_9'>{props.videos}</div>
                      <div className='changeNewBorderColor vidCapture18_10'>{props.videos}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id={`newMainContentAreaX${values}`}>
                {values >= 11 ? (
                  <React.Fragment>
                    <div className={'x11Left'}>
                      <div className='newMainContentHeaderBgX12'>
                        <h3 className='banner_title'>{title} </h3>
                      </div>
                      <div className={'newMainContentMain'}>
                        <div className={`newMainContentLeft${values >= 12 ? 'X11' : values > 1 ? `X${values}` : ''}`}>
                          {handleLeftImages().map((item) => item)}
                        </div>
                        {values >= 13 ? (
                          <div className='x13Middle'>
                            <div className='newMainContentMiddleX13'>
                              <div className='newMainContentRightInner'>
                                <div className='newMainContentRightInnerMenu'>
                                  <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                  </div>
                                </div>
                                <div className='newMainContentRightInnerTextarea'>
                                  <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                                </div>
                              </div>
                            </div>
                            <div className='x13BottomVids'>{handleBottomImages().map((item) => item)}</div>
                          </div>
                        ) : (
                          <div
                            className={`${
                              values >= 12 ? 'newMainContentMiddleX11' : values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'
                            }`}>
                            <div className='newMainContentRightInner'>
                              <div className='newMainContentRightInnerMenu'>
                                <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>
                              </div>
                              <div className='newMainContentRightInnerTextarea'>
                                <div className='newMainContentRightInnerTextarea'>{props.activeVideo}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='x11Right'>{handleRightImages().map((item) => item)}</div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className='newMainContentHeaderBg'>
                      <h3 className='banner_title'>{title} </h3>
                    </div>
                    <div className='newMainContentMain'>
                      <div className={`newMainContentLeft${values > 1 ? `X${values}` : ''}`}>{handleLeftImages().map((item) => item)}</div>
                      <div className={`${values > 1 ? `newMainContentMiddleX${values}` : 'newMainContentRight'}`}>
                        <div className='newMainContentRightInner'>
                          <div className='newMainContentRightInnerMenu'>
                            <div onClick={handleOnOpenNav} className='newMainContentRightInnerMenuContainer'>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </div>
                          {/* {props.activeVideoSkeletonVisibility && ( */}
                          <div id='newMainContentRightInnerTextarea' className='newMainContentRightInnerTextarea'>
                            {props.activeVideo}
                          </div>
                          {/* )} */}
                        </div>
                      </div>
                      <div className={`newMainContentRightX${values}`}>{handleRightImages().map((item) => item)}</div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Grid;
