const products = [
  { name: 'Gel nettoyant visage', category: 'Visage', price: 66.84, description: 'يُنظف البشرة برفق.<br>يزيل الأوساخ دون تهيج.<br>يبقي البشرة نضرة.', image: 'product/WhatsApp Image 2026-11-01 at 15.15.13.jpeg' },
  { name: 'Lotion hydratante', category: 'Visage', price: 50.8, description: 'لوشن مرطب لطيف للبشرة.<br>يرطب ويهدئ البشرة.<br>يمنح ملمساً ناعماً وناعم.', image: 'product/WhatsApp Image 2026-11-01 at 15.16.48.jpeg' },
  { name: 'Gel crème hygiénique', category: 'Corps', price: 34.76, description: 'غسول لطيف يضمن الراحة.<br>يعزز النظافة اليومية.<br>مناسب للاستخدام المنزلي.', image: 'product/WhatsApp Image 2026-11-01 at 15.21.20.jpeg' },
  { name: 'Tonique Vitamine C', category: 'Visage', price: 85.56, description: 'تونر الإشراق بفيتامين C.<br>يوحد لون البشرة ويمنحها الإشراق.<br>لبشرة مشرقة وحيوية.', image: 'product/WhatsApp Image 2026-11-01 at 15.25.22.jpeg' },
  { name: 'Parfum H&B Vanille', category: 'Parfum', price: 104.28, description: 'عطر H&B بالفانيليا Sunset.<br>رائحة فانيليا أنيقة ومشرقة.<br>عطرك اليومي الذي يدوم.', image: 'product/WhatsApp Image 2026-11-01 at 15.30.52.jpeg' },
  { name: 'Vitamine C + Zinc', category: 'Bien-être – Compléments alimentaires', price: 52.14, description: 'مكمل غذائي بفيتامين C والزنك.<br>يدعم المناعة ويمنح البشرة الإشراق.<br>لروتين يومي صحي ومتوازن.', image: 'product/WhatsApp Image 2026-11-01 at 15.34.25.jpeg' },
  { name: 'Magnésio + Vitamines B1 B6 B12', category: 'Bien-être – Compléments alimentaires', price: 48, description: 'مكمل غذائي بالمغنيسيوم وفيتامينات B.<br>يقلل التعب ويمنحك الطاقة والنشاط.<br>لتوازن يومي وصحة أفضل.', image: 'product/WhatsApp Image 2026-11-01 at 15.37.54.jpeg' },
  { name: 'Eau de Parfum Diamond', category: 'Parfum', price: 49.76, description: 'عطر Diamond منعش وأنيق.<br>رائحة زهرية مشرقة.<br>لمسة أناقة في كل إطلالة.', image: 'product/WhatsApp Image 2026-11-01 at 15.40.01.jpeg' },
  { name: 'Crème Pieds', category: 'Corps', price: 29.41, description: 'كريم مغذٍّ للأقدام الجافة والمتشققة.<br>يرمم التشققات ويرطب بعمق.<br>لبشرة ناعمة.', image: 'product/WhatsApp Image 2026-11-01 at 15.43.10.jpeg' },
  { name: 'Hydratant Pieds', category: 'Corps', price: 29.41, description: 'مرطب خفيف للأقدام.<br>يرطب يومياً ويمنع الجفاف.<br>لأقدام رطبة ومنتعشة.', image: 'product/WhatsApp Image 2026-11-01 at 15.45.47.jpeg' },
  { name: 'Crème Mains', category: 'Corps', price: 33, description: 'كريم مرمم لليدين الجافتين.<br>يغذي ويعالج التشققات.<br>ليدين ناعمتين ومحميتين.', image: 'product/WhatsApp Image 2026-11-01 at 15.48.01.jpeg' },
  { name: 'Shampooing Protecteur', category: 'Cheveux', price: 72.19, description: 'شامبو يحمي الشعر الضعيف والمصبوغ.<br>يحافظ على اللمعان والنعومة.<br>لشعر رطب ومشرق.', image: 'product/WhatsApp Image 2026-11-01 at 15.50.47.jpeg' },
  { name: 'Lotion Corporelle', category: 'Corps', price: 70.86, description: 'لوشن مرطب للجسم.<br>يغذي ويرطب ويمنح البشرة النعومة.<br>يمتص بسرعة دون ملمس دهني.', image: 'product/WhatsApp Image 2026-11-01 at 15.56.38.jpeg' },
  { name: 'Déodorant', category: 'Corps', price: 45.45, description: 'مزيل عرق بحماية تدوم طوال اليوم.<br>يمنع رائحة العرق ويمنحك الانتعاش.<br>لطيف على البشرة.', image: 'product/WhatsApp Image 2026-11-01 at 15.59.52.jpeg' },
  { name: 'Bicarbonate', category: 'Corps', price: 34, description: 'معجون الأسنان بالبيكربونات 🦷<br>للعناية بنظافة الفم والأسنان وانتعاش يدوم.', image: 'product/WhatsApp Image 2026-11-01 at 16.03.02.jpeg' },
  { name: 'Blanchisseur dentaire', category: 'Corps', price: 48.13, description: 'منتج مميز للعناية بالفم.<br>ينظف الأسنان ويحافظ على النضارة.<br>يوفر إحساساً بالنظافة.', image: 'product/WhatsApp Image 2026-11-01 at 16.04.38.jpeg' },
  { name: 'Parfum Vanille', category: 'Parfum', price: 79, description: 'نكهة الفانيلا الغنية عن التعريف.<br>مثالية لإضفاء لمسة لذيذة على حلوياتكم وإبداعاتكم.<br>نكهة فريدة ولذيذة.', image: 'product/WhatsApp Image 2026-11-01 at 16.08.39.jpeg' },
  { name: "Huile d'Amande", category: 'Corps', price: 90.91, description: 'زيت اللوز الحلو الأصلي.<br>يغذي الجسم والشعر واليدين.<br>لبشرة ناعمة وشعر لامع.', image: 'product/WhatsApp Image 2026-11-01 at 16.12.26.jpeg' },
  { name: 'Lotion Anti-Poux NO+ - Deliplus', category: 'Cheveux', price: 79, description: 'لوشن للقضاء على القمل والصيبان.<br>يقضي على القمل في 15 دقيقة.<br>آمن للأطفال، مع مشط معدني.', image: 'product/WhatsApp Image 2026-11-01 at 16.18.59.jpeg' },
  { name: 'Deo Roll-On Aloe', category: 'Corps', price: 31, description: 'مزيل عرق لطيف بالألوفيرا.<br>يحافظ على الانتعاش طوال اليوم.<br>مناسب للاستخدام اليومي.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45.jpeg' },
  { name: 'Lait Nettoyant', category: 'Visage', price: 41, description: 'حليب منظف لطيف للوجه.<br>يزيل الشوائب والمكياج دون جفاف.<br>لبشرة نظيفة وناعمة.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (1).jpeg' },
  { name: "Masque huile d'argan", category: 'Visage', price: 55, description: 'قناع مغذٍّ بزيت الأركان.<br>يرطب البشرة ويعطيها الحيوية.<br>يحافظ على رطوبتها.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (2).jpeg' },
  { name: "Eau d'Avoine", category: 'Visage', price: 62, description: 'ماء الشوفان المهدئ للبشرة الحساسة.<br>يخفف الاحمرار ويرطب البشرة.<br>يهيئ البشرة للعناية.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (3).jpeg' },
  { name: 'Stick Jelly', category: 'Visage', price: 96, description: 'ستيك جيلي مرطب للوجه.<br>قوام جل منعش يرطب في خطوة واحدة.<br>عملي وسهل الحمل في كل مكان.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (11).jpeg' },
  { name: 'Lotion Anti-Chute', category: 'Cheveux', price: 113, description: 'لوشن مقوٍّ لفروة الرأس.<br>يوقف التساقط ويحفز النمو.<br>لشعر أكثر كثافة وقوة.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (7).jpeg' },
  { name: 'Shampooing Anti-Chute', category: 'Cheveux', price: 47, description: 'شامبو لطيف ضد التساقط.<br>ينظف دون أن يجفف الشعر ويقويه.<br>للاستعمال اليومي.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (8).jpeg' },
  { name: 'Bandes nettoyantes pores', category: 'Visage', price: 57, description: 'شرائط لتنظيف المسام.<br>تقلل الدهون وتمنح البشرة نعومة.<br>مناسبة للاستخدام المنتظم.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (4).jpeg' },
  { name: "Shampooing huile d'argan", category: 'Cheveux', price: 47, description: 'شامبو مغذي بزيت الأركان.<br>يحافظ على نعومة الشعر ولمعه.<br>يعزز رطوبته بشكل لطيف.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (6).jpeg' },
  { name: 'Shampooing Plex Repair', category: 'Cheveux', price: 47, description: 'شامبو متخصص لإصلاح الشعر.<br>يعزز قوته ويمنحه لمعاناً صحياً.<br>لشعر أكثر مرونة.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (10).jpeg' },
  { name: 'Masque Plex Repair', category: 'Cheveux', price: 50, description: 'قناع مغذٍّ لإصلاح الشعر.<br>يعيد القوة والنعومة في خطوة واحدة.<br>لشعر صحي ومشرق.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (9).jpeg' },
  { name: 'Gommage Argile', category: 'Visage', price: 73, description: 'مقشر بالطين للوجه.<br>يزيل الخلايا الميتة ويصغر المسام.<br>لبشرة صافية ومشرقة.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (5).jpeg' },
];

const productList = products;
const phoneNumber = '212787324470';
const productGrid = document.getElementById('productGrid');
const productSearchInput = document.getElementById('productSearch');
const productResultsCount = document.getElementById('productResultsCount');
const currentPage = document.body.dataset.page || 'home';

const getProductsForPage = () => currentPage === 'promos'
  ? productList.filter((product) => product.price >= 70 || product.category === 'Parfum')
  : productList;

const getVisibleProducts = (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();
  const pageProducts = getProductsForPage();
  if (!normalizedQuery) return pageProducts;
  return pageProducts.filter((product) => product.name.toLowerCase().includes(normalizedQuery)
    || product.category.toLowerCase().includes(normalizedQuery));
};

const renderProducts = (query = '') => {
  if (!productGrid) return;
  const visibleProducts = getVisibleProducts(query);
  productGrid.innerHTML = '';
  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="product-empty">Aucun produit trouvé pour cette recherche.</div>';
    if (productResultsCount) productResultsCount.textContent = '0 résultat';
    return;
  }
  visibleProducts.forEach((product) => productGrid.appendChild(createProductCard(product)));
  if (productResultsCount) {
    const label = visibleProducts.length > 1 ? 'résultats' : 'résultat';
    productResultsCount.textContent = `${visibleProducts.length} ${label} trouvé(s)`;
  }
};

const setProductImage = (image, path, fallback) => {
  image.onerror = () => {
    image.onerror = null;
    image.hidden = true;
    if (fallback) fallback.hidden = false;
  };
  image.src = encodeURI(path);
};

const createProductModal = () => {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="product-modal-backdrop" data-close="true"></div>
    <div class="product-modal-panel" role="dialog" aria-modal="true" aria-labelledby="productDetailTitle">
      <button type="button" class="product-modal-close" aria-label="Fermer">×</button>
      <div class="product-modal-content">
        <div class="product-modal-image-wrap"><img id="productDetailImage" src="" alt="Produit" /><div id="productDetailImageFallback" class="product-image-placeholder" hidden>Image bientôt</div></div>
        <div class="product-modal-body"><span id="productDetailCategory" class="tag"></span><h3 id="productDetailTitle"></h3><p id="productDetailDescription"></p><div class="product-modal-price" id="productDetailPrice"></div><div class="product-modal-actions"><button class="order-btn" id="productDetailOrder" type="button">Commander via WhatsApp</button></div></div>
      </div>
    </div>`;
  const closeModal = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); };
  modal.addEventListener('click', (event) => { if (event.target.matches('[data-close="true"]')) closeModal(); });
  modal.querySelector('.product-modal-close').addEventListener('click', closeModal);
  document.body.appendChild(modal);
  return {
    open(product) {
      const detailImage = modal.querySelector('#productDetailImage');
      const detailFallback = modal.querySelector('#productDetailImageFallback');
      detailImage.hidden = false;
      detailFallback.hidden = true;
      setProductImage(detailImage, product.image, detailFallback);
      modal.querySelector('#productDetailCategory').textContent = product.category;
      modal.querySelector('#productDetailTitle').textContent = product.name;
      modal.querySelector('#productDetailDescription').innerHTML = product.description;
      modal.querySelector('#productDetailPrice').textContent = formatPrice(product.price);
      const detailOrder = modal.querySelector('#productDetailOrder');
      detailOrder.textContent = 'Commander via WhatsApp';
      detailOrder.onclick = () => {
        const message = encodeURIComponent(`Bonjour, je souhaite commander ${product.name} au prix de ${formatPrice(product.price)}.`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    },
  };
};

const productModal = createProductModal();
const formatPrice = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return 'Prix sur demande';
  return `${Number(value).toFixed(2).replace('.', ',')} DH`;
};

const createProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  const buttonText = `Bonjour, je souhaite commander ${product.name} au prix de ${formatPrice(product.price)}.`;
  card.innerHTML = `
    <div class="product-image" aria-label="${product.name}"><img alt="${product.name}" class="product-image-img" /><div class="product-image-placeholder" hidden>Image bientôt</div></div>
    <div class="product-info"><div class="product-meta"><span class="tag">${product.category}</span><span class="price">${formatPrice(product.price)}</span></div><h3>${product.name}</h3><p>${product.description}</p><div class="product-actions"><button class="order-btn" type="button">Commander via WhatsApp</button></div></div>`;
  const image = card.querySelector('.product-image-img');
  setProductImage(image, product.image, card.querySelector('.product-image-placeholder'));
  card.querySelector('.order-btn').addEventListener('click', (event) => {
    event.stopPropagation();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(buttonText)}`, '_blank');
  });
  card.addEventListener('click', (event) => {
    if (event.target.closest('.order-btn')) return;
    productModal.open(product);
  });
  return card;
};

if (productSearchInput) productSearchInput.addEventListener('input', (event) => renderProducts(event.target.value));
if (productGrid) renderProducts();
