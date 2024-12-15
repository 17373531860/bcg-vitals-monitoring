// src/services/socketService.ts
export class SocketService {
    private socket: WebSocket
  
    constructor(url: string) {
      this.socket = new WebSocket(url)
    }
  
    onMessage(callback: (data: any) => void) {
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        callback(data)
      }
    }
  
    sendMessage(message: string) {
      this.socket.send(message)
    }
  }
  