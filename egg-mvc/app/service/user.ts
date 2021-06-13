
import { Service } from 'egg';

/**
 * Test Service
 */
export default class UserServeice extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }


  /**create User */

  public async createUser(params: {name: string; age: number; date: string}) {
    
  }
}
