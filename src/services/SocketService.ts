import { Client } from 'faye'

export default class SocketService {
  protected static client: Client

  static connect (): void {
    const endpoint = `https://${process.env.REACT_APP_API_HOST}/socket`
<<<<<<< HEAD
    this.client = new Client(endpoint)
  }

  static subscribe (channel: string, callback: (payload: any) => void): void {
    this.client.subscribe(channel, payload => callback(payload))
  }

  static unsubscribe (channel: string): void {
    this.client.unsubscribe(channel)
  }

  static publish (channel: string, payload: any): void {
    this.client.publish(channel, payload)
  }
}
 
=======
    SocketService.client = new Client(endpoint)
  }

  static subscribe (channel: string, callback: (payload: any) => void): void {
    SocketService.client.subscribe(channel, payload => callback(payload))
  }

  static unsubscribe (channel: string): void {
    SocketService.client.unsubscribe(channel)
  }

  static publish (channel: string, payload: any): void {
    SocketService.client.publish(channel, payload)
  }
}
>>>>>>> beacc65ac23c8b29b7d0bcf1893bec4c09c3db48
