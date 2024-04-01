#!/bin/sh
export DATABASE_USERNAME=${DATABASE_USERNAME}
export DATABASE_PASSWORD=${DATABASE_PASSWORD}
export DATABASE_PORT=${DATABASE_PORT}
export DATABASE_HOST=${DATABASE_HOST}

python manage.py migrate --noinput

python manage.py loaddata questions_data.json

python manage.py runserver 0.0.0.0:8000

