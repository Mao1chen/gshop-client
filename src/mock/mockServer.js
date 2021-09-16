/*
    利用mockjs提供mock接口
*/
import Mock from 'mockjs'
import floors from './floors.json'

//提供楼层接口

Mock.mock('/mock/floors', { code: 200, data: floors })
console.log('MockJS执行了');