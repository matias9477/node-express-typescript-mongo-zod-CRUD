export default {
  port: 1337,
  dbUri: "mongodb://127.0.0.1:27017/rest-api-tutorial", //I needed to use the ip address instead of localhost, don't know why
  /**
   * MORE INFO ON THIS ISSUE (suggestion from GPT-3)
   * Sometimes, using localhost can resolve to the IPv6 address ::1, and if MongoDB is not configured to listen on IPv6, it might refuse the connection.
   * Try using the IPv4 address (127.0.0.1) in your connection string.
   */
  saltWorkFactor: 10,
};
