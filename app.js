const today = new Date("2026-05-17T09:00:00+08:00");

const exhibitions = [
  {
    id: "hn-museum-mawangdui",
    title: "长沙马王堆汉墓陈列",
    venue: "湖南博物院",
    district: "开福区",
    type: "博物馆",
    start: "2026-01-01",
    end: "2026-12-31",
    price: "免费预约",
    paid: false,
    time: "周二至周日 9:00-17:00，16:00停止入馆",
    reservation: "需通过湖南博物院官方渠道实名预约",
    address: "开福区东风路50号",
    transport: "地铁6号线湘雅医院站，或公交至省博物馆站",
    lat: 28.213,
    lng: 112.989,
    x: 56,
    y: 35,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hunan%20Provincial%20Museum%2C%20Changsha%20%2810112446973%29.jpg",
    summary:
      "以马王堆汉墓出土文物为核心，串联漆器、丝织、帛画、简帛文献与汉初生活图景。",
    tags: ["常设", "文博", "亲子", "雨天友好"],
    source: "https://www.hnmuseum.com/zh-hans/content/%E9%95%BF%E6%B2%99%E9%A9%AC%E7%8E%8B%E5%A0%86%E6%B1%89%E5%A2%93%E9%99%88%E5%88%97",
  },
  {
    id: "changsha-museum-spring",
    title: "四大新春特展联看",
    venue: "长沙博物馆",
    district: "开福区",
    type: "博物馆",
    start: "2026-02-01",
    end: "2026-06-30",
    price: "免费预约",
    paid: false,
    time: "周二至周日开放，具体以馆方公告为准",
    reservation: "建议提前通过长沙博物馆官方渠道预约",
    address: "开福区滨江文化园",
    transport: "地铁1号线北辰三角洲站，步行可达",
    lat: 28.242,
    lng: 112.986,
    x: 52,
    y: 22,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hunan%20Provincial%20Museum%2C%20Changsha%20%2810112446973%29.jpg",
    summary:
      "以生肖文化、湖湘名人、鼻烟壶艺术和纪实影像为线索，适合第一次认识长沙城市史的旅客。",
    tags: ["临展", "城市史", "亲子", "免费"],
    source:
      "https://whhlyt.hunan.gov.cn/whhlyt/news/sxxw/202602/t20260213_33917680.html",
  },
  {
    id: "xpm-horse",
    title: "马·谢子龙摄影艺术展",
    venue: "谢子龙影像艺术馆",
    district: "岳麓区",
    type: "艺术空间",
    start: "2026-05-01",
    end: "2026-08-31",
    price: "以场馆票务为准",
    paid: true,
    time: "周二至周日开放，闭馆与夜场以场馆公告为准",
    reservation: "可关注谢子龙影像艺术馆官方票务",
    address: "岳麓区潇湘南路387号",
    transport: "靠近洋湖湿地与李自健美术馆，适合半日艺术路线",
    lat: 28.116,
    lng: 112.939,
    x: 34,
    y: 78,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
    summary:
      "以蒙古马的生命力量为视觉线索，结合影像、装置与沉浸式体验，适合艺术爱好者与城市打卡。",
    tags: ["摄影", "沉浸", "新展", "艺术"],
    source: "https://hunan.voc.com.cn/news/202605/32570710.html",
  },
  {
    id: "changsha-art-zhangqi",
    title: "青山远，流水长——湖湘名人故地中国画作品展",
    venue: "长沙美术馆",
    district: "岳麓区",
    type: "美术馆",
    start: "2026-04-25",
    end: "2026-06-16",
    price: "免费预约",
    paid: false,
    time: "周二至周日开放，具体以馆方公告为准",
    reservation: "建议通过长沙美术馆官方渠道预约",
    address: "岳麓区靳江路与潇湘南路交会附近",
    transport: "可与后湖、岳麓山、湘江艺术带组合游览",
    lat: 28.151,
    lng: 112.949,
    x: 39,
    y: 66,
    image:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=80",
    summary:
      "从湖湘名人故居与故地入手，用中国画语言连接长沙文脉、山水和人物记忆。",
    tags: ["国画", "湖湘", "免费", "岳麓线"],
    source:
      "https://css.hunan.gov.cn/css/xxgk/gzdt/gydt/202604/t20260429_33966928.html",
  },
  {
    id: "li-zijian",
    title: "李自健油画常设展",
    venue: "李自健美术馆",
    district: "岳麓区",
    type: "美术馆",
    start: "2026-01-01",
    end: "2026-12-31",
    price: "免费",
    paid: false,
    time: "周二至周日开放，具体以馆方公告为准",
    reservation: "免费参观，节假日建议提前确认客流",
    address: "岳麓区潇湘南路385号",
    transport: "与谢子龙影像艺术馆相邻，适合一次安排两馆",
    lat: 28.117,
    lng: 112.94,
    x: 37,
    y: 82,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80",
    summary:
      "以李自健代表性油画作品为核心，空间开阔，适合艺术入门、亲子参观和雨天行程。",
    tags: ["常设", "油画", "免费", "亲子"],
    source: "https://zh.wikipedia.org/wiki/%E6%9D%8E%E8%87%AA%E5%81%A5%E7%BE%8E%E6%9C%AF%E9%A6%86",
  },
  {
    id: "yuelu-study",
    title: "岳麓书院研学路线",
    venue: "岳麓书院",
    district: "岳麓区",
    type: "研学",
    start: "2026-01-01",
    end: "2026-12-31",
    price: "收费",
    paid: true,
    time: "每日开放时段以景区公告为准",
    reservation: "建议提前通过岳麓山橘子洲景区官方渠道预约",
    address: "岳麓区湖南大学内",
    transport: "地铁4号线湖南大学站，步行至书院与岳麓山南门",
    lat: 28.186,
    lng: 112.944,
    x: 28,
    y: 48,
    image:
      "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=900&q=80",
    summary:
      "从千年学府出发，理解湖湘文化的教育传统，可与岳麓山、爱晚亭和湖南大学街区串联。",
    tags: ["研学", "古建", "湖湘文化", "亲子"],
    source: "https://commons.wikimedia.org/wiki/Category:Yuelu_Academy",
  },
  {
    id: "orange-isle-city",
    title: "橘子洲城市文化步行",
    venue: "橘子洲景区",
    district: "岳麓区",
    type: "研学",
    start: "2026-01-01",
    end: "2026-12-31",
    price: "免费预约",
    paid: false,
    time: "全年开放，夜间与节假日以景区公告为准",
    reservation: "需关注岳麓山橘子洲景区预约规则",
    address: "岳麓区湘江中心",
    transport: "地铁2号线橘子洲站",
    lat: 28.178,
    lng: 112.962,
    x: 47,
    y: 52,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Orange%20Isle%2C%20Changsha%208.jpg",
    summary:
      "从湘江中的长洲看长沙山水格局，适合作为展馆行程前后的城市文化补充。",
    tags: ["城市漫游", "免费", "橘子洲", "亲子"],
    source: "https://commons.wikimedia.org/wiki/Category:Orange_Isle",
  },
  {
    id: "mango-gallery",
    title: "后湖艺术区轻展览漫游",
    venue: "后湖国际艺术区",
    district: "岳麓区",
    type: "艺术空间",
    start: "2026-04-01",
    end: "2026-07-31",
    price: "免费/消费自选",
    paid: false,
    time: "园区全天可达，具体店展以现场为准",
    reservation: "无需统一预约，部分活动需单独报名",
    address: "岳麓区后湖片区",
    transport: "靠近湖南大学与岳麓山，可步行或骑行串联",
    lat: 28.171,
    lng: 112.943,
    x: 31,
    y: 56,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
    summary:
      "以艺术园区、咖啡、手作、市集和小型展陈组成，适合游客在正式展馆之外感受长沙青年文化。",
    tags: ["园区", "市集", "轻展览", "年轻"],
    source:
      "https://epaper.voc.com.cn/sxdsb/images/2026-04/20/A7/20260420A7_pdf.pdf",
  },
];

const state = {
  query: "",
  date: toDateInput(today),
  district: "all",
  type: "all",
  price: "all",
  quick: "all",
  view: "cards",
  saved: new Set(JSON.parse(localStorage.getItem("icsSaved") || "[]")),
};

const els = {
  heroOpenCount: document.querySelector("#heroOpenCount"),
  todayGrid: document.querySelector("#todayGrid"),
  exhibitionGrid: document.querySelector("#exhibitionGrid"),
  savedGrid: document.querySelector("#savedGrid"),
  calendarGrid: document.querySelector("#calendarGrid"),
  mapCanvas: document.querySelector("#mapCanvas"),
  routeList: document.querySelector("#routeList"),
  headerSearchInput: document.querySelector("#headerSearchInput"),
  searchInput: document.querySelector("#searchInput"),
  dateInput: document.querySelector("#dateInput"),
  districtSelect: document.querySelector("#districtSelect"),
  typeSelect: document.querySelector("#typeSelect"),
  priceSelect: document.querySelector("#priceSelect"),
  dialog: document.querySelector("#detailDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  closeDialog: document.querySelector("#closeDialog"),
  template: document.querySelector("#cardTemplate"),
};

function toDateInput(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatDate(dateText) {
  const date = new Date(`${dateText}T00:00:00+08:00`);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function isOpenOn(item, dateText) {
  return item.start <= dateText && item.end >= dateText;
}

function getFilteredItems() {
  const query = state.query.trim().toLowerCase();
  return exhibitions.filter((item) => {
    const quickMatch =
      state.quick === "all" ||
      item.type === state.quick ||
      item.tags.includes(state.quick) ||
      (state.quick === "免费" && !item.paid);
    const text = [item.title, item.venue, item.district, item.type, item.summary, ...item.tags]
      .join(" ")
      .toLowerCase();
    return (
      quickMatch &&
      (!query || text.includes(query)) &&
      isOpenOn(item, state.date) &&
      (state.district === "all" || item.district === state.district) &&
      (state.type === "all" || item.type === state.type) &&
      (state.price === "all" ||
        (state.price === "free" && !item.paid) ||
        (state.price === "paid" && item.paid))
    );
  });
}

function saveState() {
  localStorage.setItem("icsSaved", JSON.stringify([...state.saved]));
}

function renderCard(item) {
  const node = els.template.content.firstElementChild.cloneNode(true);
  node.querySelector("img").src = item.image;
  node.querySelector("img").alt = `${item.venue}：${item.title}`;
  node.querySelector("img").addEventListener("error", (event) => {
    event.currentTarget.src = fallbackImage(item.type, item.venue);
  });
  node.querySelector(".type-badge").textContent = item.type;
  node.querySelector(".card-meta").textContent = `${item.district} · ${item.venue} · ${formatDate(item.start)}-${formatDate(item.end)}`;
  node.querySelector("h3").textContent = item.title;
  node.querySelector(".summary").textContent = item.summary;
  node.querySelector(".tags").innerHTML = item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  node.querySelector(".detail-button").addEventListener("click", () => openDetail(item.id));
  const saveButton = node.querySelector(".save-button");
  saveButton.classList.toggle("saved", state.saved.has(item.id));
  saveButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 8.8c0 5.2-8.5 10.2-8.5 10.2S3.5 14 3.5 8.8A4.4 4.4 0 0 1 12 7.1a4.4 4.4 0 0 1 8.5 1.7Z"></path></svg>`;
  saveButton.addEventListener("click", () => toggleSave(item.id));
  return node;
}

function renderCards(container, items) {
  container.innerHTML = "";
  if (!items.length) {
    container.innerHTML = `<div class="empty">当前条件下没有匹配的展览。可以换个日期、区域或类型试试。</div>`;
    return;
  }
  items.forEach((item) => container.appendChild(renderCard(item)));
}

function fallbackImage(type, venue) {
  const colors = {
    博物馆: ["#8e2f28", "#d7b071"],
    美术馆: ["#2f6f73", "#d56b2a"],
    艺术空间: ["#1f2623", "#c6b497"],
    研学: ["#596a48", "#d56b2a"],
  };
  const [from, to] = colors[type] || colors["艺术空间"];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 675">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${from}" />
          <stop offset="1" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="900" height="675" fill="url(#g)" />
      <circle cx="720" cy="110" r="140" fill="rgba(255,255,255,.16)" />
      <rect x="82" y="430" width="736" height="6" fill="rgba(255,255,255,.38)" />
      <text x="82" y="505" fill="white" font-size="52" font-family="Arial, sans-serif" font-weight="700">${venue}</text>
      <text x="82" y="565" fill="rgba(255,255,255,.76)" font-size="26" font-family="Arial, sans-serif">ICS iChangsha</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderAll() {
  const openToday = exhibitions.filter((item) => isOpenOn(item, toDateInput(today)));
  els.heroOpenCount.textContent = openToday.length;
  renderCards(els.todayGrid, openToday.slice(0, 3));
  els.exhibitionGrid.classList.toggle("list", state.view === "list");
  renderCards(els.exhibitionGrid, getFilteredItems());
  renderCards(
    els.savedGrid,
    exhibitions.filter((item) => state.saved.has(item.id)),
  );
  renderCalendar();
  renderMap();
}

function renderOptions() {
  const districts = ["all", ...new Set(exhibitions.map((item) => item.district))];
  const types = ["all", ...new Set(exhibitions.map((item) => item.type))];
  els.districtSelect.innerHTML = districts
    .map((value) => `<option value="${value}">${value === "all" ? "全部区域" : value}</option>`)
    .join("");
  els.typeSelect.innerHTML = types
    .map((value) => `<option value="${value}">${value === "all" ? "全部类型" : value}</option>`)
    .join("");
  els.dateInput.value = state.date;
}

function renderCalendar() {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return toDateInput(date);
  });
  els.calendarGrid.innerHTML = "";
  days.forEach((dateText) => {
    const dayItems = exhibitions.filter((item) => isOpenOn(item, dateText)).slice(0, 3);
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `<span>${new Date(`${dateText}T00:00:00+08:00`).toLocaleDateString("zh-CN", { weekday: "short" })}</span><strong>${formatDate(dateText)}</strong>`;
    dayItems.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.title;
      button.addEventListener("click", () => openDetail(item.id));
      card.appendChild(button);
    });
    els.calendarGrid.appendChild(card);
  });
}

function renderMap() {
  els.mapCanvas.innerHTML = "";
  exhibitions.forEach((item) => {
    const pin = document.createElement("button");
    pin.className = "map-pin";
    pin.style.left = `${item.x}%`;
    pin.style.top = `${item.y}%`;
    pin.innerHTML = `<strong>${item.venue}</strong><small>${item.district}</small>`;
    pin.addEventListener("click", () => openDetail(item.id));
    els.mapCanvas.appendChild(pin);
  });
  els.routeList.innerHTML = [
    ["湘江艺术半日", "谢子龙影像艺术馆 → 李自健美术馆 → 洋湖湿地，适合下午到傍晚。"],
    ["岳麓文化半日", "岳麓书院 → 岳麓山 → 后湖艺术区，适合研学和城市漫游。"],
    ["开福文博半日", "湖南博物院 → 长沙博物馆 → 滨江文化园，适合雨天和亲子。"],
  ]
    .map(([title, text]) => `<article class="route-item"><strong>${title}</strong><p>${text}</p></article>`)
    .join("");
}

function openDetail(id) {
  const item = exhibitions.find((entry) => entry.id === id);
  if (!item) return;
  els.dialogContent.innerHTML = `
    <div class="detail-hero">
      <img src="${item.image}" alt="${item.venue}：${item.title}" onerror="this.src='${fallbackImage(item.type, item.venue)}'" />
      <div class="detail-copy">
        <p class="eyebrow">${item.type} · ${item.district}</p>
        <h2 id="dialogTitle">${item.title}</h2>
        <p>${item.summary}</p>
        <dl class="detail-list">
          <div><dt>场馆</dt><dd>${item.venue}</dd></div>
          <div><dt>展期</dt><dd>${formatDate(item.start)} - ${formatDate(item.end)}</dd></div>
          <div><dt>开放</dt><dd>${item.time}</dd></div>
          <div><dt>票价</dt><dd>${item.price}</dd></div>
          <div><dt>预约</dt><dd>${item.reservation}</dd></div>
          <div><dt>地址</dt><dd>${item.address}</dd></div>
          <div><dt>交通</dt><dd>${item.transport}</dd></div>
          <div><dt>来源</dt><dd><a href="${item.source}" target="_blank" rel="noreferrer">查看公开来源</a></dd></div>
        </dl>
      </div>
    </div>`;
  els.dialog.showModal();
}

function toggleSave(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }
  saveState();
  renderAll();
}

function bindEvents() {
  els.headerSearchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    els.searchInput.value = event.target.value;
    renderAll();
  });
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    els.headerSearchInput.value = event.target.value;
    renderAll();
  });
  els.dateInput.addEventListener("change", (event) => {
    state.date = event.target.value || toDateInput(today);
    renderAll();
  });
  els.districtSelect.addEventListener("change", (event) => {
    state.district = event.target.value;
    renderAll();
  });
  els.typeSelect.addEventListener("change", (event) => {
    state.type = event.target.value;
    renderAll();
  });
  els.priceSelect.addEventListener("change", (event) => {
    state.price = event.target.value;
    renderAll();
  });
  document.querySelectorAll(".quick-filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".quick-filter").forEach((entry) => entry.classList.remove("active"));
      button.classList.add("active");
      state.quick = button.dataset.quick;
      renderAll();
    });
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((entry) => entry.classList.remove("active"));
      button.classList.add("active");
      state.view = button.dataset.view;
      renderAll();
    });
  });
  els.closeDialog.addEventListener("click", () => els.dialog.close());

  // ── Mobile: search toggle ──
  const mobileSearchToggle = document.querySelector("#mobileSearchToggle");
  const headerSearch = document.querySelector("#headerSearch");
  if (mobileSearchToggle && headerSearch) {
    mobileSearchToggle.addEventListener("click", () => {
      headerSearch.classList.toggle("mobile-visible");
      if (headerSearch.classList.contains("mobile-visible")) {
        headerSearch.querySelector("input").focus();
      }
    });
    // Hide search panel on scroll
    document.addEventListener("scroll", () => {
      headerSearch.classList.remove("mobile-visible");
    }, { passive: true });
  }

  // ── Mobile: bottom nav active section ──
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".bottom-nav-item");
  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver((entries) => {
      let best = null;
      let bestRatio = 0;
      entries.forEach((entry) => {
        if (entry.intersectionRatio > bestRatio) {
          best = entry.target.id;
          bestRatio = entry.intersectionRatio;
        }
      });
      if (best) {
        navItems.forEach((item) => {
          item.classList.toggle("active", item.dataset.section === best);
        });
      }
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((section) => observer.observe(section));
  }
}

renderOptions();
bindEvents();
renderAll();
