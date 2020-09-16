import request from '@/utils/request'
const sid = window.localStorage.getItem('randomToken')||window.localStorage.getItem('sid');

/**
 * ljw-水管家列表
 */
export function getWater_keepers (data) {
  return request({
    url: 'tank-api/p/keeper/water-keepers/get?sid='+sid,
    method: 'post',
    data:data
  })
}
// ljw-水管家详情
export function getWater_detail (data) {
  return request({
    url: 'tank-api/p/keeper/water-keeper/detail?sid='+sid,
    method: 'get',
    params:data
  })
}
// ljw-袋装水采购记录
export function water_orders (data) {
  return request({
    url: 'tank-api/p/order/water-orders/get?sid='+sid,
    method: 'post',
    data:data
  })
}
// ljw-袋装水采购记录-水柜采购订单确认完成
export function water_orders_finish (data) {
  return request({
    url: 'tank-api/p/order/tank-order/finish?sid='+sid,
    method: 'post',
    data:data
  })
}
// ljw-袋装水采购记录-水柜采购订单确认退款
export function water_orders_refund (data) {
  return request({
    url: 'tank-api/p/order/tank-order/refund?sid='+sid,
    method: 'post',
    data:data
  })
}
// ljw-袋装水采购记录-袋装水采购订单批量更新状态
export function water_orders_batchUpdate (data) {
  return request({
    url: 'tank-api/p/order/water-order/batchUpdate?sid='+sid,
    method: 'post',
    data:data
  })
}