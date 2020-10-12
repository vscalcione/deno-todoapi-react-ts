import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const port = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`App started and listening on ${port}`);

await app.listen({ port: port });
