What is the purpose of npm init -y?
--- The purpose is to initiate a new Node.js project while choosing to say yes to all of the params that is available to the package.json upto initiation. ---

Why do we need express, cors, pg-promise, and dotenv?
 --- Express is a web framework for Node.js that helps with managing routes, requests, and middleware with minimal overhead. --- Cors is a node package that restricts how resources on a web server can be requested from other domain (it's a middleware)
 --- Pg-promise is a library that interacts with the PostgreSQL database using promises, (that you can count on)
 --- Dotenv is a 0-dependency module that allows you to store your secrets seprate from your code. 

What does the .env file do?
 --- it's a text file that holds all of your secret environment variables. This helps with your security and confidentiality, and the only place you should store your API keys. (NEVER HARD CODE YOUR API KEYS IN YOUR CODE PLEASE!) ---