$(function () {
    var randomNum = Math.floor((Math.random() * 5000) + 10000);
    var ua = navigator.userAgent.toLowerCase();
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //顶部背景图片地址
        var bg_image = 'https://d2.hulu222.com/show.jpg';
	//视频地址
var videoUrl = 'http://mpsnode.hulu555.com/vod/6ba83943/42112394af2088a8e4/playlist.m3u8?t=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjE1NDU4MDQxODg5NzYzNjUifQ.eyJqdGkiOiIxNTQ1ODA0MTg4OTc2MzY1IiwiZXhwIjoxNTQ1ODA0MzY4LCJ1cmkiOiJcL3ZvZFwvNmJhODM5NDNcLzQyMTEyMzk0YWYyMDg4YThlNFwvcGxheWxpc3QubTN1OCJ9.O7fWPKde2NdgyB_U0wvfZ5WLrVTWy50NoI7vgAgHmJE';    
     //二维码下载地址
     var qrcode_src = 'https://d2.hulu222.com';
     //        //交流群链接
    var groupLink_src = 'https://potato.im/hulu666';
	//赋值背景图片
    $('.top').css('background-image', 'url(' + bg_image + ')');
    //播放视频
    var player = videojs('my-video', {
        autoplay: true,
        autoplay: 'muted',
        controls: true
    })
    //IOS下载包
    var ios_apk = 'itms-services://?action=download-manifest&url=https://d2.hulu222.com/manifest.plist'
    //安卓下载包
    var android_apk = 'https://d2.hulu222.com/huluv1.apk'

    player.src({src: videoUrl, type: 'application/x-mpegURL'});
    //生成二维码
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrcode_src,
        width: 128,
        height: 128,
        correctLevel: QRCode.CorrectLevel.H
    });
    //赋值交流群
    $('#groupLink').on('click', function () {
        window.open(groupLink_src)
    })

    if (isiOS) {
        $('#content').show();
        $('.AndroidContent').hide();
        $('#download').html('IOS下载')
    }

    $('#download').click(function () {
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            layer.open({
                content: '请使用浏览器打开此页面',
                skin: 'msg',
                time: 2
            });
        } else {
            if (isAndroid) {
                window.location.href = android_apk;
            } else if (isiOS) {
                window.location.href = ios_apk;
                setTimeout(function () {
                    $('.mask2').show();
                }, 3000);
                setTimeout(function () {
                    window.location.href = 'ios_setting.html'
                }, randomNum);
            } else {
                layer.open({
                    content: '请在手机上使用浏览器打开此页面,或者扫描上面的二维码，即可安装',
                    skin: 'msg',
                    time: 2
                });
            }
        }
        return false
    });
});
