import {VoiceSynthesiser} from "../voice-synthesiser/voice-synthesiser";
import {Socket} from "socket.io";

export class SocketService {

    constructor(private socket: Socket,
                private voiceSynth: VoiceSynthesiser) {
        this.socket.on("bot reply", (text: string) => this.handleReply(text))
    }

    emitMessage(text: string) {
        this.socket.emit("chat message", text);
    }

    handleReply(text: string) {
        this.voiceSynth.speak(text);
        console.log("Reply text", text);
    }
}
