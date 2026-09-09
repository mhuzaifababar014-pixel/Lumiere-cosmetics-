/* Lumiere Cosmetics - shared app logic: cart, rendering, nav, theme, wishlist, compare */

var CART_KEY = 'lumiere_cart';
var THEME_KEY = 'lumiere_theme';
var WISHLIST_KEY = 'lumiere_wishlist';
var COMPARE_KEY = 'lumiere_compare';

/* ---------- Theme (dark mode) ---------- */
function allProducts() {
  return (typeof FULL_PRODUCTS !== 'undefined' && FULL_PRODUCTS.length) ? FULL_PRODUCTS : PRODUCTS;
}

function getTheme() {
  try { return localStorage.getItem(THEME_KEY) || 'light'; } catch (e) { return 'light'; }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var btn = document.querySelector('[data-theme-toggle]');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
}

function initTheme() {
  applyTheme(getTheme());
  var btn = document.querySelector('[data-theme-toggle]');
  if (btn) {
    btn.addEventListener('click', function() {
      var next = getTheme() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyTheme(next);
    });
  }
}

/* ---------- Cart helpers ---------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(id, qty, variant) {
  qty = qty || 1;
  var cart = getCart();
  var key = String(id) + (variant ? '_' + variant : '');
  var item = cart.find(function(i) { return i.key === key; });
  if (item) { item.qty += qty; } else { cart.push({ id: String(id), qty: qty, variant: variant || '', key: key }); }
  saveCart(cart);
  updateCartCount();
  return cart;
}
function setCartQty(key, qty) {
  var cart = getCart();
  if (qty <= 0) { cart = cart.filter(function(i) { return i.key !== key; }); }
  else {
    var item = cart.find(function(i) { return i.key === key; });
    if (item) item.qty = qty;
  }
  saveCart(cart);
  updateCartCount();
  return cart;
}
function removeFromCart(key) {
  var cart = getCart().filter(function(i) { return i.key !== key; });
  saveCart(cart);
  updateCartCount();
  return cart;
}
function clearCart() {
  saveCart([]);
  updateCartCount();
}
function updateCartCount() {
  var cart = getCart();
  var total = cart.reduce(function(s, i) { return s + i.qty; }, 0);
  document.querySelectorAll('.cart-count').forEach(function(el) {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

/* ---------- Coupon ---------- */
function applyCoupon(code) {
  code = (code || '').toUpperCase().trim();
  if (COUPONS && COUPONS[code]) {
    var c = COUPONS[code];
    var cart = getCart();
    var subtotal = cart.reduce(function(s, i) {
      var p = findProduct(i.id);
      if (!p) return s;
      if (i.variant && p.variants) {
        var v = p.variants.find(function(v) { return v.label === i.variant; });
        if (v) return s + v.price * i.qty;
      }
      return s + p.price * i.qty;
    }, 0);
    if (subtotal < c.minOrder) {
      return { ok: false, msg: 'Minimum order: ' + formatPrice(c.minOrder) };
    }
    return { ok: true, code: code, discount: c };
  }
  return { ok: false, msg: 'Invalid coupon code' };
}

/* ---------- Product card HTML ---------- */
function productCard(p) {
  var wishlisted = isWishlisted(p.id);
  var compareList = getCompare();
  var inCompare = compareList.indexOf(String(p.id)) !== -1;
  var avgRating = getAvgRating(p.id);
  var reviewCount = (p.reviews ? p.reviews.length : 0) + (p.reviewCount || 0);
  return '<div class="product-card fade-in-up">' +
    '<div class="img-wrap">' +
      '<a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></a>' +
      '<button class="wishlist-btn' + (wishlisted ? ' active' : '') + '" data-wishlist="' + p.id + '" aria-label="Toggle wishlist">' + (wishlisted ? '♥' : '♡') + '</button>' +
      '<button class="add" data-add="' + p.id + '" aria-label="Add to cart">Add to Cart</button>' +
    '</div>' +
    '<p class="product-brand">' + p.brand + '</p>' +
    '<p class="product-name"><a href="product.html?id=' + p.id + '">' + p.name + '</a></p>' +
    '<p class="price">' + p.priceText + '</p>' +
    '<div class="card-rating"><span class="stars">' + renderStars(avgRating, 12) + '</span><span class="count">(' + reviewCount + ')</span></div>' +
  '</div>';
}

function renderProducts(container, list) {
  container.innerHTML = list.map(productCard).join('') || '<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px 0;">No products found.</p>';
  initFadeAnimations();
}

function renderRelated(container, product, n) {
  var related = allProducts().filter(function(p) { return p.category === product.category && p.id !== product.id; }).slice(0, n || 4);
  renderProducts(container, related);
}

function findProduct(id) {
  id = String(id);
  return allProducts().find(function(p) { return String(p.id) === id; });
}

/* ---------- Wishlist ---------- */
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; } catch (e) { return []; }
}
function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistCount();
}
function toggleWishlist(id) {
  var list = getWishlist();
  var idx = list.indexOf(String(id));
  if (idx === -1) { list.push(String(id)); toastFn('Added to wishlist'); }
  else { list.splice(idx, 1); toastFn('Removed from wishlist'); }
  saveWishlist(list);
  return list;
}
function isWishlisted(id) {
  return getWishlist().indexOf(String(id)) !== -1;
}
function updateWishlistCount() {
  var count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(function(el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ---------- Compare ---------- */
function getCompare() {
  try { return JSON.parse(localStorage.getItem(COMPARE_KEY)) || []; } catch (e) { return []; }
}
function saveCompare(list) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(list));
  updateCompareBar();
}
function toggleCompare(id) {
  var list = getCompare();
  var idx = list.indexOf(String(id));
  if (idx === -1) {
    if (list.length >= 4) { toastFn('Maximum 4 products to compare'); return list; }
    list.push(String(id));
    toastFn('Added to compare');
  } else {
    list.splice(idx, 1);
    toastFn('Removed from compare');
  }
  saveCompare(list);
  return list;
}
function removeFromCompare(id) {
  var list = getCompare().filter(function(i) { return i !== String(id); });
  saveCompare(list);
}
function updateCompareBar() {
  var bar = document.querySelector('.compare-bar');
  if (!bar) return;
  var list = getCompare();
  if (list.length < 2) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  var itemsHtml = list.map(function(id) {
    var p = findProduct(id);
    if (!p) return '';
    return '<div class="compare-item"><img src="' + p.image + '" alt="' + p.name + '"><span>' + p.name.substring(0, 20) + '</span><button class="remove-compare" data-rmcompare="' + id + '">&times;</button></div>';
  }).join('');
  bar.querySelector('.compare-items').innerHTML = itemsHtml;
}
function renderCompareTable(container) {
  var list = getCompare();
  if (list.length < 2) { container.innerHTML = '<p class="muted text-center" style="padding:40px 0">Select at least 2 products to compare.</p>'; return; }
  var products = list.map(function(id) { return findProduct(id); }).filter(Boolean);
  var attrs = ['Brand', 'Category', 'Price', 'Rating', 'Stock'];
  var html = '<table class="compare-table"><thead><tr><th></th>';
  products.forEach(function(p) { html += '<th><img src="' + p.image + '" alt="' + p.name + '"><br><strong>' + p.name + '</strong></th>'; });
  html += '</tr></thead><tbody>';
  attrs.forEach(function(attr) {
    html += '<tr><td><strong>' + attr + '</strong></td>';
    products.forEach(function(p) {
      var val = '';
      if (attr === 'Brand') val = p.brand;
      else if (attr === 'Category') val = p.category;
      else if (attr === 'Price') val = p.priceText;
      else if (attr === 'Rating') val = renderStars(p.rating, 12) + ' ' + p.rating;
      else if (attr === 'Stock') val = p.stock + ' in stock';
      html += '<td>' + val + '</td>';
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

/* ---------- Breadcrumbs ---------- */
function renderBreadcrumbs(container, items) {
  var html = '<nav class="breadcrumbs container">';
  items.forEach(function(item, i) {
    if (i > 0) html += '<span class="sep">/</span>';
    if (item.href) html += '<a href="' + item.href + '">' + item.label + '</a>';
    else html += '<span>' + item.label + '</span>';
  });
  html += '</nav>';
  container.insertAdjacentHTML('afterbegin', html);
}

/* ---------- Scroll Animations ---------- */
function initFadeAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in-up:not(.visible)').forEach(function(el) { observer.observe(el); });
}

/* ---------- Event delegation ---------- */
document.addEventListener('click', function(e) {
  var addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    e.preventDefault();
    addToCart(addBtn.getAttribute('data-add'), 1);
    if (window.toastFn) toastFn('Added to cart');
    var orig = addBtn.textContent;
    addBtn.textContent = 'Added \u2713';
    setTimeout(function() { addBtn.textContent = orig; }, 1200);
  }

  var wishBtn = e.target.closest('[data-wishlist]');
  if (wishBtn) {
    e.preventDefault();
    e.stopPropagation();
    var pid = wishBtn.getAttribute('data-wishlist');
    toggleWishlist(pid);
    var wished = isWishlisted(pid);
    wishBtn.textContent = wished ? '♥' : '♡';
    wishBtn.classList.toggle('active', wished);
  }

  var compBtn = e.target.closest('[data-compare]');
  if (compBtn) {
    e.preventDefault();
    toggleCompare(compBtn.getAttribute('data-compare'));
    compBtn.classList.toggle('active', getCompare().indexOf(compBtn.getAttribute('data-compare')) !== -1);
  }

  var rmComp = e.target.closest('[data-rmcompare]');
  if (rmComp) {
    e.preventDefault();
    removeFromCompare(rmComp.getAttribute('data-rmcompare'));
    updateCompareBar();
    var tableEl = document.getElementById('compareTable');
    if (tableEl) renderCompareTable(tableEl);
  }
});

/* ---------- Mobile nav toggle ---------- */
function initNav() {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() { nav.classList.toggle('open'); });
  }
}

/* ---------- Toast ---------- */
window.toastFn = function(msg) {
  var toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:12px 24px;font-size:13px;letter-spacing:.05em;z-index:9999;opacity:0;transition:opacity .3s ease;border-radius:4px;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(function() { toast.style.opacity = '0'; }, 1800);
};

/* ---------- Chat Widget ---------- */
function initChatWidget() {
  var widget = document.querySelector('.chat-widget');
  if (!widget) return;
  var toggle = widget.querySelector('.chat-toggle');
  var box = widget.querySelector('.chat-box');
  var msgs = widget.querySelector('.chat-messages');
  var input = widget.querySelector('.chat-input-row input');
  var sendBtn = widget.querySelector('.chat-input-row button');

  var autoReplies = {
    'hello': 'Hello! Welcome to Lumiere Cosmetics. How can I help you?',
    'hi': 'Hi there! How can I assist you today?',
    'price': 'You can check prices on our Shop page. We have products starting from 8,000 so\'m!',
    'delivery': 'We offer free delivery on orders over 200,000 so\'m. Standard delivery takes 2-3 business days.',
    'shipping': 'Free shipping on orders over 200,000 so\'m!',
    'return': 'We accept returns within 14 days of purchase. Items must be unused and in original packaging.',
    'contact': 'You can reach us at hello@lumiere-cosmetics.com or call +998 90 000 00 00.',
    'help': 'I can help you with: product info, pricing, delivery, returns, and more. Just ask!',
    'brand': 'We carry Chanel, Dior, Clarins, YSL, Huda Beauty, and many more premium brands.',
    'coupon': 'Try these coupons: WELCOME10 (10% off), BEAUTY20 (20% off), FREESHIP (Free shipping), SAVE50K (50K off).'
  };

  function addBotMsg(text) {
    var div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addUserMsg(text) {
    var div = document.createElement('div');
    div.className = 'chat-msg user';
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function getReply(text) {
    var lower = text.toLowerCase();
    var keys = Object.keys(autoReplies);
    for (var i = 0; i < keys.length; i++) {
      if (lower.indexOf(keys[i]) !== -1) return autoReplies[keys[i]];
    }
    return 'Thanks for your message! Our team will get back to you shortly. You can also email us at hello@lumiere-cosmetics.com';
  }

  toggle.addEventListener('click', function() { box.classList.toggle('open'); });

  function sendMsg() {
    var val = input.value.trim();
    if (!val) return;
    addUserMsg(val);
    input.value = '';
    setTimeout(function() { addBotMsg(getReply(val)); }, 600);
  }

  sendBtn.addEventListener('click', sendMsg);
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMsg(); });
}

/* ---------- Skeleton Loading ---------- */
function showSkeleton(container, count) {
  var html = '';
  for (var i = 0; i < (count || 4); i++) {
    html += '<div class="product-card"><div class="img-wrap skeleton" style="aspect-ratio:1/1"></div><div class="skeleton" style="height:12px;width:60%;margin:10px 0 6px;border-radius:4px"></div><div class="skeleton" style="height:14px;width:80%;margin-bottom:6px;border-radius:4px"></div><div class="skeleton" style="height:14px;width:40%;border-radius:4px"></div></div>';
  }
  container.innerHTML = html;
}

/* ---------- Scroll Progress + Back to Top ---------- */
function initScrollProgress() {
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;
  function update() {
    var h = document.documentElement;
    var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initBackToTop() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Animated Counters ---------- */
function initCounters() {
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length === 0) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-counter'), 10);
      var duration = 1500;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString('en-US');
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(function(el) { observer.observe(el); });
}

/* ---------- Parallax Hero ---------- */
function initParallax() {
  var hero = document.querySelector('.hero-media img');
  if (!hero) return;
  window.addEventListener('scroll', function() {
    var offset = window.scrollY;
    if (offset < window.innerHeight) {
      hero.style.transform = 'translateY(' + offset * 0.25 + 'px) scale(1.15)';
    }
  }, { passive: true });
}

/* ---------- Marquee Setup ---------- */
function initMarquee() {
  var topbar = document.querySelector('.topbar');
  if (!topbar) return;
  var text = topbar.textContent.trim();
  topbar.innerHTML = '<div class="topbar-inner">' + text + ' — ' + text + ' — </div>';
}

/* ---------- Init on every page ---------- */
initNav();
initTheme();
updateCartCount();
updateWishlistCount();
updateCompareBar();
initChatWidget();
initFadeAnimations();
initScrollProgress();
initBackToTop();
initCounters();
initParallax();
initMarquee();
