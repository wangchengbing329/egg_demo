'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(params) {
    const { password, account } = params;
    const { ctx } = this;
    const result = await this.app.mysql.query("select * from users where telphone = ? or name = ?", [account, account])
    // const result = await this.app.mysql.select("users",
    // {
    //   where: {
    //     password,
    //     name:account
    //   } || {
    //     password,
    //     telphone: account
    //   }
    // })
    return result;
    // ctx.body = {
    //     code: "200"
    // };
  }

  async register(params) {
    const {ctx, ctx: {query}  } = this;
    const result = await this.app.mysql.insert("users",{
        ...params
    })
    console.log(result, "service result")
    return result;
  }
}

module.exports = LoginService;
