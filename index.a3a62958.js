var e=function(e,t,n,i,a){var o=document.createElement("div");o.classList.add("notification",a),o.style.cssText="top: ".concat(e,"px; right: ").concat(t,"px");var s=document.createElement("h2");s.classList.add("title"),s.textContent=n;var c=document.createElement("p");c.textContent=i,o.append(s,c),document.body.append(o),setTimeout(function(){return o.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.a3a62958.js.map
