import App from './App.svelte';
import io from 'socket.io-client';
import {RecognitionFactory} from "./recognition-factory/recognition-factory";
import {VoiceSynthesiser} from "./voice-synthesiser/voice-synthesiser";
import {SocketService} from "./socket-service/socket-service";
import {SpeechRecognitionService} from "./speech-recognition-service/speech-recognition.service";

const recognition: SpeechRecognition = RecognitionFactory.create();
const voiceSynth = new VoiceSynthesiser(window.speechSynthesis);
const socketService = new SocketService(io(), voiceSynth);
const recognitionService = new SpeechRecognitionService(recognition, socketService);

const app = new App({
	target: document.body,
	props: {
		name: "hello"
	}
});

export default app;
