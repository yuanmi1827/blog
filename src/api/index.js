import ajax from './axios'

const baseUrl = `http://localhost:3000`

// 获取验证码
export const getCaptcha = ()=> ajax.get(baseUrl+'/getCaptcha')

