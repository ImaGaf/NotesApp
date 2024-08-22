#!/bin/bash

read -sp 'Ingrese la contraseña de su base de datos: ' DB_PASSWORD
echo

echo "Instalando dependencias del backend..."
cd backend
npm install

echo "Instalando dependencias del frontend..."
cd ../frontend
npm install

echo "Creando y configurando la base de datos..."
export PGPASSWORD=$DB_PASSWORD

psql -U postgres -c "CREATE DATABASE my_database;"

psql -U postgres -d my_database -f ../backend/sql/db.sql

echo "Configurando el backend..."
cd ../backend

cat <<EOF > .env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=$DB_PASSWORD
DB_NAME=my_database
JWT_SECRET=inuyasha
EOF

echo "Iniciando el backend..."
npm run dev &

cd ../frontend

echo "Iniciando el frontend..."
npm run dev &

echo "El backend y el frontend están en ejecución."

cd ..
