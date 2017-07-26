/**
 * Created by Administrator on 2017/6/1 0001.
 */
// 使用 Mock
var Mock = require('mockjs');
var Random = Mock.Random;

Mock.mock(/\.json/,{
    "success":Random.boolean(),
    "code":-1,
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'sex':'男',
        'name':'@name',
        'email':'@email'
    }]
});