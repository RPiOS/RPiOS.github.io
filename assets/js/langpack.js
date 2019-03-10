let getCookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        let expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            let date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        let path = options.path ? '; path=' + options.path : '';
        let domain = options.domain ? '; domain=' + options.domain : '';
        let secure = options.secure ? '; secure' : '';
        let c = [name, '=', encodeURIComponent(value)].join('');
        document.cookie = [c, expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/**
 * 获取浏览器语言类型
 * @return {string} 浏览器国家语言
 */
let getNavLanguage = function(){
    if(navigator.appName === "Netscape"){
        let navLanguage = navigator.language;
        return navLanguage.substr(0,2);
    }
    return false;
};

/**
 * 设置语言类型
 */
let i18nLanguage = "en";

/*
设置一下网站支持的语言种类
 */
let webLanguage = ['zh-CN', 'zh-TW', 'en', 'hx', 'jp'];

/**
 * 执行页面i18n方法
 * @return
 */
let execI18n = function(){
    /*
    获取一下资源文件名
     */
    let optionEle = $("#lang");
    if (optionEle.length < 1) {
        console.log("未找到页面名称元素，请在页面写入\n <meta id=\"lang\" content=\"页面名(对应语言包的语言文件名)\">");
        return false;
    }
    let sourceName = optionEle.attr('content');
    sourceName = sourceName.split('-');
    /*
    首先获取用户浏览器设备之前选择过的语言类型
     */
    if (getCookie("userLanguage")) {
        i18nLanguage = getCookie("userLanguage");
    } else {
        // 获取浏览器语言
        let navLanguage = getNavLanguage();
        if (navLanguage) {
            // 判断是否在网站支持语言数组里
            let charSize = $.inArray(navLanguage, webLanguage);
            if (charSize > -1) {
                i18nLanguage = navLanguage;
                // 存到缓存中
                getCookie("userLanguage",navLanguage);
            }
        } else{
            console.log("not navigator");
            return false;
        }
    }
    /*
    这里需要进行i18n的翻译
     */
    jQuery.i18n.properties({
        name : sourceName, //资源文件名称
        path : 'https://raw.githubusercontent.com/rpisystem/RPiSystem.github.io/master/assets/lang/', //资源文件路径
        mode : 'map', //用Map的方式使用资源文件中的值
        language : i18nLanguage,
        callback : function() {//加载成功后设置显示内容
            let insertEle = $(".lang");
            console.log("阶段1写入中...");
            insertEle.each(function() {
                // 根据i18n元素的 name 获取内容写入
                $(this).html($.i18n.prop($(this).attr('name')));
            });
            console.log("写入完毕");

            console.log("阶段2写入中...");
            let insertInputEle = $(".lang-input");
            insertInputEle.each(function() {
                let selectAttr = $(this).attr('selectattr');
                if (!selectAttr) {
                    selectAttr = "value";
                }
                $(this).attr(selectAttr, $.i18n.prop($(this).attr('selectname')));
            });
            console.log("写入完毕");
        }
    });
};

/*页面执行加载执行*/
$(function(){
    /*执行I18n翻译*/
    execI18n();
    /*将语言选择默认选中缓存中的值*/
    $("#language option[value="+i18nLanguage+"]").attr("selected",true);
    /* 选择语言 */
    $("#language").on('change', function() {
        let language = $(this).children('option:selected').val()
        console.log(language);
        getCookie("userLanguage",language,{
            expires: 30,
            path:'/'
        });
        location.reload();
    });
});
