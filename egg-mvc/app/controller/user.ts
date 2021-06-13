import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }


  public async create() {
    const {ctx, ctx: { params } } = this;
    ctx.body = await ctx.service.user.ceateUser(params)
  }
}
