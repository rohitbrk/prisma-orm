// install prisma :
npm i prisma

// initialize prisma :
npx prisma init --datasource-provider sqlite

// migrate the schemas defined :
npx prisma migrate dev --name init
