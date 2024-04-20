import App from './app';

const PORT = process.env.SERVER_PORT || 3001;

new App().start(PORT);