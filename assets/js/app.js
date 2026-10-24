(() => {
"use strict";
const stage=document.getElementById("scenarioStage");
const address=document.getElementById("addressText");
const counter=document.getElementById("scenarioCounter");
const toast=document.getElementById("toast");
const buttons=Array.from(document.querySelectorAll("[data-scenario]"));
let active="account",timer;
const data={
account:{url:"secure-account-check.example.test/verify",html:'<div class="mock-card"><div class="mock-brand"><span class="mock-logo">N</span> Northstar ID</div><div class="mock-kicker">ACCOUNT SECURITY CENTER</div><h2>Verify your account</h2><p>We detected unusual activity. Confirm your account details to prevent temporary access restrictions.</p><div class="mock-alert">Action required: verification is pending. Complete the review to restore full account access.</div><div class="mock-field">Account email<input id="mockEmail" type="text" autocomplete="off" placeholder="Enter account email"></div><button class="mock-button" id="verifyButton">Verify and continue</button><p class="mock-small">Secure identity verification · Help center</p><div class="mock-foot"><span>Privacy</span><span>Account support</span></div></div>'},
update:{url:"browser-maintenance.example.test/update",html:'<div class="fake-browser"><div class="fake-browser-head"><i></i><i></i><i></i><span style="margin-left:8px">Browser Maintenance</span></div><div class="fake-browser-body"><div class="warning-symbol">△</div><h2>Your browser is out of date</h2><p>A critical security component is missing. Install the recommended update now to keep browsing protected.</p><p style="font-size:10px;color:#9aa3b2">Version 129.4 · Security package · 48.2 MB</p><button class="download-button" id="fakeDownload">Download security update</button><br><button class="muted-button" id="skipUpdate">Remind me later</button></div></div>'},
redirect:{url:"account-check.example.test/continue",html:'<div class="redirect-card"><div class="redirect-label">SECURE CONNECTION CHECK</div><h2>Preparing your session</h2><p>Your request is being routed through the account verification service. Review the destination chain before continuing.</p><div class="redirect-chain"><div class="redirect-hop"><span class="hop-dot"></span>account-check.example.test/start</div><div class="redirect-hop"><span class="hop-dot"></span>session-gateway.example.test/validate</div><div class="redirect-hop"><span class="hop-dot"></span>verify-profile.example.test/login</div></div><button class="mock-button" id="continueRedirect">Continue to destination</button><p class="mock-small">Automatic navigation is paused in this environment.</p></div>'},
popup:{url:"support-alert.example.test/status",html:'<div style="width:100%;height:100%;min-height:435px;display:grid;place-items:center;background:linear-gradient(135deg,#e8edf4,#d5dde9);padding:20px"><div style="text-align:center;color:#4d5b70"><div style="font-size:36px">◌</div><b style="font-size:16px">System status</b><p style="font-size:12px">Your browser session is running.</p></div><div class="popup-screen" id="popupLayer"><div class="popup-window"><div class="popup-head"><span>SECURITY ALERT</span><button class="popup-close" id="closePopup" aria-label="Close alert">×</button></div><div class="popup-body"><div class="popup-alert-icon">!</div><h2>Immediate action required</h2><p>Potential threats have been detected in your session. Confirm the security scan to avoid losing access.</p><div class="popup-actions"><button class="popup-primary" id="fakeScan">Run security scan</button><button class="popup-secondary" id="dismissPopup">Dismiss</button></div></div></div></div></div>'}
};
function notify(message,warn){clearTimeout(timer);toast.textContent=message;toast.classList.toggle("warn",!!warn);toast.classList.add("show");timer=setTimeout(()=>toast.classList.remove("show"),3200)}
function bind(id,fn){const el=document.getElementById(id);if(el)el.addEventListener("click",fn)}
function closePopup(){const layer=document.getElementById("popupLayer");if(layer)layer.remove();notify("Popup ditutup. Interaksi hanya terjadi di halaman ini.")}
function render(key){active=key;const item=data[key];stage.innerHTML=item.html;address.textContent=item.url;counter.textContent="SCENARIO "+String(buttons.findIndex(b=>b.dataset.scenario===key)+1).padStart(2,"0")+" / 04";buttons.forEach(b=>{const on=b.dataset.scenario===key;b.classList.toggle("active",on);b.setAttribute("aria-pressed",String(on))});
bind("verifyButton",()=>{const field=document.getElementById("mockEmail");if(field)field.value="";notify("Simulasi: halaman meminta detail akun. Nilai tidak disimpan atau dikirim.",true)});
bind("fakeDownload",()=>notify("Simulasi saja: tidak ada file yang diunduh.",true));
bind("skipUpdate",()=>notify("Pilihan dicatat hanya sebagai interaksi lokal."));
bind("continueRedirect",()=>notify("Redirect ditahan. Tidak ada situs eksternal yang dibuka.",true));
bind("closePopup",closePopup);bind("dismissPopup",closePopup);
bind("fakeScan",()=>notify("Peringatan palsu disimulasikan. Tidak ada pemindaian perangkat yang berjalan.",true))}
buttons.forEach(b=>b.addEventListener("click",()=>render(b.dataset.scenario)));
document.getElementById("resetScenario").addEventListener("click",()=>{render(active);notify("Skenario direset.")});
render("account");
})();