# nodejs - Hello Microservices

Sample app running in [Express 4](http://expressjs.com/) and Docker

## Build:

Using a docker environrment run:

```sh
docker build -t nodeapp-micro .
```

## Running:

Just run Docker application using port 5000 from localhost as default to expose app using express and try to hit using localhost:5000

```sh
docker run -d -p 5000:5000 nodeapp-micro
```
