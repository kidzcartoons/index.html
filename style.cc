*{box-sizing:border-box}
body{margin:0;font-family:Arial,sans-serif;background:#0f1220;color:#e9ecff}
a{text-decoration:none;color:inherit}
.container{width:min(1200px,92%);margin:auto}
.topbar{display:flex;align-items:center;justify-content:space-between;padding:14px 4%;position:sticky;top:0;background:#12162a;z-index:20;border-bottom:1px solid #242a44}
.brand{font-weight:700;font-size:1.1rem}
.icon-btn{background:#1d2440;color:#fff;border:0;padding:10px 12px;border-radius:10px;cursor:pointer}
.sidebar{position:fixed;left:-320px;top:0;width:300px;height:100%;background:#12162a;z-index:30;transition:.3s;padding:18px;overflow:auto}
.sidebar.open{left:0}
.sidebar-head{display:flex;justify-content:space-between;align-items:center}
.sidebar nav a,.menu-toggle{display:block;width:100%;text-align:left;padding:12px 10px;margin:4px 0;border-radius:10px;background:#1a2038;border:0;color:#fff}
.menu-group{margin:6px 0}
.submenu{display:none;padding-left:10px}
.menu-group.open .submenu{display:block}
.menu-toggle{cursor:pointer}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:25}
.overlay.show{display:block}
.searchbar{display:none;background:#12162a;padding:12px 4%;border-bottom:1px solid #242a44}
.searchbar.show{display:block}
.searchbar form{display:flex;gap:10px;max-width:800px;margin:auto}
.searchbar input{flex:1;padding:14px;border-radius:12px;border:1px solid #2b3355;background:#0f1220;color:#fff}
.searchbar button,.telegram-btn,.episode-item a{padding:14px 18px;border:0;border-radius:12px;background:#ffb300;color:#111;font-weight:700}
.hero-head{padding:18px 0 8px}
.hero-slider{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;overflow-x:auto;padding-bottom:8px}
.slide-card{min-width:180px;background:#151a30;border-radius:16px;overflow:hidden}
.slide-card img{width:100%;height:140px;object-fit:cover}
.slide-card .pad{padding:12px}
.category-strip{display:flex;flex-wrap:wrap;gap:10px;padding:18px 0}
.category-box{background:#151a30;border-radius:12px;padding:12px 14px;min-width:160px}
.category-box .soon{display:block;color:#ffb300;font-size:.8rem;margin-top:4px}
.post-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.post-card{background:#151a30;border-radius:18px;overflow:hidden;display:flex;flex-direction:column}
.post-card img{width:100%;height:230px;object-fit:cover}
.post-card .pad{padding:14px}
.chip{display:inline-block;background:#223055;padding:6px 10px;border-radius:999px;margin:4px 6px 4px 0;font-size:.82rem}
.view-btn{display:inline-block;margin-top:12px;background:#ffb300;color:#111;padding:10px 14px;border-radius:10px;font-weight:700}
.pagination{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;padding:24px 0 40px}
.pagination a,.pagination span{min-width:40px;text-align:center;padding:10px 12px;background:#151a30;border-radius:10px}
.pagination .active{background:#ffb300;color:#111}
.footer{padding:24px 4%;border-top:1px solid #242a44;text-align:center}
.socials{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.post-page{padding:30px 0}
.post-wrap{max-width:900px;margin:auto}
.post-hero{width:100%;border-radius:18px;aspect-ratio:1/1;object-fit:cover}
.meta-row{margin-top:14px}
.section-title{margin:20px 0 10px;color:#ffb300}
.post-content{line-height:1.8;color:#cbd2ff}
.episode-list{display:grid;gap:10px}
.episode-item{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px;background:#151a30;border-radius:12px}
.back-link{display:inline-block;margin-top:20px;color:#ffb300}
@media (max-width:1024px){.post-grid{grid-template-columns:repeat(2,1fr)}.hero-slider{grid-template-columns:repeat(3,1fr)}}
@media (max-width:640px){.post-grid{grid-template-columns:1fr}.hero-slider{grid-template-columns:repeat(2,1fr)}.brand{font-size:1rem}.searchbar form{flex-direction:column}.episode-item{flex-direction:column;align-items:flex-start;width:100%}}
