import { BUY_CAKE } from '../actionTypes.js'


export const buyCake = (state=1) => {
    return {
      type: BUY_CAKE ,
      payload :state
    }
  }
  