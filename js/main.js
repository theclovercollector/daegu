$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>=200){
            $('.scrollTop').fadeIn(300)
        }else{
            $('.scrollTop').fadeOut(300)
        }
    })

    $('.scrollTop').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop : 0
        }, 500)
    })
})


/*레이어팝업 드래그*/
var img_L = 0;
var img_T = 0;
var targetObj;

function getLeft(o) {
    return parseInt(o.style.left.replace('px', ''));
}

function getTop(o) {
    return parseInt(o.style.top.replace('px', ''));
}
// 이미지 움직이기
function moveDrag(e) {
    var e_obj = window.event ? window.event : e;
    var dmvx = parseInt(e_obj.clientX + img_L);
    var dmvy = parseInt(e_obj.clientY + img_T);
    targetObj.style.left = dmvx + "px";
    targetObj.style.top = dmvy + "px";
    return false;
}
// 드래그 시작
function startDrag(e, obj) {
    targetObj = obj;
    var e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;
    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;
    if (e_obj.preventDefault) e_obj.preventDefault();
}
// 드래그 멈추기
function stopDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
}


/*팝업*/
function go_popup() {
    $('#popup').bPopup();
};
function go_popup1() {
    $('#popup1').bPopup();
};
function go_popup2() {
    $('#popup2').bPopup();
};


// function initPopup() {
//     var $popupHoler = $("#popup_holder");
//     var popupContents = [
//         {
//             id: "popup1",
//             img: "../image/popup231010_1.jpg",
//             pos: { top: 155, left: 10},
//             show: true
//         },
//         {
//             id: "popup2",
//             img: "../image/popup231010_2.jpg",
//             href: "javascript:alert('공지 등록 예정입니다.');",
//             pos: { top: 155, left: 10},
//             show: true,
//             wideonly: true
//         }
//     ];
//     var html = "";
//     var isNarrow = matchMedia("screen and (max-width: 760px)").matches;
//     var cookie = document.cookie;
//     var popupPosCnt = 0;
//     for(var idx in popupContents) {
//         var hideFlag = cookie.indexOf(popupContents[idx].id+"=done") >= 0;
//         if(hideFlag) {continue;}
//         if(popupContents[idx].show === false) {continue;}
//         if(isNarrow && popupContents[idx].wideonly === true) {continue;}

//         var posObj = popupContents[idx].pos;
//         if(!posObj) {
//             posObj = {top:30 + (popupPosCnt*50), left: 30 + (popupPosCnt*50)};
//             popupPosCnt += 1;
//         }
//         var posStyle = "top:"+posObj.top+"px;left:"+posObj.left+"px;";
//         var hrefOpt = popupContents[idx].hrefopt ? popupContents[idx].hrefopt:"";
//         html += "<div class="layerPopup" id=""+popupContents[idx].id+""onmousedown="startDrag(event,this)"style=""+posStyle+"">";
//             html += "<div class="layerPopcont">";
//                 if(popupContents[idx].id === "popup_construct") {
//                     html += "<span class="cont1">"+popupContents[idx].datatime+"</span>";
//                     html += "<span class="cont2">"+popupContents[idx].content+"</span>";
//                 }
//                 if(popupContents[idx].href) {
//                     html += "<a href=""+popupContents[idx].href+"" "+hrefOpt+">";
//                     html += "</a>"
//                 }else {
//                     html += "<img src=""+popupContents[idx].img+"">";
//                 }
//             html += "</div>";
//             html += "<div class="layerP_bottom" style="overflow:hidden;">";
//                 html += "<span class="fl">";
//                 html += "<input type="checkbox" id""+popupContents[idx].id+"_chkhide" onclick="removePop('#"+popupContents[idx].id+"',true);" value="checkbox"/>";
//                 html += "<label for=""+popupContents[idx].id+"_chkhide">오늘하루보지않기</label>";
//                 html += "</span>";
//                 html += "<button class="layerP_close" onclick="removePopup('#"+popupContents[idx].id+"',false);">";
//                 html += "<i class="fas fa-times"></i><span class="blind">닫기</span>";
//                 html += "</button>";
//             html += "</div>";
//         html += "</div>";
//     }
//     $popupHoler.html(html);
// }
function removePopup(el, isHide) {
    if (isHide) {
        setCookie($(el).attr("id"), "done", 1);
    }
    $(el).remove();
}
// function setCookie(name, value, expireDays) {
//     var todayDate = new Date();
//     todayDate.setDate(todayDate.getDate()+expireDays);
//     document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString()+ ";";
// }