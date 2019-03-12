module.exports = function() {
    switch (process.env.NODE_ENV) {
      case "dev":
        return {
          url: "http://13.67.49.65:23000",
          // url: "http://192.168.2.108:3003",
          name: "development",
        };
  
      case "staging":
        return {
          url: "http://13.67.49.65:23000",
          // url: "http://localhost:3002",
          name: "staging"
        };
  
      case "production":
        return {
          url: "",
          name: "production"
        };
  
      default:
        return {
          url: "http://13.67.49.65:23000",
          name: "default"
        };
    }
  };
  