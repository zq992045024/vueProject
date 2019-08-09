const path = require("path")

module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.piaoniu.com",
                changeOrigin:true
            },
            "/goodss":{
                target:"http://localhost:3000",
                changeOrigin:true
            },
            "/piaoniu":{
                target:"http://localhost:3000",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "lib":path.join(__dirname,"./src/lib")
            }
        }
    }
}

//https://m.piaoniu.com/api/v3/activities?pageIndex=1&categoryId=0&time=&sort=&seatMap=false&highestPrice=&lowestPrice=