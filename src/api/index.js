import ajax from "./ajax";

const BASEURL = 'http://localhost:3000'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`${BASEURL}/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategory = () => ajax(BASEURL+ '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>

export const reqShops = (longitude,latitude) => ajax(BASEURL+'/shops',{longitude,latitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (geohash,keyword) => ajax(BASEURL+'/search_shops',{geohash,keyword})

// [5、获取一次性验证码](#5获取一次性验证码)<br/>

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASEURL+ '/login_pwd',{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASEURL+ '/sendcode',{phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLogin = (phone,code) => ajax(BASEURL+ '/login_sms',{phone,code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASEURL+ '/userinfo')


// [10、用户登出](#10用户登出)<br/>
export const reqLogOut = () => ajax(BASEURL+ '/logout')

//发送获取商品信息请求
export const reqShopGoods = () => ajax('/goods')

//发送获取商品评价请求
export const reqShopRatings = () => ajax('/ratings')

// 发送获取商家信息请求
export const reqShopInfo = () => ajax('/info')
