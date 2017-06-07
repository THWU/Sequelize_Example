# Sequelize_Example
Sequelize Example

將 scotch.io 中的一篇教學實作後，經過修正後可成功執行的範列。
教學網址：https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1

clone repo 後，需按照以下步驟執行
1.   $ npm install -l
2.   建立資料庫連結檔 /server/config/config.js

    module.exports = {
      development: {
        url: 'postgres://name:password@dbaddress:port/dbname',
        dialect: 'postgres'
      },
      production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
      },
      staging: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
      },
      test: {
        url: process.env.DATABASE_URL || 'postgres://name:password@dbaddress:port/dbname',
        dialect: 'postgres'
      }
    };

    //  mssql 可使用
    module.exports = {
      development: {
        url: 'mssql://name:password@dbaddress:port/dbname',
        dialect: 'mssql'
      }
    }
3.  $ sequelize db:migrate

    將會根據資料庫設定檔自動建立表格及欄位
    (非全域安裝需使用 node_modules\.bin\sequelize)
4.  $ npm start
