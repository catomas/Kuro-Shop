# Development

Pasos para ejecutar el proyecto:

1. Renombrar el archivo `.env.template` a `.env` y configurar las variables de entorno

2. Levantar la base de datos

```
docker compose up -d
```

3. Instalar las dependencias `yarn`

4. Ejecutar los comandos de prisma

# Prisma commands

```

npx prisma init
npx prisma migrate dev
npx prisma generate

```

5. Ejecutar el comando `yarn seed` para poblar la base de datos
6. Ejecutar el proyecto `yarn dev`
