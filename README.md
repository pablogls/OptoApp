# Correr proyecto en Ubuntu 20.04

## Actualiza la lista de paquetes disponibles.

apt-get update

## Instala las herramientas "curl", "git" y "build-essential" para construir el software.

apt-get install -y curl git build-essential

## Instalar Node Version Manager (NVM) y Node.js

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"

nvm install 16.13.0

nvm use 16.13.0

nvm alias default 16.13.0

## Instalar Git y clonar tu proyecto en carpeta "Github".

sudo apt-get install -y git

mkdir -p ~/Github

cd ~/Github

git clone https://github.com/pablogls/OptoApp.git

## Instalar dependencias del proyecto.

cd OptoApp

npm install

## Correr proyecto en local.

npm start

## Correr proyecto en app "Expo Go" desde una red distinta a la que se hostea.

npx expo start --tunnel

## Correr proyecto en otro puerto.

npx expo start -- --port=[puerto deseado]
