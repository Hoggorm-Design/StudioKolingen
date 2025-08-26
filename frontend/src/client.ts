import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "mcc4dfqm",
  dataset: "staging",
  apiVersion: "v2022-03-07",
  useCdn: true,
});

export default sanityClient;
