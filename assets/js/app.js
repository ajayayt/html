/* ═══════════════════════════════════════════════════════════════
   PARADISE HOME — QUIET LUXURY BEDDING
   Unified State, Data, Micro-Interactions & Page Logic
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════ PRODUCT CATALOG ═══════════ */
const products = [
    {
        id: 1,
        name: 'Harmony – Premium Designer Quilted 5 Pc. Bedding Set',
        cat: 'bedding',
        price: 7999,
        old: null,
        badge: 'Bestseller',
        rating: 4.9,
        reviews: 342,
        sold: 890,
        images: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
            'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1200&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80'
        ],
        desc: 'Luxurious quilted 5 piece bedding set with designer finish. Made with care and unconditionally loved by our customers.',
        longDesc:
            'Experience the pinnacle of comfort with our Harmony set. Each piece is quilted by hand using premium long-staple cotton, finished with delicate contrast piping and hidden button closures. The set includes one duvet cover, one fitted sheet, two pillowcases, and one decorative cushion — everything you need for a quietly luxurious bedroom.',
        details: [
            '100% Egyptian cotton, 400 Thread Count',
            'Hand-quilted diamond pattern for lasting loft',
            'Concealed button and inner corner tie closures',
            'Gentle machine wash cold at 30°C',
            'Complete set: 1 duvet + 1 fitted sheet + 2 pillowcases + 1 cushion'
        ],
        sizes: ['Single', 'Double', 'Queen', 'King'],
        colors: ['#e8d5b0', '#a9bd92', '#c4a882', '#7a8f5a'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 2,
        name: 'BLOOMORA – Luxurious Quilted 5 Pc. Bedding Set',
        cat: 'bedding',
        price: 8999,
        old: 11999,
        badge: 'Sale',
        rating: 4.8,
        reviews: 218,
        sold: 645,
        images: [
            'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80'
        ],
        desc: "Luxurious quilted 5 piece bedding set. Soft, breathable, and beautifully crafted for a restful night's sleep.",
        longDesc:
            'Bloomora brings romance to your bedroom with delicate floral quilting and a soft, brushed finish. The breathable weave keeps you cool in summer and cozy in winter — a true year-round luxury for refined homes.',
        details: [
            'Brushed organic cotton, 300 Thread Count',
            'Artisan floral quilted embroidery pattern',
            'Envelope pillow closures & seamless hems',
            'Machine washable at 30°C, tumble dry low',
            'Includes: 1 duvet + 1 fitted sheet + 2 pillowcases + 1 cushion'
        ],
        sizes: ['Single', 'Double', 'Queen', 'King'],
        colors: ['#f4c9b4', '#e8d5b0', '#a9bd92'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 3,
        name: 'GARDEN – Premium Embroidered Floral 5 Pc. Bedding Set',
        cat: 'bedding',
        price: 7999,
        old: null,
        badge: 'Popular',
        rating: 4.9,
        reviews: 156,
        sold: 412,
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
            'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1200&q=80',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80'
        ],
        desc: 'Premium embroidered floral 5 piece bedding set. Elegant detailing that brings the garden indoors.',
        longDesc:
            'Hand-embroidered botanical blossoms decorate this heirloom-worthy set. Stitched by our artisans over 40+ hours, creating a distinctive texture that softens with age while retaining its vibrant grace.',
        details: [
            'Hand-embroidered botanical motifs',
            'Lustrous premium sateen cotton weave',
            'Concealed zip closures and reinforced hems',
            'Dry clean or delicate gentle cycle',
            'Includes: 1 duvet + 1 fitted sheet + 2 pillowcases + 1 cushion'
        ],
        sizes: ['Double', 'Queen', 'King'],
        colors: ['#f4c9b4', '#e8d5b0', '#d4c8a8'],
        delivery: 'Free delivery in 4–6 working days'
    },
    {
        id: 4,
        name: 'ASH – Luxe Antique Embroidery 3 Piece Bedding Set',
        cat: 'bedding',
        price: 5999,
        old: null,
        badge: 'New',
        rating: 4.7,
        reviews: 89,
        sold: 234,
        images: [
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
            'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=1200&q=80'
        ],
        desc: 'Luxe antique 3 piece bedding set with exquisite embroidery. A timeless statement for your bedroom.',
        longDesc:
            'A celebration of antique craftsmanship, ASH pairs traditional needlework with a modern muted earth-tone palette. The 3-piece set includes a duvet cover and two matching pillowcases.',
        details: ['Antique-inspired tonal embroidery', 'Soft washed linen-cotton blend', 'Handmade corozo nut buttons', 'Machine wash cold with similar colors', 'Includes: 1 duvet + 2 pillowcases'],
        sizes: ['Double', 'Queen', 'King'],
        colors: ['#a9bd92', '#e8d5b0', '#b0a89a'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 5,
        name: 'Velvet Cushion Cover Set (2 Pc.)',
        cat: 'accessories',
        price: 2499,
        old: 3499,
        badge: 'Sale',
        rating: 4.8,
        reviews: 127,
        sold: 398,
        images: [
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80'
        ],
        desc: 'Soft velvet cushion covers to complete your home decor. Set of two, in muted, versatile tones.',
        longDesc: 'Plush velvet cushion covers with a subtle sheen that catches the natural light beautifully. Finished with piped contrast edges and invisible YKK zippers.',
        details: [
            'Plush micro-velvet fabric with matte luster',
            'Concealed hidden zipper closure',
            '45 × 45 cm standard throw size',
            'Dry clean or spot clean recommended',
            'Set of 2 covers (pillow inserts available separately)'
        ],
        sizes: ['45×45 cm'],
        colors: ['#a9bd92', '#f4c9b4', '#e8d5b0', '#c4a882'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 6,
        name: 'Embroidered Table Runner',
        cat: 'accessories',
        price: 1899,
        old: null,
        badge: 'Handmade',
        rating: 4.7,
        reviews: 64,
        sold: 187,
        images: [
            'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80',
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80'
        ],
        desc: 'Hand-embroidered table runner to add elegance to your dining space or console.',
        longDesc: 'A delicate hand-embroidered runner that instantly elevates any dining setting or console table. Handcrafted on natural undyed flax linen with artisanal threads.',
        details: [
            'Hand-embroidered pure natural linen',
            '180 × 35 cm generous runner length',
            'Mitered corners and tailored hemstitch',
            'Hand wash cold, line dry in shade',
            'Artisanally crafted in India'
        ],
        sizes: ['180×35 cm'],
        colors: ['#e8d5b0', '#a9bd92'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 7,
        name: 'Quilted Throw Blanket',
        cat: 'accessories',
        price: 3999,
        old: 4999,
        badge: 'Sale',
        rating: 4.9,
        reviews: 203,
        sold: 521,
        images: [
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80'
        ],
        desc: 'Cozy quilted throw blanket, perfect for chilly evenings or layered at the foot of your bed.',
        longDesc: 'Our quilted throw is the ultimate cozy companion. Lightweight yet wonderfully warming, featuring subtle diamond channel quilting and rolled edges that drape with elegance.',
        details: [
            'Quilted brushed cotton with microfiber loft fill',
            '130 × 170 cm cozy throw dimension',
            'Reversible two-tone design',
            'Machine washable, tumble dry gentle',
            'Fade-resistant & pre-washed for softness'
        ],
        sizes: ['130×170 cm'],
        colors: ['#e8d5b0', '#a9bd92', '#c4a882'],
        delivery: 'Free delivery in 3–5 working days'
    },
    {
        id: 8,
        name: 'Luxury Turkish Bath Towel Set (4 Pc.)',
        cat: 'accessories',
        price: 3299,
        old: null,
        badge: 'New',
        rating: 4.8,
        reviews: 98,
        sold: 276,
        images: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80',
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1200&q=80'
        ],
        desc: 'Premium long-staple cotton bath towel set, ultra-plush, absorbent, and quick-drying.',
        longDesc: 'Woven from 100% premium Aegean Turkish cotton at 600 GSM. These towels are intensely plush, fast-absorbing, and become noticeably softer with every wash.',
        details: [
            '100% Long-Staple Turkish Cotton',
            'Heavyweight 600 GSM high-density loop weave',
            'Double-stitched reinforced side hems',
            'Machine washable warm, low tumble dry',
            'Set includes: 2 large bath towels + 2 hand towels'
        ],
        sizes: ['Standard 4-Piece Set'],
        colors: ['#fdfbf7', '#e8d5b0', '#a9bd92'],
        delivery: 'Free delivery in 3–5 working days'
    }
];

/* ═══════════ STATE MANAGEMENT ═══════════ */
const CART_KEY = 'ph_cart_v5';
const WISH_KEY = 'ph_wish_v5';

let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
let wishlist = JSON.parse(localStorage.getItem(WISH_KEY)) || [];

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateBadges();
}

function saveWishlist() {
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    updateBadges();
}

function updateBadges() {
    const totalCartQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const totalWishCount = wishlist.length;

    document.querySelectorAll('[data-cart-count], #cartCount').forEach(el => {
        el.textContent = totalCartQty;
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 400);
    });

    document.querySelectorAll('[data-wish-count], #wishCount').forEach(el => {
        el.textContent = totalWishCount;
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 400);
    });
}

/* ═══════════ PATH RESOLUTION ═══════════ */
function isSubPage() {
    const p = (window.location.pathname || '').toLowerCase();
    return p.includes('/pages/') || p.includes('\\pages\\') || p.endsWith('/pages') || p.endsWith('\\pages');
}

function getUrl(path) {
    const sub = isSubPage();
    if (path === 'index' || path === 'home') return sub ? '../index.html' : 'index.html';
    if (path === 'shop') return sub ? 'shop.html' : 'pages/shop.html';
    if (path === 'product') return sub ? 'product.html' : 'pages/product.html';
    if (path === 'cart') return sub ? 'cart.html' : 'pages/cart.html';
    if (path === 'about') return sub ? 'about.html' : 'pages/about.html';
    if (path === 'contact') return sub ? 'contact.html' : 'pages/contact.html';
    return path;
}

/* ═══════════ TOAST NOTIFICATION ═══════════ */
let toastTimer = null;
function showToast(msg, iconName = 'check-circle') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'fixed bottom-8 right-6 z-[99999] translate-y-24 opacity-0 transition-all duration-400 pointer-events-none';
        toast.innerHTML = `
      <div class="bg-ink-900 text-cream-100 px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium border border-sage-700/40">
        <i data-lucide="${iconName}" class="w-5 h-5 text-sage-300 shrink-0"></i>
        <span id="toastMsg">${msg}</span>
      </div>
    `;
        document.body.appendChild(toast);
    } else {
        document.getElementById('toastMsg').textContent = msg;
    }

    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    if (window.lucide) lucide.createIcons();

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 2800);
}

/* ═══════════ CART ACTIONS ═══════════ */
function addToCart(id, qty = 1, size = null, color = null) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const itemSize = size || (p.sizes ? p.sizes[0] : 'Standard');
    const itemColor = color || (p.colors ? p.colors[0] : null);

    const existing = cart.find(x => x.id === id && x.size === itemSize && x.color === itemColor);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id, qty, size: itemSize, color: itemColor });
    }

    saveCart();
    showToast(`${p.name.split('–')[0].trim()} added to cart`);

    // If on cart page, re-render
    if (document.getElementById('cartLayout') || document.body.dataset.page === 'cart') {
        renderCartPage();
    }
}

function removeFromCart(id, size = null, color = null) {
    cart = cart.filter(x => !(x.id === id && (size === null || x.size === size) && (color === null || x.color === color)));
    saveCart();
    showToast('Item removed from cart');
    renderCartPage();
}

function updateCartItemQty(id, size, color, delta) {
    const item = cart.find(x => x.id === id && x.size === size && x.color === color);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id, size, color);
    } else {
        saveCart();
        renderCartPage();
    }
}

/* ═══════════ WISHLIST ACTIONS ═══════════ */
function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(id);
        showToast('Saved to wishlist ❤');
    }
    saveWishlist();

    // Update heart icons on page
    document.querySelectorAll(`[data-wish-btn="${id}"] i`).forEach(icon => {
        const isWished = wishlist.includes(id);
        icon.className = `w-4 h-4 ${isWished ? 'text-terra-500 fill-terra-500' : 'text-ink-800'}`;
    });

    if (document.getElementById('wishlistGrid')) {
        renderWishlistPage();
    }
}

/* ═══════════ LIGHTBOX MODAL (Swiper-based) ═══════════ */
let lbImages = [];
let lbIndex = 0;
let lbProductId = null;
let lbSwiperInstance = null;

function ensureLightboxExists() {
    if (document.getElementById('lightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'fixed inset-0 z-[200] hidden';
    lb.innerHTML = `
    <!-- Backdrop -->
    <div id="lbBackdrop" class="absolute inset-0 bg-ink-900/92 backdrop-blur-sm" onclick="closeLightbox()"></div>

    <!-- Modal wrapper -->
    <div class="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">

      <!-- Close button -->
      <button onclick="closeLightbox()" class="pointer-events-auto absolute top-4 right-4 sm:top-5 sm:right-5 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105 border border-white/20" aria-label="Close">
        <i data-lucide="x" class="w-5 h-5 text-white"></i>
      </button>

      <!-- Counter badge -->
      <div id="lbCounter" class="pointer-events-auto absolute top-4 left-4 sm:top-5 sm:left-5 z-10 bg-black/40 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">
        1 / 1
      </div>

      <!-- Main Swiper -->
      <div class="swiper lbMainSwiper pointer-events-auto w-full" style="max-height:75vh; max-width:860px; padding: 0 52px;">
        <div class="swiper-wrapper">
          <!-- slides injected dynamically -->
        </div>
        <div class="swiper-button-next !text-white !w-10 !h-10 !bg-white/10 !backdrop-blur !rounded-full !border !border-white/20 hover:!bg-white/20 after:!text-sm !right-0 sm:!right-1"></div>
        <div class="swiper-button-prev !text-white !w-10 !h-10 !bg-white/10 !backdrop-blur !rounded-full !border !border-white/20 hover:!bg-white/20 after:!text-sm !left-0 sm:!left-1"></div>
      </div>

      <!-- Thumbnail strip -->
      <div class="swiper lbThumbSwiper pointer-events-auto mt-4" style="max-width:480px; width:100%; padding:0 4px;">
        <div class="swiper-wrapper flex items-center justify-center"></div>
      </div>

      <!-- Product info bar -->
      <div id="lbInfoBar" class="pointer-events-auto mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4 bg-white/8 backdrop-blur border border-white/15 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3">
        <div class="min-w-0">
          <div id="lbProductName" class="text-white font-semibold text-sm sm:text-base truncate max-w-[220px] sm:max-w-[360px]"></div>
          <div id="lbProductPrice" class="text-sage-300 text-xs sm:text-sm font-medium mt-0.5"></div>
        </div>
        <a id="lbViewBtn" href="#" class="shrink-0 bg-white text-ink-900 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-cream-100 transition-all flex items-center gap-1.5 active:scale-95">
          View Product <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;
    document.body.appendChild(lb);

    // Keyboard navigation
    lb.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' && lbSwiperInstance) lbSwiperInstance.slidePrev();
        if (e.key === 'ArrowRight' && lbSwiperInstance) lbSwiperInstance.slideNext();
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(productId, index = 0) {
    ensureLightboxExists();
    const p = products.find(x => x.id === productId);
    if (!p) return;
    lbProductId = productId;
    lbImages = p.images || [p.image];
    lbIndex = index;

    // Inject slides into main swiper wrapper
    const mainWrapper = document.querySelector('.lbMainSwiper .swiper-wrapper');
    const thumbWrapper = document.querySelector('.lbThumbSwiper .swiper-wrapper');
    if (mainWrapper) {
        mainWrapper.innerHTML = lbImages
            .map(
                (img, i) => `
      <div class="swiper-slide flex items-center justify-center">
        <img src="${img}" alt="${p.name} image ${i + 1}"
          class="w-full h-full object-contain rounded-xl sm:rounded-2xl select-none"
          style="max-height:72vh; max-width:100%;">
      </div>
    `
            )
            .join('');
    }
    if (thumbWrapper) {
        thumbWrapper.innerHTML = lbImages
            .map(
                (img, i) => `
      <div class="swiper-slide !w-14 sm:!w-16 cursor-pointer">
        <div class="lb-thumb w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 ${i === index ? 'border-white' : 'border-white/20'} transition-all hover:border-white/60">
          <img src="${img}" alt="thumb ${i + 1}" class="w-full h-full object-cover">
        </div>
      </div>
    `
            )
            .join('');
    }

    // Destroy old swiper instances
    if (lbSwiperInstance) {
        try {
            lbSwiperInstance.destroy(true, true);
        } catch (e) {}
        lbSwiperInstance = null;
    }

    // Product info
    const nameEl = document.getElementById('lbProductName');
    const priceEl = document.getElementById('lbProductPrice');
    const viewBtn = document.getElementById('lbViewBtn');
    const counter = document.getElementById('lbCounter');
    if (nameEl) nameEl.textContent = p.name;
    if (priceEl) priceEl.textContent = `Rs. ${p.price.toLocaleString()}`;
    if (viewBtn) viewBtn.href = `${getUrl('product')}?id=${p.id}`;

    // Show modal
    const lb = document.getElementById('lightbox');
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();

    // Init Swiper after DOM paint
    setTimeout(() => {
        if (typeof Swiper === 'undefined') return;

        // Thumb swiper (no loop for thumbs)
        const thumbSwiper = new Swiper('.lbThumbSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 8,
            centeredSlides: true,
            watchSlidesProgress: true,
            freeMode: true
        });

        // Main swiper with fade effect + thumbnail sync
        lbSwiperInstance = new Swiper('.lbMainSwiper', {
            initialSlide: index,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 380,
            loop: lbImages.length > 1,
            navigation: {
                nextEl: '.lbMainSwiper .swiper-button-next',
                prevEl: '.lbMainSwiper .swiper-button-prev'
            },
            thumbs: { swiper: thumbSwiper },
            keyboard: { enabled: true },
            on: {
                slideChange(sw) {
                    lbIndex = sw.realIndex;
                    if (counter) counter.textContent = `${sw.realIndex + 1} / ${lbImages.length}`;
                    // Update thumb border
                    document.querySelectorAll('.lb-thumb').forEach((t, i) => {
                        t.classList.toggle('border-white', i === sw.realIndex);
                        t.classList.toggle('border-white/20', i !== sw.realIndex);
                    });
                }
            }
        });
        if (counter) counter.textContent = `${index + 1} / ${lbImages.length}`;
    }, 60);
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.classList.add('hidden');
        lb.classList.remove('flex');
    }
    if (lbSwiperInstance) {
        try {
            lbSwiperInstance.destroy(true, true);
        } catch (e) {}
        lbSwiperInstance = null;
    }
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('flex')) {
        if (e.key === 'ArrowLeft' && lbSwiperInstance) lbSwiperInstance.slidePrev();
        if (e.key === 'ArrowRight' && lbSwiperInstance) lbSwiperInstance.slideNext();
        if (e.key === 'Escape') closeLightbox();
    }
    if (e.key === 'Escape') {
        closeSearch();
    }
});

/* ═══════════ LIVE SEARCH OVERLAY ═══════════ */
function ensureSearchOverlayExists() {
    if (document.getElementById('searchOverlay')) return;
    const ov = document.createElement('div');
    ov.id = 'searchOverlay';
    ov.className = 'fixed inset-0 z-[100] bg-ink-900/60 backdrop-blur-md hidden items-start justify-center pt-20 px-4';
    ov.innerHTML = `
    <div class="w-full max-w-2xl bg-cream-50 rounded-[28px] shadow-2xl overflow-hidden border border-sage-100 animate-fade-up">
      <div class="flex items-center gap-3 px-6 py-4.5 border-b border-sage-100">
        <i data-lucide="search" class="w-5 h-5 text-sage-600"></i>
        <input id="searchInput" type="text" placeholder="Search bedding sets, cushions, throws, towels..."
          class="flex-1 bg-transparent outline-none text-base placeholder-ink-800/40 font-medium py-1">
        <button onclick="closeSearch()" class="p-2 hover:bg-sage-100 rounded-full transition" aria-label="Close search">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div id="searchResults" class="max-h-96 overflow-y-auto p-3.5 divide-y divide-sage-100"></div>
    </div>
  `;
    document.body.appendChild(ov);

    ov.addEventListener('click', e => {
        if (e.target.id === 'searchOverlay') closeSearch();
    });

    const input = document.getElementById('searchInput');
    input.addEventListener('input', e => renderSearchResults(e.target.value));
}

function openSearch() {
    ensureSearchOverlayExists();
    const ov = document.getElementById('searchOverlay');
    ov.classList.remove('hidden');
    ov.classList.add('flex');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const inp = document.getElementById('searchInput');
        if (inp) inp.focus();
        renderSearchResults('');
    }, 80);
}

function closeSearch() {
    const ov = document.getElementById('searchOverlay');
    if (ov) {
        ov.classList.add('hidden');
        ov.classList.remove('flex');
        const inp = document.getElementById('searchInput');
        if (inp) inp.value = '';
        document.body.style.overflow = '';
    }
}

function renderSearchResults(q) {
    const box = document.getElementById('searchResults');
    if (!box) return;
    const query = q.toLowerCase().trim();
    const results = query ? products.filter(p => p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)) : products.slice(0, 4);

    if (results.length === 0) {
        box.innerHTML = `<div class="py-12 text-center text-ink-800/50 text-sm">No products found matching "${q}"</div>`;
        return;
    }

    const productUrl = getUrl('product');

    box.innerHTML = results
        .map(
            p => `
    <a href="${productUrl}?id=${p.id}" class="flex items-center gap-4 p-3 rounded-2xl hover:bg-white cursor-pointer transition">
      <div class="w-14 h-14 rounded-xl overflow-hidden bg-sage-100 shrink-0">
        <img src="${p.images[0]}" class="w-full h-full object-cover" alt="${p.name}">
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-medium truncate text-ink-800">${p.name}</div>
        <div class="text-xs text-sage-600 font-semibold mt-0.5">Rs. ${p.price.toLocaleString()}</div>
      </div>
      <i data-lucide="arrow-right" class="w-4 h-4 text-ink-800/40"></i>
    </a>
  `
        )
        .join('');

    if (window.lucide) lucide.createIcons();
}

/* ═══════════ MOBILE MENU TOGGLE ═══════════ */
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/* ═══════════ PRODUCT CARD HTML GENERATOR ═══════════ */
function generateProductCardHTML(p) {
    const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const isWished = wishlist.includes(p.id);
    const secondaryImg = p.images && p.images[1] ? p.images[1] : p.images[0];
    const colorDots = (p.colors || [])
        .slice(0, 4)
        .map(
            c => `
    <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white shadow-xs shrink-0" style="background:${c}"></span>
  `
        )
        .join('');

    const productUrl = `${getUrl('product')}?id=${p.id}`;

    return `
    <div class="group bg-white rounded-2xl sm:rounded-[22px] overflow-hidden border border-sage-100 hover:border-sage-300 transition-all duration-500 hover:shadow-xl hover:shadow-ink-900/6 hover:-translate-y-1 reveal flex flex-col">
      <div class="card-img-wrap aspect-[4/5] bg-sage-100 relative overflow-hidden">

        <!-- Image area — click to open lightbox -->
        <button onclick="openLightbox(${p.id}, 0)" class="block w-full h-full absolute inset-0 z-[1] cursor-zoom-in" aria-label="Preview ${p.name}" tabindex="-1">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" class="card-img-primary pointer-events-none">
          <img src="${secondaryImg}" alt="${p.name}" loading="lazy" class="card-img-secondary pointer-events-none">
        </button>

        ${
            p.badge
                ? `
          <span class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 ${p.badge === 'Sale' ? 'bg-terra-500' : 'bg-sage-800'} text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-md pointer-events-none">
            ${discount ? `-${discount}%` : p.badge}
          </span>
        `
                : ''
        }

        <button onclick="toggleWishlist(${p.id})" data-wish-btn="${p.id}"
          class="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center hover:bg-white transition-all shadow-sm hover:scale-110"
          title="Save to wishlist" aria-label="Save to wishlist">
          <i data-lucide="heart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWished ? 'text-terra-500 fill-terra-500' : 'text-ink-800'}"></i>
        </button>

        <!-- Expand icon hint (desktop hover) -->
        <div class="hidden sm:flex absolute bottom-12 right-3 z-10 items-center gap-1.5 bg-black/50 backdrop-blur text-white text-[10px] font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <i data-lucide="zoom-in" class="w-3 h-3"></i> Click to preview
        </div>

        <button onclick="addToCart(${p.id})"
          class="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 bg-sage-800 text-cream-100 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-sage-700 shadow-lg"
          aria-label="Quick add to cart">
          <i data-lucide="shopping-bag" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i> Quick add
        </button>
      </div>

      <div class="p-3 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1">
        <div>
          <div class="flex items-center gap-1 sm:gap-1.5 mb-1.5 text-[10px] sm:text-[11px]">
            <span class="text-gold-500 tracking-tight">★★★★★</span>
            <span class="text-ink-800/60 font-semibold">${p.rating}</span>
            <span class="text-ink-800/40 hidden sm:inline font-normal">(${p.reviews})</span>
            ${p.sold ? `<span class="text-[10px] text-ink-800/40 ml-auto font-medium hidden md:inline">${p.sold}+ sold</span>` : ''}
          </div>

          <h3 class="text-xs sm:text-[13px] lg:text-sm font-medium leading-snug mb-2 min-h-[32px] sm:min-h-[38px] line-clamp-2">
            <a href="${productUrl}" class="hover:text-sage-700 transition-colors">${p.name}</a>
          </h3>

          <div class="flex items-center gap-1 mb-2.5">${colorDots}</div>
        </div>

        <div>
          <div class="flex items-baseline flex-wrap gap-1.5 sm:gap-2">
            <span class="text-sm sm:text-base lg:text-[17px] font-bold text-ink-900 tracking-tight">Rs. ${p.price.toLocaleString()}</span>
            ${p.old ? `<span class="text-[11px] sm:text-xs text-ink-800/40 line-through font-normal">Rs. ${p.old.toLocaleString()}</span>` : ''}
          </div>

          <div class="flex items-center gap-1 sm:gap-1.5 mt-2 sm:mt-2.5 text-[10px] sm:text-[11px] text-sage-700 font-medium">
            <i data-lucide="truck" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 text-sage-600"></i>
            <span class="truncate">${p.delivery}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════ SCROLL REVEALS ═══════════ */
function observeReveals() {
    const io = new IntersectionObserver(
        entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        },
        { threshold: 0.01, rootMargin: '50px' }
    );

    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* ═══════════ HERO SLIDER INIT ═══════════ */
let heroSwiperInstance = null;
function initHeroSwiper() {
    const el = document.querySelector('.hero-slider');
    if (!el || !window.Swiper) return;

    if (heroSwiperInstance) heroSwiperInstance.destroy(true, true);
    heroSwiperInstance = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 900,
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.hero-nav-next',
            prevEl: '.hero-nav-prev'
        }
    });
}

/* ═══════════ PAGE: HOME ═══════════ */
function initHomePage() {
    const homeGrid = document.getElementById('homeGrid');
    const homeAccessories = document.getElementById('homeAccessories');

    if (homeGrid) {
        const beddingItems = products.filter(p => p.cat === 'bedding').slice(0, 4);
        homeGrid.innerHTML = beddingItems.map(generateProductCardHTML).join('');
    }

    if (homeAccessories) {
        const accessoryItems = products.filter(p => p.cat === 'accessories').slice(0, 4);
        homeAccessories.innerHTML = accessoryItems.map(generateProductCardHTML).join('');
    }

    initHeroSwiper();
    initLuxury3DShowroom();
    if (window.lucide) lucide.createIcons();
}

/* ═════════════════════════════════════════════════════
   LUXURY 3D ATELIER SHOWROOM — REAL-TIME 3D SCROLL & TILT
   ═════════════════════════════════════════════════════ */

let current3DModel = 'bed';
let is3DSpinning = false;
let mouseTiltX = 0;
let mouseTiltY = 0;
let targetMouseTiltX = 0;
let targetMouseTiltY = 0;

const modelData = {
    bed: {
        img: 'assets/images/luxury_bed.jpg',
        watermark: 'BEDDING',
        pins: [
            { title: '400TC Egyptian Cotton', sub: 'Heirloom emerald velvet & linen duvet layer' },
            { title: 'Brushed Gold Brass Frame', sub: 'Hand-welded architectural tapered legs' },
            { title: 'Hand-Quilted Geometry', sub: 'Plush diamond stitching with cloud loft' }
        ],
        stats: [
            { val: '400 TC', label: 'Long-Staple Sateen' },
            { val: '100% Hand', label: 'Artisan Needlework' },
            { val: 'Custom', label: 'Bespoke Fit Sizes' },
            { val: 'Free Trial', label: '30-Night Slumber' }
        ]
    },
    sofa: {
        img: 'assets/images/luxury_sofa.jpg',
        watermark: 'SALON',
        pins: [
            { title: 'Italian Emerald Velvet', sub: 'Double-rub tested 50,000 cycle upholstery' },
            { title: 'Solid Teak & Cast Brass', sub: 'Artisan cast brass legs with satin brush' },
            { title: 'Pocket Springs & Down', sub: 'High-resilience foam core with feather topper' }
        ],
        stats: [
            { val: '92 Inch', label: 'Three-Seater Depth' },
            { val: '50K Rubs', label: 'Heavy Domestic Grade' },
            { val: 'Kiln-Dried', label: 'Solid Teak Internal Frame' },
            { val: '10 Years', label: 'Structural Craft Warranty' }
        ]
    }
};

function initLuxury3DShowroom() {
    const section = document.getElementById('luxury3dShowroom');
    const rig = document.getElementById('furnitureRig');
    const shadow = document.getElementById('pedestalContactShadow');
    const viewport = document.getElementById('stageViewport');
    const statusHud = document.getElementById('scrollPhysicsStatus');

    if (!section || !rig) return;

    // Smooth Lerp Variables
    let currentY = -220;
    let currentRotX = 35;
    let currentRotY = -50;
    let currentRotZ = -14;
    let currentScale = 0.75;
    let currentShadowOpacity = 0.2;
    let currentShadowScale = 0.55;

    // Target Variables calculated from Scroll
    let targetY = -220;
    let targetRotX = 35;
    let targetRotY = -50;
    let targetRotZ = -14;
    let targetScale = 0.75;
    let targetShadowOpacity = 0.2;
    let targetShadowScale = 0.55;

    // ── Mouse & Touch Tilt Listeners on the 3D Stage ──
    if (viewport) {
        const handlePointerMove = (clientX, clientY) => {
            const rect = viewport.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const normX = (clientX - centerX) / (rect.width / 2);
            const normY = (clientY - centerY) / (rect.height / 2);

            targetMouseTiltY = Math.max(-1, Math.min(1, normX)) * 22; // rotate around Y
            targetMouseTiltX = -Math.max(-1, Math.min(1, normY)) * 16; // tilt around X
        };

        viewport.addEventListener('mousemove', e => handlePointerMove(e.clientX, e.clientY));
        viewport.addEventListener('mouseleave', () => {
            targetMouseTiltX = 0;
            targetMouseTiltY = 0;
        });

        viewport.addEventListener(
            'touchmove',
            e => {
                if (e.touches && e.touches[0]) {
                    handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
                }
            },
            { passive: true }
        );

        viewport.addEventListener('touchend', () => {
            targetMouseTiltX = 0;
            targetMouseTiltY = 0;
        });
    }

    // ── Scroll Tracking & Real-Time 3D Physics Loop ──
    function updateScrollTargets() {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;

        // Progress: 0 when top enters viewport, 0.5 at center, 1 when leaves top
        const totalDist = vh + rect.height;
        const currentDist = vh - rect.top;
        const progress = Math.max(0, Math.min(1, currentDist / totalDist));

        if (progress <= 0.18) {
            // High above in the air, rotated and tumbling
            targetY = -220;
            targetRotX = 36;
            targetRotY = -52;
            targetRotZ = -15;
            targetScale = 0.72;
            targetShadowOpacity = 0.15;
            targetShadowScale = 0.5;
            if (statusHud) statusHud.textContent = '✦ Scroll to tumble in 3D';
        } else if (progress < 0.54) {
            // Actively falling, spinning, and settling into center!
            const norm = (progress - 0.18) / (0.54 - 0.18);
            // Smooth ease-out curve
            const ease = 1 - Math.pow(1 - norm, 2.5);

            targetY = -220 * (1 - ease);
            targetRotX = 36 - (36 - 7) * ease;
            targetRotY = -52 * (1 - ease);
            targetRotZ = -15 * (1 - ease);
            targetScale = 0.72 + 0.28 * ease;
            targetShadowOpacity = 0.15 + 0.75 * ease;
            targetShadowScale = 0.5 + 0.5 * ease;
            if (statusHud) statusHud.textContent = '✦ Descending & landing on stage...';
        } else {
            // Settled on pedestal — gentle continuous 3D camera pan as user scrolls past
            const pastNorm = Math.min(1, (progress - 0.54) / 0.46);
            targetY = pastNorm * 40;
            targetRotX = 7 + pastNorm * 12;
            targetRotY = pastNorm * 28;
            targetRotZ = pastNorm * 5;
            targetScale = 1.0 - pastNorm * 0.08;
            targetShadowOpacity = 0.9 - pastNorm * 0.3;
            targetShadowScale = 1.0;
            if (statusHud) statusHud.textContent = '✦ Centered on Atelier Stage';
        }
    }

    // ── Continuous Animation Frame (Smooth Lerping) ──
    function renderPhysics() {
        updateScrollTargets();

        // Smoothly interpolate mouse tilt
        mouseTiltX += (targetMouseTiltX - mouseTiltX) * 0.08;
        mouseTiltY += (targetMouseTiltY - mouseTiltY) * 0.08;

        if (!is3DSpinning && !rig.classList.contains('is-flipping')) {
            // Smoothly interpolate transforms
            currentY += (targetY - currentY) * 0.1;
            currentRotX += (targetRotX - currentRotX) * 0.1;
            currentRotY += (targetRotY - currentRotY) * 0.1;
            currentRotZ += (targetRotZ - currentRotZ) * 0.1;
            currentScale += (targetScale - currentScale) * 0.1;
            currentShadowOpacity += (targetShadowOpacity - currentShadowOpacity) * 0.1;
            currentShadowScale += (targetShadowScale - currentShadowScale) * 0.1;

            const finalRotX = currentRotX + mouseTiltX;
            const finalRotY = currentRotY + mouseTiltY;
            const finalRotZ = currentRotZ;

            rig.style.transform = `translateY(${currentY.toFixed(1)}px) rotateX(${finalRotX.toFixed(2)}deg) rotateY(${finalRotY.toFixed(2)}deg) rotateZ(${finalRotZ.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;

            if (shadow) {
                shadow.style.opacity = currentShadowOpacity.toFixed(2);
                shadow.style.transform = `scaleY(0.7) scale(${currentShadowScale.toFixed(3)})`;
            }
        }

        requestAnimationFrame(renderPhysics);
    }

    window.addEventListener('scroll', updateScrollTargets, { passive: true });
    renderPhysics();
}

/* ── Switch between Bed and Sofa with 3D Flip ── */
function switch3DModel(type) {
    if (current3DModel === type || is3DSpinning) return;
    current3DModel = type;

    const btnBed = document.getElementById('btnModelBed');
    const btnSofa = document.getElementById('btnModelSofa');
    const rig = document.getElementById('furnitureRig');
    const img = document.getElementById('furniture3dImg');
    const watermark = document.getElementById('showroomWatermark');

    // Toggle button active states
    if (btnBed && btnSofa) {
        btnBed.classList.toggle('active', type === 'bed');
        btnSofa.classList.toggle('active', type === 'sofa');
    }

    const data = modelData[type];
    if (!data || !rig || !img) return;

    // Trigger 3D flip card animation
    rig.classList.remove('is-spinning');
    rig.classList.add('is-flipping');

    // Halfway through flip (at 90 degrees), swap content
    setTimeout(() => {
        img.src = data.img;
        if (watermark) watermark.textContent = data.watermark;

        // Update Pins
        data.pins.forEach((p, idx) => {
            const titleEl = document.getElementById(`pinTitle${idx + 1}`);
            const subEl = document.getElementById(`pinSub${idx + 1}`);
            if (titleEl) titleEl.textContent = p.title;
            if (subEl) subEl.textContent = p.sub;
        });

        // Update Stats
        data.stats.forEach((s, idx) => {
            const valEl = document.getElementById(`statVal${idx + 1}`);
            const lblEl = document.getElementById(`statLabel${idx + 1}`);
            if (valEl) valEl.textContent = s.val;
            if (lblEl) lblEl.textContent = s.label;
        });

        if (window.lucide) lucide.createIcons();
        showToast(`Viewing 3D ${type === 'bed' ? 'Heirloom King Bed' : 'Velvet Salon Sofa'}`, 'sparkles');
    }, 380);

    setTimeout(() => {
        rig.classList.remove('is-flipping');
    }, 780);
}

/* ── Trigger 360° Continuous Spin ── */
function trigger360Spin() {
    const rig = document.getElementById('furnitureRig');
    if (!rig || is3DSpinning) return;

    is3DSpinning = true;
    rig.classList.remove('is-flipping');
    rig.classList.add('is-spinning');
    showToast('Rotating 360° ✦ Interactive 3D Orbit', 'rotate-3d');

    setTimeout(() => {
        rig.classList.remove('is-spinning');
        is3DSpinning = false;
    }, 2400);
}

/* ── Toggle Hotspot Tooltip on Mobile Tap ── */
function toggleHotspotTip(index) {
    const pin = document.getElementById(`hotspotPin${index}`);
    if (pin) {
        const isAct = pin.classList.contains('active');
        document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('active'));
        if (!isAct) pin.classList.add('active');
    }
}

/* ═══════════ PAGE: SHOP — ADVANCED SIDEBAR & MOBILE DRAWER ═══════════ */
const availableColors = [
    { hex: '#e8d5b0', name: 'Sand Cream' },
    { hex: '#a9bd92', name: 'Sage Green' },
    { hex: '#c4a882', name: 'Warm Camel' },
    { hex: '#7a8f5a', name: 'Olive Leaf' },
    { hex: '#f4c9b4', name: 'Blush Rose' },
    { hex: '#d4c8a8', name: 'Oatmeal' },
    { hex: '#b0a89a', name: 'Stone Ash' },
    { hex: '#fdfbf7', name: 'Pure Ivory' }
];

const availableSizes = ['Single', 'Double', 'Queen', 'King', '45×45 cm', '180×35 cm', '130×170 cm'];

let shopFilters = {
    category: 'all',
    maxPrice: 12000,
    colors: [],
    sizes: [],
    badges: [],
    search: '',
    sort: 'featured'
};

function initShopPage() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;

    // Check URL hash for category pre-selection
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['bedding', 'accessories', 'sale', 'new'].includes(hash)) {
        shopFilters.category = hash;
    }

    renderFilterControls();
    renderShopGrid();

    // Close drawer on clicking outside overlay
    const drawer = document.getElementById('mobileFilterDrawer');
    if (drawer) {
        drawer.addEventListener('click', e => {
            if (e.target.id === 'mobileFilterDrawer') closeFilterDrawer();
        });
    }
}

function renderFilterControls() {
    // 1. Render Colors for Desktop & Mobile
    const colorContainers = [document.getElementById('desktopColorSwatches'), document.getElementById('mobileColorSwatches')];

    colorContainers.forEach(container => {
        if (!container) return;
        container.innerHTML = availableColors
            .map(c => {
                const isActive = shopFilters.colors.includes(c.hex);
                return `
        <button type="button" onclick="toggleColorFilter('${c.hex}')" title="${c.name}"
          class="color-swatch-btn flex flex-col items-center gap-1.5 p-1 rounded-xl group transition hover:bg-sage-50 ${isActive ? 'active' : ''}">
          <div class="w-8 h-8 rounded-full border border-black/15 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105 relative" style="background:${c.hex}">
            ${isActive ? '<i data-lucide="check" class="w-4 h-4 text-white drop-shadow"></i>' : ''}
          </div>
          <span class="text-[9px] text-ink-800/70 font-medium truncate max-w-[55px] text-center">${c.name.split(' ')[0]}</span>
        </button>
      `;
            })
            .join('');
    });

    // 2. Render Sizes for Desktop & Mobile
    const sizeContainers = [document.getElementById('desktopSizePills'), document.getElementById('mobileSizePills')];

    sizeContainers.forEach(container => {
        if (!container) return;
        container.innerHTML = availableSizes
            .map(s => {
                const isActive = shopFilters.sizes.includes(s);
                return `
        <button type="button" onclick="toggleSizeFilter('${s}')"
          class="text-xs px-3 py-1.5 rounded-xl border transition ${isActive ? 'bg-sage-800 text-cream-100 border-sage-800 font-semibold shadow-xs' : 'bg-white border-sage-200 text-ink-800 hover:border-sage-400'}">
          ${s}
        </button>
      `;
            })
            .join('');
    });

    // 3. Update category active pills
    document.querySelectorAll('.cat-pill, .mobile-cat-pill').forEach(btn => {
        const cat = btn.dataset.cat;
        if (cat === shopFilters.category) {
            btn.className = btn.classList.contains('mobile-cat-pill')
                ? 'mobile-cat-pill text-xs py-2 px-3 rounded-xl border border-sage-800 font-semibold text-left bg-sage-800 text-cream-100'
                : 'cat-pill w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition text-left bg-sage-800 text-cream-100';
        } else {
            btn.className = btn.classList.contains('mobile-cat-pill')
                ? 'mobile-cat-pill text-xs py-2 px-3 rounded-xl border border-sage-200 font-medium text-left bg-white hover:bg-sage-50 text-ink-800'
                : 'cat-pill w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition text-left hover:bg-sage-50 text-ink-800';
        }
    });

    if (window.lucide) lucide.createIcons();
}

function setCategoryFilter(cat) {
    shopFilters.category = cat;
    renderFilterControls();
    renderShopGrid();
}

function handlePriceChange(val) {
    const price = parseInt(val, 10);
    shopFilters.maxPrice = price;

    const displays = [document.getElementById('desktopPriceDisplay'), document.getElementById('mobilePriceDisplay')];
    displays.forEach(d => {
        if (d) d.textContent = `Up to Rs. ${price.toLocaleString()}`;
    });

    const sliders = [document.getElementById('desktopPriceRange'), document.getElementById('mobilePriceRange')];
    sliders.forEach(s => {
        if (s && s.value != price) s.value = price;
    });

    renderShopGrid();
}

function toggleColorFilter(hex) {
    const idx = shopFilters.colors.indexOf(hex);
    if (idx > -1) {
        shopFilters.colors.splice(idx, 1);
    } else {
        shopFilters.colors.push(hex);
    }
    renderFilterControls();
    renderShopGrid();
}

function toggleSizeFilter(size) {
    const idx = shopFilters.sizes.indexOf(size);
    if (idx > -1) {
        shopFilters.sizes.splice(idx, 1);
    } else {
        shopFilters.sizes.push(size);
    }
    renderFilterControls();
    renderShopGrid();
}

function handleBadgeToggle(badge, isChecked) {
    const idx = shopFilters.badges.indexOf(badge);
    if (isChecked && idx === -1) {
        shopFilters.badges.push(badge);
    } else if (!isChecked && idx > -1) {
        shopFilters.badges.splice(idx, 1);
    }

    // Sync checkboxes in both desktop and mobile
    document.querySelectorAll(`input[type="checkbox"][value="${badge}"]`).forEach(cb => {
        cb.checked = isChecked;
    });

    renderShopGrid();
}

function handleSearchChange(query) {
    shopFilters.search = query.trim().toLowerCase();

    const inputs = [document.getElementById('desktopSearchInput'), document.getElementById('mobileSearchInput')];
    inputs.forEach(inp => {
        if (inp && inp.value !== query) inp.value = query;
    });

    renderShopGrid();
}

function handleSortChange(sortVal) {
    shopFilters.sort = sortVal;
    renderShopGrid();
}

function clearAllShopFilters() {
    shopFilters = {
        category: 'all',
        maxPrice: 12000,
        colors: [],
        sizes: [],
        badges: [],
        search: '',
        sort: 'featured'
    };

    const sliders = [document.getElementById('desktopPriceRange'), document.getElementById('mobilePriceRange')];
    sliders.forEach(s => {
        if (s) s.value = 12000;
    });

    const priceDisplays = [document.getElementById('desktopPriceDisplay'), document.getElementById('mobilePriceDisplay')];
    priceDisplays.forEach(d => {
        if (d) d.textContent = 'Up to Rs. 12,000';
    });

    const searchInps = [document.getElementById('desktopSearchInput'), document.getElementById('mobileSearchInput')];
    searchInps.forEach(i => {
        if (i) i.value = '';
    });

    document.querySelectorAll('#desktopBadgeList input, #mobileBadgeList input').forEach(cb => {
        cb.checked = false;
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'featured';

    renderFilterControls();
    renderShopGrid();
}

function removeFilterPill(type, value) {
    if (type === 'category') shopFilters.category = 'all';
    if (type === 'price') {
        shopFilters.maxPrice = 12000;
        handlePriceChange(12000);
        return;
    }
    if (type === 'color') toggleColorFilter(value);
    if (type === 'size') toggleSizeFilter(value);
    if (type === 'badge') handleBadgeToggle(value, false);
    if (type === 'search') handleSearchChange('');

    renderFilterControls();
    renderShopGrid();
}

/* ═══════════ RENDER ACTIVE FILTER PILLS ═══════════ */
function renderActiveFilterPills() {
    const container = document.getElementById('activeFilterPills');
    if (!container) return;

    const pills = [];

    // Category
    if (shopFilters.category !== 'all') {
        const catLabels = { bedding: 'Bedding Sets', accessories: 'Accessories', sale: 'On Sale', new: 'New In' };
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-sage-100 text-sage-900 px-3 py-1 rounded-full text-xs font-medium">
        Collection: ${catLabels[shopFilters.category] || shopFilters.category}
        <button onclick="removeFilterPill('category', '')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    }

    // Price
    if (shopFilters.maxPrice < 12000) {
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-sage-100 text-sage-900 px-3 py-1 rounded-full text-xs font-medium">
        Max: Rs. ${shopFilters.maxPrice.toLocaleString()}
        <button onclick="removeFilterPill('price', '')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    }

    // Colors
    shopFilters.colors.forEach(hex => {
        const colObj = availableColors.find(c => c.hex === hex) || { name: 'Color' };
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-white border border-sage-200 text-ink-900 px-3 py-1 rounded-full text-xs font-medium shadow-xs">
        <span class="w-2.5 h-2.5 rounded-full border border-black/10" style="background:${hex}"></span>
        ${colObj.name}
        <button onclick="removeFilterPill('color', '${hex}')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    });

    // Sizes
    shopFilters.sizes.forEach(size => {
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-white border border-sage-200 text-ink-900 px-3 py-1 rounded-full text-xs font-medium shadow-xs">
        Size: ${size}
        <button onclick="removeFilterPill('size', '${size}')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    });

    // Badges
    shopFilters.badges.forEach(b => {
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-terra-50 text-terra-800 border border-terra-200 px-3 py-1 rounded-full text-xs font-medium">
        Tag: ${b}
        <button onclick="removeFilterPill('badge', '${b}')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    });

    // Search
    if (shopFilters.search) {
        pills.push(`
      <span class="inline-flex items-center gap-1.5 bg-sage-100 text-sage-900 px-3 py-1 rounded-full text-xs font-medium">
        "${shopFilters.search}"
        <button onclick="removeFilterPill('search', '')" class="hover:text-terra-600 ml-0.5"><i data-lucide="x" class="w-3 h-3"></i></button>
      </span>
    `);
    }

    // Count active
    let totalActive =
        (shopFilters.category !== 'all' ? 1 : 0) +
        (shopFilters.maxPrice < 12000 ? 1 : 0) +
        shopFilters.colors.length +
        shopFilters.sizes.length +
        shopFilters.badges.length +
        (shopFilters.search ? 1 : 0);

    // Update mobile filter badge
    const mobileBadge = document.getElementById('mobileFilterBadge');
    if (mobileBadge) {
        if (totalActive > 0) {
            mobileBadge.textContent = totalActive;
            mobileBadge.classList.remove('hidden');
        } else {
            mobileBadge.classList.add('hidden');
        }
    }

    if (pills.length > 0) {
        container.classList.remove('hidden');
        container.innerHTML = `
      <div class="flex items-center gap-2 flex-wrap py-1">
        <span class="text-xs text-ink-800/60 font-semibold tracking-wide">Active Filters:</span>
        ${pills.join('')}
        <button onclick="clearAllShopFilters()" class="text-xs text-terra-500 font-semibold hover:underline ml-1">Clear all</button>
      </div>
    `;
    } else {
        container.classList.add('hidden');
        container.innerHTML = '';
    }

    if (window.lucide) lucide.createIcons();
}

/* ═══════════ RENDER SHOP GRID WITH FULL FILTERING ═══════════ */
function renderShopGrid() {
    const grid = document.getElementById('shopGrid');
    const empty = document.getElementById('shopEmpty');
    if (!grid) return;

    let list = [...products];

    // 1. Category
    if (shopFilters.category === 'bedding') list = list.filter(p => p.cat === 'bedding');
    if (shopFilters.category === 'accessories') list = list.filter(p => p.cat === 'accessories');
    if (shopFilters.category === 'sale') list = list.filter(p => Boolean(p.old));
    if (shopFilters.category === 'new') list = list.filter(p => p.badge === 'New');

    // 2. Max Price
    list = list.filter(p => p.price <= shopFilters.maxPrice);

    // 3. Colors (match ANY selected color)
    if (shopFilters.colors.length > 0) {
        list = list.filter(p => p.colors && p.colors.some(c => shopFilters.colors.includes(c)));
    }

    // 4. Sizes (match ANY selected size)
    if (shopFilters.sizes.length > 0) {
        list = list.filter(p => p.sizes && p.sizes.some(s => shopFilters.sizes.includes(s)));
    }

    // 5. Badges
    if (shopFilters.badges.length > 0) {
        list = list.filter(p => {
            return shopFilters.badges.some(b => {
                if (b === 'Sale') return Boolean(p.old) || p.badge === 'Sale';
                return p.badge === b;
            });
        });
    }

    // 6. Search
    if (shopFilters.search) {
        const q = shopFilters.search;
        list = list.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }

    // 7. Sort
    if (shopFilters.sort === 'low') list.sort((a, b) => a.price - b.price);
    if (shopFilters.sort === 'high') list.sort((a, b) => b.price - a.price);
    if (shopFilters.sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    // Update Dynamic Title
    const titles = {
        all: 'Bedding & Home Textiles',
        bedding: 'Bedding Sets & Quilts',
        accessories: 'Accessories & Decor',
        sale: 'Seasonal Special Offers',
        new: 'New In Atelier'
    };
    const titleEl = document.getElementById('shopTitle');
    if (titleEl && titles[shopFilters.category]) {
        titleEl.textContent = titles[shopFilters.category];
    }

    // Update Count
    const countEl = document.getElementById('resultsCount');
    if (countEl) {
        countEl.textContent = `Showing ${list.length} of ${products.length} pieces`;
    }

    // Render Active Filter Chips
    renderActiveFilterPills();

    // Populate Grid or Empty state
    if (list.length === 0) {
        grid.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
    } else {
        if (empty) empty.classList.add('hidden');
        grid.innerHTML = list.map(generateProductCardHTML).join('');
    }

    if (window.lucide) lucide.createIcons();
    observeReveals();
}

/* ═══════════ MOBILE FILTER DRAWER OPEN / CLOSE ═══════════ */
function openFilterDrawer() {
    const drawer = document.getElementById('mobileFilterDrawer');
    if (drawer) {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFilterDrawer() {
    const drawer = document.getElementById('mobileFilterDrawer');
    if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ═══════════ PAGE: PRODUCT DETAIL ═══════════ */
let productSwiperInstance = null;
let currentDetailQty = 1;
let selectedDetailSize = null;
let selectedDetailColor = null;

function initProductDetailPage() {
    const container = document.getElementById('productDetail');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'), 10) || 1;
    const p = products.find(x => x.id === id) || products[0];

    document.title = `${p.name} — PARADISE HOME`;

    selectedDetailSize = p.sizes[0];
    selectedDetailColor = p.colors[0];
    currentDetailQty = 1;

    const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const isWished = wishlist.includes(p.id);
    const ratingDist = [78, 16, 4, 1, 1];

    container.innerHTML = `
    <!-- ══ BREADCRUMB ══ -->
    <div class="mb-4 sm:mb-6 animate-fade-up">
      <nav class="flex items-center gap-2 text-[11px] text-ink-800/50 font-medium tracking-wide">
        <a href="${getUrl('index')}" class="hover:text-sage-700 transition-colors">Home</a>
        <span class="text-ink-800/25">/</span>
        <a href="${getUrl('shop')}" class="hover:text-sage-700 transition-colors">Shop</a>
        <span class="text-ink-800/25">/</span>
        <span class="text-ink-800/80 truncate max-w-[180px] sm:max-w-none">${p.name}</span>
      </nav>
    </div>

    <!-- ══ MAIN PRODUCT GRID ══ -->
    <div class="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-6 sm:gap-10 lg:gap-14 items-start">

      <!-- ════ IMAGE GALLERY ════ -->
      <div class="animate-fade-up" style="animation-delay:.05s">
        <!-- Mobile: full bleed, rounded only at bottom -->
        <div class="swiper productSwiper rounded-2xl sm:rounded-[28px] overflow-hidden bg-sage-100 relative shadow-lg aspect-square sm:aspect-auto">
          <div class="swiper-wrapper">
            ${p.images
                .map(
                    (img, i) => `
              <div class="swiper-slide cursor-zoom-in" onclick="openLightbox(${p.id}, ${i})">
                <div class="aspect-square">
                  <img src="${img}" alt="${p.name}" class="w-full h-full object-cover" loading="${i === 0 ? 'eager' : 'lazy'}">
                </div>
              </div>
            `
                )
                .join('')}
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next !text-ink-900 !w-10 !h-10 sm:!w-11 sm:!h-11 !bg-white/90 !backdrop-blur !rounded-full !shadow-md after:!text-sm !right-3 sm:!right-4"></div>
          <div class="swiper-button-prev !text-ink-900 !w-10 !h-10 sm:!w-11 sm:!h-11 !bg-white/90 !backdrop-blur !rounded-full !shadow-md after:!text-sm !left-3 sm:!left-4"></div>
          ${
              p.badge
                  ? `
            <span class="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 ${p.badge === 'Sale' ? 'bg-terra-500' : 'bg-sage-800'} text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md">
              ${discount ? `-${discount}% OFF` : p.badge}
            </span>
          `
                  : ''
          }
          <button onclick="openLightbox(${p.id}, 0)" class="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:scale-110 transition-transform" title="Fullscreen">
            <i data-lucide="expand" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ink-800"></i>
          </button>
        </div>
        <p class="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-ink-800/40 font-medium">
          <i data-lucide="zoom-in" class="w-3 h-3"></i> Tap image to view fullscreen
        </p>
      </div>

      <!-- ════ PRODUCT INFO ════ -->
      <div class="animate-fade-up" style="animation-delay:.12s">

        <!-- Rating bar -->
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <div class="flex items-center gap-1">
            <span class="text-gold-500 text-[13px] tracking-tight">★★★★★</span>
            <span class="text-xs font-bold text-ink-900 ml-0.5">${p.rating}</span>
          </div>
          <span class="w-1 h-1 rounded-full bg-ink-800/20"></span>
          <span class="text-xs text-ink-800/55">${p.reviews} reviews</span>
          <span class="w-1 h-1 rounded-full bg-ink-800/20"></span>
          <span class="text-xs text-ink-800/55">${p.sold}+ sold</span>
          ${p.badge ? `<span class="ml-auto bg-${p.badge === 'Sale' ? 'terra' : 'sage'}-100 text-${p.badge === 'Sale' ? 'terra' : 'sage'}-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">${p.badge}</span>` : ''}
        </div>

        <h1 class="font-display text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl font-semibold leading-tight mb-4 text-ink-900">${p.name}</h1>

        <!-- Pricing -->
        <div class="flex items-baseline gap-3 mb-5 flex-wrap">
          <span class="font-display text-2xl sm:text-3xl font-bold text-ink-900">Rs. ${p.price.toLocaleString()}</span>
          ${p.old ? `<span class="text-base sm:text-lg text-ink-800/40 line-through font-normal">Rs. ${p.old.toLocaleString()}</span>` : ''}
          ${discount ? `<span class="bg-terra-100 text-terra-700 text-xs font-bold px-3 py-1 rounded-full">SAVE ${discount}%</span>` : ''}
        </div>

        <!-- Short desc -->
        <p class="text-ink-800/75 leading-relaxed mb-3 text-sm sm:text-base">${p.desc}</p>
        <p class="text-ink-800/60 leading-relaxed mb-6 text-xs sm:text-sm">${p.longDesc}</p>

        <div class="space-y-5">
          <!-- Color selector -->
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900">Colour</span>
              <span class="text-xs text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full font-medium" id="colorLabel">Option 1</span>
            </div>
            <div class="flex gap-2.5 flex-wrap">
              ${p.colors
                  .map(
                      (c, i) => `
                <button onclick="selectProductColor(${i}, '${c}')"
                  class="color-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[2px] transition-all hover:scale-105 relative ${i === 0 ? 'border-sage-800 shadow-[0_0_0_3px_rgba(53,66,40,0.2)]' : 'border-white shadow-sm'}"
                  style="background:${c}" title="Colour ${i + 1}">
                  ${i === 0 ? '<span class="absolute inset-0 flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow"></i></span>' : ''}
                </button>
              `
                  )
                  .join('')}
            </div>
          </div>

          <!-- Size selector -->
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900">Size</span>
              <a href="#" class="text-xs text-sage-600 font-medium underline underline-offset-2">Size guide</a>
            </div>
            <div class="flex flex-wrap gap-2">
              ${p.sizes
                  .map(
                      (s, i) => `
                <button onclick="selectProductSize(${i}, '${s}')"
                  class="size-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[1.5px] ${i === 0 ? 'border-sage-800 bg-sage-800 text-cream-100 shadow-sm' : 'border-sage-200 bg-white hover:border-sage-400 text-ink-800'} text-xs sm:text-sm font-semibold transition-all">
                  ${s}
                </button>
              `
                  )
                  .join('')}
            </div>
          </div>

          <!-- Quantity -->
          <div class="flex items-center gap-4 sm:gap-5">
            <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900">Qty</span>
            <div class="flex items-center border-[1.5px] border-sage-200 rounded-full bg-white overflow-hidden shadow-xs">
              <button onclick="changeDetailQty(-1)" class="w-9 h-9 sm:w-10 sm:h-10 hover:bg-sage-100 transition-colors flex items-center justify-center"><i data-lucide="minus" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i></button>
              <span id="detailQty" class="w-10 sm:w-12 text-center font-bold text-sm">1</span>
              <button onclick="changeDetailQty(1)" class="w-9 h-9 sm:w-10 sm:h-10 hover:bg-sage-100 transition-colors flex items-center justify-center"><i data-lucide="plus" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i></button>
            </div>
            <span class="text-xs text-sage-700 font-semibold flex items-center gap-1 bg-sage-100 px-2.5 py-1 rounded-full">
              <i data-lucide="check" class="w-3 h-3"></i> In stock
            </span>
          </div>
        </div>

        <!-- CTA buttons (hidden on mobile — shown via sticky footer) -->
        <div class="hidden sm:flex flex-col gap-3 mt-7">
          <button onclick="addToCart(${p.id}, currentDetailQty, selectedDetailSize, selectedDetailColor)"
            class="w-full bg-sage-800 text-cream-100 py-4 rounded-2xl text-sm font-semibold hover:bg-sage-700 transition-all hover:shadow-xl hover:shadow-sage-800/20 flex items-center justify-center gap-2 active:scale-[.98]">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Bag
          </button>
          <button onclick="toggleWishlist(${p.id})" data-wish-btn="${p.id}"
            class="w-full py-3.5 rounded-2xl border-[1.5px] border-sage-200 bg-white hover:border-terra-300 hover:bg-terra-50 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-ink-800">
            <i data-lucide="heart" class="w-4 h-4 ${isWished ? 'text-terra-500 fill-terra-500' : ''}"></i> ${isWished ? 'Saved to Wishlist' : 'Save to Wishlist'}
          </button>
        </div>

        <!-- Mobile CTA — visible only on small screens via sticky bar below -->
        <div class="flex sm:hidden gap-3 mt-6">
          <button onclick="addToCart(${p.id}, currentDetailQty, selectedDetailSize, selectedDetailColor)"
            class="flex-1 bg-sage-800 text-cream-100 py-3.5 rounded-xl text-sm font-semibold hover:bg-sage-700 transition-all flex items-center justify-center gap-2 active:scale-[.98]">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Bag
          </button>
          <button onclick="toggleWishlist(${p.id})" data-wish-btn="${p.id}"
            class="w-12 h-12 rounded-xl border-[1.5px] border-sage-200 bg-white flex items-center justify-center hover:border-terra-400 transition active:scale-95">
            <i data-lucide="heart" class="w-4.5 h-4.5 ${isWished ? 'text-terra-500 fill-terra-500' : 'text-ink-800'}"></i>
          </button>
        </div>

        <!-- Delivery & trust -->
        <div class="mt-5 sm:mt-7 rounded-2xl border border-sage-100 bg-sage-50/60 overflow-hidden">
          <div class="flex items-center gap-3 p-3.5 sm:p-4 border-b border-sage-100/70">
            <div class="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-xs shrink-0">
              <i data-lucide="truck" class="w-4 h-4 text-sage-600"></i>
            </div>
            <div>
              <div class="text-xs sm:text-sm font-semibold text-ink-900">${p.delivery}</div>
              <div class="text-[11px] text-ink-800/50">30-day money-back guarantee</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 sm:p-4 border-b border-sage-100/70">
            <div class="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-xs shrink-0">
              <i data-lucide="shield-check" class="w-4 h-4 text-sage-600"></i>
            </div>
            <div>
              <div class="text-xs sm:text-sm font-semibold text-ink-900">Secure Payment</div>
              <div class="text-[11px] text-ink-800/50">256-bit SSL encryption on all orders</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 sm:p-4">
            <div class="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-xs shrink-0">
              <i data-lucide="package" class="w-4 h-4 text-sage-600"></i>
            </div>
            <div>
              <div class="text-xs sm:text-sm font-semibold text-ink-900">Luxury Gift Packaging</div>
              <div class="text-[11px] text-ink-800/50">Complimentary on every order</div>
            </div>
          </div>
        </div>

        <!-- Specifications -->
        <div class="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-sage-100">
          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-900 mb-3.5">Product Highlights</h3>
          <ul class="space-y-2">
            ${p.details
                .map(
                    d => `
              <li class="flex items-start gap-2.5 text-xs sm:text-sm text-ink-800/70 leading-relaxed">
                <span class="w-4 h-4 rounded-full bg-sage-100 flex items-center justify-center shrink-0 mt-0.5">
                  <i data-lucide="check" class="w-2.5 h-2.5 text-sage-700"></i>
                </span>
                ${d}
              </li>
            `
                )
                .join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- ══ REVIEWS SECTION ══ -->
    <div class="mt-14 sm:mt-20">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="font-display text-xl sm:text-2xl font-semibold text-ink-900">Customer Reviews</h2>
        <div class="flex items-center gap-1 bg-gold-400/10 border border-gold-400/30 px-2.5 py-1 rounded-full">
          <span class="text-gold-500 text-xs">★</span>
          <span class="text-xs font-bold text-ink-900">${p.rating}</span>
          <span class="text-[10px] text-ink-800/50">/ 5.0</span>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-5 sm:gap-8">
        <!-- Rating summary -->
        <div class="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-sage-100 shadow-xs">
          <div class="flex items-baseline gap-3 mb-5">
            <span class="font-display text-5xl font-bold text-ink-900">${p.rating}</span>
            <div>
              <div class="text-gold-500 text-sm leading-none mb-1">★★★★★</div>
              <div class="text-xs text-ink-800/55">${p.reviews} verified reviews</div>
            </div>
          </div>
          <div class="space-y-2">
            ${ratingDist
                .map(
                    (pct, i) => `
              <div class="flex items-center gap-2.5 text-xs">
                <span class="w-6 text-ink-800/60 font-medium shrink-0">${5 - i}★</span>
                <div class="rating-bar flex-1"><div style="width:${pct}%"></div></div>
                <span class="w-8 text-right text-ink-800/45 shrink-0">${pct}%</span>
              </div>
            `
                )
                .join('')}
          </div>
          <button onclick="showToast('Review submitted for verification!')" class="w-full mt-5 border-[1.5px] border-sage-200 text-ink-800 py-2.5 rounded-xl text-xs font-semibold hover:bg-sage-50 transition">
            + Write a Review
          </button>
        </div>

        <!-- Review cards -->
        <div class="lg:col-span-2 grid sm:grid-cols-1 gap-4">
          ${[
              {
                  name: 'Fatima A.',
                  img: 40,
                  date: '2 weeks ago',
                  text: 'Absolutely in love with this set! The fabric feels incredibly luxurious and the stitching is flawless. Transformed our master suite.',
                  stars: 5
              },
              { name: 'Bilal M.', img: 15, date: '1 month ago', text: 'Ordered as an anniversary gift and the packaging was just as stunning as the bedding itself. Worth every rupee.', stars: 5 },
              {
                  name: 'Zara H.',
                  img: 44,
                  date: '2 months ago',
                  text: 'Breathable and keeps us cool through humid nights. Pillow covers fit our memory foam pillows nicely. Highly recommended.',
                  stars: 5
              }
          ]
              .map(
                  r => `
            <div class="bg-white rounded-2xl p-4 sm:p-5 border border-sage-100 shadow-xs">
              <div class="flex items-start gap-3 mb-3">
                <img src="https://i.pravatar.cc/80?img=${r.img}" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0" alt="${r.name}">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="text-xs sm:text-sm font-bold text-ink-900">${r.name}</span>
                    <i data-lucide="badge-check" class="w-3.5 h-3.5 text-sage-600 shrink-0"></i>
                    <span class="text-[10px] text-sage-700 bg-sage-100 px-1.5 py-0.5 rounded-full font-medium">Verified</span>
                  </div>
                  <div class="text-[11px] text-ink-800/45 mt-0.5">${r.date}</div>
                </div>
                <div class="text-gold-500 text-[11px] shrink-0">${'★'.repeat(r.stars)}</div>
              </div>
              <p class="text-xs sm:text-sm text-ink-800/70 leading-relaxed">${r.text}</p>
            </div>
          `
              )
              .join('')}
        </div>
      </div>
    </div>
  `;

    // Init Swiper for product images
    setTimeout(() => {
        if (productSwiperInstance) productSwiperInstance.destroy(true, true);
        productSwiperInstance = new Swiper('.productSwiper', {
            loop: true,
            pagination: { el: '.productSwiper .swiper-pagination', clickable: true },
            navigation: { nextEl: '.productSwiper .swiper-button-next', prevEl: '.productSwiper .swiper-button-prev' },
            speed: 600
        });
        if (window.lucide) lucide.createIcons();
        initStickyBar(p);
    }, 100);
}

function selectProductColor(idx, color) {
    selectedDetailColor = color;
    document.querySelectorAll('.color-btn').forEach((btn, i) => {
        if (i === idx) {
            btn.className = 'color-btn w-10 h-10 rounded-full border-2 transition-all hover:scale-110 relative border-sage-800 ring-2 ring-sage-800/20';
            btn.innerHTML = '<span class="absolute inset-0 flex items-center justify-center"><i data-lucide="check" class="w-4 h-4 text-white drop-shadow"></i></span>';
        } else {
            btn.className = 'color-btn w-10 h-10 rounded-full border-2 transition-all hover:scale-110 relative border-transparent';
            btn.innerHTML = '';
        }
    });
    const lbl = document.getElementById('colorLabel');
    if (lbl) lbl.textContent = `Selected Palette ${idx + 1}`;
    if (window.lucide) lucide.createIcons();
}

function selectProductSize(idx, size) {
    selectedDetailSize = size;
    document.querySelectorAll('.size-btn').forEach((btn, i) => {
        if (i === idx) {
            btn.className = 'size-btn px-5 py-2.5 rounded-xl border-[1.5px] border-sage-800 bg-sage-800 text-cream-100 text-sm font-medium transition-all';
        } else {
            btn.className = 'size-btn px-5 py-2.5 rounded-xl border-[1.5px] border-sage-200 bg-white hover:border-sage-400 text-sm font-medium transition-all';
        }
    });
}

function changeDetailQty(delta) {
    currentDetailQty = Math.max(1, currentDetailQty + delta);
    const el = document.getElementById('detailQty');
    if (el) el.textContent = currentDetailQty;
}

function initStickyBar(p) {
    let bar = document.getElementById('stickyBar');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'stickyBar';
        bar.className = 'sticky-bar hidden sm:block';
        bar.innerHTML = `
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-sage-100 shrink-0">
            <img src="${p.images[0]}" class="w-full h-full object-cover" alt="${p.name}">
          </div>
          <div class="min-w-0">
            <div class="text-xs sm:text-sm font-semibold truncate text-ink-900">${p.name}</div>
            <div class="text-[11px] sm:text-xs font-bold text-sage-700">Rs. ${p.price.toLocaleString()}</div>
          </div>
        </div>
        <button onclick="addToCart(${p.id}, currentDetailQty, selectedDetailSize, selectedDetailColor)"
          class="bg-sage-800 text-cream-100 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-semibold hover:bg-sage-700 transition-all flex items-center gap-1.5 shrink-0 active:scale-95">
          <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> Add to Bag
        </button>
      </div>
    `;
        document.body.appendChild(bar);
        if (window.lucide) lucide.createIcons();
    }

    const scrollHandler = () => {
        // On desktop only — mobile has inline CTA buttons
        if (window.innerWidth < 640) {
            bar.classList.remove('show');
            return;
        }
        if (window.scrollY > 420) {
            bar.classList.add('show');
        } else {
            bar.classList.remove('show');
        }
    };

    window.removeEventListener('scroll', window._productScrollHandler);
    window._productScrollHandler = scrollHandler;
    window.addEventListener('scroll', scrollHandler);
}

/* ═══════════ PAGE: CART ═══════════ */
function renderCartPage() {
    const container = document.getElementById('cartLayout');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
      <div class="text-center py-20 animate-fade-up">
        <div class="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <i data-lucide="shopping-bag" class="w-10 h-10 text-sage-600"></i>
        </div>
        <h2 class="font-display text-3xl font-semibold mb-3">Your shopping bag is empty</h2>
        <p class="text-ink-800/60 mb-8 max-w-sm mx-auto">Explore our heirloom bedding sets and handcrafted accessories to start your sanctuary.</p>
        <a href="${getUrl('shop')}" class="inline-flex items-center gap-2 bg-sage-800 text-cream-100 px-8 py-4 rounded-full text-sm font-semibold hover:bg-sage-700 transition-all hover:shadow-lg">
          Browse Collection <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    let subtotal = 0;
    const itemsHTML = cart
        .map(item => {
            const p = products.find(x => x.id === item.id);
            if (!p) return '';
            const lineTotal = p.price * item.qty;
            subtotal += lineTotal;

            const productUrl = `${getUrl('product')}?id=${p.id}`;

            return `
      <div class="flex gap-4 lg:gap-5 bg-white p-4.5 rounded-3xl border border-sage-100 mb-3 shadow-xs animate-fade-up">
        <a href="${productUrl}" class="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden bg-sage-100 shrink-0">
          <img src="${p.images[0]}" class="w-full h-full object-cover" alt="${p.name}">
        </a>
        <div class="flex-1 min-w-0">
          <div class="flex justify-between gap-3 items-start">
            <div>
              <h4 class="font-medium text-sm leading-snug line-clamp-2">
                <a href="${productUrl}" class="hover:text-sage-700">${p.name}</a>
              </h4>
              <div class="text-xs text-ink-800/50 mt-1">
                ${item.size ? `Size: ${item.size}` : ''}
              </div>
            </div>
            <button onclick="removeFromCart(${p.id}, '${item.size || ''}', '${item.color || ''}')"
              class="text-ink-800/40 hover:text-terra-500 transition-colors p-1" title="Remove item">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>

          <div class="text-xs text-sage-700 font-semibold my-2">Rs. ${p.price.toLocaleString()}</div>

          <div class="flex items-center justify-between">
            <div class="flex items-center border-[1.5px] border-sage-200 rounded-full overflow-hidden bg-sage-50/50">
              <button onclick="updateCartItemQty(${p.id}, '${item.size || ''}', '${item.color || ''}', -1)"
                class="w-7 h-7 hover:bg-sage-100 flex items-center justify-center transition-colors">
                <i data-lucide="minus" class="w-3 h-3"></i>
              </button>
              <span class="w-8 text-center text-xs font-semibold">${item.qty}</span>
              <button onclick="updateCartItemQty(${p.id}, '${item.size || ''}', '${item.color || ''}', 1)"
                class="w-7 h-7 hover:bg-sage-100 flex items-center justify-center transition-colors">
                <i data-lucide="plus" class="w-3 h-3"></i>
              </button>
            </div>
            <div class="font-semibold text-sm text-ink-900">Rs. ${lineTotal.toLocaleString()}</div>
          </div>
        </div>
      </div>
    `;
        })
        .join('');

    const shipping = subtotal >= 5000 ? 0 : 250;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + shipping + tax;
    const neededForFree = Math.max(0, 5000 - subtotal);
    const freePercent = Math.min(100, Math.round((subtotal / 5000) * 100));

    container.innerHTML = `
    <div class="animate-fade-up mb-8">
      <a href="${getUrl('shop')}" class="inline-flex items-center gap-2 text-sm text-ink-800/60 hover:text-ink-900 transition-colors mb-4">
        <i data-lucide="arrow-left" class="w-4 h-4"></i> Continue shopping
      </a>
      <h1 class="font-display text-4xl lg:text-5xl font-semibold mb-2">Shopping Bag</h1>
      <p class="text-ink-800/60">${cart.length} unique item${cart.length > 1 ? 's' : ''} in your order</p>
    </div>

    <div class="grid lg:grid-cols-[1fr_390px] gap-8 lg:gap-10 items-start">
      <div>${itemsHTML}</div>

      <!-- Order Summary Card -->
      <div class="lg:sticky lg:top-24 bg-white rounded-3xl p-6 lg:p-7 border border-sage-100 shadow-lg shadow-ink-900/4 animate-fade-up">
        <h3 class="font-display text-2xl font-semibold mb-5">Order Summary</h3>

        <!-- Free Shipping Progress Meter -->
        <div class="bg-sage-50/80 border border-sage-100 rounded-2xl p-4 mb-5">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-medium text-ink-800">
              ${neededForFree === 0 ? '🎉 You qualified for FREE shipping!' : `Add <strong>Rs. ${neededForFree.toLocaleString()}</strong> for free delivery`}
            </span>
            <span class="font-semibold text-sage-700">${freePercent}%</span>
          </div>
          <div class="w-full bg-cream-200 h-2 rounded-full overflow-hidden">
            <div class="bg-sage-600 h-full rounded-full transition-all duration-500" style="width:${freePercent}%"></div>
          </div>
        </div>

        <div class="space-y-3 pb-5 border-b border-sage-200 text-sm">
          <div class="flex justify-between"><span class="text-ink-800/60">Subtotal</span><span class="font-medium">Rs. ${subtotal.toLocaleString()}</span></div>
          <div class="flex justify-between"><span class="text-ink-800/60">Estimated Shipping</span><span class="font-medium ${shipping === 0 ? 'text-sage-600 font-semibold' : ''}">${shipping === 0 ? 'FREE' : 'Rs. ' + shipping}</span></div>
          <div class="flex justify-between"><span class="text-ink-800/60">Sales Tax (5%)</span><span class="font-medium">Rs. ${tax.toLocaleString()}</span></div>
        </div>

        <div class="flex justify-between items-baseline pt-4.5 mb-6">
          <span class="font-semibold text-base">Estimated Total</span>
          <span class="font-display text-2xl font-semibold text-ink-900">Rs. ${total.toLocaleString()}</span>
        </div>

        <!-- Promo Code Input -->
        <div class="flex gap-2 mb-5">
          <input type="text" placeholder="Promo code (e.g. LUXURY10)" class="flex-1 bg-sage-50 border border-sage-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-sage-500">
          <button onclick="showToast('Promo code applied: 10% OFF')" class="bg-sage-100 hover:bg-sage-200 text-sage-900 px-4 py-2.5 rounded-xl text-xs font-semibold transition">Apply</button>
        </div>

        <button onclick="processCheckout()" class="w-full bg-sage-800 text-cream-100 py-4 rounded-2xl text-sm font-semibold hover:bg-sage-700 transition-all hover:shadow-xl hover:shadow-sage-800/20 flex items-center justify-center gap-2">
          Proceed to Checkout <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>

        <div class="flex items-center justify-center gap-2 mt-4 text-xs text-ink-800/50">
          <i data-lucide="shield-check" class="w-4 h-4 text-sage-600"></i> Encrypted 256-bit secure checkout
        </div>
      </div>
    </div>
  `;

    if (window.lucide) lucide.createIcons();
}

function processCheckout() {
    showToast('Order confirmed! Check your email for tracking 🎉', 'check-circle');
    cart = [];
    saveCart();
    setTimeout(() => {
        window.location.href = getUrl('home');
    }, 1800);
}

/* ═══════════ PAGE: WISHLIST ═══════════ */
function renderWishlistPage() {
    const grid = document.getElementById('wishlistGrid');
    if (!grid) return;

    const items = products.filter(p => wishlist.includes(p.id));
    if (items.length === 0) {
        grid.innerHTML = `
      <div class="col-span-full text-center py-20">
        <div class="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6 shadow-inner">
          <i data-lucide="heart" class="w-10 h-10 text-sage-400"></i>
        </div>
        <h3 class="font-display text-2xl font-semibold mb-3">Your wishlist is empty</h3>
        <p class="text-ink-800/60 mb-6 max-w-sm mx-auto">Click the heart icon on any bedding or accessory to save it here for later.</p>
        <a href="${getUrl('shop')}" class="inline-flex items-center gap-2 bg-sage-800 text-cream-100 px-8 py-4 rounded-full text-sm font-semibold hover:bg-sage-700 transition-all">
          Explore Products <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    `;
    } else {
        grid.innerHTML = items.map(generateProductCardHTML).join('');
    }

    if (window.lucide) lucide.createIcons();
    observeReveals();
}

/* ═══════════ PAGE: CONTACT ═══════════ */
function initContactPage() {
    const form = document.querySelector('[data-contact-form]');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            showToast('Thank you! Your message has been sent. We will reply within 24 hours.', 'mail');
            form.reset();
        });
    }
}

/* ═══════════ GLOBAL INIT ═══════════ */
document.addEventListener('DOMContentLoaded', () => {
    updateBadges();

    const page = document.body.dataset.page || '';
    if (page === 'home') initHomePage();
    if (page === 'shop') initShopPage();
    if (page === 'product') initProductDetailPage();
    if (page === 'cart') renderCartPage();
    if (page === 'contact') initContactPage();

    if (document.getElementById('wishlistGrid')) renderWishlistPage();

    observeReveals();

    if (window.lucide) lucide.createIcons();
});
