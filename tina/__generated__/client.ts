import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '2b6f282bcc1063f7424a98923555263e6d656ec4', queries,  });
export default client;
  