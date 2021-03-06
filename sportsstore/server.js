const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");
const fs = require("fs");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const queryResolvers = require("./serverQueriesResolver");
const mutationResolvers = require("./serverMutationsResolver");
const auth = require("./authMiddleware");
const history = require("connect-history-api-fallback")

const filename = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;
let router;
let graph;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(filename)];
    setTimeout(() => {
        router = jsonServer.router(filename.endsWith("js") ? require(filename)() : filename);
        let schema =
            fs.readFileSync("./serverQueriesSchema.graphql", "utf-8") +
            fs.readFileSync("./serverMutationsSchema.graphql", "utf-8");
        let resolvers = { ...queryResolvers, ...mutationResolvers };
        graph = graphqlHTTP({
            schema: buildSchema(schema),
            rootValue: resolvers,
            graphiql: true,
            context: { db: router.db }
        });
    }, 100);
};

createServer();

app.use(history());

// serve SportsStore frontend static files
app.use("/", express.static("./build"))

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth);
app.use("/api", (req, res, next) => router(req, res, next));
app.use("/graphql", (req, resp, next) => graph(req, resp, next));

chokidar.watch(filename).on("change", () => {
    console.log("Reloading web service data...");
    createServer();
    console.log("Reloading web service data complete.");
});

app.listen(port, () => console.log(`Web service running on port ${port}`));
