/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {

      client: {
        host: "127.0.0.1",
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'demoapp',
      },
      app: true,
      agent: false,
     
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619797852343_376';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
