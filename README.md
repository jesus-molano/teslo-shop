# Development
1. Clonar el repositiorio
2. Crear una copia del ```.enn.template``` y renombrarlo a ```.env```
3. Rellenar las variables de entorno del .env
4. Instalar dependencias ```npm install```
5. Levantar la base de datos ```docker compose up -d```
6. Ejecutar el seed ```npm run seed```
7. Correr las migraciones de Prisma ```npx prisma migrate dev```
8. Correr el proyecto ```npm run dev```