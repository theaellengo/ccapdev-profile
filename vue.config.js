module.exports = {
    configureWebpack: {
      devServer: {
        proxy: {
          '/api': {
            target: `http://localhost:3000`,
          },
        },
        headers: { 'Access-Control-Allow-Origin': '*' 
        }
      }
    },
  };