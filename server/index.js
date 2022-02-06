const express = require('express')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const {Server} = require('socket.io')
const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer,{})

const dialogflow = require('@google-cloud/dialogflow')
const uuid = require('uuid')

io.on("connection", (socket)=> {
    socket.emit('set id', socket.id)

    socket.on('message', (message) => {
        const getAIResponse = async()=>{
            try{
                const sessionClient = new dialogflow.SessionsClient({
                    keyFilename: config.dialogflowFilename,
                });
                const sessionId = uuid.v4()
    
                const sessionPath = sessionClient.projectAgentSessionPath(config.PROJECT_ID,sessionId)
                
                const request = {
                    session: sessionPath,
                    queryInput: {
                        text: {
                            text: message,
                            languageCode:"en-US"
                        }
                    }
                };
                const responses = await sessionClient.detectIntent(request)
                const result = responses[0].queryResult.fulfillmentText
    
                socket.emit("message", result)
                
                logger.info(result)
                if(result.intent){
                    logger.info(`Intent: ${result.intent.displayName}`)
                }
                else{
                    logger.info('no intent matched');
                }
            }
            catch(error){
                logger.error(error)
            }
      
        }
        getAIResponse()
    })
})


httpServer.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}`)
})


