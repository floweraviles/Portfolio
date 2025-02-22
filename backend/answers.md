What is the purpose of npm init -y?
--- The purpose is to initiate a new Node.js project while choosing to say yes to all of the params that is available to the package.json upto initiation. ---

Why do we need express, cors, pg-promise, and dotenv?
 --- Express is a web framework for Node.js that helps with managing routes, requests, and middleware with minimal overhead. --- Cors is a node package that restricts how resources on a web server can be requested from other domain (it's a middleware)
 --- Pg-promise is a library that interacts with the PostgreSQL database using promises, (that you can count on)
 --- Dotenv is a 0-dependency module that allows you to store your secrets seprate from your code. 

What does the .env file do?
 --- it's a text file that holds all of your secret environment variables. This helps with your security and confidentiality, and the only place you should store your API keys. (NEVER HARD CODE YOUR API KEYS IN YOUR CODE PLEASE!) ---
 
 What does pg-promise do?
  --- It helps connects to the database , executing queries, and managing database transactions, all in a promise way which fits well with modern JavaScript async programming. --- 

Why do we use an object to configure the database connection instead of a single connection string?
 --- We use an object to configure the database connection instead of a single connection string because it offer several advantages from software engineering perspective, especially as applications grow in complexity and scale. --- 

 What does app.use(cors()) do? 
  --- This enacts middleware to enable Cross-Origin Resource Sharing (CORS) by adding headers that permits interactions from different domains with your server.

Why do we need express.json()?
 --- It's middleware used to automatically parse incoming JSON payloads, turning them into JavaScript ojects accessible via req.body. ---

How can you change the port number of the server?
 --- Modify the server's port number by specifying it in the app.listen(PORT) call, where PORT can be set directly or through an environment variable like process.env.PORT. 