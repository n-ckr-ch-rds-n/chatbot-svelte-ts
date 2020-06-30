import express from 'express';
import apiai from "apiai";
import io from "socket.io";
import dotenv from "dotenv";
import {ExpressServer} from "./server/express-server/express-server";
import {ChatbotService} from "./server/ai-service/chatbot-service";
import {IoServer} from "./server/io-server/io-server";


dotenv.config();

const expressServer = new ExpressServer(express(), __dirname + '/public');
const serverInstance = expressServer.start(5000);
const chatbotService = new ChatbotService(apiai(process.env.APIAI_TOKEN as string));
const ioServer = new IoServer(io(serverInstance), chatbotService);
ioServer.init();
