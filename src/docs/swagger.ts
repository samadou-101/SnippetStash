import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "snippet store API",
      version: "1.0.0",
      description: "API for managing code snippets",
    },
    servers: [{ url: "http/localhost:3000", description: "Local server" }],
  },
  apis: [".src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
