/**
 * Created by Administrator on 2017/7/26.
 */
var mock = require('./mockjs');
var $ = require('jquery');

$(function () {
    $("#bt").click(function () {
        $.get("/jquery/test1.json", function (data) {
            console.log(data);
            $("#myDiv").text(data)
        });
    });
});
