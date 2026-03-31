// إضافة تنسيق وستايل
$("<style>\
#color-picker-icon {\
    position: fixed;\
    top: 80%;\
    right: 20px;\
    transform: translateY(-50%);\
    width: 60px;\
    height: 60px;\
    z-index: 10000;\
    cursor: pointer;\
}\
#color-picker-icon img {\
    width: 100%;\
    height: 100%;\
    border-radius: 50%;\
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);\
}\
#color-picker-panel {\
    position: fixed;\
    top: 50%;\
    right: 50%;\
    transform: translate(50%, -50%);\
    display: none;\
    z-index: 9999;\
    width: 300px;\
}\
</style>").appendTo("head");

// زر فتح لوحة الألوان
$("<div id='color-picker-icon'>\
<img src='https://up6.cc/2024/12/173536664225611.gif'>\
</div>").appendTo("body");

// لوحة اختيار الألوان
$("<div id='color-picker-panel'>\
<h4>اختر لون الخلفية</h4>\
<div class='custom-color'>\
<div style='background-color:#a41e54' data-color='#a41e54'></div>\
<div style='background-color:#982072' data-color='#982072'></div>\
<div style='background-color:#98278f' data-color='#98278f'></div>\
<div style='background-color:#62007a' data-color='#62007a'></div>\
<div style='background-color:#3c007a' data-color='#3c007a'></div>\
<div style='background-color:#0d1c4d' data-color='#0d1c4d'></div>\
<div style='background-color:#6f6f6f' data-color='#6f6f6f'></div>\
<div style='background-color:#212121' data-color='#212121'></div>\
</div>\
<h4>اختر لون العناصر</h4>\
<div class='custom-color'>\
<div style='background-color:#821d46' data-color='#821d46'></div>\
<div style='background-color:#7b215e' data-color='#7b215e'></div>\
<div style='background-color:#70276a' data-color='#70276a'></div>\
<div style='background-color:#4f0462' data-color='#4f0462'></div>\
<div style='background-color:#320561' data-color='#320561'></div>\
<div style='background-color:#081337' data-color='#081337'></div>\
<div style='background-color:#5c5c5c' data-color='#5c5c5c'></div>\
<div style='background-color:#111111' data-color='#111111'></div>\
</div>\
<input type='color' id='bg-color-picker'>\
<input type='color' id='btn-primary-color-picker'>\
<button id='apply-colors'>تطبيق الألوان</button>\
</div>").appendTo("body");

// فتح/إغلاق لوحة الألوان
$("#color-picker-icon").on("click", function () {
    alert("تصميم: حسين النعيمي");
    $("#color-picker-panel").fadeToggle();
});

let shouldApplyColors = false;

// عند الضغط على زر التطبيق
$("#apply-colors").on("click", function () {
    shouldApplyColors = true;

    let bgColor = $("#bg-color-picker").val();
    let btnColor = $("#btn-primary-color-picker").val();

    // تغيير الخلفية
    $(".bg").css("background-color", bgColor);

    // تغيير الألوان
    $(".label-primary, .btn-primary, .bg-primary").css({
        "background-color": btnColor,
        "color": "#fff"
    });
});

// تغيير ألوان العناصر عند تغييرات DOM
const observer = new MutationObserver(() => {
    if (shouldApplyColors) {
        let color = $("#btn-primary-color-picker").val();

        $(".label-primary, .btn-primary, .bg-primary").each(function () {
            $(this).css({
                "background-color": color,
                "color": "#fff"
            });
        });
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// عند اختيار لون من المربعات الجاهزة
$("#color-picker-panel .custom-color div").on("click", function () {
    let color = $(this).data("color");

    if ($(this).parent().prev().text().includes("الخلفية")) {
        $("#bg-color-picker").val(color);
        $(".bg").css("background-color", color);
    } else {
        $("#btn-primary-color-picker").val(color);
        $(".label-primary, .btn-primary, .bg-primary").css("background-color", color);
    }
});
