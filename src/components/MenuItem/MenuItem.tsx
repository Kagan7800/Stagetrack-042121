import { IonIcon } from '@ionic/react'
import React, { MouseEvent, Component } from 'react'
import {
  personAddOutline,
  handRightOutline,
  closeCircleOutline,
  videocamOutline,
  micOutline,
  laptopOutline,
  easelOutline,
  personRemoveOutline
} from 'ionicons/icons'
import styles from './MenuItem.module.scss'

type Icons = Record<MenuItemName, string>

type MenuItemName = 'invite' |
  'raiseHand' |
  'end' |
  'video' |
  'audio' |
  'screenShare' |
  'whiteboard' |
  'memberRemove'

export interface MenuItemProps {
  name: MenuItemName
  active: boolean
<<<<<<< HEAD
=======
  text: string
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
  visibility: boolean
  handleClick: (event: MouseEvent) => void
}

export default class MenuItem extends Component<MenuItemProps> {
  icons: Icons = {
    invite: personAddOutline,
    raiseHand: handRightOutline,
    end: closeCircleOutline,
    video: videocamOutline,
    audio: micOutline,
    screenShare: laptopOutline,
    whiteboard: easelOutline,
    memberRemove: personRemoveOutline
  }

  get iconClass () {
    const activeClass = this.props.active && styles.active
    return `${styles.icon} ${activeClass}`
  }

  get icon () {
    return this.icons[this.props.name]
  }

  render () {
    return this.props.visibility &&
      <div
<<<<<<< HEAD
        className={styles.menuItem}
        onClick={this.props.handleClick}>
        <IonIcon
          className={this.iconClass}
          icon={this.icon} />
=======
        
        onClick={this.props.handleClick}>
       <a>
       {this.props.text}
        <IonIcon
          className={this.iconClass}
          icon={this.icon} />
      </a>   
        
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
      </div>
  }
}
