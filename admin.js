/**
 * Aura Cosmetics - Admin Customizer Sidebar Logic (Stocks & Mobile Integrated)
 */

// -------------------------------------------------------------
// DRAWER TOGGLES & INTERFACE BINDINGS
// -------------------------------------------------------------
const adminDrawer = document.getElementById('admin-drawer');
const adminBackdrop = document.getElementById('admin-drawer-backdrop');

function openAdminPanel() {
  adminDrawer.classList.add('open');
  adminBackdrop.classList.add('open');
  // Load form values with current state
  populateAdminForms();
}

function closeAdminPanel() {
  adminDrawer.classList.remove('open');
  adminBackdrop.classList.remove('open');
}

document.getElementById('admin-panel-btn').addEventListener('click', openAdminPanel);
document.getElementById('admin-close-btn').addEventListener('click', closeAdminPanel);
adminBackdrop.addEventListener('click', closeAdminPanel);

// Bind Mobile bottom action bar triggers
document.getElementById('mobile-customize-btn').addEventListener('click', openAdminPanel);
document.getElementById('mobile-home-btn').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeAdminPanel();
  closeCart();
});

// Tab switching
const tabButtons = document.querySelectorAll('.admin-tab-btn');
const tabPanels = document.querySelectorAll('.admin-panel-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all tabs
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    
    // Activate clicked tab
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-tab');
    document.getElementById(targetId).classList.add('active');
  });
});

// Helper for loading file input as Base64 image
function handleImageUpload(inputEl, previewEl, callback) {
  inputEl.addEventListener('change', () => {
    const file = inputEl.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewEl.src = e.target.result;
        previewEl.style.display = 'block';
        if (callback) callback(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
}

// -------------------------------------------------------------
// PRE-POPULATE ADMIN FORMS FROM ACTIVE CONFIG STATE
// -------------------------------------------------------------
let logoBase64 = null;
let aboutImageBase64 = null;
let slideImageBase64 = null;
let productImageBase64 = null;

function populateAdminForms() {
  const cfg = state.config;
  
  // General Tab
  document.getElementById('input-store-name').value = cfg.storeName;
  document.getElementById('input-about-subtitle').value = cfg.about.subtitle;
  document.getElementById('input-about-title').value = cfg.about.title;
  document.getElementById('input-about-text').value = cfg.about.text;
  document.getElementById('input-footer-about').value = cfg.footer.about;
  document.getElementById('input-footer-address').value = cfg.footer.address;
  document.getElementById('input-footer-phone').value = cfg.footer.phone;
  document.getElementById('input-footer-email').value = cfg.footer.email;
  
  const logoPrev = document.getElementById('logo-preview');
  if (cfg.logoUrl) {
    logoPrev.src = cfg.logoUrl;
    logoPrev.style.display = 'block';
  } else {
    logoPrev.style.display = 'none';
  }
  
  const aboutPrev = document.getElementById('about-image-preview');
  if (cfg.about.imageUrl) {
    aboutPrev.src = cfg.about.imageUrl;
    aboutPrev.style.display = 'block';
  } else {
    aboutPrev.style.display = 'none';
  }
  
  // Theme Color inputs
  document.getElementById('input-color-primary').value = cfg.colors.primary;
  document.getElementById('input-color-accent').value = cfg.colors.accent;
  document.getElementById('input-color-bg').value = cfg.colors.bg;
  document.getElementById('input-color-text').value = cfg.colors.text;
  
  // CRUD Lists
  renderAdminSlidesList();
  renderAdminFeaturesList();
  renderAdminProductsList();
}

// Setup base64 readers
handleImageUpload(
  document.getElementById('input-logo-file'),
  document.getElementById('logo-preview'),
  (base64) => { logoBase64 = base64; }
);

handleImageUpload(
  document.getElementById('input-about-file'),
  document.getElementById('about-image-preview'),
  (base64) => { aboutImageBase64 = base64; }
);

handleImageUpload(
  document.getElementById('input-slide-file'),
  document.getElementById('slide-image-preview'),
  (base64) => { slideImageBase64 = base64; }
);

handleImageUpload(
  document.getElementById('input-product-file'),
  document.getElementById('product-image-preview'),
  (base64) => { productImageBase64 = base64; }
);

// -------------------------------------------------------------
// SAVE HANDLERS FOR SECTION FORM CHANGES
// -------------------------------------------------------------

// Save General branding
document.getElementById('btn-save-general').addEventListener('click', () => {
  const storeName = document.getElementById('input-store-name').value.trim();
  if (!storeName) {
    showToast("Store Name is required!", "fa-circle-exclamation");
    return;
  }
  
  state.config.storeName = storeName;
  state.config.about.subtitle = document.getElementById('input-about-subtitle').value;
  state.config.about.title = document.getElementById('input-about-title').value;
  state.config.about.text = document.getElementById('input-about-text').value;
  
  state.config.footer.about = document.getElementById('input-footer-about').value;
  state.config.footer.address = document.getElementById('input-footer-address').value;
  state.config.footer.phone = document.getElementById('input-footer-phone').value;
  state.config.footer.email = document.getElementById('input-footer-email').value;
  
  if (logoBase64) {
    state.config.logoUrl = logoBase64;
    logoBase64 = null; // reset cache
  }
  if (aboutImageBase64) {
    state.config.about.imageUrl = aboutImageBase64;
    aboutImageBase64 = null;
  }
  
  saveConfig();
  renderStorefront();
  showToast("General changes saved successfully!");
});

// Save Theme Colors
document.getElementById('btn-save-theme').addEventListener('click', () => {
  state.config.colors.primary = document.getElementById('input-color-primary').value;
  state.config.colors.accent = document.getElementById('input-color-accent').value;
  state.config.colors.bg = document.getElementById('input-color-bg').value;
  state.config.colors.text = document.getElementById('input-color-text').value;
  
  saveConfig();
  renderStorefront();
  showToast("Branding theme colors updated!");
});

// -------------------------------------------------------------
// HERO SLIDER CRUD MANAGEMENT
// -------------------------------------------------------------
function renderAdminSlidesList() {
  const list = document.getElementById('admin-slides-list');
  list.innerHTML = '';
  
  state.config.slides.forEach((slide, index) => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    const thumb = slide.imageUrl || getPlaceholderSvg(`slide${(index % 2) + 1}`, state.config.colors.primary, state.config.colors.accent);
    
    row.innerHTML = `
      <div class="admin-item-info">
        <img class="admin-item-thumb" src="${thumb}" alt="Slide Thumb">
        <div>
          <strong style="font-size:0.9rem;">${slide.title.replace(/<\/?[^>]+(>|$)/g, "")}</strong>
          <div style="font-size:0.75rem; color:#666;">${slide.subtitle}</div>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-action-btn edit-slide-btn" data-id="${slide.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-action-btn danger delete-slide-btn" data-id="${slide.id}"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    
    row.querySelector('.edit-slide-btn').addEventListener('click', () => loadSlideForEdit(slide.id));
    row.querySelector('.delete-slide-btn').addEventListener('click', () => deleteSlide(slide.id));
    
    list.appendChild(row);
  });
}

function deleteSlide(id) {
  const index = state.config.slides.findIndex(s => s.id === id);
  if (index > -1) {
    state.config.slides.splice(index, 1);
    saveConfig();
    renderStorefront();
    renderAdminSlidesList();
    showToast("Slide removed.", "fa-trash-can");
  }
}

function loadSlideForEdit(id) {
  const slide = state.config.slides.find(s => s.id === id);
  if (!slide) return;
  
  document.getElementById('slide-edit-id').value = slide.id;
  document.getElementById('input-slide-subtitle').value = slide.subtitle;
  document.getElementById('input-slide-title').value = slide.title;
  document.getElementById('input-slide-desc').value = slide.desc;
  document.getElementById('input-slide-cta').value = slide.cta || '';
  
  const preview = document.getElementById('slide-image-preview');
  if (slide.imageUrl) {
    preview.src = slide.imageUrl;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
  
  document.getElementById('slide-form-title').textContent = "Edit Slide Details";
  document.getElementById('btn-slide-submit').textContent = "Update Slide";
  document.getElementById('btn-slide-cancel').style.display = 'block';
  
  // Scroll to slide form
  document.getElementById('slide-form').scrollIntoView({ behavior: 'smooth' });
}

function resetSlideForm() {
  document.getElementById('slide-edit-id').value = '';
  document.getElementById('slide-form').reset();
  document.getElementById('slide-image-preview').style.display = 'none';
  document.getElementById('slide-form-title').textContent = "Create New Slide";
  document.getElementById('btn-slide-submit').textContent = "Add Slide";
  document.getElementById('btn-slide-cancel').style.display = 'none';
  slideImageBase64 = null;
}

document.getElementById('btn-slide-cancel').addEventListener('click', resetSlideForm);

document.getElementById('slide-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const editId = document.getElementById('slide-edit-id').value;
  const subtitle = document.getElementById('input-slide-subtitle').value.trim() || 'NEW CAMPAIGN';
  const title = document.getElementById('input-slide-title').value.trim() || 'Aura Premium Glow';
  const desc = document.getElementById('input-slide-desc').value.trim() || 'Organic formulas that balance and nourish your skin barrier.';
  const cta = document.getElementById('input-slide-cta').value.trim() || 'SHOP NOW';
  
  if (editId) {
    // Update
    const slide = state.config.slides.find(s => s.id === editId);
    if (slide) {
      slide.subtitle = subtitle;
      slide.title = title;
      slide.desc = desc;
      slide.cta = cta;
      if (slideImageBase64) {
        slide.imageUrl = slideImageBase64;
      }
      showToast("Slide updated successfully!");
    }
  } else {
    // Create new
    const newSlide = {
      id: "slide-" + Date.now(),
      subtitle,
      title,
      desc,
      cta,
      imageUrl: slideImageBase64 || ""
    };
    state.config.slides.push(newSlide);
    showToast("Created new campaign slide!");
  }
  
  saveConfig();
  renderStorefront();
  resetSlideForm();
  renderAdminSlidesList();
});

// -------------------------------------------------------------
// BRAND FEATURES CRUD MANAGEMENT
// -------------------------------------------------------------
function renderAdminFeaturesList() {
  const list = document.getElementById('admin-features-list');
  list.innerHTML = '';
  
  state.config.features.forEach(feat => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    row.innerHTML = `
      <div class="admin-item-info">
        <div class="feature-icon-wrapper" style="width:40px; height:40px; margin:0 0.8rem 0 0; font-size:1.1rem;">
          <i class="fa-solid ${feat.icon || 'fa-leaf'}"></i>
        </div>
        <div>
          <strong style="font-size:0.9rem;">${feat.title}</strong>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-action-btn edit-feat-btn" data-id="${feat.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-action-btn danger delete-feat-btn" data-id="${feat.id}"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    
    row.querySelector('.edit-feat-btn').addEventListener('click', () => loadFeatureForEdit(feat.id));
    row.querySelector('.delete-feat-btn').addEventListener('click', () => deleteFeature(feat.id));
    
    list.appendChild(row);
  });
}

function deleteFeature(id) {
  const index = state.config.features.findIndex(f => f.id === id);
  if (index > -1) {
    state.config.features.splice(index, 1);
    saveConfig();
    renderStorefront();
    renderAdminFeaturesList();
    showToast("Feature removed.", "fa-trash-can");
  }
}

function loadFeatureForEdit(id) {
  const feat = state.config.features.find(f => f.id === id);
  if (!feat) return;
  
  document.getElementById('feature-edit-id').value = feat.id;
  document.getElementById('input-feature-title').value = feat.title;
  document.getElementById('input-feature-desc').value = feat.desc;
  document.getElementById('input-feature-icon').value = feat.icon || 'fa-leaf';
  
  document.getElementById('feature-form-title').textContent = "Edit Feature details";
  document.getElementById('btn-feature-submit').textContent = "Update Feature";
  document.getElementById('btn-feature-cancel').style.display = 'block';
  
  document.getElementById('feature-form').scrollIntoView({ behavior: 'smooth' });
}

function resetFeatureForm() {
  document.getElementById('feature-edit-id').value = '';
  document.getElementById('feature-form').reset();
  document.getElementById('feature-form-title').textContent = "Create Feature Accent";
  document.getElementById('btn-feature-submit').textContent = "Add Feature";
  document.getElementById('btn-feature-cancel').style.display = 'none';
}

document.getElementById('btn-feature-cancel').addEventListener('click', resetFeatureForm);

document.getElementById('feature-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const editId = document.getElementById('feature-edit-id').value;
  const title = document.getElementById('input-feature-title').value.trim();
  const desc = document.getElementById('input-feature-desc').value.trim();
  const icon = document.getElementById('input-feature-icon').value;
  
  if (!title || !desc) {
    showToast("Feature details are required!", "fa-circle-exclamation");
    return;
  }
  
  if (editId) {
    const feat = state.config.features.find(f => f.id === editId);
    if (feat) {
      feat.title = title;
      feat.desc = desc;
      feat.icon = icon;
      showToast("Feature modified!");
    }
  } else {
    const newFeat = {
      id: "feat-" + Date.now(),
      title,
      desc,
      icon
    };
    state.config.features.push(newFeat);
    showToast("Added new brand highlight!");
  }
  
  saveConfig();
  renderStorefront();
  resetFeatureForm();
  renderAdminFeaturesList();
});

// -------------------------------------------------------------
// PRODUCT CATALOG CRUD MANAGEMENT (Stocks Integrated)
// -------------------------------------------------------------
function renderAdminProductsList() {
  const list = document.getElementById('admin-products-list');
  list.innerHTML = '';
  
  state.config.products.forEach(prod => {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    
    const type = prod.imageType || 'cream';
    const imgUrl = prod.imageUrl || getPlaceholderSvg(type, state.config.colors.primary, state.config.colors.accent);
    
    // Ensure stock levels present
    const stockVal = prod.stock !== undefined ? prod.stock : 10;
    
    row.innerHTML = `
      <div class="admin-item-info">
        <img class="admin-item-thumb" src="${imgUrl}" alt="Product Thumb">
        <div>
          <strong style="font-size:0.9rem;">${prod.name}</strong>
          <div style="font-size:0.75rem; color:#666;">
            $${prod.price.toFixed(2)} | ${prod.category} | Stock: <strong style="color: ${stockVal === 0 ? '#dc2626' : '#4a7c59'};">${stockVal}</strong>
          </div>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-action-btn edit-prod-btn" data-id="${prod.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-action-btn danger delete-prod-btn" data-id="${prod.id}"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    
    row.querySelector('.edit-prod-btn').addEventListener('click', () => loadProductForEdit(prod.id));
    row.querySelector('.delete-prod-btn').addEventListener('click', () => deleteProduct(prod.id));
    
    list.appendChild(row);
  });
}

function deleteProduct(id) {
  const index = state.config.products.findIndex(p => p.id === id);
  if (index > -1) {
    state.config.products.splice(index, 1);
    
    // Remove from active cart if present
    const cartIdx = state.cart.findIndex(i => i.productId === id);
    if (cartIdx > -1) {
      state.cart.splice(cartIdx, 1);
      saveCart();
    }
    
    saveConfig();
    renderStorefront();
    renderAdminProductsList();
    showToast("Product deleted from catalog.", "fa-trash-can");
  }
}

function loadProductForEdit(id) {
  const prod = state.config.products.find(p => p.id === id);
  if (!prod) return;
  
  document.getElementById('product-edit-id').value = prod.id;
  document.getElementById('input-product-name').value = prod.name;
  document.getElementById('input-product-price').value = prod.price;
  document.getElementById('input-product-stock').value = prod.stock !== undefined ? prod.stock : 10;
  document.getElementById('input-product-category').value = prod.category;
  document.getElementById('input-product-desc').value = prod.desc;
  
  const preview = document.getElementById('product-image-preview');
  if (prod.imageUrl) {
    preview.src = prod.imageUrl;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
  
  document.getElementById('product-form-title').textContent = "Edit Product Details";
  document.getElementById('btn-product-submit').textContent = "Update Product";
  document.getElementById('btn-product-cancel').style.display = 'block';
  
  document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
}

function resetProductForm() {
  document.getElementById('product-edit-id').value = '';
  document.getElementById('product-form').reset();
  document.getElementById('product-image-preview').style.display = 'none';
  document.getElementById('product-form-title').textContent = "Add Product to Catalog";
  document.getElementById('btn-product-submit').textContent = "Add Product";
  document.getElementById('btn-product-cancel').style.display = 'none';
  productImageBase64 = null;
}

document.getElementById('btn-product-cancel').addEventListener('click', resetProductForm);

document.getElementById('product-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const editId = document.getElementById('product-edit-id').value;
  const name = document.getElementById('input-product-name').value.trim();
  const price = parseFloat(document.getElementById('input-product-price').value);
  const stock = parseInt(document.getElementById('input-product-stock').value, 10);
  const category = document.getElementById('input-product-category').value.trim();
  const desc = document.getElementById('input-product-desc').value.trim();
  
  if (!name || isNaN(price) || isNaN(stock) || !category || !desc) {
    showToast("Invalid inputs!", "fa-circle-exclamation");
    return;
  }
  
  // Decide template SVG base fallback type based on category terms
  let fallbackType = 'cream';
  const catLower = category.toLowerCase();
  if (catLower.includes('clean') || catLower.includes('wash')) fallbackType = 'cleanser';
  else if (catLower.includes('serum') || catLower.includes('oil')) fallbackType = 'serum';
  else if (catLower.includes('sun') || catLower.includes('block') || catLower.includes('spf')) fallbackType = 'sunscreen';
  else if (catLower.includes('eye') || catLower.includes('patch')) fallbackType = 'eye-patch';
  
  if (editId) {
    const prod = state.config.products.find(p => p.id === editId);
    if (prod) {
      prod.name = name;
      prod.price = price;
      prod.stock = Math.max(0, stock);
      prod.category = category;
      prod.desc = desc;
      prod.imageType = fallbackType;
      if (productImageBase64) {
        prod.imageUrl = productImageBase64;
      }
      showToast("Product updated!");
    }
  } else {
    const newProd = {
      id: "prod-" + Date.now(),
      name,
      price,
      stock: Math.max(0, stock),
      category,
      desc,
      imageUrl: productImageBase64 || "",
      imageType: fallbackType
    };
    state.config.products.push(newProd);
    showToast(`Added ${name} to store!`);
  }
  
  saveConfig();
  renderStorefront();
  resetProductForm();
  renderAdminProductsList();
});

// -------------------------------------------------------------
// BACKUP DATA EXPORT & IMPORT FILE HANDLERS
// -------------------------------------------------------------

// Export to JSON config file
document.getElementById('btn-export-config').addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.config, null, 2));
  const dlAnchor = document.createElement('a');
  
  const formattedStore = state.config.storeName.toLowerCase().replace(/[^a-z0-9]/g, '_');
  dlAnchor.setAttribute("href",     dataStr);
  dlAnchor.setAttribute("download", `aura_showcase_config_${formattedStore}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  
  showToast("Configuration JSON exported.");
});

// Import JSON configuration
document.getElementById('input-import-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsedConfig = JSON.parse(event.target.result);
      
      // Simple structure validation
      if (!parsedConfig.storeName || !parsedConfig.colors || !Array.isArray(parsedConfig.products)) {
        showToast("Invalid template configuration file format.", "fa-circle-exclamation");
        return;
      }
      
      // Update state
      state.config = parsedConfig;
      saveConfig();
      
      // Re-render
      renderStorefront();
      populateAdminForms();
      closeAdminPanel();
      
      showToast("Store configuration imported successfully!", "fa-circle-check");
    } catch (err) {
      console.error(err);
      showToast("Failed to parse JSON file.", "fa-circle-exclamation");
    }
  };
  reader.readAsText(file);
});

// Reset configuration back to original defaults
document.getElementById('btn-reset-defaults').addEventListener('click', () => {
  if (confirm("Are you sure you want to discard ALL customization changes and reset the website template back to default cosmetics presets?")) {
    state.config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    saveConfig();
    
    // reset cart
    state.cart = [];
    saveCart();
    
    renderStorefront();
    populateAdminForms();
    closeAdminPanel();
    
    showToast("Template reset to factory presets.", "fa-trash-can");
  }
});
