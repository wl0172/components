import request from '@/utils/request'
const sid = window.localStorage.getItem('randomToken')||window.localStorage.getItem('sid');

export function getProductInfo(data) {
  return request({
    url: 'tank-api/p/product/get/'+data.productId,
    method: 'get'
  })
}

export function updateProductInfo(data) {
  return request({
    url: '/tank-api/p/product/edit?sid='+sid,
    method: 'post',
    data:data
  })
}

export function updateSpecStatu(data) {
  return request({
    url: '/tank-api/p/product/update-spec-status?sid='+sid,
    method: 'post',
    data:data
  })
}
export function giftProductOption() {
  return request({
    url: '/tank-api/p/product/gift-product-option/get?sid='+sid,
    method: 'get'
  })
}
