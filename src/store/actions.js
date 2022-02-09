import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {
    reqAddress,
    reqFoodCategory,
    reqLogOut,
    reqShops,
    reqUserInfo,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo,
    reqSearchShops
} from '../api/index'

export default {
    // 异步获取地址信息
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        if(result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    //异步获取食物分类信息
    async getCategorys({commit, state}) {
        const result = await reqFoodCategory()
        if(result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
        
    },
    // 异步获取商家信息
    async getShops({commit, state}) {
        const {longitude, latitude} = state
        const result = await reqShops(longitude, latitude)
        if(result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },

    // 同步记录用户信息

    recordUser({commit},userInfo) {
        commit(RECEIVE_USER_INFO, {userInfo})
    },

    // 异步获取用户信息
    async getUserInfo({commit}) {
        const result = await reqUserInfo()
        if(result.code===0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },

    // 异步 退出登录
    async logout({commit}) {
        const result = await reqLogOut()
        if(result.code===0) {
            commit(RESET_USER_INFO)
        }
    },

    // 异步获取商品信息 
    async getShopGoods({commit},{callback,id}) {
        const result = await reqShopGoods(id)
        if(result.code===0) {
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
            callback && callback()
             
        }
    },
    // 异步获取商家评价信息
    async getShopRatings({commit},{callback,id}) {
        const result = await reqShopRatings(id)
        if(result.code===0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
            callback && callback()
        }
    },
    // 异步获取商家信息
    async getShopInfo({commit},id) {
        const result = await reqShopInfo(id)
        if(result.code===0) {
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    },

    // 同步更新食物数量
    updateFoodCount({commit},{isAdd,food}) {
        if(isAdd) {
            commit(INCREMENT_FOOD_COUNT,{food})
        } else {
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    // 同步清空购物车 
    clearCart({commit}) {
        commit(CLEAR_CART)
    },
    // 异步搜索商家信息
    async searchShops({commit, state}, keyword) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShops(geohash, keyword)
        if(result.code===0) {
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
        }
    }
}