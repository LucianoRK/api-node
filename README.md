# api-node

https://blog.appsignal.com/2021/07/21/how-to-get-started-with-prisma-orm-for-nodejs-and-postgresql.html
npm install prisma
npx prisma init

.env
DATABASE_URL="postgresql://postgres:12345@localhost:5432/app?schema=public"
postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>?schema=<SCHEMA>

npx prisma migrate dev
