# REST API

## How to send the request

The request is sent to the server using the HTTP GET method. The URL is formed as follows: localhost:3000/?id=<someid>. If the id is not in the server it will send 404 as an error reponse.

For example: a request to "http://localhost:3000/?id=c2d9aa08-3de5-4e05-9436-e47f3704647e" will provide us {"LAT":"18.46","LONG":"79.11","VALUE":"1"} as response.

## Get started

```bash
npm install // Install all the dependencies
node index.js // Will initialize the server
```
