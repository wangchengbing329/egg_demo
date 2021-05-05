'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, ctx: { query, params } } = this;
    const { password, account } = query;
    const result = await ctx.service.login.login({password, account});
    console.log(result, "login")
    if (result && result.length > 0) {
      ctx.body = {
        message: "登陆成功",
        data: result
      };
      // ctx.status = 200;
    }
    
  }

  async register() {
    const {ctx, ctx: {query, params}  } = this;
    const { name, telphone, create_time, password, gender, email } = query;
    console.log(ctx.service, "request params") 
    // await ctx.service.login.register
    const result = await ctx.service.login.register({name, telphone, create_time, password, gender, email})
    if (result.affectedRows === 1) {
      ctx.body = {
        message: "注册成功",
      }
      ctx.status = 200;
    }
    
  }
  
}

module.exports = LoginController;
