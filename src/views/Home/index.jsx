/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/6 -04 - 06 -3:44 下午
 * @Description: 首页页面模块
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from '@module/homeSlice'
import styles from './index.module.less'
import { Button } from 'antd'
const Index = () => {
  const count = useSelector((state) => state.homeReducer.value)
  const userInfo = useSelector((state) => state.homeReducer.userInfo)
  const dispatch = useDispatch()
  return (
    <div className={styles.home}>
      <p>{userInfo}</p>
      <Button onClick={() => dispatch(increment())}>加法</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>减法</Button>
      <Button onClick={() => dispatch(incrementAsync())}>延迟减法</Button>
    </div>
  )
}

export default Index
