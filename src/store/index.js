/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/7 -04 - 07 -2:30 下午
 * @Description: 全局store 入口
 */

import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '@module/homeSlice'

export default configureStore({
  reducer: { homeReducer },
})
