(function() {
    'use strict';
    
    if (!window.location.href.includes('aincradmods.com/getkey')) {
        alert('এই স্ক্রিপ্ট শুধু aincradmods.com/getkey সাইটের জন্য');
        return;
    }
    
    var CORRECT_KEY = "EVAN";
    
    var userKey = prompt('🔐 এক্সেস কী দিন:', '');
    
    if (userKey !== CORRECT_KEY) {
        alert('❌ ভুল কী! অ্যাক্সেস অস্বীকার করা হয়েছে।');
        return;
    }
    
    alert('✅ কী সঠিক হয়েছে। ৩০ সেকেন্ড পর অ্যাড স্কিপ হবে...');
    
    setTimeout(function() {
        var btn = document.querySelector('button, a, [role="button"], .btn, input[type="submit"]');
        if (btn && btn.offsetParent !== null) {
            btn.click();
        } else {
            window.location.reload();
        }
    }, 30000);
    
    var msg = document.createElement('div');
    msg.innerHTML = '⏳ 30 সেকেন্ড অপেক্ষা করুন... মূল পেজে নিয়ে যাচ্ছি';
    msg.style.cssText = 'position:fixed; bottom:20px; right:20px; background:black; color:white; padding:12px 20px; border-radius:8px; font-family:Arial; font-size:14px; z-index:999999;';
    document.body.appendChild(msg);
    
    setTimeout(function() {
        if(msg.remove) msg.remove();
    }, 32000);
    
})();
