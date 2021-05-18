let baseURL

// 通过 node 提供的 process.env.NODE_ENV 获取项目运行环境(development/test/production)
// 但是需要去 package.json 中 添加 --mode xxx
switch (process.env.NODE_ENV) {
  case 'development':
    // 开发阶段使用这地址的接口
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    // 测试阶段使用这地址的接口
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    // 上线阶段使用这地址的接口
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  default:
    // 没有匹配到默认返回上线阶段的地址
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}

export default {
  baseURL
}