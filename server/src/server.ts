import app from './App';
import * as http from 'http';
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
    console.log(`Listening on port: ${PORT}`);
});