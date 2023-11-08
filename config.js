const config = {
    vpnIPs: process.env.VPN_IPs && JSON.parse(process.env.VPN_IPs),
    cosmos: {
        endpoint: process.env.COSMOS_ENDPOINT,
        key: process.env.COSMOS_API_KEY,
        dbName: process.env.COSMOS_DBNAME,
    },
    storage: {
        connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
        blobs: {},
        queues: {
            templateQueue: 'template-generator',
            scheduleQueue: 'campaigns',
            sendEmailQueue: 'send-mail',
            exportSubmissionQueue: 'export-submission',
        },
    },
    backendApiUrl: process.env.BACKEND_API_URL,
    jwtPvtKey: process.env.JWT_PRIVATE_KEY,
    redisConfig: {
        port: 6380,
        host: process.env.REDIS_HOST,
        key: process.env.REDIS_KEY,
    },
};
module.exports = config;
