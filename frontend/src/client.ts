import { createClient } from '@sanity/client';

const sanityClient = createClient({
    projectId: 'mcc4dfqm',
    dataset: 'production',
    apiVersion: 'v2022-03-07',
    useCdn: true,
});

export default sanityClient;
