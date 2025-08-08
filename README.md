Codes For tomorrow/
├──📁 Db/             # Database connection/configuration files
├──📁 Loader/         #  for initial setup
├──📁 Middleware/     # Middleware logic (JWT auth, validation, etc.)
├──📁 models/         # Mongoose schemas and models
├──📁 Router/         # Route definitions for APIs
├──📁 Validator/      # Request validation logic (express-validator or custom)
├──📁 config.js       # Global configuration (env variables, constants, etc.)
├──📁 index.js        # Entry point for the application
├── package-lock.json
└── package.json

Hey team , i modify few routes in a better way so that we don't have to make two api for one function call

You can simply add this POSTMAN API for testing  - https://api.postman.com/collections/25643998-e6bc0da7-cf1c-4628-a382-cf80061c59f6?access_key=PMAT-01K24BE90KSC8YBH5AE3AGEY9B

Good to know
PORT - 3500 
JWT_Key = "test"
AdminEmail = "admin@codesfortomorrow.com"
AdminPassword = "Admin123!@#"


📂 Project Structure Explanation
Db/ – Database Layer
Contains all database configuration and connection logic. This is where the application connects to MongoDB using Mongoose. Keeping database code separate from application logic ensures cleaner maintainability and easier debugging.

Loader/ – Initialization Scripts
Holds scripts that run during application startup, such as loading default data, creating initial admin accounts, or seeding categories. This helps prepare the system before it starts serving requests.

Middleware/ – Custom Middleware
Stores reusable middleware functions for Express, such as JWT authentication, error handling, and request/response manipulation. This keeps repetitive logic centralized and easy to manage.

models/ – Mongoose Schemas
Defines MongoDB collections and their structure using Mongoose. This includes the Category, Service, and Service Price Options schemas. Separating models from controllers makes the codebase more modular and easier to maintain.

Router/ – API Routes
Contains the API route definitions for different modules (e.g., categories, services, authentication). Each route file is responsible for mapping HTTP endpoints to their respective controllers or service handlers.

Validator/ – Request Validation
Handles input validation for API requests, usually implemented using express-validator or custom validation logic. Ensures that incoming data meets the required structure before reaching controllers.

config.js – Application Configuration
Centralizes environment variables, database URIs, JWT secrets, and other global constants in one place for easy updates and better security practices.

index.js – Application Entry Point
The main file that starts the server. It loads all middleware, connects to the database, registers routes, and runs initialization scripts before the server begins accepting requests.

package.json & package-lock.json – Project Metadata & Dependencies
Manage dependencies, scripts, and metadata for the project. The lock file ensures consistent dependency versions across different installations.

