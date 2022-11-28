$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
 
/* base64 */

$(document)['ready'](function () {
    $('#submit')['click'](function () {
        var _0x2295c9 = btoa(document['getElementById']('password')['value']);
        _0x2295c9 == 'YzBubmVjdDFuZ19kMHQ1X2RhNWhlcw==' && alert('Hope\x20u\x20got\x20it..!');
    });
});