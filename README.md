# api-node

#arquivos de config do projeto
Dockerfile
docker-compose.yml
.env
src/server.js

.env
postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>?schema=<SCHEMA>
<HOST> - Pode ser o nome do container docker
DATABASE_URL="postgresql://postgres:12345@postgres:5432/app?schema=public"

# comandos prisma
https://blog.appsignal.com/2021/07/21/how-to-get-started-with-prisma-orm-for-nodejs-and-postgresql.html
npx prisma init
npx prisma migrate dev
