var countlyConfig = {
    mongodb: process.env.COUNTLYDB,
    web: {
        port: process.env.PORT,
        use_intercom: true
    }
};

module.exports = countlyConfig;
