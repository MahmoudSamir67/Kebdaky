// Kebdaky Restaurant JavaScript

// Language data
const translations = {
  en: {
    // Navbar
    Kebdaky: "Kebdaky",
    Home: "Home",
    Menu: "Menu",
    Reviews: "Reviews",
    Contact: "Contact",

    // Hero Section
    "Authentic Egyptian Flavors": "Authentic Egyptian Flavors",
    "Experience the rich taste of traditional Egyptian cuisine":
      "Experience the rich taste of traditional Egyptian cuisine",
    "Explore Menu": "Explore Menu",
    "Fresh Seafood Delights": "Fresh Seafood Delights",
    "Savor the finest catch from the Mediterranean":
      "Savor the finest catch from the Mediterranean",
    "Order Now": "Order Now",
    "Grilled to Perfection": "Grilled to Perfection",
    "Tender meats grilled with authentic Egyptian spices":
      "Tender meats grilled with authentic Egyptian spices",
    "View Dishes": "View Dishes",
    "Vegetarian Paradise": "Vegetarian Paradise",
    "Healthy and delicious plant-based Egyptian dishes":
      "Healthy and delicious plant-based Egyptian dishes",
    "Discover More": "Discover More",

    // Menu Section
    "Our Menu": "Our Menu",
    "Discover authentic Egyptian flavors":
      "Discover authentic Egyptian flavors",
    "All Categories": "All Categories",
    Seafood: "Seafood",
    Meat: "Meat",
    Chicken: "Chicken",
    Vegetarian: "Vegetarian",
    Order: "Order",

    // Testimonials
    "What Our Customers Say": "What Our Customers Say",
    "Real reviews from satisfied customers":
      "Real reviews from satisfied customers",
    '"Amazing authentic Egyptian food! The koshary was just like my grandmother used to make. Highly recommended!"':
      '"Amazing authentic Egyptian food! The koshary was just like my grandmother used to make. Highly recommended!"',
    "Ahmed Hassan": "Ahmed Hassan",
    "Cairo, Egypt": "Cairo, Egypt",
    '"The best Egyptian restaurant in the city! Fresh ingredients, perfect spices, and excellent service. Will definitely come back!"':
      '"The best Egyptian restaurant in the city! Fresh ingredients, perfect spices, and excellent service. Will definitely come back!"',
    "Fatma Ali": "Fatma Ali",
    "Alexandria, Egypt": "Alexandria, Egypt",
    '"Incredible dining experience! The seafood was fresh and the flavors were outstanding. Perfect atmosphere for family dining."':
      '"Incredible dining experience! The seafood was fresh and the flavors were outstanding. Perfect atmosphere for family dining."',
    "Omar Mahmoud": "Omar Mahmoud",
    "Giza, Egypt": "Giza, Egypt",

    // Footer
    "Contact Information": "Contact Information",
    "Follow Us": "Follow Us",
    "Authentic Egyptian cuisine served with love and tradition. Experience the true taste of Egypt.":
      "Authentic Egyptian cuisine served with love and tradition. Experience the true taste of Egypt.",
    "© 2025 Kebdaky Restaurant. All rights reserved.":
      "© 2025 Kebdaky Restaurant. All rights reserved.",
  },
  ar: {
    // Navbar
    Kebdaky: "كبداكي",
    Home: "الرئيسية",
    Menu: "القائمة",
    Reviews: "التقييمات",
    Contact: "اتصل بنا",

    // Hero Section
    "Authentic Egyptian Flavors": "نكهات مصرية أصيلة",
    "Experience the rich taste of traditional Egyptian cuisine":
      "اختبر الطعم الغني للمأكولات المصرية التقليدية",
    "Explore Menu": "استكشف القائمة",
    "Fresh Seafood Delights": "مأكولات بحرية طازجة",
    "Savor the finest catch from the Mediterranean":
      "استمتع بأفضل المأكولات البحرية من البحر المتوسط",
    "Order Now": "اطلب الآن",
    "Grilled to Perfection": "مشوي بإتقان",
    "Tender meats grilled with authentic Egyptian spices":
      "لحوم طرية مشوية بالتوابل المصرية الأصيلة",
    "View Dishes": "عرض الأطباق",
    "Vegetarian Paradise": "جنة النباتيين",
    "Healthy and delicious plant-based Egyptian dishes":
      "أطباق مصرية نباتية صحية ولذيذة",
    "Discover More": "اكتشف المزيد",

    // Menu Section
    "Our Menu": "قائمتنا",
    "Discover authentic Egyptian flavors": "اكتشف النكهات المصرية الأصيلة",
    "All Categories": "جميع الفئات",
    Seafood: "مأكولات بحرية",
    Meat: "لحوم",
    Chicken: "دجاج",
    Vegetarian: "نباتي",
    Order: "اطلب",

    // Testimonials
    "What Our Customers Say": "ماذا يقول عملاؤنا",
    "Real reviews from satisfied customers": "تقييمات حقيقية من عملاء راضين",
    '"Amazing authentic Egyptian food! The koshary was just like my grandmother used to make. Highly recommended!"':
      '"طعام مصري أصيل رائع! الكشري كان مثل الذي كانت تصنعه جدتي تماماً. أنصح به بشدة!"',
    "Ahmed Hassan": "أحمد حسن",
    "Cairo, Egypt": "القاهرة، مصر",
    '"The best Egyptian restaurant in the city! Fresh ingredients, perfect spices, and excellent service. Will definitely come back!"':
      '"أفضل مطعم مصري في المدينة! مكونات طازجة وتوابل مثالية وخدمة ممتازة. سأعود بالتأكيد!"',
    "Fatma Ali": "فاطمة علي",
    "Alexandria, Egypt": "الإسكندرية، مصر",
    '"Incredible dining experience! The seafood was fresh and the flavors were outstanding. Perfect atmosphere for family dining."':
      '"تجربة طعام لا تصدق! المأكولات البحرية كانت طازجة والنكهات كانت رائعة. جو مثالي لتناول الطعام العائلي."',
    "Omar Mahmoud": "عمر محمود",
    "Giza, Egypt": "الجيزة، مصر",

    // Footer
    "Contact Information": "معلومات الاتصال",
    "Follow Us": "تابعنا",
    "Authentic Egyptian cuisine served with love and tradition. Experience the true taste of Egypt.":
      "المأكولات المصرية الأصيلة تُقدم بحب وتقليد. اختبر الطعم الحقيقي لمصر.",
    "© 2025 Kebdaky Restaurant. All rights reserved.":
      "© 2025 مطعم كبداكي. جميع الحقوق محفوظة.",
  },
};

// Menu data
const menuData = {
  seafood: [
    {
      id: 1,
      title: { en: "Grilled Fish", ar: "سمك مشوي" },
      description: {
        en: "Fresh fish grilled to perfection with Egyptian spices",
        ar: "سمك طازج مشوي بإتقان مع التوابل المصرية",
      },
      price: "₺120",
      image:
        "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: { en: "Shrimp Kabab", ar: "كباب جمبري" },
      description: {
        en: "Succulent shrimp grilled with herbs and spices",
        ar: "جمبري طري مشوي بالأعشاب والتوابل",
      },
      price: "₺150",
      image:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: { en: "Seafood Rice", ar: "أرز بالمأكولات البحرية" },
      description: {
        en: "Traditional Egyptian rice with mixed seafood",
        ar: "أرز مصري تقليدي مع خليط من المأكولات البحرية",
      },
      price: "₺100",
      image:
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  meat: [
    {
      id: 4,
      title: { en: "Lamb Kofta", ar: "كفتة لحم ضاني" },
      description: {
        en: "Tender lamb kofta with traditional Egyptian seasonings",
        ar: "كفتة لحم ضاني طرية بالتتبيلة المصرية التقليدية",
      },
      price: "₺80",
      image:
        "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      title: { en: "Beef Kabab", ar: "كباب لحم بقري" },
      description: {
        en: "Juicy beef kabab grilled over charcoal",
        ar: "كباب لحم بقري طري مشوي على الفحم",
      },
      price: "₺90",
      image:
        "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      title: { en: "Mixed Grill", ar: "مشكل مشاوي" },
      description: {
        en: "A combination of our finest grilled meats",
        ar: "مزيج من أفضل لحومنا المشوية",
      },
      price: "₺200",
      image:
        "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  chicken: [
    {
      id: 7,
      title: { en: "Grilled Chicken", ar: "فراخ مشوية" },
      description: {
        en: "Marinated chicken grilled with Egyptian herbs",
        ar: "فراخ متبلة مشوية بالأعشاب المصرية",
      },
      price: "₺70",
      image:
        "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      title: { en: "Chicken Shawarma", ar: "شاورما فراخ" },
      description: {
        en: "Tender chicken shawarma with tahini sauce",
        ar: "شاورما فراخ طرية مع صلصة الطحينة",
      },
      price: "₺45",
      image:
        "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 9,
      title: { en: "Chicken Kabab", ar: "كباب فراخ" },
      description: {
        en: "Seasoned chicken kabab with rice and salad",
        ar: "كباب فراخ متبل مع الأرز والسلطة",
      },
      price: "₺60",
      image:
        "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
  vegetarian: [
    {
      id: 10,
      title: { en: "Falafel Plate", ar: "طبق فلافل" },
      description: {
        en: "Crispy falafel served with tahini and fresh vegetables",
        ar: "فلافل مقرمش يُقدم مع الطحينة والخضروات الطازجة",
      },
      price: "₺35",
      image:
        "https://images.pexels.com/photos/6419732/pexels-photo-6419732.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 11,
      title: { en: "Stuffed Vine Leaves", ar: "ورق عنب محشي" },
      description: {
        en: "Traditional vine leaves stuffed with rice and herbs",
        ar: "ورق عنب تقليدي محشي بالأرز والأعشاب",
      },
      price: "₺50",
      image:
        "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 12,
      title: { en: "Egyptian Koshary", ar: "كشري مصري" },
      description: {
        en: "Egypt's national dish with rice, lentils, and pasta",
        ar: "الطبق الشعبي المصري بالأرز والعدس والمكرونة",
      },
      price: "₺40",
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ],
};

// Global variables
let currentLanguage = "en";
let currentCategory = "all";

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventListeners();
  renderMenuItems();
  setupScrollEffects();
});

// Initialize application
function initializeApp() {
  updateLanguageText();
  setupNavbarScroll();
}

// Setup event listeners
function setupEventListeners() {
  // Language toggle
  const langToggle = document.getElementById("langToggle");
  const langText = document.getElementById("langText");

  langToggle.addEventListener("click", function () {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    updateLanguage();
    langText.textContent = currentLanguage === "en" ? "العربية" : "English";
  });

  // Menu filter
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      currentCategory = this.getAttribute("data-category");
      updateMenuFilter(this);
      renderMenuItems();
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Hero button click
  const heroButtons = document.querySelectorAll(".hero-content .btn");
  heroButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const menuSection = document.querySelector("#menu");
      const offsetTop = menuSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
}

// Update language
function updateLanguage() {
  const body = document.body;
  const html = document.documentElement;

  if (currentLanguage === "ar") {
    body.classList.add("rtl");
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
  } else {
    body.classList.remove("rtl");
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
  }

  updateLanguageText();
  renderMenuItems();
}

// Update language text
function updateLanguageText() {
  const elements = document.querySelectorAll("[data-en][data-ar]");
  elements.forEach((element) => {
    const text =
      currentLanguage === "en"
        ? element.getAttribute("data-en")
        : element.getAttribute("data-ar");
    element.textContent = text;
  });
}

// Update menu filter button
function updateMenuFilter(selectedItem) {
  const filterBtn = document.querySelector("#menuFilter span");
  const text =
    currentLanguage === "en"
      ? selectedItem.getAttribute("data-en")
      : selectedItem.getAttribute("data-ar");
  filterBtn.textContent = text;
}

// Render menu items
function renderMenuItems() {
  const menuContainer = document.getElementById("menuItems");
  menuContainer.innerHTML = "";

  let itemsToShow = [];

  if (currentCategory === "all") {
    itemsToShow = Object.values(menuData).flat();
  } else {
    itemsToShow = menuData[currentCategory] || [];
  }

  itemsToShow.forEach((item, index) => {
    const menuItem = createMenuItemElement(item, index);
    menuContainer.appendChild(menuItem);
  });

  // Animate items
  setTimeout(() => {
    const items = document.querySelectorAll(".menu-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 100);
    });
  }, 100);
}

// Create menu item element
function createMenuItemElement(item, index) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6";

  const title = currentLanguage === "en" ? item.title.en : item.title.ar;
  const description =
    currentLanguage === "en" ? item.description.en : item.description.ar;
  const orderText = currentLanguage === "en" ? "Order" : "اطلب";

  col.innerHTML = `
        <div class="menu-card menu-item" style="height: 450px; position: relative;">
            <div class="menu-card-img" style="background-image: url('${item.image}');"></div>
            <div class="menu-card-body">
                <h5 class="menu-card-title">${title}</h5>
                <p class="menu-card-description">${description}</p>
                <div class="menu-card-price">${item.price}</div>
                <button class="btn order-btn" onclick="orderItem(${item.id})" style="position: absolute; bottom: 40px; left: 10%; width:80%;">
                  ${orderText}
                </button>
            </div>
        </div>
    `;

  return col;
}

// Order item function
function orderItem(itemId) {
  const orderText =
    currentLanguage === "en" ? "Order placed successfully!" : "تم الطلب بنجاح!";
  alert(orderText);
}

// Setup navbar scroll effect
function setupNavbarScroll() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Setup scroll effects
function setupScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Initialize carousel auto-play
document.addEventListener("DOMContentLoaded", function () {
  const heroCarousel = document.getElementById("heroCarousel");
  const testimonialCarousel = document.getElementById("testimonialCarousel");

  // Auto-play hero carousel
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      wrap: true,
    });
  }

  // Auto-play testimonial carousel
  if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
      interval: 4000,
      wrap: true,
    });
  }
});

// Add loading animation
function showLoading() {
  const menuContainer = document.getElementById("menuItems");
  menuContainer.innerHTML =
    '<div class="col-12 text-center"><div class="loading"></div></div>';
}

// Preload images
function preloadImages() {
  const images = Object.values(menuData)
    .flat()
    .map((item) => item.image);
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize preloading
document.addEventListener("DOMContentLoaded", preloadImages);

// Add smooth animations for menu items
function animateMenuItems() {
  const items = document.querySelectorAll(".menu-card");
  items.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Add hover effects
document.addEventListener("DOMContentLoaded", function () {
  // Add pulse animation to order buttons
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 0.6s ease-in-out";
    });

    btn.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });
});

// Handle responsive menu
function handleResponsiveMenu() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      setTimeout(() => {
        if (navbarCollapse.classList.contains("show")) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, 300);
    });
  }
}

// Initialize responsive menu
document.addEventListener("DOMContentLoaded", handleResponsiveMenu);

// Add touch support for mobile
if ("ontouchstart" in window) {
  document.body.classList.add("touch-device");
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(function () {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);
