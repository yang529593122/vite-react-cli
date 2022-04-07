/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/7 -04 - 07 -2:34 下午
 * @Description: 首页 store 状态管理
 */
import { createSlice } from '@reduxjs/toolkit'
import { postRequest } from '@Api/request'
import { BASE_URL } from '@constant/env'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
    userInfo: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setUserInfo: (state, data) => {
      state.userInfo = data.payload
    },
  },
})

export const incrementAsync = (amount) => async (dispatch) => {
  console.log(BASE_URL, 999)
  const result = await postRequest(`${BASE_URL}/user/userLogin`, {
    phone: 15036097616,
    password: '123456',
  })
  if (result.code === 0) {
    dispatch(setUserInfo(result.data))
  }
}

export const { increment, decrement, setUserInfo } = homeSlice.actions

export default homeSlice.reducer
