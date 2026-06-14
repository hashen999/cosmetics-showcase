/**
 * Aura Cosmetics - Core Storefront Application Logic (Stocks & Preview Updated)
 */

// Helper to generate elegant cosmetics SVGs styled dynamically with theme colors
function getPlaceholderSvg(type, primaryColor, accentColor) {
  const primary = primaryColor || '#1e3a5f';
  const accent = accentColor || '#c5a880';
  let svgContent = '';

  switch (type) {
    case 'cleanser':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <rect width="200" height="200" fill="${primary}0c"/>
          <rect x="70" y="70" width="60" height="95" rx="12" fill="#ffffff" stroke="${primary}" stroke-width="2"/>
          <rect x="82" y="52" width="36" height="18" rx="2" fill="${accent}" stroke="${primary}" stroke-width="1.5"/>
          <path d="M92 52 C92 38 108 38 108 45 L108 52 Z" fill="${primary}"/>
          <rect x="76" y="90" width="48" height="45" rx="3" fill="${primary}12"/>
          <line x1="84" y1="102" x2="116" y2="102" stroke="${primary}" stroke-width="2"/>
          <line x1="84" y1="114" x2="110" y2="114" stroke="${primary}" stroke-width="1.5"/>
          <line x1="84" y1="124" x2="105" y2="124" stroke="${accent}" stroke-width="1.5"/>
        </svg>
      `;
      break;
    case 'serum':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <rect width="200" height="200" fill="${primary}0c"/>
          <rect x="75" y="75" width="50" height="85" rx="10" fill="#ffffff" stroke="${primary}" stroke-width="2"/>
          <rect x="84" y="48" width="32" height="27" rx="3" fill="${accent}" stroke="${primary}" stroke-width="1.5"/>
          <rect x="91" y="36" width="18" height="12" rx="4" fill="${primary}"/>
          <path d="M80 95 Q100 102 120 95 L120 155 L80 155 Z" fill="${accent}18"/>
          <rect x="81" y="110" width="38" height="35" rx="2" fill="${primary}12"/>
          <circle cx="100" cy="120" r="4" fill="${accent}"/>
          <line x1="90" y1="132" x2="110" y2="132" stroke="${primary}" stroke-width="1.5"/>
        </svg>
      `;
      break;
    case 'cream':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <rect width="200" height="200" fill="${primary}0c"/>
          <path d="M60 95 C60 85 140 85 140 95 L135 152 C135 160 65 160 65 152 Z" fill="#ffffff" stroke="${primary}" stroke-width="2"/>
          <rect x="54" y="74" width="92" height="20" rx="4" fill="${accent}" stroke="${primary}" stroke-width="1.5"/>
          <rect x="76" y="110" width="48" height="28" rx="2" fill="${primary}12"/>
          <line x1="84" y1="120" x2="116" y2="120" stroke="${primary}" stroke-width="2"/>
          <line x1="88" y1="128" x2="112" y2="128" stroke="${accent}" stroke-width="1.5"/>
        </svg>
      `;
      break;
    case 'sunscreen':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <rect width="200" height="200" fill="${primary}0c"/>
          <path d="M70 50 L130 50 L115 152 L85 152 Z" fill="#ffffff" stroke="${primary}" stroke-width="2"/>
          <rect x="68" y="42" width="64" height="8" fill="${primary}"/>
          <rect x="84" y="152" width="32" height="15" rx="3" fill="${accent}" stroke="${primary}" stroke-width="1.5"/>
          <path d="M78 80 L122 80 L117 118 L83 118 Z" fill="${accent}18"/>
          <circle cx="100" cy="96" r="10" fill="${accent}"/>
          <path d="M96 96 L104 96 M100 92 L100 100" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
      break;
    case 'eye-patch':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
          <rect width="200" height="200" fill="${primary}0c"/>
          <rect x="52" y="90" width="96" height="60" rx="10" fill="#ffffff" stroke="${primary}" stroke-width="2"/>
          <rect x="46" y="74" width="108" height="16" rx="4" fill="${accent}" stroke="${primary}" stroke-width="1.5"/>
          <rect x="68" y="108" width="64" height="26" rx="2" fill="${primary}12"/>
          <circle cx="100" cy="120" r="5" fill="${accent}"/>
        </svg>
      `;
      break;
    case 'slide1':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="slideGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${primary}"/>
              <stop offset="60%" stop-color="${primary}f2"/>
              <stop offset="100%" stop-color="${accent}"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#slideGrad1)"/>
          <circle cx="950" cy="400" r="300" fill="#ffffff" opacity="0.06"/>
          <circle cx="100" cy="700" r="150" fill="${accent}" opacity="0.1"/>
          <!-- Product Silhouettes -->
          <g transform="translate(700, 180) scale(1.8)">
            <rect x="30" y="50" width="80" height="150" rx="12" fill="#ffffff" opacity="0.9"/>
            <rect x="46" y="25" width="48" height="25" rx="3" fill="${accent}"/>
            <rect x="40" y="80" width="60" height="85" rx="2" fill="${primary}" opacity="0.08"/>
            <line x1="50" y1="100" x2="90" y2="100" stroke="${primary}" stroke-width="3" opacity="0.3"/>
            <line x1="50" y1="112" x2="80" y2="112" stroke="${accent}" stroke-width="2" opacity="0.4"/>
          </g>
          <g transform="translate(850, 260) scale(1.4)">
            <rect x="30" y="60" width="70" height="120" rx="20" fill="#ffffff" opacity="0.75"/>
            <rect x="48" y="32" width="34" height="28" rx="2" fill="${primary}"/>
            <rect x="40" y="90" width="50" height="60" rx="2" fill="${accent}" opacity="0.1"/>
          </g>
        </svg>
      `;
      break;
    case 'slide2':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="slideGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${accent}"/>
              <stop offset="40%" stop-color="${accent}e6"/>
              <stop offset="100%" stop-color="${primary}"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#slideGrad2)"/>
          <circle cx="250" cy="300" r="220" fill="#ffffff" opacity="0.04"/>
          <circle cx="950" cy="650" r="250" fill="#000000" opacity="0.15"/>
          <!-- Dropper silhouette -->
          <g transform="translate(750, 180) scale(2)">
            <rect x="40" y="60" width="60" height="125" rx="10" fill="#ffffff" opacity="0.9"/>
            <rect x="48" y="30" width="44" height="30" rx="2" fill="${primary}"/>
            <rect x="55" y="16" width="26" height="14" rx="4" fill="${accent}"/>
            <path d="M48 85 Q70 92 92 85 L92 165 L48 165 Z" fill="${accent}" opacity="0.12"/>
          </g>
        </svg>
      `;
      break;
    case 'about':
      svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
          <rect width="600" height="450" fill="${accent}0a"/>
          <circle cx="300" cy="225" r="180" fill="#ffffff" stroke="${accent}20" stroke-width="1.5"/>
          <circle cx="300" cy="225" r="150" fill="${primary}04"/>
          <!-- Abstract organic leaf path -->
          <path d="M300 70 C340 120 345 190 300 225 C255 190 260 120 300 70 Z" fill="${accent}" opacity="0.8"/>
          <path d="M300 225 C345 260 340 330 300 375 C260 330 255 260 300 225 Z" fill="${primary}" opacity="0.5"/>
          <path d="M300 225 C360 225 430 270 430 315 C370 315 360 270 300 225 Z" fill="${accent}" opacity="0.3"/>
          <path d="M300 225 C240 225 170 180 170 135 C230 135 240 180 300 225 Z" fill="${primary}" opacity="0.25"/>
        </svg>
      `;
      break;
  }
  
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContent.trim());
}

// -------------------------------------------------------------
// DEFAULT DATA PRESETS
// -------------------------------------------------------------
const DEFAULT_CONFIG = {
  storeName: "AURA",
  logoUrl: "", // fallback dynamic SVG
  about: {
    subtitle: "Behind The Brand",
    title: "Nourish Your Skin, Embrace Your Natural Glow",
    text: "At Aura, we believe that beauty begins with a healthy, balanced skin barrier. That's why we formulate all our cosmetics with soothing botanicals, pure minerals, and clinically proven hydrating agents. Inspired by Cetaphil's dermatological research and Oriflame's natural Swedish heritage, we merge laboratory precision with natural luxury to give your skin exactly what it deserves.",
    imageUrl: "" // fallback dynamic SVG
  },
  footer: {
    about: "Premium cosmetics formulated to promote healthy, radiant, and resilient skin. 100% cruelty-free and dermatologist tested.",
    address: "100 Beauty Lane, Suite 200, New York, NY",
    phone: "+1 (800) 555-AURA",
    email: "care@aurabeauty.com"
  },
  colors: {
    primary: "#1e3a5f",
    accent: "#c5a880",
    bg: "#faf7f2",
    text: "#2c2c2c"
  },
  slides: [
    {
      id: "slide-1",
      subtitle: "CLINICALLY PROVEN HYDRO-BOOST",
      title: "Gentle Care for <span>Sensitive Skin</span>",
      desc: "Restore your skin barrier with our dermatologist-approved hydrating cleanser, enriched with niacinamide, glycerin, and soothing panthenol.",
      cta: "SHOP CLEANSER",
      imageUrl: "" // fallback
    },
    {
      id: "slide-2",
      subtitle: "SWEDISH NATURE HARVEST",
      title: "Natural Radiance <span>Reimagined</span>",
      desc: "Enrich your daily routine with organic berry extracts and seed oils designed to lock in long-lasting moisture, glow, and youthful elasticity.",
      cta: "EXPLORE ESSENTIALS",
      imageUrl: "" // fallback
    }
  ],
  features: [
    {
      id: "feat-1",
      title: "100% Vegan & Cruelty-Free",
      desc: "None of our formulations or raw materials are tested on animals, and we maintain complete certified vegan integrity.",
      icon: "fa-heart"
    },
    {
      id: "feat-2",
      title: "Dermatologist Approved",
      desc: "Formulated alongside top-tier clinical dermatologists to guarantee safety, tolerance, and comfort on hypersensitive skin.",
      icon: "fa-shield-halved"
    },
    {
      id: "feat-3",
      title: "Active Barrier Hydration",
      desc: "Powered by active essential ceramides, botanical hyaluronic acid, and vitamins to lock in deep moisture for 48 hours.",
      icon: "fa-droplet"
    }
  ],
  products: [
    {
      id: "prod-1",
      name: "Gentle Hydrating Cleanser",
      price: 14.99,
      category: "Cleansers",
      desc: "A cream-to-foam moisturizing cleanser that washes away dirt and cosmetics without stripping the skin's protective oil layer. Infused with skin-identical ceramides.",
      imageUrl: "",
      imageType: "cleanser",
      stock: 12
    },
    {
      id: "prod-2",
      name: "Glow Radiance Vitamin C Serum",
      price: 24.50,
      category: "Serums",
      desc: "A potent brightening serum complex containing 10% Vitamin C, ferulic acid, and orange leaf extract to target hyperpigmentation and reveal glow.",
      imageUrl: "",
      imageType: "serum",
      stock: 8
    },
    {
      id: "prod-3",
      name: "Hydro-Boost Barrier Cream",
      price: 19.99,
      category: "Moisturizers",
      desc: "An ultralight, quick-absorbing water-gel moisturizer that provides immediate hydration and replenishes the natural skin barrier. Non-comedogenic.",
      imageUrl: "",
      imageType: "cream",
      stock: 15
    },
    {
      id: "prod-4",
      name: "Mineral Matte Sunscreen SPF 50",
      price: 18.00,
      category: "Sun Protection",
      desc: "Broad-spectrum physical SPF 50 sunscreen containing micro-fine zinc oxide. Controls shine, leaving a velvet matte finish with zero white cast.",
      imageUrl: "",
      imageType: "sunscreen",
      stock: 0 // Out of Stock preset to demonstrate lock behavior instantly
    },
    {
      id: "prod-5",
      name: "Hydrating Cooling Eye Patches",
      price: 12.00,
      category: "Treatments",
      desc: "Cooling hydrogel patches with cucumber extract, aloe vera, and caffeine. Instantly depuffs, hydrates, and brightens tired under-eyes.",
      imageUrl: "",
      imageType: "eye-patch",
      stock: 5
    }
  ]
};

// -------------------------------------------------------------
// APPLICATION STATE
// -------------------------------------------------------------
const state = {
  config: JSON.parse(localStorage.getItem('aura_store_config')) || JSON.parse(JSON.stringify(DEFAULT_CONFIG)),
  cart: JSON.parse(localStorage.getItem('aura_store_cart')) || [],
  activeSlideIndex: 0,
  categoryFilter: 'All',
  searchQuery: ''
};

// Temp checkout variables to hold info until receipt is finalized
let checkoutData = null;

// -------------------------------------------------------------
// LOCALSTORAGE SYNC & UPDATES
// -------------------------------------------------------------
function saveConfig() {
  localStorage.setItem('aura_store_config', JSON.stringify(state.config));
}

function saveCart() {
  localStorage.setItem('aura_store_cart', JSON.stringify(state.cart));
}

// -------------------------------------------------------------
// TOAST NOTIFICATIONS
// -------------------------------------------------------------
function showToast(message, icon = "fa-circle-check") {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  
  // Auto-remove toast
  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// -------------------------------------------------------------
// THEME COLORS APPLICATION
// -------------------------------------------------------------
function applyColors() {
  const colors = state.config.colors;
  document.documentElement.style.setProperty('--color-primary', colors.primary);
  document.documentElement.style.setProperty('--color-accent', colors.accent);
  document.documentElement.style.setProperty('--color-bg', colors.bg);
  document.documentElement.style.setProperty('--color-text', colors.text);
  
  // Calculate RGB formats for opacity tricks
  const rgbPrimary = hexToRgb(colors.primary);
  const rgbAccent = hexToRgb(colors.accent);
  if (rgbPrimary) document.documentElement.style.setProperty('--color-primary-rgb', `${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}`);
  if (rgbAccent) document.documentElement.style.setProperty('--color-accent-rgb', `${rgbAccent.r}, ${rgbAccent.g}, ${rgbAccent.b}`);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// -------------------------------------------------------------
// CORE STOREFRONT RENDERERS
// -------------------------------------------------------------

function renderStorefront() {
  applyColors();
  renderBranding();
  renderHeroCarousel();
  renderFeatures();
  renderAboutSection();
  renderProducts();
  renderCart();
}

function renderBranding() {
  const { storeName, logoUrl, footer } = state.config;
  
  // Update titles & brand names
  document.title = `${storeName} | Premium Cosmetics Showcase`;
  document.getElementById('site-name').textContent = storeName;
  document.getElementById('footer-brand-name').textContent = `${storeName} BEAUTY`;
  
  // Main header logo
  const logoImg = document.getElementById('site-logo');
  logoImg.src = logoUrl || getPlaceholderSvg('cleanser', state.config.colors.primary, state.config.colors.accent);
  
  // Footer info
  document.getElementById('footer-about-text').textContent = footer.about;
  
  const addressEl = document.getElementById('footer-contact-address');
  addressEl.innerHTML = `<i class="fa-solid fa-location-dot" style="margin-right: 8px;"></i> ${footer.address}`;
  
  const phoneEl = document.getElementById('footer-contact-phone');
  phoneEl.innerHTML = `<i class="fa-solid fa-phone" style="margin-right: 8px;"></i> ${footer.phone}`;
  
  const emailEl = document.getElementById('footer-contact-email');
  emailEl.innerHTML = `<i class="fa-solid fa-envelope" style="margin-right: 8px;"></i> ${footer.email}`;
  
  document.getElementById('footer-copyright').innerHTML = `&copy; 2026 ${storeName} Cosmetics. All rights reserved.`;
}

function renderHeroCarousel() {
  const container = document.getElementById('hero-carousel-inner');
  const indicatorContainer = document.getElementById('carousel-indicators');
  
  container.innerHTML = '';
  indicatorContainer.innerHTML = '';
  
  const slides = state.config.slides;
  
  if (slides.length === 0) {
    container.innerHTML = `
      <div class="carousel-slide active" style="background:#222; display:flex; justify-content:center; align-items:center; color:#fff;">
        <div style="text-align:center;">
          <h2>No campaigns configured.</h2>
          <p>Open the customizer to add a carousel slide.</p>
        </div>
      </div>
    `;
    return;
  }
  
  // Cap indices
  if (state.activeSlideIndex >= slides.length) {
    state.activeSlideIndex = 0;
  }
  
  slides.forEach((slide, idx) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `carousel-slide ${idx === state.activeSlideIndex ? 'active' : ''}`;
    
    // Slide background image
    const imgUrl = slide.imageUrl || getPlaceholderSvg(`slide${(idx % 2) + 1}`, state.config.colors.primary, state.config.colors.accent);
    
    slideDiv.innerHTML = `
      <img src="${imgUrl}" alt="${slide.title}" class="slide-img">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <div class="slide-subtitle">${slide.subtitle}</div>
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-desc">${slide.desc}</p>
        <a href="#products-section" class="slide-cta">${slide.cta || 'SHOP COLLECTION'}</a>
      </div>
    `;
    
    container.appendChild(slideDiv);
    
    // Indicator
    const dot = document.createElement('button');
    dot.className = `indicator ${idx === state.activeSlideIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to Slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
    indicatorContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  const slides = state.config.slides;
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  state.activeSlideIndex = index;
  
  const slideEls = document.querySelectorAll('.carousel-slide');
  const dotEls = document.querySelectorAll('.indicator');
  
  slideEls.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  dotEls.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// Auto carousel rotation
let carouselTimer = setInterval(() => {
  if (state.config.slides.length > 1) {
    goToSlide(state.activeSlideIndex + 1);
  }
}, 7000);

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    if (state.config.slides.length > 1) {
      goToSlide(state.activeSlideIndex + 1);
    }
  }, 7000);
}

document.getElementById('carousel-prev').addEventListener('click', () => {
  goToSlide(state.activeSlideIndex - 1);
  resetCarouselTimer();
});

document.getElementById('carousel-next').addEventListener('click', () => {
  goToSlide(state.activeSlideIndex + 1);
  resetCarouselTimer();
});

function renderFeatures() {
  const container = document.getElementById('features-container');
  container.innerHTML = '';
  
  const features = state.config.features;
  features.forEach(feat => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
      <div class="feature-icon-wrapper">
        <i class="fa-solid ${feat.icon || 'fa-leaf'}"></i>
      </div>
      <h3>${feat.title}</h3>
      <p>${feat.desc}</p>
    `;
    container.appendChild(card);
  });
}

function renderAboutSection() {
  const about = state.config.about;
  document.getElementById('about-subtitle').textContent = about.subtitle;
  document.getElementById('about-title').innerHTML = about.title;
  document.getElementById('about-text').textContent = about.text;
  
  const imgEl = document.getElementById('about-image');
  imgEl.src = about.imageUrl || getPlaceholderSvg('about', state.config.colors.primary, state.config.colors.accent);
}

function renderProducts() {
  const container = document.getElementById('products-container');
  const tabsContainer = document.getElementById('category-tabs-container');
  
  container.innerHTML = '';
  tabsContainer.innerHTML = '';
  
  const products = state.config.products;
  
  // Extract unique categories dynamically
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  // Render Category Tabs
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${state.categoryFilter === cat ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      state.categoryFilter = cat;
      renderProducts();
    });
    tabsContainer.appendChild(btn);
  });
  
  // Filter products by category and search query
  let filtered = products;
  
  if (state.categoryFilter !== 'All') {
    filtered = filtered.filter(p => p.category === state.categoryFilter);
  }
  
  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.desc.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: #888;">
        <i class="fa-solid fa-face-dashed" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
        <p>No products match your search or filter requirements.</p>
      </div>
    `;
    return;
  }
  
  // Render Cards
  filtered.forEach(prod => {
    const card = document.createElement('div');
    
    // Ensure stock defaults to something valid if undefined
    const stockVal = prod.stock !== undefined ? prod.stock : 10;
    
    let isOutOfStock = stockVal <= 0;
    card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
    
    // Choose appropriate SVG type based on item category or predefined tag
    const type = prod.imageType || 'cream';
    const imgUrl = prod.imageUrl || getPlaceholderSvg(type, state.config.colors.primary, state.config.colors.accent);
    
    // Create stock badge markup
    let stockBadge = '';
    if (isOutOfStock) {
      stockBadge = `<span class="product-stock-badge danger">Out of Stock</span>`;
    } else if (stockVal <= 3) {
      stockBadge = `<span class="product-stock-badge warning">Only ${stockVal} left</span>`;
    } else {
      stockBadge = `<span class="product-stock-badge">In Stock (${stockVal})</span>`;
    }
    
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${imgUrl}" alt="${prod.name}" class="product-img">
        <span class="product-badge">${prod.category}</span>
        ${stockBadge}
      </div>
      <div class="product-info">
        <span class="product-category">${prod.category}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-footer">
          <span class="product-price">$${prod.price.toFixed(2)}</span>
          <button class="add-to-cart-btn ${isOutOfStock ? 'disabled-btn' : ''}" data-id="${prod.id}" aria-label="Add to Cart" ${isOutOfStock ? 'disabled' : ''}>
            <i class="fa-solid ${isOutOfStock ? 'fa-ban' : 'fa-plus'}"></i>
          </button>
        </div>
      </div>
    `;
    
    // Add event listener to "Add to Cart" button (only if in stock)
    if (!isOutOfStock) {
      card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
        e.preventDefault();
        addToCart(prod.id);
      });
    }
    
    container.appendChild(card);
  });
}

// Search bar keyup listener
document.getElementById('product-search').addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  renderProducts();
});

// -------------------------------------------------------------
// CART OPERATIONS
// -------------------------------------------------------------
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-drawer-backdrop');

function openCart() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
}

document.getElementById('cart-toggle-btn').addEventListener('click', openCart);
document.getElementById('cart-close-btn').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);

// Mobile cart action binding
document.getElementById('mobile-cart-btn').addEventListener('click', openCart);

function addToCart(productId) {
  const prod = state.config.products.find(p => p.id === productId);
  if (!prod) return;
  
  const stockVal = prod.stock !== undefined ? prod.stock : 10;
  const existing = state.cart.find(item => item.productId === productId);
  const currentCartQty = existing ? existing.qty : 0;
  
  // Validate stock level limits
  if (currentCartQty + 1 > stockVal) {
    showToast(`Cannot add more. Limit of available stock (${stockVal}) reached!`, "fa-circle-exclamation");
    return;
  }
  
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ productId, qty: 1 });
  }
  
  saveCart();
  renderCart();
  openCart();
  
  showToast(`Added ${prod.name} to your cart!`);
}

function updateCartQty(productId, qty) {
  const prod = state.config.products.find(p => p.id === productId);
  if (!prod) return;
  
  const stockVal = prod.stock !== undefined ? prod.stock : 10;
  
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  
  if (qty > stockVal) {
    showToast(`Cannot set quantity to ${qty}. Only ${stockVal} units available!`, "fa-circle-exclamation");
    qty = stockVal; // cap at stock level
  }
  
  const item = state.cart.find(i => i.productId === productId);
  if (item) {
    item.qty = qty;
    saveCart();
    renderCart();
  }
}

function removeFromCart(productId) {
  const index = state.cart.findIndex(i => i.productId === productId);
  if (index > -1) {
    const prod = state.config.products.find(p => p.id === productId);
    state.cart.splice(index, 1);
    saveCart();
    renderCart();
    showToast(`Removed ${prod ? prod.name : 'item'} from cart.`, "fa-trash-can");
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const countBadge = document.getElementById('cart-count');
  const mobileCountBadge = document.getElementById('mobile-cart-count');
  const totalAmountEl = document.getElementById('cart-total-amount');
  
  container.innerHTML = '';
  
  let totalItems = 0;
  let totalPrice = 0;
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your shopping cart is empty.</p>
        <p style="font-size:0.8rem; margin-top:0.5rem; color:#aaa;">Add some luxury skincare items from our catalog to get started!</p>
      </div>
    `;
    countBadge.textContent = 0;
    if (mobileCountBadge) mobileCountBadge.textContent = 0;
    totalAmountEl.textContent = "$0.00";
    return;
  }
  
  state.cart.forEach(item => {
    const prod = state.config.products.find(p => p.id === item.productId);
    if (!prod) return; // Catalog might have changed
    
    totalItems += item.qty;
    const subtotal = prod.price * item.qty;
    totalPrice += subtotal;
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    
    const type = prod.imageType || 'cream';
    const imgUrl = prod.imageUrl || getPlaceholderSvg(type, state.config.colors.primary, state.config.colors.accent);
    
    itemDiv.innerHTML = `
      <img src="${imgUrl}" alt="${prod.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${prod.name}</h4>
        <div class="cart-item-price">$${prod.price.toFixed(2)}</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn dec-qty" data-id="${item.productId}">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn inc-qty" data-id="${item.productId}">+</button>
          </div>
          <button class="remove-item-btn" data-id="${item.productId}">Remove</button>
        </div>
      </div>
    `;
    
    // Hook quantity adjustments
    itemDiv.querySelector('.dec-qty').addEventListener('click', () => updateCartQty(item.productId, item.qty - 1));
    itemDiv.querySelector('.inc-qty').addEventListener('click', () => updateCartQty(item.productId, item.qty + 1));
    itemDiv.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(item.productId));
    
    container.appendChild(itemDiv);
  });
  
  countBadge.textContent = totalItems;
  if (mobileCountBadge) mobileCountBadge.textContent = totalItems;
  totalAmountEl.textContent = `$${totalPrice.toFixed(2)}`;
}

// -------------------------------------------------------------
// CHECKOUT, PREVIEW & PDF RECEIPTS (VISIBLE FLOW TO FIX BUGS)
// -------------------------------------------------------------
const checkoutModal = document.getElementById('checkout-modal');
const checkoutBackdrop = document.getElementById('checkout-modal-backdrop');

const receiptModal = document.getElementById('receipt-modal');
const receiptBackdrop = document.getElementById('receipt-modal-backdrop');

function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Cannot checkout with an empty cart!", "fa-circle-exclamation");
    return;
  }
  closeCart();
  checkoutModal.classList.add('open');
  checkoutBackdrop.classList.add('open');
}

function closeCheckout() {
  checkoutModal.classList.remove('open');
  checkoutBackdrop.classList.remove('open');
}

function openReceiptPreview() {
  receiptModal.classList.add('open');
  receiptBackdrop.classList.add('open');
}

function closeReceiptPreview() {
  receiptModal.classList.remove('open');
  receiptBackdrop.classList.remove('open');
}

document.getElementById('cart-checkout-btn').addEventListener('click', openCheckout);
document.getElementById('checkout-close-btn').addEventListener('click', closeCheckout);
document.getElementById('checkout-cancel-btn').addEventListener('click', closeCheckout);
checkoutBackdrop.addEventListener('click', closeCheckout);

// Close preview button bindings
document.getElementById('receipt-close-btn').addEventListener('click', closeReceiptPreview);
receiptBackdrop.addEventListener('click', closeReceiptPreview);

// Handle checkout form submission -> Transition to visible Receipt Preview Modal
document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const custName = document.getElementById('customer-name').value.trim();
  const custPhone = document.getElementById('customer-phone').value.trim();
  const custAddress = document.getElementById('customer-address').value.trim();
  
  // Cache checkout data
  checkoutData = { name: custName, phone: custPhone, address: custAddress };
  
  // Compile checkout details into preview sheets
  populateReceiptModal(custName, custPhone, custAddress);
  
  // Transition modals
  closeCheckout();
  openReceiptPreview();
});

function populateReceiptModal(name, phone, address) {
  const receiptNum = "INV-" + Math.floor(100000 + Math.random() * 900000);
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  document.getElementById('receipt-store-name').textContent = state.config.storeName;
  document.getElementById('receipt-logo').src = state.config.logoUrl || getPlaceholderSvg('cleanser', state.config.colors.primary, state.config.colors.accent);
  document.getElementById('receipt-number').textContent = receiptNum;
  document.getElementById('receipt-date').textContent = dateStr;
  
  document.getElementById('receipt-cust-name').textContent = name;
  document.getElementById('receipt-cust-phone').textContent = phone;
  document.getElementById('receipt-cust-address').textContent = address;
  document.getElementById('receipt-footer-email').textContent = state.config.footer.email;
  
  // Construct Items Table rows
  const itemsBody = document.getElementById('receipt-items-body');
  itemsBody.innerHTML = '';
  
  let totalPrice = 0;
  
  state.cart.forEach(item => {
    const prod = state.config.products.find(p => p.id === item.productId);
    if (!prod) return;
    
    const subtotal = prod.price * item.qty;
    totalPrice += subtotal;
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${prod.name}</strong><br><span style="font-size:0.75rem; color:#888;">${prod.category}</span></td>
      <td class="num">$${prod.price.toFixed(2)}</td>
      <td class="num">${item.qty}</td>
      <td class="num">$${subtotal.toFixed(2)}</td>
    `;
    itemsBody.appendChild(row);
  });
  
  document.getElementById('receipt-subtotal').textContent = `$${totalPrice.toFixed(2)}`;
  document.getElementById('receipt-total').textContent = `$${totalPrice.toFixed(2)}`;
  
  // Hook the download button to use the active invoice preview canvas
  const downloadBtn = document.getElementById('btn-download-pdf');
  
  // Remove previous listeners to prevent multiple downloads
  const newDownloadBtn = downloadBtn.cloneNode(true);
  downloadBtn.replaceWith(newDownloadBtn);
  
  newDownloadBtn.addEventListener('click', () => {
    executePdfDownload(receiptNum);
  });
}

function executePdfDownload(receiptNum) {
  // Capture the fully visible receipt container inside the preview modal
  const element = document.getElementById('receipt-pdf-container');
  
  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     `receipt_${receiptNum}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  showToast("Downloading invoice...", "fa-arrows-spin");
  
  html2pdf().set(opt).from(element).save().then(() => {
    showToast("PDF downloaded! Checkout finalized.", "fa-circle-check");
    finalizeCheckout();
  }).catch((err) => {
    console.error("PDF download error: ", err);
    showToast("Failed to compile PDF.", "fa-circle-exclamation");
  });
}

// Finalizes purchase, subtracts stocks from database, clears forms
function finalizeCheckout() {
  // Subtract stocks
  state.cart.forEach(item => {
    const prod = state.config.products.find(p => p.id === item.productId);
    if (prod) {
      const currentStock = prod.stock !== undefined ? prod.stock : 10;
      prod.stock = Math.max(0, currentStock - item.qty);
    }
  });
  
  // Save settings
  saveConfig();
  
  // Clear cart
  state.cart = [];
  saveCart();
  
  // Reset forms
  document.getElementById('checkout-form').reset();
  checkoutData = null;
  
  // Close modales and refresh showcase
  closeReceiptPreview();
  renderStorefront();
}

// Manual Close Receipt Button binding
document.getElementById('btn-close-receipt-preview').addEventListener('click', () => {
  finalizeCheckout();
  showToast("Checkout completed. Thank you!");
});

// -------------------------------------------------------------
// INITIAL APPLICATION START
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderStorefront();
});
