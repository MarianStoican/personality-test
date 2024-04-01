# personality-test

## Set Up

1. Install Docker Desktop and run it
2. Clone personality-test: `git clone https://github.com/MarianStoican/personality-test.git`
3. Make .env file in root directory containing the following:

    DATABASE_USERNAME=postgres
    DATABASE_PASSWORD=postgres
    DATABASE_NAME=postgres
    DATABASE_HOST=db

4. Run docker-compose up --build, backend server will start on http://0.0.0.0:8000/
5. Go under web directory and run nmp install, ng build, ng serve, frontend server will start on http://localhost:4200/

