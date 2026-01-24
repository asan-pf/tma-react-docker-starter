# Telegram Mini Apps React Starter
This is a basic setup of a single-page application that can be opened in Telegram as well as API backend that enables bot functionalities. The project uses **preact/signals-react** for state management and **telegraf.js** as telegram bot library.

## Features
- **React v.19**
- **Vite**
- **@telegram-apps/sdk-react**
- **@preact/signals-react**
- **tailwindcss v.4**
- **express.js**
- **telegraf**
- **docker-compose** setup

## Getting started 
Clone the project and install dependencies.
```
npm install
```
To run in development mode:
```
npm run dev
```
Set environment variables in **backend/.env**
```
# example .env file
PORT=3000
BOT_TOKEN=12345:yourtelegrambottoken
FRONTEND_URL=https://xxx.ngrok-free.app
ADMIN_USER_ID=123456789
AUTH_PASSWORD=strong-password
```

### Docker compose setup
1. Install docker compose 
2. Create Bot in telegram
3. Set env. variables
4. Start docker 
```
docker compose up -d --build
```
It will expose port **8080** so that you should use some service to expose you app, for example **Ngrok**. 
5. Set TMA webhook url and TMA button url with **BotFather** in telegram

### .sh script setup
1. Install **Ngrok**
2. run the script 
```
sudo chmod +x ./start-tma.sh
./start-tma.sh
```
## Debugging
1. Stop running docker containers befor rerunning `./start-tma.sh`
```sh
docker container prune
```

## Useful links
- [reactjs-template](https://github.com/Telegram-Mini-Apps/reactjs-template)
- [preact](https://preactjs.com/)
