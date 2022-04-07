/**
 * @Auther: 杨鹏飞
 * @Date: 2022/4/7 -04 - 07 -4:25 下午
 * @Description: baseurl 全局管理
 */

export const BASE_URL = {
  dev: 'dev',
  test: 'test',
  pre: 'pre',
  prod: 'prod',
}[import.meta.env.MODE]
