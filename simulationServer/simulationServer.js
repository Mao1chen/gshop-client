const app = require('express')()
const cors = require('cors')
app.use(cors())
//query参数和params参数路径不会带给后端路由,params要占位,query直接带地址里
//祝你学业有成
app.get('/api/product/getBaseCategoryList', (request, response) => {
    console.log('有人请求服务器了')
    const message = {
        "code": 200,
        "message": "成功",
        "data": [
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 2
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 3
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
            {
                "categoryName": "图书、音像、电子书刊",
                "categoryChild": [
                    {
                        "categoryChild": [
                            {
                                "categoryName": "电子书",
                                "categoryId": 1
                            }
                        ],
                        "categoryName": "婚恋,两性,文学",
                        "categoryId": 2
                    }
                ],
                "categoryId": 1
            },
        ],
        "ok": true
    }
    response.send(message)
})
app.post('/api/list', (request, response) => {
    console.log('有人发送list请求了')
    const message = {
        "code": 200,
        "message": "成功",
        "data": {
            "trademarkList": [
                {
                    "tmId": 1,
                    "tmName": "小米"
                },
                {
                    "tmId": 2,
                    "tmName": "华为"
                },
                {
                    "tmId": 3,
                    "tmName": "三星"
                },
                {
                    "tmId": 4,
                    "tmName": "SAMSUNG"
                },
                {
                    "tmId": 5,
                    "tmName": "苹果"
                },
                {
                    "tmId": 6,
                    "tmName": "苹果"
                },
                {
                    "tmId": 7,
                    "tmName": "苹果"
                },
                {
                    "tmId": 8,
                    "tmName": "苹果"
                },
                {
                    "tmId": 9,
                    "tmName": "苹果"
                }
            ],
            "attrsList": [
                {
                    "attrId": 1,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 2,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 3,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 4,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 5,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 6,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 7,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 8,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                },
                {
                    "attrId": 10,
                    "attrValueList": [
                        "4500-11999",
                        "2800-4499"
                    ],
                    "attrName": "价格"
                }
            ],
            "goodsList": [
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                },
                {
                    "id": 1,
                    "defaultImg": "./images/mobile01.png",
                    "title": "Apple iPhone 11 (A2223)",
                    "price": 5499,
                    "createTime": null,
                    "tmId": null,
                    "tmName": null,
                    "category1Id": null,
                    "category1Name": null,
                    "category2Id": null,
                    "category2Name": null,
                    "category3Id": null,
                    "category3Name": null,
                    "hotScore": 0,
                    "attrs": null
                }
            ],
            "total": 10,
            "pageSize": 2,
            "pageNo": 1,
            "totalPages": 4
        },
        "ok": true
    }
    response.send(message)
})
app.get('/api/item/1', (request, response) => {
    console.log('有人发送list请求了')
    const message = {
        "code": 200,
        "message": "成功",
        "data": {
            "valuesSkuJson": "{\"3|5|7\":6,\"3|4|7\":2,\"2|4|7\":3,\"2|5|7\":4}",
            "price": 5499,
            "categoryView": {
                "id": 61,
                "category1Id": 2,
                "category1Name": "手机",
                "category2Id": 13,
                "category2Name": "手机通讯",
                "category3Id": 61,
                "category3Name": "手机"
            },
            "spuSaleAttrList": [
                {
                    "id": 1,
                    "spuId": 1,
                    "baseSaleAttrId": 1,
                    "saleAttrName": "选择颜色",
                    "spuSaleAttrValueList": [
                        {
                            "id": 1,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "黑色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "0"
                        },
                        {
                            "id": 2,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "绿色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "0"
                        },
                        {
                            "id": 3,
                            "spuId": 1,
                            "baseSaleAttrId": 1,
                            "saleAttrValueName": "天蓝色",
                            "saleAttrName": "选择颜色",
                            "isChecked": "0"
                        },
                    ]
                },
                {
                    "id": 2,
                    "spuId": 1,
                    "baseSaleAttrId": 2,
                    "saleAttrName": "选择版本",
                    "spuSaleAttrValueList": [
                        {
                            "id": 4,
                            "spuId": 1,
                            "baseSaleAttrId": 2,
                            "saleAttrValueName": "64GB",
                            "saleAttrName": "选择版本",
                            "isChecked": "0"
                        }
                    ]
                },
                {
                    "id": 3,
                    "spuId": 1,
                    "baseSaleAttrId": 3,
                    "saleAttrName": "选择套装",
                    "spuSaleAttrValueList": [
                        {
                            "id": 7,
                            "spuId": 1,
                            "baseSaleAttrId": 3,
                            "saleAttrValueName": " 官方标配",
                            "saleAttrName": "选择套装",
                            "isChecked": "0"
                        }
                    ]
                }
            ],
            "skuInfo": {
                "id": 2,
                "spuId": 1,
                "price": 5499,
                "skuName": "Apple iPhone 11 (A2223) 64GB 红色 移动联通电信双卡双待",
                "skuDesc": "主体\n入网型号\nA2223\n品牌\n机身厚度（mm）\n8.3\n运营商标志或内容\n无",
                "weight": "0.47",
                "tmId": 1,
                "category3Id": 61,
                "skuDefaultImg": "http://192.168.200.128:8080/xxxx.jpg",
                "isSale": 1,
                "skuImageList": [
                    {
                        "id": 6,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 7,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 8,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 9,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 10,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 11,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 12,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 13,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 14,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 15,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 16,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },
                    {
                        "id": 17,
                        "skuId": 2,
                        "imgName": "63e862164165f483.jpg",
                        "imgUrl": "http://192.168.200.128:8080/Ad5YSAANTQTjaVjQ819.jpg",
                        "spuImgId": 2,
                        "isDefault": "0"
                    },


                ],
                "skuAttrValueList": [
                    {
                        "id": 6,
                        "attrId": 1,
                        "valueId": 6,
                        "skuId": 2
                    }
                ],
                "skuSaleAttrValueList": null
            }
        },
        "ok": true
    }
    response.send(message)
})
app.post('/api/cart/addToCart', (request, response) => {
    const message = {
        "code": 200,
        "message": "成功",
        "data": null,
        "ok": true
    }
    response.send(message)
})
app.get('/api/cart/cartList', (request, response) => {
    console.log('有人请求购物车列表了')
    const message = {
        "code": 200,
        "message": "成功",
        "data": [
            {
                "id": 61,
                "userId": "2",
                "skuId": 4,
                "cartPrice": 5999,
                "skuNum": 4,
                "imgUrl": "http://192.168.200.128:8080xxx.jpg",
                "skuName": "Apple iPhone 11 (A2223) ",
                "isChecked": 1,
                "skuPrice": 5999
            },
            {
                "id": 62,
                "userId": "2",
                "skuId": 2,
                "cartPrice": 5499,
                "skuNum": 1,
                "imgUrl": "http://192.168.200.128:8080/yyyy.jpg",
                "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                "isChecked": 1,
                "skuPrice": 5499
            }
        ],
        "ok": true
    }
    response.send(message)
})
//用户注册的路由
app.post('/api/user/passport/register', (request, response) => {
    const message = {
        "code": 200,
        "message": "成功",
        "data": null,
        "ok": true
    }
    console.log('有人发送注册请求了')
    response.send(message)
})
//用户登录的路由
app.post('/api/user/passport/login', (request, response) => {
    console.log('有人请求登录路由了')
    const message = {
        code: 200,
        message: "成功",
        data: {
            nickName: "Administrator",
            name: "Admin",
            token: " 90aa16f24d04c7d882051412f9ec45b"
        },
        ok: true
    }
    response.send(message)
})
app.get('/api/user/passport/auth/getUserInfo', (request, response) => {
    console.log('有人请求用户信息路由了')
    const message = {
        code: 200,
        message: "成功",
        data: {
            email: "upq@qq.com",
            headImg: "https://avatars.githubusercontent.com/u/52128326?s=60&v=4",
            id: 2,
            loginName: "13350314765",
            name: "Admin",
            nickName: "Administrator",
            phoneNum: "2222",
            userLevel: "2"
        },
        ok: true
    }
    response.send(message)
})
app.get('/api/user/passport/logout', (request, response) => {
    console.log('有人请求退出登录路由了')
    const message = {

        "code": 200,
        "message": "成功",
        "data": null,
        "ok": true

    }
    response.send(message)
})
app.get('/api/order/auth/trade', (request, response) => {
    const message = {
        "code": 200,
        "message": "成功",
        "data": {
            "totalAmount": 23996,
            "userAddressList": [
                {
                    "id": 2,
                    "userAddress": "北京市昌平区2",
                    "userId": 2,
                    "consignee": "admin",
                    "phoneNum": "15011111111",
                    "isDefault": 1
                },
                {
                    "id": 3,
                    "userAddress": "重庆市渝中区",
                    "userId": 2,
                    "consignee": "春风不及王小姐",
                    "phoneNum": "13350314765",
                    "isDefault": 0
                }
            ],
            "tradeNo": "1b23c1efc8144bfc83e51807f4e71d3a",
            "totalNum": 1,
            "detailArrayList": [
                {
                    "id": null,
                    "orderId": null,
                    "skuId": 4,
                    "skuName": "Apple iPhone 11 移动联通电信4G手机 双卡双待",
                    "imgUrl": "http://192.168.200.128:8080/RLOAElEmAATrIT-1J9Q110.jpg",
                    "orderPrice": 5999,
                    "skuNum": 4,
                    "hasStock": null
                }
            ]
        },
        "ok": true
    }
    console.log('有人请求交易信息了')
    response.send(message)
})
app.post('/api/order/auth/submitOrder', (request, response) => {
    console.log('有人请求订单编号了')
    const message = {
        "code": 200,
        "message": "成功",
        "data": 7199,   // orderId 订单号
        "ok": true
    }
    response.send(message)
})
app.get('/api/payment/weixin/createNative/:orderId?', (request, response) => {
    console.log('有人请求订单支付信息了')
    const message =
        {
            "code": 200,
            "message": "成功",
            "data": {
                "codeUrl": "weixin://wxpay/bizpayurl?pr=P0aPBJK",
                "orderId": 71,
                "totalFee": 0.01,
                "resultCode": "SUCCESS"
            },
            "ok": true
        }
    response.send(message)
})
app.get('/api/payment/weixin/queryPayStatus/:orderid?', (request, response) => {
    console.log('有人请求订单支付状态了')
    const message = {
        "code": 200,
        "message": "支付中",
        "data": null,
        "ok": false
    }
    response.send(message)
})
app.get('/api/order/auth/:page?/:limit?', (request, response) => {
    const message = {
            "code": 200,
            "message": "成功",
            "data": {
                "records": [
                    {
                        "id": 70,
                        "consignee": "一晨",
                        "consigneeTel": "13350314765",
                        "totalAmount": 29495,
                        "orderStatus": "UNPAID",
                        "userId": 2,
                        "paymentWay": "ONLINE",
                        "deliveryAddress": "北京市昌平区2",
                        "orderComment": "",
                        "outTradeNo": "ATGUIGU1584247289311481",
                        "tradeBody": "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                        "createTime": "2021-09-17 12:41:29",
                        "expireTime": "2021-09-17 12:41:29",
                        "processStatus": "UNPAID",
                        "trackingNo": null,
                        "parentOrderId": null,
                        "imgUrl": null,
                        "orderDetailList": [
                            {
                                "id": 81,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 82,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 12 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 83,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 199 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 84,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "SAMSUNG GALAXY S20NOTE (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 85,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "XIAOMI Z S20NOTE (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                        ],
                        "orderStatusName":
                            "未支付",
                        "wareId":
                            null
                    },
                    {
                        "id": 60,
                        "consignee": "admin",
                        "consigneeTel": "15011111111",
                        "totalAmount": 29495,
                        "orderStatus": "UNPAID",
                        "userId": 2,
                        "paymentWay": "ONLINE",
                        "deliveryAddress": "北京市昌平区2",
                        "orderComment": "",
                        "outTradeNo": "ATGUIGU1584247289311481",
                        "tradeBody": "Apple iPhone 11 (A2223) 128GB手机 双卡双待 A",
                        "createTime": "2020-03-15 12:41:29",
                        "expireTime": "2020-03-16 12:41:29",
                        "processStatus": "UNPAID",
                        "trackingNo": null,
                        "parentOrderId": null,
                        "imgUrl": null,
                        "orderDetailList": [
                            {
                                "id": 81,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 82,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 12 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 83,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "Apple iPhone 199 (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 84,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "SAMSUNG GALAXY S20NOTE (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                            {
                                "id": 85,
                                "orderId": 70,
                                "skuId": 2,
                                "skuName": "XIAOMI Z S20NOTE (A2223) 64GB 红色",
                                "imgUrl": "http://192.168.200.128:8080/xxx.jpg",
                                "orderPrice": 5499,
                                "skuNum": 1,
                                "hasStock": null
                            },
                        ],
                        "orderStatusName":
                            "未支付",
                        "wareId":
                            null
                    },
                ],
                "total":
                    90,
                "size":
                    2,
                "current":
                    1,
                "pages":
                    21
            },
            "ok":
                true
        }
    response.send(message)
})
app.listen(9999, erro => {
    if (!erro) {
        console.log('Start')
    }
})
