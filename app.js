/**
 * AuraBreathe Smart Purifier - Landing Page Script
 * Developed for Helicorp Web Dev Internship Test
 */

// Product Database
const PRODUCTS = {
    'aurabreathe-main': {
        id: 'aurabreathe-main',
        title: 'Máy lọc không khí AuraBreathe',
        price: 3490000,
        imgSvg: `<rect x="15" y="15" width="30" height="70" rx="10" fill="url(#bodyGrad)" stroke="var(--border-color)" stroke-width="1.5"/><ellipse cx="30" cy="15" rx="15" ry="4" fill="#374151"/><ellipse cx="30" cy="25" rx="12" ry="2" fill="none" stroke="#10b981" stroke-width="1"/>`
    },
    'hepa-filter': {
        id: 'hepa-filter',
        title: 'Màng lọc HEPA H13 Thay thế',
        price: 490000,
        imgSvg: `<circle cx="30" cy="30" r="20" fill="none" stroke="var(--text-secondary)" stroke-width="1"/><circle cx="30" cy="30" r="20" fill="none" stroke="var(--border-color)" stroke-width="2.5" stroke-dasharray="3,3"/><circle cx="30" cy="30" r="10" fill="#111827" stroke="var(--border-color)" stroke-width="1"/>`
    },
    'laser-sensor': {
        id: 'laser-sensor',
        title: 'Cảm biến bụi mịn Mini Smart',
        price: 750000,
        imgSvg: `<rect x="15" y="15" width="30" height="30" rx="5" fill="#374151" stroke="var(--border-color)" stroke-width="1.5"/><circle cx="30" cy="30" r="8" fill="#111827" stroke="#3b82f6" stroke-width="1.5"/><line x1="30" y1="30" x2="45" y2="30" stroke="#ef4444" stroke-width="1" stroke-dasharray="1,1"/>`
    }
};

// Global App State
const state = {
    cart: [],
    wishlist: [],
    recentlyViewed: [],
    theme: 'dark',
    metrics: {
        clicks: 0,
        maxScrollDepth: 0,
        visitedSections: new Set()
    }
};

// ==========================================================================
// Initialization & Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadStateFromStorage();
    initNavbar();
    initDrawers();
    initEcommerce();
    initNewsletterForm();
    initChatbot();
    initScrollAnimations();
    initUserTracking();
});

// ==========================================================================
// Theme Management (Dark / Light Mode)
// ==========================================================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme') || 'dark';
    
    setTheme(storedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('theme', theme);
}

// ==========================================================================
// Responsive Navbar & Navigation
// ==========================================================================
function initNavbar() {
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        state.metrics.clicks++;
    });

    // Close mobile nav when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            state.metrics.clicks++;
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
                state.metrics.visitedSections.add(current);
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// Drawer Sidebars (Cart & Wishlist)
// ==========================================================================
function initDrawers() {
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');

    const wishlistToggle = document.getElementById('wishlist-toggle');
    const wishlistClose = document.getElementById('wishlist-close');
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const wishlistOverlay = document.getElementById('wishlist-overlay');

    // Cart opening/closing
    cartToggle.addEventListener('click', () => openDrawer(cartDrawer));
    cartClose.addEventListener('click', () => closeDrawer(cartDrawer));
    cartOverlay.addEventListener('click', () => closeDrawer(cartDrawer));

    // Wishlist opening/closing
    wishlistToggle.addEventListener('click', () => openDrawer(wishlistDrawer));
    wishlistClose.addEventListener('click', () => closeDrawer(wishlistDrawer));
    wishlistOverlay.addEventListener('click', () => closeDrawer(wishlistDrawer));

    // Close drawers on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDrawer(cartDrawer);
            closeDrawer(wishlistDrawer);
        }
    });
}

function openDrawer(drawer) {
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent main page scrolling
    state.metrics.clicks++;
}

function closeDrawer(drawer) {
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.metrics.clicks++;
}

// ==========================================================================
// Mini E-commerce State & Interface logic
// ==========================================================================
function initEcommerce() {
    const productCards = document.querySelectorAll('.product-card');

    // Attach actions to product card buttons
    productCards.forEach(card => {
        const id = card.getAttribute('data-id');
        const addToCartBtn = card.querySelector('.add-cart-btn');
        const addWishlistBtn = card.querySelector('.add-wishlist-btn');

        // Cart Add Action
        addToCartBtn.addEventListener('click', () => {
            addToCart(id);
            state.metrics.clicks++;
        });

        // Wishlist Add/Toggle Action
        addWishlistBtn.addEventListener('click', () => {
            toggleWishlist(id);
            state.metrics.clicks++;
        });

        // Track user viewing products (hover triggers "recently viewed" preview after delay)
        let hoverTimeout;
        card.addEventListener('mouseenter', () => {
            hoverTimeout = setTimeout(() => {
                addToRecentlyViewed(id);
            }, 1000); // 1s hover registers as "viewed"
        });
        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
        });
    });

    // Checkout simulation
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (state.cart.length === 0) {
            showToast('Giỏ hàng của bạn đang trống!', 'error');
            return;
        }
        showToast('Đang xử lý đơn hàng mô phỏng...', 'info');
        state.metrics.clicks++;
        
        setTimeout(() => {
            showToast('Thanh toán thành công! Cảm ơn bạn đã mua hàng tại Helicorp.', 'success');
            state.cart = [];
            updateCartUI();
            saveStateToStorage();
            closeDrawer(document.getElementById('cart-drawer'));
        }, 1500);
    });
}

function addToCart(id) {
    const product = PRODUCTS[id];
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ id, quantity: 1 });
    }

    showToast(`Đã thêm "${product.title}" vào giỏ hàng.`);
    updateCartUI();
    saveStateToStorage();
}

function toggleWishlist(id) {
    const product = PRODUCTS[id];
    if (!product) return;

    const index = state.wishlist.indexOf(id);
    const card = document.querySelector(`.product-card[data-id="${id}"]`);

    if (index > -1) {
        state.wishlist.splice(index, 1);
        if (card) card.classList.remove('wishlisted');
        showToast(`Đã xóa "${product.title}" khỏi danh sách yêu thích.`, 'info');
    } else {
        state.wishlist.push(id);
        if (card) card.classList.add('wishlisted');
        showToast(`Đã thêm "${product.title}" vào danh sách yêu thích.`);
    }

    updateWishlistUI();
    saveStateToStorage();
}

function addToRecentlyViewed(id) {
    // Remove if already exists to move it to the front
    state.recentlyViewed = state.recentlyViewed.filter(item => item !== id);
    state.recentlyViewed.unshift(id);

    // Limit to 4 items
    if (state.recentlyViewed.length > 4) {
        state.recentlyViewed.pop();
    }

    updateRecentlyViewedUI();
    saveStateToStorage();
}

function changeQuantity(id, change) {
    const item = state.cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(item => item.id !== id);
        showToast(`Đã xóa "${PRODUCTS[id].title}" khỏi giỏ hàng.`, 'info');
    }

    updateCartUI();
    saveStateToStorage();
}

function updateCartUI() {
    const countElement = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total-price');
    
    // Total count
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.textContent = totalQty;

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-message">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p>Giỏ hàng trống. Hãy chọn thêm sản phẩm!</p>
            </div>
        `;
        totalElement.textContent = '0đ';
        return;
    }

    let totalPrice = 0;
    let html = '';

    state.cart.forEach(item => {
        const product = PRODUCTS[item.id];
        if (!product) return;
        
        const subtotal = product.price * item.quantity;
        totalPrice += subtotal;

        html += `
            <div class="cart-item">
                <div class="cart-item-img">
                    <svg viewBox="0 0 60 60" width="36" height="36">${product.imgSvg}</svg>
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-title">${product.title}</span>
                    <span class="cart-item-price">${formatCurrency(product.price)}</span>
                    <div class="cart-item-qty-row">
                        <div class="qty-control">
                            <button class="qty-btn dec-qty" onclick="changeQuantity('${item.id}', -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn inc-qty" onclick="changeQuantity('${item.id}', 1)">+</button>
                        </div>
                        <button class="remove-item-btn" onclick="changeQuantity('${item.id}', -${item.quantity})">Xóa</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    totalElement.textContent = formatCurrency(totalPrice);
}

function updateWishlistUI() {
    const countElement = document.getElementById('wishlist-count');
    const container = document.getElementById('wishlist-items-container');

    countElement.textContent = state.wishlist.length;

    // Update active visual on cards
    Object.keys(PRODUCTS).forEach(id => {
        const card = document.querySelector(`.product-card[data-id="${id}"]`);
        if (card) {
            if (state.wishlist.includes(id)) {
                card.classList.add('wishlisted');
            } else {
                card.classList.remove('wishlisted');
            }
        }
    });

    if (state.wishlist.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-message">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                <p>Danh sách yêu thích trống.</p>
            </div>
        `;
        return;
    }

    let html = '';
    state.wishlist.forEach(id => {
        const product = PRODUCTS[id];
        if (!product) return;

        html += `
            <div class="cart-item">
                <div class="cart-item-img">
                    <svg viewBox="0 0 60 60" width="36" height="36">${product.imgSvg}</svg>
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-title">${product.title}</span>
                    <span class="cart-item-price">${formatCurrency(product.price)}</span>
                    <div class="cart-item-qty-row">
                        <button class="btn btn-sm btn-primary" onclick="addToCart('${id}'); toggleWishlist('${id}');" style="padding: 4px 10px; font-size: 0.75rem;">Mua ngay</button>
                        <button class="remove-item-btn" onclick="toggleWishlist('${id}')">Xóa</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function updateRecentlyViewedUI() {
    const recentBox = document.getElementById('recently-viewed-box');
    const recentList = document.getElementById('recently-viewed-list');

    if (state.recentlyViewed.length === 0) {
        recentBox.style.display = 'none';
        return;
    }

    recentBox.style.display = 'block';
    let html = '';

    state.recentlyViewed.forEach(id => {
        const product = PRODUCTS[id];
        if (!product) return;

        html += `
            <div class="recent-item">
                <div class="recent-img-box">
                    <svg viewBox="0 0 60 60" width="28" height="28">${product.imgSvg}</svg>
                </div>
                <div class="recent-info">
                    <h4>${product.title}</h4>
                    <span>${formatCurrency(product.price)}</span>
                </div>
            </div>
        `;
    });

    recentList.innerHTML = html;
}

// Make quantity adjustment accessible globally via inline onclick
window.changeQuantity = changeQuantity;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;

// ==========================================================================
// Webhook & Form Validation Integration
// ==========================================================================
function initNewsletterForm() {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('subscriber-email');
    const group = emailInput.closest('.form-group');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        state.metrics.clicks++;

        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset errors
        group.classList.remove('invalid');

        if (!email || !emailRegex.test(email)) {
            group.classList.add('invalid');
            showToast('Email không đúng định dạng. Vui lòng nhập lại.', 'error');
            return;
        }

        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Prepare Webhook Payload with metrics (User Behavior Tracking)
        const payload = {
            email: email,
            timestamp: new Date().toISOString(),
            themePreference: state.theme,
            metrics: {
                totalClicks: state.metrics.clicks,
                maxScrollDepthPercent: `${state.metrics.maxScrollDepth}%`,
                visitedSections: Array.from(state.metrics.visitedSections),
                cartItemsCount: state.cart.length,
                wishlistItemsCount: state.wishlist.length
            }
        };

        console.log('Sending webhook payload:', payload);

        try {
            // Simulated webhook destination (we POST to a echo service or handle locally for mock verification)
            // You can replace this URL with a live Formspree/Discord endpoint if necessary.
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                showToast('Đăng ký thành công! Nhận quà ưu đãi qua email.', 'success');
                emailInput.value = '';
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.warn('Webhook failed, using simulated fallback:', error);
            // Fallback simulated success
            setTimeout(() => {
                showToast('Đăng ký nhận tin thành công! (Mô phỏng Webhook)', 'success');
                emailInput.value = '';
            }, 1000);
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Clear error message dynamically on keypress
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() && group.classList.contains('invalid')) {
            group.classList.remove('invalid');
        }
    });
}

// ==========================================================================
// Simulated Smart Chatbot Assistant
// ==========================================================================
function initChatbot() {
    const widget = document.getElementById('chatbot-widget');
    const toggle = document.getElementById('chatbot-toggle');
    const windowEl = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    const suggestionsBox = document.getElementById('chatbot-suggestions-box');

    // Toggle Chat window
    toggle.addEventListener('click', () => {
        const isHidden = windowEl.getAttribute('aria-hidden') === 'true';
        windowEl.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        toggle.classList.remove('alert');
        state.metrics.clicks++;
        if (isHidden) {
            setTimeout(() => input.focus(), 300);
        }
    });

    closeBtn.addEventListener('click', () => {
        windowEl.setAttribute('aria-hidden', 'true');
        state.metrics.clicks++;
    });

    // Suggestion Buttons Click Handler
    suggestionsBox.addEventListener('click', (e) => {
        const btn = e.target.closest('.suggest-btn');
        if (!btn) return;
        
        const key = btn.getAttribute('data-key');
        const text = btn.textContent;
        
        addUserMessage(text);
        state.metrics.clicks++;
        
        // Hide suggestions to keep clean
        suggestionsBox.style.display = 'none';

        // Provide bot response based on choice
        handleBotResponse(key);
    });

    // User Custom Question Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        addUserMessage(text);
        input.value = '';
        state.metrics.clicks++;

        // Process message text with keyword matcher
        const matchedKey = matchKeywords(text);
        handleBotResponse(matchedKey);
    });

    // Alert user that a chatbot is available after 5 seconds
    setTimeout(() => {
        if (windowEl.getAttribute('aria-hidden') === 'true') {
            toggle.classList.add('alert');
            showToast('Bạn cần tư vấn về sản phẩm AuraBreathe? Hãy chat với tôi!', 'info');
        }
    }, 5000);
}

function addUserMessage(text) {
    const container = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.className = 'chat-message user';
    msg.textContent = text;
    container.appendChild(msg);
    scrollChatToBottom();
}

function addBotMessage(htmlContent) {
    const container = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.className = 'chat-message bot';
    msg.innerHTML = htmlContent;
    container.appendChild(msg);
    scrollChatToBottom();
}

function addTypingIndicator() {
    const container = document.getElementById('chatbot-messages');
    const indicator = document.createElement('div');
    indicator.className = 'chat-message bot typing-indicator-msg';
    indicator.id = 'bot-typing-indicator';
    indicator.innerHTML = `
        <span style="display:inline-flex; gap:3px; align-items:center;">
            <span style="width:6px; height:6px; background-color:var(--text-secondary); border-radius:50%; animation: pulse 0.6s infinite alternate;"></span>
            <span style="width:6px; height:6px; background-color:var(--text-secondary); border-radius:50%; animation: pulse 0.6s infinite alternate; animation-delay:0.2s;"></span>
            <span style="width:6px; height:6px; background-color:var(--text-secondary); border-radius:50%; animation: pulse 0.6s infinite alternate; animation-delay:0.4s;"></span>
        </span>
    `;
    container.appendChild(indicator);
    scrollChatToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('bot-typing-indicator');
    if (indicator) indicator.remove();
}

function scrollChatToBottom() {
    const container = document.getElementById('chatbot-messages');
    container.scrollTop = container.scrollHeight;
}

function matchKeywords(text) {
    const lower = text.toLowerCase();
    
    if (lower.includes('giá') || lower.includes('bao nhiêu') || lower.includes('tiền') || lower.includes('price') || lower.includes('mua')) {
        return 'price';
    }
    if (lower.includes('tính năng') || lower.includes('công nghệ') || lower.includes('chức năng') || lower.includes('nổi bật')) {
        return 'features';
    }
    if (lower.includes('màng lọc') || lower.includes('hepa') || lower.includes('lọc')) {
        return 'hepa';
    }
    if (lower.includes('bảo hành') || lower.includes('hỗ trợ') || lower.includes('sửa')) {
        return 'warranty';
    }
    if (lower.includes('chào') || lower.includes('hello') || lower.includes('hi')) {
        return 'hello';
    }
    
    return 'unknown';
}

function handleBotResponse(key) {
    addTypingIndicator();
    
    // Responses Database
    const responses = {
        'features': `Máy lọc **AuraBreathe** sở hữu nhiều tính năng vượt trội:
        <br>• Màng lọc HEPA H13 khử 99.97% hạt bụi PM2.5.
        <br>• Cảm biến laser tự động điều chỉnh tốc độ lọc.
        <br>• Siêu êm ái (< 28 dB), điều khiển thông minh qua app di động.`,
        'price': `Sản phẩm **AuraBreathe Smart Purifier** đang có chương trình ưu đãi độc quyền:
        <br>💵 Giá gốc: <del>4.200.000đ</del>
        <br>🔥 Giá khuyến mãi: <strong>3.490,000đ</strong> (Tiết kiệm 17%).
        <br>Bạn có thể cuộn xuống phần phụ kiện để mua hàng trực tiếp!`,
        'warranty': `Chính sách hậu mãi chính hãng từ Helicorp:
        <br>🛡️ Bảo hành <strong>24 tháng</strong> chính hãng toàn quốc.
        <br>🔄 Cam kết <strong>1 đổi 1 trong vòng 30 ngày</strong> đầu tiên nếu sản phẩm phát sinh lỗi từ nhà sản xuất.`,
        'hepa': `Bộ lọc True HEPA H13 của AuraBreathe có cấu trúc 3 lớp:
        <br>1. <strong>Màng lọc thô:</strong> Giữ lại tóc, bụi lớn và xơ vải.
        <br>2. <strong>Màng HEPA H13:</strong> Lọc vi khuẩn, phấn hoa, bào tử nấm mốc và bụi mịn siêu nhỏ.
        <br>3. <strong>Màng carbon:</strong> Khử mùi thức ăn, mùi thú cưng và khí độc hại.
        <br>Khuyên dùng thay màng định kỳ sau 12 tháng sử dụng.`,
        'hello': `Chào bạn! Tôi có thể hỗ trợ gì cho bạn về máy lọc không khí AuraBreathe hôm nay?`,
        'unknown': `Cảm ơn câu hỏi của bạn. Để được hỗ trợ nhanh nhất và chi tiết nhất về sản phẩm, bạn vui lòng nhập email ở form đăng ký nhận tin hoặc liên hệ trực tiếp với chúng tôi qua email: <strong>tuyendung@helicorp.vn</strong>.`
    };

    setTimeout(() => {
        removeTypingIndicator();
        addBotMessage(responses[key] || responses['unknown']);
    }, 1000); // 1s simulation delay
}

// ==========================================================================
// Scroll Reveal & Animations (Intersection Observer)
// ==========================================================================
function initScrollAnimations() {
    const animatedSections = document.querySelectorAll('.section-animate');
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, no need to track again
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });
}

// ==========================================================================
// User Interaction Tracking (For Webhook details)
// ==========================================================================
function initUserTracking() {
    // Record scroll depth
    window.addEventListener('scroll', throttle(() => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        
        // Percentage scroll depth
        const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100);
        if (scrollPercent > state.metrics.maxScrollDepth) {
            state.metrics.maxScrollDepth = scrollPercent;
        }
    }, 200));

    // Register basic click tracking on anything interactive to showcase tracking
    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a')) {
            state.metrics.clicks++;
        }
    });
}

// ==========================================================================
// Helper functions
// ==========================================================================
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Set appropriate icon
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`;
    } else {
        iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    container.appendChild(toast);

    // Auto remove after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3800);
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function saveStateToStorage() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('recentlyViewed', JSON.stringify(state.recentlyViewed));
}

function loadStateFromStorage() {
    try {
        const cart = localStorage.getItem('cart');
        const wishlist = localStorage.getItem('wishlist');
        const recentlyViewed = localStorage.getItem('recentlyViewed');

        if (cart) state.cart = JSON.parse(cart);
        if (wishlist) state.wishlist = JSON.parse(wishlist);
        if (recentlyViewed) state.recentlyViewed = JSON.parse(recentlyViewed);
        
        // Refresh UIs
        updateCartUI();
        updateWishlistUI();
        updateRecentlyViewedUI();
    } catch (e) {
        console.error('Failed to load local storage state:', e);
    }
}
