/* home_btn.js — ปุ่ม Home ลอยขวาล่าง สำหรับทุกหน้า */
(function() {
  // รับชื่อจาก URL
  const name = new URLSearchParams(window.location.search).get('name') || '';

  // CSS
  const style = document.createElement('style');
  style.textContent = `
    .home-btn-float {
      position: fixed;
      bottom: 24px; right: 20px;
      width: 60px; height: 60px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 9999;
      -webkit-tap-highlight-color: transparent;
      transition: transform .15s, box-shadow .15s;
      box-shadow: 0 6px 20px rgba(0,0,0,0.35);
      overflow: hidden;
      background: transparent;
      border: none;
      padding: 0;
    }
    .home-btn-float img {
      width: 100%; height: 100%;
      object-fit: contain; display: block;
    }
    .home-btn-float:active {
      transform: scale(.88);
      box-shadow: 0 3px 10px rgba(0,0,0,0.3);
    }
  `;
  document.head.appendChild(style);

  // HTML ปุ่ม
  const btn = document.createElement('button');
  btn.className = 'home-btn-float';
  btn.title = 'กลับเมนูหลัก';
  btn.innerHTML = `<img src="https://chaochichi.github.io/storyAusaBaros/btn_home.png" alt="Home">`;
  btn.onclick = function() {
    const url = 'menu.html' + (name ? '?name=' + encodeURIComponent(name) : '');
    window.location.href = url;
  };

  // รอ DOM พร้อมแล้วค่อยใส่
  if (document.body) {
    document.body.appendChild(btn);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(btn);
    });
  }
})();
