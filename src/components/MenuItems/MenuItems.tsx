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
  text: string
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
          handleClick: this.props.handleScreenShareClick ,
          text: 'Screen Share' 
          
        },
        {
          name: 'whiteboard',
          active: this.props.canWhiteboardEnable,
          visibility: true,
          handleClick: this.props.handleWhiteboardClick ,
          text: "White Board"
        },
        {
          name: 'memberRemove',
          active: true,
          visibility: this.props.canMemberRemove,
          handleClick: this.props.handleMemberRemoveClick ,
          text: 'Member Remove'
        } ,
        {
          name: 'invite',
          active: this.props.canInviteMember,
          visibility: true,
          handleClick: this.props.handleInviteMemberClick ,
          text: 'Invite'
        },
        {
          name: 'raiseHand',
          active: this.props.canRaiseHand,
          visibility: true,
          handleClick: this.props.handleRaiseHandClick ,
          text: 'Raise Hand'
        },
        {
          name: 'end',
          active: this.props.canEndMeeting,
          visibility: true,
          handleClick: this.props.handleEndMeetingClick ,
          text: 'End'
        },
        {
          name: 'video',
          active: this.props.canVideoMute,
          visibility: true,
          handleClick: this.props.handleVideoClick ,
          text: 'Vdieo'
        },
        {
          name: 'audio',
          active: this.props.canAudioMute,
          visibility: true,
          handleClick: this.props.handleAudioClick ,
          text: 'Audio'
        }
      ],
      bottom: [
       
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
          text={item.text}
          name={item.name}
          active={item.active}
          visibility={item.visibility}
          handleClick={item.handleClick} />
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.menuItems}
      </div>
    )
  }
}
