import { isPlatform } from '@ionic/react'
import React, { Component } from 'react'
import { MenuPosition } from '../Menu/Menu'
import MenuItem, { MenuItemProps } from '../MenuItem/MenuItem'
import styles from './MenuItems.module.scss'

interface MenuItemsProps {
  position: MenuPosition
  canInviteMember: boolean
  canRaiseHand: boolean
  canEndMeeting: boolean
  canVideoMute: boolean
  canAudioMute: boolean
  canScreenShare: boolean
<<<<<<< HEAD
=======
  text: string
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
  canWhiteboardEnable: boolean
  canMemberRemove: boolean
  screenShareVisibility: boolean
  handleInviteMemberClick: () => void
  handleRaiseHandClick: () => void
  handleEndMeetingClick: () => void
  handleVideoClick: () => void
  handleAudioClick: () => void
  handleScreenShareClick: () => void
  handleWhiteboardClick: () => void
  handleMemberRemoveClick: () => void
}

type Items = Record<MenuPosition, MenuItemProps[]>

export default class MenuItems extends Component<MenuItemsProps> {
  get items (): Items {
    return {
      top: [
        {
          name: 'screenShare',
          active: this.props.canScreenShare,
          visibility: this.props.screenShareVisibility,
<<<<<<< HEAD
          handleClick: this.props.handleScreenShareClick
=======
          handleClick: this.props.handleScreenShareClick ,
          text: 'Screen Share' 
          
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'whiteboard',
          active: this.props.canWhiteboardEnable,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleWhiteboardClick
=======
          handleClick: this.props.handleWhiteboardClick ,
          text: "White Board"
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'memberRemove',
          active: true,
          visibility: this.props.canMemberRemove,
<<<<<<< HEAD
          handleClick: this.props.handleMemberRemoveClick
        }
      ],
      bottom: [
=======
          handleClick: this.props.handleMemberRemoveClick ,
          text: 'Member Remove'
        } ,
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        {
          name: 'invite',
          active: this.props.canInviteMember,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleInviteMemberClick
=======
          handleClick: this.props.handleInviteMemberClick ,
          text: 'Invite'
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'raiseHand',
          active: this.props.canRaiseHand,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleRaiseHandClick
=======
          handleClick: this.props.handleRaiseHandClick ,
          text: 'Raise Hand'
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'end',
          active: this.props.canEndMeeting,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleEndMeetingClick
=======
          handleClick: this.props.handleEndMeetingClick ,
          text: 'End'
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'video',
          active: this.props.canVideoMute,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleVideoClick
=======
          handleClick: this.props.handleVideoClick ,
          text: 'Vdieo'
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        },
        {
          name: 'audio',
          active: this.props.canAudioMute,
          visibility: true,
<<<<<<< HEAD
          handleClick: this.props.handleAudioClick
        }
=======
          handleClick: this.props.handleAudioClick ,
          text: 'Audio'
        }
      ],
      bottom: [
       
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
      ]
    }
  }

  get className () {
    const positionClass = styles[this.props.position]
    const mobileClass = isPlatform('mobile') && styles.mobile
    return `${styles.menuItems} ${positionClass} ${mobileClass}`
  }

  get menuItems () {
    const items = this.items[this.props.position]
    return items.map(item =>
      <div
        className={styles.item}
        key={item.name}>
        <MenuItem
<<<<<<< HEAD
=======
          text={item.text}
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
          name={item.name}
          active={item.active}
          visibility={item.visibility}
          handleClick={item.handleClick} />
      </div>
    )
  }

  render () {
    return (
<<<<<<< HEAD
      <div className={this.className}>
=======
      <div>
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
        {this.menuItems}
      </div>
    )
  }
}
