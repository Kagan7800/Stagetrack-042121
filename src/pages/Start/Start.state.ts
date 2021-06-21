import { AnyAction } from 'redux'
<<<<<<< HEAD
import { cloneDeep, replace } from 'lodash'
=======
import { cloneDeep } from 'lodash'
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
import { actions as appActions, AuthType } from '../../components/App/App.state'

export interface StartState {
  username: string
  password: string
<<<<<<< HEAD
  clicked:boolean
}

export interface StartActions {
  replaceUsername: (username: string) => AnyAction;
  replacePassword: (password: string) => AnyAction;
  replaceAppAuthType: (type: AuthType) => AnyAction;
  replaceApploginScreen: () => AnyAction;
=======
}

export interface StartActions {
  replaceUsername: (username: string) => AnyAction
  replacePassword: (password: string) => AnyAction
  replaceAppAuthType: (type: AuthType) => AnyAction
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
}

const start: StartState = {
  username: '',
<<<<<<< HEAD
  password: '',
  clicked:false
=======
  password: ''
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
}

export const actions: StartActions = {
  replaceUsername (username) {
    return { type: 'REPLACE_START_USERNAME', username }
  },
  replacePassword (password) {
    return { type: 'REPLACE_START_PASSWORD', password }
  },
  replaceAppAuthType (type) {
    return appActions.replaceAuthType(type)
<<<<<<< HEAD
  },
  replaceApploginScreen() {
    return { type: 'REPLACE_LOGIN_SCREEN' };
=======
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
  }
}

export function reducers (state = start, action: any) {
  switch (action.type) {
    case 'REPLACE_START_USERNAME':
<<<<<<< HEAD
      start.username = action.username;
      return cloneDeep(start);
    case 'REPLACE_START_PASSWORD':
      start.password = action.password;
      return cloneDeep(start);
    case 'REPLACE_LOGIN_SCREEN':
      start.clicked = !start.clicked;
      return cloneDeep(start);
    default:
      return state;
=======
      start.username = action.username
      return cloneDeep(start)
    case 'REPLACE_START_PASSWORD':
      start.password = action.password
      return cloneDeep(start)
    default:
      return state
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
  }
}

export function selectors (state: { start: StartState }) {
  return cloneDeep(state.start)
}
