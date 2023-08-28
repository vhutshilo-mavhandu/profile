import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: 'vf8t9mlg',
  dataset: "production",
  apiVersion: "2023-08-23",
  useCdn: false,
};

const client = createClient(config);

export default client;
