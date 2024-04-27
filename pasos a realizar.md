# instalaciond ebackend

Instalado nodepop desde clonado de url
npm install



npx create-react-app

npm create vite@latest

# podemos instalar el paquete clsx para gestionar las clases

npm install --save clsx

# libreria styled-components

npm install styled-components

componentes react basado en estilos tenemos que importar styled de styled-components

# Empezamos a trabajar con la api

podemos hacerlo con fecht o con axios

npm i axios 
importamos axios

 exportamos la url

export const client = axios.create({
    baseUrl('http://localhost:8000'),
});