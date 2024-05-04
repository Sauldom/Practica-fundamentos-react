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
baseUrl('http://localhost:3001'),
});

creamos una variale de entorno en .env para futuros cambios

# hemos configurado prettier para que de formato automaticamente

e settings "editor.defaultFormatter": "esbenp.prettier-vscode",

# Empezamos la creacion una pagina de login

creamos un formulario que se podria refectorizar no tiene estilos

pero ya se meten los datos en el estado

ahora vamos a mandarlo a la api

me daba un error por no tener el campo email bien puesto

# podemos pasar props hacia abajo

con {..props} y con {xx, ..rest}

# estamos lintando con proptypes aun nos quedan 1 error yalgun warning pero para otro momento
