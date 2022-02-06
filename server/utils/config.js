require('dotenv').config()

const PORT = process.env.PORT || 3001

const dialogflowFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS

const PROJECT_ID = process.env.PROJECT_ID

module.exports = { PORT , dialogflowFilename, PROJECT_ID}