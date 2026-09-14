const USER_NAME = 'Usuario OAX Demo';
const PAGE_SIZE = 6;

const dateAt = (daysAgo, hour = 10, minute = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
};

const initialState = () => ({
  products: [
    { id: 1, code: 'MAT-001', name: 'Crema de leche', category: 'Materia prima', min: 20, unitCost: 2100, emoji: '🥛', stocks: { Palermo: 5, Belgrano: 3 } },
    { id: 2, code: 'MAT-002', name: 'Chocolate cobertura', category: 'Materia prima', min: 25, unitCost: 4800, emoji: '🍫', stocks: { Palermo: 12 } },
    { id: 3, code: 'MAT-003', name: 'Pasta de frutilla', category: 'Materia prima', min: 15, unitCost: 3500, emoji: '🍓', stocks: { Belgrano: 7 } },
    { id: 4, code: 'MAT-004', name: 'Leche entera', category: 'Materia prima', min: 80, unitCost: 900, emoji: '🥛', stocks: { 'Villa Crespo': 420 } },
    { id: 5, code: 'MAT-005', name: 'Azúcar', category: 'Materia prima', min: 50, unitCost: 700, emoji: '🧂', stocks: { Palermo: 60, Belgrano: 40, 'Villa Crespo': 460 } },
    { id: 6, code: 'PRO-001', name: 'Helado de chocolate', category: 'Producto terminado', min: 40, unitCost: 5600, emoji: '🍫', stocks: { Palermo: 380 } },
    { id: 7, code: 'PRO-002', name: 'Helado de frutilla', category: 'Producto terminado', min: 35, unitCost: 5200, emoji: '🍓', stocks: { Belgrano: 310 } },
    { id: 8, code: 'INS-001', name: 'Cucuruchos', category: 'Insumos', min: 150, unitCost: 180, emoji: '🍦', stocks: { Palermo: 500, Belgrano: 200, 'Villa Crespo': 83 } },
  ],
  branches: [
    { id: 1, name: 'Palermo', address: 'Av. Santa Fe 3250, CABA', type: 'Casa central' },
    { id: 2, name: 'Belgrano', address: 'Av. Cabildo 1880, CABA', type: 'Activa' },
    { id: 3, name: 'Villa Crespo', address: 'Warnes 1140, CABA', type: 'Depósito' },
  ],
  movements: [
    { id: 1, occurredAt: dateAt(0, 10, 42), productId: 6, type: 'Entrada', quantity: 120, reason: 'Producción', branch: 'Palermo', user: 'Lucía R.', observation: 'Lote #PR-0245' },
    { id: 2, occurredAt: dateAt(0, 9, 18), productId: 8, type: 'Salida', quantity: 48, reason: 'Venta', branch: 'Palermo', user: USER_NAME, observation: 'Pedido mayorista' },
    { id: 3, occurredAt: dateAt(1, 18, 5), productId: 4, type: 'Entrada', quantity: 200, reason: 'Compra a proveedor', branch: 'Villa Crespo', user: 'Mateo S.', observation: '' },
    { id: 4, occurredAt: dateAt(1, 16, 20), productId: 7, type: 'Salida', quantity: 36, reason: 'Transferencia', branch: 'Belgrano', user: USER_NAME, observation: 'Envío a Palermo' },
    { id: 5, occurredAt: dateAt(2, 14, 32), productId: 5, type: 'Entrada', quantity: 120, reason: 'Compra a proveedor', branch: 'Villa Crespo', user: 'Ana G.', observation: '' },
    { id: 6, occurredAt: dateAt(2, 11, 8), productId: 2, type: 'Salida', quantity: 18, reason: 'Producción', branch: 'Palermo', user: 'Lucía R.', observation: 'Lote #PR-0246' },
    { id: 7, occurredAt: dateAt(8, 17, 10), productId: 6, type: 'Salida', quantity: 70, reason: 'Venta', branch: 'Palermo', user: 'Mateo S.', observation: '' },
    { id: 8, occurredAt: dateAt(15, 12, 40), productId: 3, type: 'Entrada', quantity: 30, reason: 'Compra a proveedor', branch: 'Belgrano', user: 'Ana G.', observation: '' },
    { id: 9, occurredAt: dateAt(35, 10, 5), productId: 8, type: 'Entrada', quantity: 200, reason: 'Compra a proveedor', branch: 'Palermo', user: USER_NAME, observation: '' },
    { id: 10, occurredAt: dateAt(44, 15, 30), productId: 7, type: 'Salida', quantity: 50, reason: 'Venta', branch: 'Belgrano', user: 'Mateo S.', observation: '' },
    { id: 11, occurredAt: dateAt(75, 9, 45), productId: 4, type: 'Entrada', quantity: 300, reason: 'Compra a proveedor', branch: 'Villa Crespo', user: 'Ana G.', observation: '' },
  ],
  productions: [
    { id: 'PR-0248', occurredAt: dateAt(0, 8, 30), recipeId: 'chocolate', productId: 6, branch: 'Palermo', status: 'En proceso', progress: 72, quantity: 120, user: 'Lucía', ingredients: [{ productId: 1, quantity: 12 }, { productId: 2, quantity: 6 }, { productId: 5, quantity: 18 }] },
    { id: 'PR-0247', occurredAt: dateAt(2, 11, 0), recipeId: 'frutilla', productId: 7, branch: 'Belgrano', status: 'En proceso', progress: 45, quantity: 80, user: 'Mateo', ingredients: [{ productId: 1, quantity: 8 }, { productId: 3, quantity: 8 }, { productId: 5, quantity: 12 }] },
    { id: 'PR-0246', occurredAt: dateAt(8, 14, 0), recipeId: 'chocolate', productId: 6, branch: 'Palermo', status: 'Completada', progress: 100, quantity: 100, user: 'Ana', ingredients: [{ productId: 1, quantity: 10 }, { productId: 2, quantity: 5 }, { productId: 5, quantity: 15 }] },
  ],
  notifications: [
    { id: 1, title: 'Stock bajo', text: 'Chocolate cobertura está en o bajo el mínimo.', time: 'Hace 12 minutos', kind: 'warning', icon: 'i-alert', view: 'stock', filter: 'low', unread: true },
    { id: 2, title: 'Producción completada', text: 'El lote #PR-0245 ya se sumó al stock.', time: 'Hace 48 minutos', kind: 'success', icon: 'i-check', view: 'production', unread: true },
    { id: 3, title: 'Transferencia recibida', text: 'Belgrano confirmó la recepción de 24 unidades.', time: 'Hace 2 horas', kind: 'blue', icon: 'i-arrows', view: 'branches', unread: true },
  ],
  stockFilters: { query: '', category: 'all', branch: 'all', status: 'all', sort: 'name', page: 1 },
  movementFilters: { query: '', type: 'all', period: '30' },
  reportFilters: { period: '7', branch: 'all', from: '', to: '' },
});

const recipes = {
  chocolate: {
    id: 'chocolate',
    name: 'Chocolate intenso',
    productId: 6,
    baseYield: 20,
    defaultBranch: 'Palermo',
    ingredients: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }, { productId: 5, quantity: 3 }],
  },
  frutilla: {
    id: 'frutilla',
    name: 'Frutilla a la crema',
    productId: 7,
    baseYield: 20,
    defaultBranch: 'Belgrano',
    ingredients: [{ productId: 1, quantity: 2 }, { productId: 3, quantity: 2 }, { productId: 5, quantity: 3 }],
  },
};

let state = initialState();
let activeView = 'dashboard';
let selectedProductId = null;
let lastFocusedElement = null;
let tourTrigger = null;
let toastTimer;

const panels = [...document.querySelectorAll('[data-panel]')];
const navigationButtons = [...document.querySelectorAll('[data-view]')];
const sidebar = document.querySelector('[data-sidebar]');
const mobileOverlay = document.querySelector('[data-mobile-overlay]');
const modalBackdrop = document.querySelector('[data-modal-backdrop]');
const modals = [...document.querySelectorAll('[data-modal]')];
const notificationDrawer = document.querySelector('[data-notification-drawer]');
const notificationButton = document.querySelector('[data-notifications-button]');
const toast = document.querySelector('[data-toast]');
const tourPopover = document.querySelector('[data-tour-popover]');
const globalSearch = document.querySelector('[data-global-search]');
const globalResults = document.querySelector('[data-global-results]');

const formatNumber = (value, maximumFractionDigits = 1) => new Intl.NumberFormat('es-AR', { maximumFractionDigits }).format(value);
const formatCurrency = (value) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
const formatCompactCurrency = (value) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', notation: 'compact', maximumFractionDigits: 1 }).format(value);
const normalize = (value) => String(value ?? '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

const appendSvg = (parent, iconId) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#${iconId}`);
  svg.appendChild(use);
  parent.appendChild(svg);
  return svg;
};

const setAccessibleVisibility = (element, visible) => {
  if (!element) return;
  element.hidden = !visible;
  element.inert = !visible;
  element.setAttribute('aria-hidden', String(!visible));
};

const productById = (id) => state.products.find((product) => product.id === Number(id));
const productStock = (product, branch = 'all') => branch === 'all'
  ? Object.values(product.stocks).reduce((sum, quantity) => sum + quantity, 0)
  : Number(product.stocks[branch] || 0);
const productValue = (product, branch = 'all') => productStock(product, branch) * product.unitCost;
const lowProducts = (branch = 'all') => state.products.filter((product) => {
  const stock = productStock(product, branch);
  return (branch === 'all' || stock > 0) && stock <= product.min;
});

const startOfDay = (date) => {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
};

const endOfDay = (date) => {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
};

const parseLocalDate = (value, end = false) => {
  if (!value) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return end ? endOfDay(date) : startOfDay(date);
};

const getRange = (period, from = '', to = '') => {
  const now = new Date();
  if (period === 'all') return { from: null, to: now };
  if (period === 'custom') return { from: parseLocalDate(from), to: parseLocalDate(to, true) };
  const days = Number(period);
  const first = startOfDay(now);
  first.setDate(first.getDate() - Math.max(0, days - 1));
  return { from: first, to: now };
};

const inRange = (isoDate, range) => {
  const value = new Date(isoDate);
  return (!range.from || value >= range.from) && (!range.to || value <= range.to);
};

const isToday = (isoDate) => {
  const date = new Date(isoDate);
  const today = new Date();
  return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
};

const formatMovementDate = (isoDate) => {
  const date = new Date(isoDate);
  const today = startOfDay(new Date());
  const value = startOfDay(date);
  const difference = Math.round((today - value) / 86400000);
  const time = new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(date);
  if (difference === 0) return `Hoy, ${time}`;
  if (difference === 1) return `Ayer, ${time}`;
  return new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(date);
};

const showToast = (title, message, kind = 'success') => {
  clearTimeout(toastTimer);
  toast.querySelector('[data-toast-title]').textContent = title;
  toast.querySelector('[data-toast-message]').textContent = message;
  toast.classList.toggle('error', kind === 'error');
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
};

const closeSidebar = () => {
  sidebar.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.querySelector('[data-open-sidebar]')?.setAttribute('aria-expanded', 'false');
  if (!document.querySelector('.modal.open') && !notificationDrawer.classList.contains('open')) document.body.classList.remove('modal-open');
};

const openSidebar = () => {
  sidebar.classList.add('open');
  mobileOverlay.classList.add('open');
  document.querySelector('[data-open-sidebar]')?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('modal-open');
};

const focusPanelTitle = (panel) => {
  const title = panel?.querySelector('h1');
  if (!title) return;
  title.setAttribute('tabindex', '-1');
  title.focus({ preventScroll: true });
};

const changeView = (view, options = {}) => {
  const nextPanel = panels.find((panel) => panel.dataset.panel === view);
  if (!nextPanel) return;
  activeView = view;
  panels.forEach((panel) => {
    const isActive = panel === nextPanel;
    panel.classList.toggle('active', isActive);
    setAccessibleVisibility(panel, isActive);
  });
  navigationButtons.forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  closeSidebar();
  hideGlobalResults();
  if (!options.keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  if (options.focus !== false) setTimeout(() => focusPanelTitle(nextPanel), 80);
};

const setSelectOptions = (select, options, preferredValue) => {
  if (!select) return;
  const current = preferredValue ?? select.value;
  select.replaceChildren();
  options.forEach(({ value, label, disabled = false }) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    option.disabled = disabled;
    select.appendChild(option);
  });
  if ([...select.options].some((option) => option.value === String(current))) select.value = String(current);
};

const branchOptions = (includeAll = false) => [
  ...(includeAll ? [{ value: 'all', label: 'Todas las sucursales' }] : []),
  ...state.branches.map((branch) => ({ value: branch.name, label: branch.name })),
];

const updateBranchOptions = () => {
  setSelectOptions(document.querySelector('[data-stock-branch]'), branchOptions(true), state.stockFilters.branch);
  setSelectOptions(document.querySelector('[data-report-branch]'), branchOptions(true), state.reportFilters.branch);
  document.querySelectorAll('[data-branch-select], [data-movement-branch], [data-production-branch]').forEach((select) => setSelectOptions(select, branchOptions(), select.value));
  const origin = document.querySelector('[data-transfer-origin]');
  const destination = document.querySelector('[data-transfer-destination]');
  setSelectOptions(origin, branchOptions(), origin?.value || state.branches[0]?.name);
  setSelectOptions(destination, branchOptions(), destination?.value || state.branches[1]?.name || state.branches[0]?.name);
};

const filteredStockProducts = () => {
  const filters = state.stockFilters;
  const filtered = state.products.filter((product) => {
    const quantity = productStock(product, filters.branch);
    const matchesQuery = normalize(`${product.name} ${product.code} ${product.category}`).includes(normalize(filters.query));
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesBranch = filters.branch === 'all' || Object.hasOwn(product.stocks, filters.branch);
    const isLow = quantity <= product.min;
    const matchesStatus = filters.status === 'all' || (filters.status === 'low' && isLow) || (filters.status === 'ok' && !isLow);
    return matchesQuery && matchesCategory && matchesBranch && matchesStatus;
  });

  filtered.sort((a, b) => {
    if (filters.sort === 'stock-asc') return productStock(a, filters.branch) - productStock(b, filters.branch);
    if (filters.sort === 'stock-desc') return productStock(b, filters.branch) - productStock(a, filters.branch);
    if (filters.sort === 'value-desc') return productValue(b, filters.branch) - productValue(a, filters.branch);
    return a.name.localeCompare(b.name, 'es');
  });
  return filtered;
};

const renderPagination = (totalItems) => {
  const container = document.querySelector('[data-pagination]');
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  state.stockFilters.page = Math.min(state.stockFilters.page, totalPages);
  container.replaceChildren();
  if (totalPages <= 1) return;

  const addButton = (label, page, disabled = false, current = false) => {
    const button = createElement('button', current ? 'current' : '', label);
    button.type = 'button';
    button.disabled = disabled;
    button.setAttribute('aria-label', current ? `Página ${page}, actual` : `Ir a la página ${page}`);
    button.addEventListener('click', () => {
      state.stockFilters.page = page;
      renderProducts();
    });
    container.appendChild(button);
  };

  addButton('←', state.stockFilters.page - 1, state.stockFilters.page === 1);
  for (let page = 1; page <= totalPages; page += 1) addButton(String(page), page, false, page === state.stockFilters.page);
  addButton('→', state.stockFilters.page + 1, state.stockFilters.page === totalPages);
};

const openProductDetail = (productId, trigger) => {
  selectedProductId = Number(productId);
  const product = productById(productId);
  const container = document.querySelector('[data-product-detail]');
  container.replaceChildren();

  const heading = createElement('div', 'detail-heading');
  heading.append(createElement('span', 'product-thumb', product.emoji));
  const meta = createElement('div');
  meta.append(createElement('strong', '', product.name), createElement('small', '', `${product.code} · ${product.category}`));
  heading.appendChild(meta);
  container.appendChild(heading);

  const metrics = createElement('div', 'detail-metrics');
  [
    ['Stock total', `${formatNumber(productStock(product))} u.`],
    ['Stock mínimo', `${formatNumber(product.min)} u.`],
    ['Costo unitario', formatCurrency(product.unitCost)],
    ['Valor estimado', formatCurrency(productValue(product))],
  ].forEach(([label, value]) => {
    const item = createElement('div');
    item.append(createElement('span', '', label), createElement('strong', '', value));
    metrics.appendChild(item);
  });
  container.appendChild(metrics);

  const locations = createElement('div', 'detail-locations');
  locations.appendChild(createElement('h3', '', 'Stock por sucursal'));
  state.branches.forEach((branch) => {
    const row = createElement('div');
    row.append(createElement('span', '', branch.name), createElement('strong', '', `${formatNumber(productStock(product, branch.name))} u.`));
    locations.appendChild(row);
  });
  container.appendChild(locations);

  const history = createElement('div', 'detail-locations detail-history');
  history.appendChild(createElement('h3', '', 'Últimos movimientos'));
  const recent = state.movements.filter((movement) => movement.productId === product.id).slice(0, 3);
  recent.forEach((movement) => {
    const row = createElement('div');
    row.append(
      createElement('span', '', `${formatMovementDate(movement.occurredAt)} · ${movement.reason}`),
      createElement('strong', movement.type === 'Entrada' ? 'positive-text' : 'negative-text', `${movement.type === 'Entrada' ? '+' : '−'}${formatNumber(movement.quantity)} u.`),
    );
    history.appendChild(row);
  });
  if (!recent.length) history.appendChild(createElement('p', 'empty-state', 'Todavía no hay movimientos registrados.'));
  container.appendChild(history);
  openModal('product-detail', trigger);
};

const renderProducts = () => {
  const tbody = document.querySelector('[data-products-table]');
  const filtered = filteredStockProducts();
  const start = (state.stockFilters.page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);
  tbody.replaceChildren();

  pageItems.forEach((product) => {
    const shownStock = productStock(product, state.stockFilters.branch);
    const row = document.createElement('tr');
    const productCell = createElement('td');
    const productWrap = createElement('div', 'product-cell');
    productWrap.appendChild(createElement('span', 'product-thumb', product.emoji));
    const productMeta = createElement('span');
    productMeta.append(createElement('strong', '', product.name), createElement('small', '', product.code));
    productWrap.appendChild(productMeta);
    productCell.appendChild(productWrap);

    const locations = Object.entries(product.stocks).filter(([, quantity]) => quantity > 0).map(([branch]) => branch);
    const branchLabel = state.stockFilters.branch !== 'all'
      ? state.stockFilters.branch
      : locations.length > 1 ? `${locations.length} sucursales` : locations[0] || 'Sin ubicación';
    const isLow = shownStock <= product.min;
    const stateCell = createElement('td');
    stateCell.appendChild(createElement('span', `status-pill ${isLow ? 'low' : 'ok'}`, isLow ? 'Reponer' : 'Saludable'));
    const actionCell = createElement('td');
    const actionButton = createElement('button', 'row-menu');
    actionButton.type = 'button';
    actionButton.setAttribute('aria-label', `Ver detalle de ${product.name}`);
    appendSvg(actionButton, 'i-chevron');
    actionButton.addEventListener('click', () => openProductDetail(product.id, actionButton));
    actionCell.appendChild(actionButton);
    row.append(
      productCell,
      createElement('td', '', product.category),
      createElement('td', `quantity-cell${isLow ? ' low' : ''}`, `${formatNumber(shownStock)} u.`),
      createElement('td', '', `${formatNumber(product.min)} u.`),
      stateCell,
      createElement('td', '', branchLabel),
      actionCell,
    );
    tbody.appendChild(row);
  });

  if (!pageItems.length) {
    const row = document.createElement('tr');
    const cell = createElement('td', 'empty-table', 'No encontramos productos con esos filtros. Probá limpiar la búsqueda.');
    cell.colSpan = 7;
    row.appendChild(cell);
    tbody.appendChild(row);
  }

  const shownFrom = filtered.length ? start + 1 : 0;
  const shownTo = Math.min(start + PAGE_SIZE, filtered.length);
  document.querySelector('[data-table-summary]').textContent = `Mostrando ${shownFrom}–${shownTo} de ${filtered.length} productos`;
  renderPagination(filtered.length);
};

const movementsForPeriod = (period, branch = 'all', from = '', to = '') => {
  const range = getRange(period, from, to);
  return state.movements.filter((movement) => inRange(movement.occurredAt, range) && (branch === 'all' || movement.branch === branch));
};

const movementTableRows = () => {
  const { query, type, period } = state.movementFilters;
  return movementsForPeriod(period).filter((movement) => {
    const product = productById(movement.productId);
    const haystack = `${product?.name || ''} ${product?.code || ''} ${movement.reason} ${movement.branch} ${movement.user} ${movement.observation} ${formatMovementDate(movement.occurredAt)}`;
    return normalize(haystack).includes(normalize(query)) && (type === 'all' || movement.type === type);
  });
};

const renderMovementSummary = () => {
  const rows = movementsForPeriod(state.movementFilters.period);
  const entries = rows.filter((movement) => movement.type === 'Entrada');
  const exits = rows.filter((movement) => movement.type === 'Salida');
  const entryUnits = entries.reduce((sum, movement) => sum + movement.quantity, 0);
  const exitUnits = exits.reduce((sum, movement) => sum + movement.quantity, 0);
  document.querySelector('[data-movement-entries]').textContent = `${formatNumber(entryUnits)} u.`;
  document.querySelector('[data-movement-exits]').textContent = `${formatNumber(exitUnits)} u.`;
  document.querySelector('[data-movement-balance]').textContent = `${entryUnits - exitUnits >= 0 ? '+' : ''}${formatNumber(entryUnits - exitUnits)} u.`;
  document.querySelector('[data-entry-operations]').textContent = `${entries.length} ${entries.length === 1 ? 'operación' : 'operaciones'}`;
  document.querySelector('[data-exit-operations]').textContent = `${exits.length} ${exits.length === 1 ? 'operación' : 'operaciones'}`;
  const labels = { 7: 'Últimos 7 días', 30: 'Últimos 30 días', 90: 'Últimos 3 meses', all: 'Historial completo' };
  document.querySelector('[data-movement-period-label]').textContent = labels[state.movementFilters.period];
};

const renderMovements = () => {
  const tbody = document.querySelector('[data-movements-table]');
  const rows = movementTableRows();
  tbody.replaceChildren();
  rows.forEach((movement) => {
    const product = productById(movement.productId);
    const row = document.createElement('tr');
    row.appendChild(createElement('td', '', formatMovementDate(movement.occurredAt)));
    const productCell = createElement('td');
    productCell.appendChild(createElement('strong', '', product?.name || 'Producto eliminado'));
    row.appendChild(productCell);
    const typeCell = createElement('td');
    const type = createElement('span', `movement-type ${movement.type === 'Entrada' ? 'in' : 'out'}`);
    appendSvg(type, movement.type === 'Entrada' ? 'i-down' : 'i-up');
    type.appendChild(document.createTextNode(movement.type));
    typeCell.appendChild(type);
    row.append(
      typeCell,
      createElement('td', 'quantity-cell', `${movement.type === 'Entrada' ? '+' : '−'}${formatNumber(movement.quantity)} u.`),
      createElement('td', '', movement.reason),
      createElement('td', '', movement.branch),
      createElement('td', '', movement.user),
    );
    tbody.appendChild(row);
  });
  if (!rows.length) {
    const row = document.createElement('tr');
    const cell = createElement('td', 'empty-table', 'No hay movimientos para esta combinación de período y filtros.');
    cell.colSpan = 7;
    row.appendChild(cell);
    tbody.appendChild(row);
  }
  renderMovementSummary();
};

const renderLowStock = () => {
  const container = document.querySelector('[data-low-stock-list]');
  const products = lowProducts();
  container.replaceChildren();
  products.slice(0, 3).forEach((product) => {
    const item = createElement('button', 'alert-item');
    item.type = 'button';
    item.appendChild(createElement('span', 'product-thumb', product.emoji));
    const info = createElement('span');
    info.append(createElement('strong', '', product.name), createElement('small', '', Object.keys(product.stocks).join(' · ')));
    item.appendChild(info);
    const number = createElement('span', 'stock-number');
    number.append(createElement('strong', '', `${formatNumber(productStock(product))} u.`), createElement('small', '', `Mínimo: ${product.min}`));
    item.appendChild(number);
    item.addEventListener('click', () => openProductDetail(product.id, item));
    container.appendChild(item);
  });
  if (!products.length) container.appendChild(createElement('p', 'empty-state', '¡Excelente! No hay productos en o bajo el mínimo.'));
};

const renderRecentActivity = () => {
  const container = document.querySelector('[data-recent-list]');
  container.replaceChildren();
  state.movements.slice(0, 4).forEach((movement) => {
    const product = productById(movement.productId);
    const item = createElement('div', 'activity-item');
    const marker = createElement('span', `activity-marker ${movement.type === 'Entrada' ? 'green' : 'orange'}`);
    appendSvg(marker, movement.type === 'Entrada' ? 'i-down' : 'i-up');
    item.appendChild(marker);
    const info = createElement('span');
    info.append(createElement('strong', '', product?.name || 'Producto'), createElement('small', '', `${movement.reason} · ${formatMovementDate(movement.occurredAt)}`));
    item.appendChild(info);
    const amount = createElement('span', 'activity-amount');
    amount.append(createElement('strong', movement.type === 'Entrada' ? 'in' : 'out', `${movement.type === 'Entrada' ? '+' : '−'}${formatNumber(movement.quantity)} u.`), createElement('small', '', movement.branch));
    item.appendChild(amount);
    container.appendChild(item);
  });
};

const chartBuckets = (days) => {
  const bucketCount = 7;
  const end = endOfDay(new Date());
  const start = startOfDay(end);
  start.setDate(start.getDate() - (days - 1));
  return Array.from({ length: bucketCount }, (_, index) => {
    const from = new Date(start);
    from.setDate(from.getDate() + Math.floor((index * days) / bucketCount));
    const to = index === bucketCount - 1 ? end : new Date(start);
    if (index !== bucketCount - 1) {
      to.setDate(to.getDate() + Math.floor(((index + 1) * days) / bucketCount));
      to.setMilliseconds(to.getMilliseconds() - 1);
    }
    return { from, to, entries: 0, exits: 0 };
  });
};

const linePath = (values, max) => values.map((value, index) => {
  const x = values.length === 1 ? 350 : (700 / (values.length - 1)) * index;
  const y = 215 - (value / max) * 190;
  return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
}).join(' ');

const renderDashboardChart = () => {
  const days = Number(document.querySelector('[data-dashboard-period]').value);
  const buckets = chartBuckets(days);
  state.movements.forEach((movement) => {
    const date = new Date(movement.occurredAt);
    const bucket = buckets.find((item) => date >= item.from && date <= item.to);
    if (!bucket) return;
    if (movement.type === 'Entrada') bucket.entries += movement.quantity;
    else bucket.exits += movement.quantity;
  });
  const entries = buckets.map((bucket) => bucket.entries);
  const exits = buckets.map((bucket) => bucket.exits);
  const rawMax = Math.max(10, ...entries, ...exits);
  const max = Math.ceil(rawMax / 10) * 10;
  const entryPath = linePath(entries, max);
  const exitPath = linePath(exits, max);
  document.querySelector('[data-chart-entry]').setAttribute('d', entryPath);
  document.querySelector('[data-chart-exit]').setAttribute('d', exitPath);
  document.querySelector('[data-chart-area]').setAttribute('d', `${entryPath} V230 H0 Z`);
  document.querySelector('[data-dashboard-chart-subtitle]').textContent = `Entradas y salidas de los últimos ${days} días`;

  const scale = document.querySelector('[data-chart-scale]');
  scale.replaceChildren();
  [1, 0.75, 0.5, 0.25, 0].forEach((ratio) => scale.appendChild(createElement('span', '', formatNumber(max * ratio, 0))));

  const labels = document.querySelector('[data-chart-labels]');
  labels.replaceChildren();
  buckets.forEach((bucket) => {
    const text = days === 7
      ? new Intl.DateTimeFormat('es-AR', { weekday: 'short' }).format(bucket.from).replace('.', '')
      : new Intl.DateTimeFormat('es-AR', { day: 'numeric', month: 'short' }).format(bucket.from).replace('.', '');
    labels.appendChild(createElement('span', '', text));
  });
};

const renderDashboard = () => {
  const total = state.products.reduce((sum, product) => sum + productStock(product), 0);
  const lowCount = lowProducts().length;
  const now = new Date();
  const monthMovements = state.movements.filter((movement) => {
    const date = new Date(movement.occurredAt);
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  });
  const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const previousCount = state.movements.filter((movement) => {
    const date = new Date(movement.occurredAt);
    return date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear();
  }).length;
  const trend = document.querySelector('[data-movement-trend]');
  if (previousCount) {
    const difference = Math.round(((monthMovements.length - previousCount) / previousCount) * 100);
    trend.textContent = `${difference >= 0 ? '+' : ''}${difference}% vs. mes anterior`;
    trend.classList.toggle('positive', difference >= 0);
    trend.classList.toggle('warning', difference < 0);
  } else {
    trend.textContent = 'Mes actual';
  }

  document.querySelectorAll('[data-total-stock]').forEach((node) => { node.textContent = formatNumber(total); });
  document.querySelectorAll('[data-low-count], [data-alert-count]').forEach((node) => { node.textContent = lowCount; });
  document.querySelectorAll('[data-month-movements]').forEach((node) => { node.textContent = formatNumber(monthMovements.length, 0); });
  document.querySelector('[data-today-movements]').textContent = `${state.movements.filter((movement) => isToday(movement.occurredAt)).length} registrados hoy`;
  document.querySelector('[data-category-count]').textContent = `En ${new Set(state.products.map((product) => product.category)).size} categorías`;
  const activeProductions = state.productions.filter((production) => production.status !== 'Completada').length;
  document.querySelector('[data-active-productions]').textContent = activeProductions;
  document.querySelector('[data-production-note]').textContent = activeProductions ? 'Seguimiento en tiempo real' : 'Sin lotes pendientes';
  renderDashboardChart();
  renderLowStock();
  renderRecentActivity();
};

const renderBatches = () => {
  const container = document.querySelector('[data-batch-list]');
  container.replaceChildren();
  state.productions.slice(0, 5).forEach((production) => {
    const product = productById(production.productId);
    const batch = createElement('div', 'batch');
    const top = createElement('div', 'batch-top');
    const meta = createElement('span');
    meta.append(createElement('strong', '', `#${production.id}`), createElement('small', '', `${product?.name || 'Producto'} · ${production.branch}`));
    top.append(meta, createElement('span', `status-pill ${production.status === 'Completada' ? 'ok' : 'processing'}`, production.status));
    const progress = createElement('div', 'progress');
    const bar = createElement('i');
    bar.style.width = `${production.progress}%`;
    progress.appendChild(bar);
    const info = createElement('div', 'batch-info');
    info.append(
      createElement('span', '', `${production.progress}% completado`),
      createElement('span', '', `Responsable: ${production.user}`),
      createElement('span', '', `${formatNumber(production.quantity)} u.`),
    );
    batch.append(top, progress, info);
    container.appendChild(batch);
  });
};

const renderBranches = () => {
  const container = document.querySelector('[data-branch-grid]');
  container.replaceChildren();
  state.branches.forEach((branch, index) => {
    const products = state.products.filter((product) => Object.hasOwn(product.stocks, branch.name));
    const units = products.reduce((sum, product) => sum + productStock(product, branch.name), 0);
    const alerts = lowProducts(branch.name).length;
    const healthy = products.length ? Math.round((products.filter((product) => productStock(product, branch.name) > product.min).length / products.length) * 100) : 0;
    const todayMovements = state.movements.filter((movement) => movement.branch === branch.name && isToday(movement.occurredAt)).length;
    const card = createElement('article', `branch-card${index === 0 ? ' main-branch' : ''}`);
    const head = createElement('div', 'branch-head');
    const icon = createElement('span', 'branch-icon');
    appendSvg(icon, 'i-building');
    head.append(icon, createElement('span', 'status-pill ok', branch.type));
    const stats = createElement('div', 'branch-stats');
    [['Unidades', formatNumber(units)], ['Movimientos hoy', todayMovements], ['Alertas', alerts]].forEach(([label, value]) => {
      const item = createElement('div');
      item.append(createElement('span', '', label), createElement('strong', '', String(value)));
      stats.appendChild(item);
    });
    const health = createElement('div', 'branch-health');
    health.append(createElement('span', '', 'Estado del inventario'), createElement('strong', '', `${healthy}% saludable`));
    const track = createElement('div');
    const fill = createElement('i');
    fill.style.width = `${healthy}%`;
    track.appendChild(fill);
    health.appendChild(track);
    const button = createElement('button', '', 'Ver inventario ');
    button.type = 'button';
    appendSvg(button, 'i-chevron');
    button.addEventListener('click', () => {
      state.stockFilters.branch = branch.name;
      state.stockFilters.page = 1;
      document.querySelector('[data-stock-branch]').value = branch.name;
      document.querySelector('[data-stock-filters]').hidden = false;
      document.querySelector('[data-toggle-stock-filters]').setAttribute('aria-expanded', 'true');
      renderProducts();
      changeView('stock');
      showToast('Inventario filtrado', `Mostrando únicamente la sucursal ${branch.name}.`);
    });
    card.append(head, createElement('h2', '', branch.name), createElement('p', '', branch.address), stats, health, button);
    container.appendChild(card);
  });
};

const reportRows = () => movementsForPeriod(
  state.reportFilters.period,
  state.reportFilters.branch,
  state.reportFilters.from,
  state.reportFilters.to,
);

const reportPeriodLabel = () => {
  const { period, from, to } = state.reportFilters;
  if (period === 'custom' && from && to) {
    const formatter = new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return `${formatter.format(parseLocalDate(from))} al ${formatter.format(parseLocalDate(to))}`;
  }
  return { 7: 'Últimos 7 días', 30: 'Últimos 30 días', 90: 'Últimos 3 meses' }[period] || 'Período personalizado';
};

const renderReports = () => {
  const rows = reportRows();
  const entries = rows.filter((movement) => movement.type === 'Entrada').reduce((sum, movement) => sum + movement.quantity, 0);
  const exits = rows.filter((movement) => movement.type === 'Salida').reduce((sum, movement) => sum + movement.quantity, 0);
  document.querySelector('[data-report-entries]').textContent = `${formatNumber(entries)} u.`;
  document.querySelector('[data-report-exits]').textContent = `${formatNumber(exits)} u.`;
  document.querySelector('[data-report-balance]').textContent = `${entries - exits >= 0 ? '+' : ''}${formatNumber(entries - exits)} u.`;
  document.querySelector('[data-report-operations]').textContent = rows.length;
  const branchLabel = state.reportFilters.branch === 'all' ? 'Todas las sucursales' : state.reportFilters.branch;
  document.querySelector('[data-report-subtitle]').textContent = `${reportPeriodLabel()} · ${branchLabel}`;

  const categoryTotals = new Map();
  rows.forEach((movement) => {
    const category = productById(movement.productId)?.category || 'Otros';
    categoryTotals.set(category, (categoryTotals.get(category) || 0) + movement.quantity);
  });
  const bars = document.querySelector('[data-report-bars]');
  bars.replaceChildren();
  const categories = [...categoryTotals.entries()].sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...categories.map(([, value]) => value));
  if (!categories.length) bars.appendChild(createElement('p', 'empty-state report-empty', 'No hay movimientos en este período. Probá ampliar el rango.'));
  categories.forEach(([category, value]) => {
    const item = createElement('div');
    const track = createElement('i');
    const fill = createElement('b');
    fill.style.width = `${(value / max) * 100}%`;
    track.appendChild(fill);
    item.append(createElement('span', '', category), track, createElement('strong', '', formatNumber(value)));
    bars.appendChild(item);
  });

  const branch = state.reportFilters.branch;
  const values = ['Producto terminado', 'Materia prima', 'Insumos'].map((category) => ({
    category,
    value: state.products.filter((product) => product.category === category).reduce((sum, product) => sum + productValue(product, branch), 0),
  }));
  const totalValue = values.reduce((sum, item) => sum + item.value, 0);
  document.querySelector('[data-report-value]').textContent = formatCompactCurrency(totalValue);
  document.querySelector('[data-inventory-snapshot]').textContent = `Inventario actual · ${branchLabel}`;
  const percentages = values.map((item) => totalValue ? (item.value / totalValue) * 100 : 0);
  const firstEnd = percentages[0];
  const secondEnd = firstEnd + percentages[1];
  document.querySelector('[data-report-donut]').style.background = totalValue
    ? `conic-gradient(var(--blue) 0 ${firstEnd}%, var(--violet) ${firstEnd}% ${secondEnd}%, var(--green) ${secondEnd}% 100%)`
    : 'var(--line)';
  const distribution = document.querySelector('[data-report-distribution]');
  distribution.replaceChildren();
  const dotClasses = ['blue-dot', 'violet-dot', 'green-dot'];
  values.forEach((item, index) => {
    const li = createElement('li');
    li.append(createElement('i', dotClasses[index]), createElement('span', '', item.category), createElement('strong', '', `${Math.round(percentages[index])}%`));
    distribution.appendChild(li);
  });
};

const renderStockSummary = () => {
  const branch = state.stockFilters.branch;
  const visibleProducts = branch === 'all' ? state.products : state.products.filter((product) => Object.hasOwn(product.stocks, branch));
  const value = visibleProducts.reduce((sum, product) => sum + productValue(product, branch), 0);
  const recentProductIds = new Set(movementsForPeriod('30', branch).map((movement) => movement.productId));
  const inactive = visibleProducts.filter((product) => !recentProductIds.has(product.id)).length;
  document.querySelectorAll('[data-product-count]').forEach((node) => { node.textContent = visibleProducts.length; });
  document.querySelector('[data-stock-value]').textContent = formatCurrency(value);
  document.querySelector('[data-stock-low-count]').textContent = lowProducts(branch).length;
  document.querySelector('[data-inactive-products]').textContent = inactive;
};

const renderNotifications = () => {
  const container = document.querySelector('[data-notification-list]');
  container.replaceChildren();
  state.notifications.forEach((notification) => {
    const button = createElement('button', `notification-item${notification.unread ? ' unread' : ''}`);
    button.type = 'button';
    const icon = createElement('span', `notification-icon ${notification.kind}`);
    appendSvg(icon, notification.icon);
    const copy = createElement('span');
    copy.append(createElement('strong', '', notification.title), createElement('p', '', notification.text), createElement('small', '', notification.time));
    button.append(icon, copy);
    button.addEventListener('click', () => {
      notification.unread = false;
      if (notification.filter === 'low') {
        state.stockFilters.status = 'low';
        state.stockFilters.page = 1;
        document.querySelector('[data-stock-status]').value = 'low';
        document.querySelector('[data-stock-filters]').hidden = false;
      }
      renderNotifications();
      closeNotifications(false);
      changeView(notification.view);
    });
    container.appendChild(button);
  });
  const unread = state.notifications.filter((notification) => notification.unread).length;
  document.querySelector('[data-notification-count]').textContent = unread ? `${unread} ${unread === 1 ? 'nueva' : 'nuevas'}` : 'Al día';
  notificationButton.querySelector('i').hidden = unread === 0;
};

const updateMovementProductSelect = () => {
  const select = document.querySelector('[data-product-select]');
  const current = select.value;
  const branch = document.querySelector('[data-movement-branch]').value || state.branches[0]?.name;
  setSelectOptions(select, state.products.map((product) => ({
    value: product.id,
    label: `${product.name} — ${formatNumber(productStock(product, branch))} u. en ${branch}`,
  })), current);
};

const updateProductionPreview = () => {
  const form = document.querySelector('[data-production-form]');
  const recipe = recipes[form.elements.receta.value];
  const branch = form.elements.sucursal.value;
  const quantity = Number(form.elements.cantidad.value) || 0;
  const container = document.querySelector('[data-production-preview]');
  container.replaceChildren();
  if (!recipe || !branch || quantity <= 0) return;
  container.appendChild(createElement('strong', '', `Insumos para ${formatNumber(quantity)} unidades`));
  const ratio = quantity / recipe.baseYield;
  recipe.ingredients.forEach((ingredient) => {
    const product = productById(ingredient.productId);
    const needed = ingredient.quantity * ratio;
    const available = productStock(product, branch);
    const row = createElement('div', available >= needed ? 'available' : 'missing');
    row.append(
      createElement('span', '', product.name),
      createElement('strong', '', `${formatNumber(needed)} u. de ${formatNumber(available)} disponibles`),
    );
    container.appendChild(row);
  });
};

const updateTransferProducts = () => {
  const origin = document.querySelector('[data-transfer-origin]').value;
  const select = document.querySelector('[data-transfer-product]');
  const current = select.value;
  const options = state.products
    .filter((product) => productStock(product, origin) > 0)
    .map((product) => ({ value: product.id, label: `${product.name} — ${formatNumber(productStock(product, origin))} u.` }));
  setSelectOptions(select, options, current);
  updateTransferPreview();
};

const updateTransferPreview = () => {
  const form = document.querySelector('[data-transfer-form]');
  const origin = form.elements.origen.value;
  const destination = form.elements.destino.value;
  const product = productById(form.elements.producto.value);
  const quantity = Number(form.elements.cantidad.value) || 0;
  const container = document.querySelector('[data-transfer-preview]');
  container.replaceChildren();
  if (!origin || !destination || !product) return;
  const available = productStock(product, origin);
  const valid = origin !== destination && quantity > 0 && quantity <= available;
  container.appendChild(createElement('strong', valid ? 'available-text' : 'missing-text', valid
    ? `${formatNumber(quantity)} u. pasarán de ${origin} a ${destination}.`
    : origin === destination ? 'Elegí dos sucursales diferentes.' : `Disponible en ${origin}: ${formatNumber(available)} u.`));
};

const refreshAll = () => {
  updateBranchOptions();
  renderDashboard();
  renderStockSummary();
  renderProducts();
  renderMovements();
  renderBatches();
  renderBranches();
  renderReports();
  renderNotifications();
  updateMovementProductSelect();
  updateProductionPreview();
  updateTransferProducts();
};

const getFocusable = (container) => [...container.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hidden);

const trapFocus = (event, container) => {
  if (event.key !== 'Tab') return;
  const focusable = getFocusable(container);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
};

const closeNotifications = (restoreFocus = true) => {
  notificationDrawer.classList.remove('open');
  setAccessibleVisibility(notificationDrawer, false);
  notificationButton.setAttribute('aria-expanded', 'false');
  if (!modals.some((modal) => modal.classList.contains('open'))) {
    modalBackdrop.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
  if (restoreFocus && lastFocusedElement === notificationButton) notificationButton.focus();
};

const openNotifications = () => {
  closeModals(false);
  lastFocusedElement = notificationButton;
  setAccessibleVisibility(notificationDrawer, true);
  notificationDrawer.classList.add('open');
  modalBackdrop.classList.add('open');
  notificationButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('modal-open');
  notificationDrawer.querySelector('button')?.focus();
};

function openModal(name, trigger) {
  closeNotifications(false);
  closeSidebar();
  const modal = modals.find((item) => item.dataset.modal === name);
  if (!modal) return;
  lastFocusedElement = trigger || document.activeElement;
  setAccessibleVisibility(modal, true);
  modal.classList.add('open');
  modalBackdrop.classList.add('open');
  document.body.classList.add('modal-open');
  if (name === 'movement') updateMovementProductSelect();
  if (name === 'production') updateProductionPreview();
  if (name === 'transfer') updateTransferProducts();
  const firstField = modal.querySelector('input:not([type="radio"]), select, button');
  setTimeout(() => firstField?.focus(), 50);
}

function closeModals(restoreFocus = true) {
  modals.forEach((modal) => {
    modal.classList.remove('open');
    setAccessibleVisibility(modal, false);
  });
  modalBackdrop.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (restoreFocus) lastFocusedElement?.focus();
}

const addNotification = (notification) => {
  state.notifications.unshift({ id: Date.now(), unread: true, time: 'Ahora', ...notification });
};

const reasonsByType = {
  Entrada: ['Compra a proveedor', 'Devolución', 'Producción', 'Stock inicial', 'Ajuste de inventario'],
  Salida: ['Venta', 'Producción', 'Merma', 'Transferencia', 'Ajuste de inventario'],
};

const updateMovementReasons = () => {
  const form = document.querySelector('[data-movement-form]');
  const type = new FormData(form).get('tipo')?.toString() || 'Entrada';
  const select = form.elements.motivo;
  setSelectOptions(select, reasonsByType[type].map((reason) => ({ value: reason, label: reason })), select.value);
  updateMovementProductSelect();
};

const serializeCell = (value) => {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value).replace('.', ',');
  let text = String(value ?? '');
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
};

const downloadCsv = (filename, headers, rows, successMessage) => {
  if (!rows.length) {
    showToast('Sin datos para exportar', 'Cambiá el período o los filtros antes de descargar.', 'error');
    return;
  }
  const csv = ['sep=;', headers.map(serializeCell).join(';'), ...rows.map((row) => row.map(serializeCell).join(';'))].join('\r\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  showToast('Reporte generado', successMessage);
};

const exportReport = (type) => {
  const branch = state.reportFilters.branch;
  const reportMovements = activeView === 'movements' ? movementTableRows() : reportRows();
  const stamp = new Intl.DateTimeFormat('en-CA').format(new Date());
  if (type === 'movements') {
    const rows = reportMovements.map((movement) => {
      const product = productById(movement.productId);
      const date = new Date(movement.occurredAt);
      return [
        movement.id,
        new Intl.DateTimeFormat('es-AR').format(date),
        new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(date),
        product?.code || '',
        product?.name || '',
        movement.type,
        movement.quantity,
        movement.reason,
        movement.branch,
        movement.user,
        movement.observation,
      ];
    });
    downloadCsv(`OAX_movimientos_${stamp}.csv`, ['ID', 'Fecha', 'Hora', 'Código', 'Producto', 'Tipo', 'Cantidad', 'Motivo', 'Sucursal', 'Usuario', 'Observación'], rows, 'Excel abrirá el historial en columnas separadas.');
    return;
  }

  if (type === 'production') {
    const range = getRange(state.reportFilters.period, state.reportFilters.from, state.reportFilters.to);
    const productions = state.productions.filter((production) => inRange(production.occurredAt, range) && (branch === 'all' || production.branch === branch));
    const rows = productions.flatMap((production) => production.ingredients.map((ingredient) => [
      production.id,
      new Intl.DateTimeFormat('es-AR').format(new Date(production.occurredAt)),
      productById(production.productId)?.name || '',
      production.branch,
      production.status,
      production.progress,
      production.quantity,
      productById(ingredient.productId)?.name || '',
      ingredient.quantity,
      production.user,
    ]));
    downloadCsv(`OAX_produccion_${stamp}.csv`, ['Lote', 'Fecha', 'Producto terminado', 'Sucursal', 'Estado', 'Avance %', 'Cantidad producida', 'Ingrediente', 'Cantidad consumida', 'Responsable'], rows, 'Se descargó el detalle de lotes e ingredientes.');
    return;
  }

  if (type === 'summary') {
    const movements = reportRows();
    const entries = movements.filter((movement) => movement.type === 'Entrada').reduce((sum, movement) => sum + movement.quantity, 0);
    const exits = movements.filter((movement) => movement.type === 'Salida').reduce((sum, movement) => sum + movement.quantity, 0);
    const branchLabel = branch === 'all' ? 'Todas las sucursales' : branch;
    const rows = [
      ['Período', reportPeriodLabel(), ''],
      ['Sucursal', branchLabel, ''],
      ['Entradas', entries, 'unidades'],
      ['Salidas', exits, 'unidades'],
      ['Balance', entries - exits, 'unidades'],
      ['Operaciones', movements.length, 'registros'],
      ['Valor actual del inventario', state.products.reduce((sum, product) => sum + productValue(product, branch), 0), 'ARS'],
      ['Productos en o bajo el mínimo', lowProducts(branch).length, 'productos'],
    ];
    downloadCsv(`OAX_resumen_${stamp}.csv`, ['Indicador', 'Valor', 'Unidad'], rows, 'Se descargó un resumen claro del período seleccionado.');
    return;
  }

  const stockRows = state.products.flatMap((product) => {
    const locations = branch === 'all' ? Object.keys(product.stocks) : [branch];
    return locations.filter((location) => Object.hasOwn(product.stocks, location)).map((location) => {
      const quantity = productStock(product, location);
      return [product.code, product.name, product.category, location, quantity, product.min, quantity <= product.min ? 'Reponer' : 'Saludable', product.unitCost, quantity * product.unitCost];
    });
  });
  downloadCsv(`OAX_stock_${stamp}.csv`, ['Código', 'Producto', 'Categoría', 'Sucursal', 'Stock actual', 'Stock mínimo', 'Estado', 'Costo unitario ARS', 'Valor total ARS'], stockRows, 'Excel abrirá el inventario en columnas separadas.');
};

const showGlobalResults = () => {
  const query = normalize(globalSearch.value.trim());
  globalResults.replaceChildren();
  if (query.length < 2) {
    hideGlobalResults();
    return;
  }
  const results = [
    ...state.products.filter((product) => normalize(`${product.name} ${product.code}`).includes(query)).slice(0, 4).map((product) => ({ kind: 'product', id: product.id, title: product.name, meta: `Producto · ${product.code}`, icon: 'i-box' })),
    ...state.branches.filter((branch) => normalize(`${branch.name} ${branch.address}`).includes(query)).slice(0, 2).map((branch) => ({ kind: 'branch', id: branch.name, title: branch.name, meta: `Sucursal · ${branch.address}`, icon: 'i-building' })),
    ...state.movements.filter((movement) => {
      const product = productById(movement.productId);
      return normalize(`${product?.name} ${movement.reason} ${movement.branch} ${movement.user}`).includes(query);
    }).slice(0, 3).map((movement) => ({
      kind: 'movement',
      id: movement.id,
      title: productById(movement.productId)?.name || 'Movimiento',
      meta: `${movement.type} · ${movement.reason} · ${movement.branch}`,
      icon: 'i-arrows',
    })),
    ...state.productions.filter((production) => normalize(`${production.id} ${productById(production.productId)?.name}`).includes(query)).slice(0, 2).map((production) => ({ kind: 'production', id: production.id, title: `#${production.id}`, meta: `Producción · ${productById(production.productId)?.name}`, icon: 'i-factory' })),
  ];
  if (!results.length) {
    globalResults.appendChild(createElement('p', 'global-empty', 'No encontramos coincidencias.'));
  } else {
    results.forEach((result) => {
      const button = createElement('button');
      button.type = 'button';
      button.setAttribute('role', 'option');
      const icon = createElement('span');
      appendSvg(icon, result.icon);
      const copy = createElement('span');
      copy.append(createElement('strong', '', result.title), createElement('small', '', result.meta));
      button.append(icon, copy);
      button.addEventListener('click', () => {
        if (result.kind === 'product') {
          const product = productById(result.id);
          state.stockFilters.query = product.name;
          state.stockFilters.page = 1;
          document.querySelector('[data-product-search]').value = product.name;
          renderProducts();
          changeView('stock');
        } else if (result.kind === 'branch') {
          state.stockFilters.branch = result.id;
          state.stockFilters.page = 1;
          document.querySelector('[data-stock-branch]').value = result.id;
          document.querySelector('[data-stock-filters]').hidden = false;
          renderProducts();
          renderStockSummary();
          changeView('stock');
        } else if (result.kind === 'movement') {
          const movement = state.movements.find((item) => item.id === result.id);
          const product = productById(movement?.productId);
          state.movementFilters.query = product?.name || movement?.reason || '';
          document.querySelector('[data-movement-search]').value = state.movementFilters.query;
          renderMovements();
          changeView('movements');
        } else {
          changeView('production');
        }
        globalSearch.value = '';
        hideGlobalResults();
      });
      globalResults.appendChild(button);
    });
  }
  globalResults.hidden = false;
  globalSearch.setAttribute('aria-expanded', 'true');
};

function hideGlobalResults() {
  globalResults.hidden = true;
  globalSearch.setAttribute('aria-expanded', 'false');
}

const resetDemo = (askConfirmation = true) => {
  if (askConfirmation && !window.confirm('¿Restablecer todos los datos y operaciones de esta demostración?')) return;
  state = initialState();
  document.querySelector('[data-product-search]').value = '';
  document.querySelector('[data-category-filter]').value = 'all';
  document.querySelector('[data-stock-status]').value = 'all';
  document.querySelector('[data-stock-sort]').value = 'name';
  document.querySelector('[data-movement-search]').value = '';
  document.querySelector('[data-movement-type]').value = 'all';
  document.querySelector('[data-movement-period]').value = '30';
  document.querySelector('[data-dashboard-period]').value = '7';
  globalSearch.value = '';
  hideGlobalResults();
  document.querySelector('[data-custom-period]').hidden = true;
  document.querySelectorAll('[data-report-period]').forEach((button) => {
    const active = button.dataset.reportPeriod === '7';
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  closeModals(false);
  refreshAll();
  changeView('dashboard', { focus: false });
  showToast('Demo restablecida', 'Todos los datos volvieron a su estado inicial.');
};

const tourDefinitions = {
  dashboard: {
    label: 'Inicio',
    steps: [
      { target: '[data-tour="kpis"]', title: 'Todo conectado', text: 'Los indicadores se recalculan cada vez que registrás un movimiento, una producción o una transferencia.' },
      { target: '[data-tour="chart"]', title: 'Períodos comparables', text: 'Elegí 7, 30 o 90 días y el gráfico se reconstruye con los movimientos de ese rango.' },
      { target: '[data-tour="quick"]', title: 'Acciones simples', text: 'Las tareas frecuentes abren formularios breves con validaciones y resultados visibles.' },
      { target: '.alert-widget', title: 'Alertas accionables', text: 'Seleccioná un producto con stock bajo para revisar su detalle por sucursal.' },
    ],
  },
  stock: {
    label: 'Stock',
    steps: [
      { target: '[data-panel="stock"] .summary-strip', title: 'Resumen real del inventario', text: 'Cantidad, valor, alertas y productos sin actividad se derivan de los datos actuales.' },
      { target: '[data-panel="stock"] .table-toolbar', title: 'Búsqueda y filtros útiles', text: 'Filtrá por categoría, sucursal, estado y orden; también podés limpiar todo en un clic.' },
      { target: '[data-tour="stock-table"]', title: 'Detalle y paginación', text: 'La tabla muestra el inventario filtrado y cada producto abre su ficha completa.' },
      { target: '[data-panel="stock"] [data-open-modal="product"]', title: 'Alta validada', text: 'Podés sumar productos con código único, costo, mínimo y stock inicial.' },
    ],
  },
  movements: {
    label: 'Movimientos',
    steps: [
      { target: '[data-panel="movements"] .movement-summary', title: 'Entradas, salidas y balance', text: 'El resumen cambia con el período y permite entender el flujo de unidades.' },
      { target: '[data-panel="movements"] .table-toolbar', title: 'Historial fácil de consultar', text: 'Buscá por producto, motivo o sucursal, filtrá y exportá exactamente lo que ves.' },
      { target: '[data-panel="movements"] .table-widget', title: 'Trazabilidad completa', text: 'Cada operación conserva fecha, motivo, sucursal, usuario y observación.' },
      { target: '[data-panel="movements"] [data-open-modal="movement"]', title: 'Stock protegido', text: 'El sistema impide salidas mayores a las existencias de la sucursal elegida.' },
    ],
  },
  production: {
    label: 'Producción',
    steps: [
      { target: '[data-panel="production"] .production-banner', title: 'Producción conectada', text: 'Antes de confirmar se comprueba la disponibilidad de cada ingrediente.' },
      { target: '[data-panel="production"] .production-grid > .widget:first-child', title: 'Lotes actualizados', text: 'Cada nueva elaboración aparece con cantidad, responsable, sucursal y estado.' },
      { target: '[data-panel="production"] .production-grid > .widget:last-child', title: 'Recetas reutilizables', text: 'Cada receta consume sus propios ingredientes y genera el producto correcto.' },
      { target: '[data-panel="production"] .page-title-row [data-produce]', title: 'Simulá un lote', text: 'Elegí receta, sucursal y cantidad para ver el consumo antes de confirmar.' },
    ],
  },
  branches: {
    label: 'Sucursales',
    steps: [
      { target: '[data-panel="branches"] .branch-grid', title: 'Sucursales en tiempo real', text: 'Unidades, movimientos y alertas se calculan a partir del inventario de cada ubicación.' },
      { target: '[data-panel="branches"] .main-branch', title: 'Acceso directo al inventario', text: 'Ver inventario abre Stock con la sucursal correspondiente ya filtrada.' },
      { target: '[data-panel="branches"] .transfer-widget', title: 'Transferencias reales', text: 'El envío valida existencias, actualiza ambos destinos y queda en el historial.' },
      { target: '[data-panel="branches"] [data-demo-action="branch"]', title: 'Sumá una ubicación', text: 'El formulario permite crear una sucursal y empezar a cargarle inventario.' },
    ],
  },
  reports: {
    label: 'Reportes',
    steps: [
      { target: '[data-panel="reports"] .report-filters', title: 'Elegí qué analizar', text: 'Período y sucursal recalculan indicadores, gráfico, valor y exportaciones.' },
      { target: '[data-panel="reports"] .report-chart', title: 'Actividad por categoría', text: 'Las barras representan los movimientos reales dentro del filtro seleccionado.' },
      { target: '[data-panel="reports"] .report-value', title: 'Valuación actual', text: 'La distribución usa stock y costo unitario, y puede verse por sucursal.' },
      { target: '[data-panel="reports"] .report-cards', title: 'Archivos listos para Excel', text: 'Cada descarga tiene columnas propias y usa el separador compatible con Excel en Argentina.' },
    ],
  },
};

const simulationSteps = Object.entries(tourDefinitions).flatMap(([view, definition]) =>
  definition.steps.map((step) => ({ ...step, view, label: definition.label }))
);
let tourIndex = 0;

const clearTourHighlight = () => document.querySelector('.tour-highlight')?.classList.remove('tour-highlight');

const showTourStep = () => {
  clearTourHighlight();
  const step = simulationSteps[tourIndex];
  changeView(step.view, { focus: false, keepScroll: true });
  setTimeout(() => {
    const target = document.querySelector(step.target);
    target?.classList.add('tour-highlight');
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 80);
  tourPopover.querySelector('[data-tour-step]').textContent = `${step.label} · Paso ${tourIndex + 1} de ${simulationSteps.length}`;
  tourPopover.querySelector('[data-tour-progress]').style.width = `${((tourIndex + 1) / simulationSteps.length) * 100}%`;
  tourPopover.querySelector('[data-tour-title]').textContent = step.title;
  tourPopover.querySelector('[data-tour-text]').textContent = step.text;
  tourPopover.querySelector('[data-tour-next]').textContent = tourIndex === simulationSteps.length - 1 ? 'Finalizar ✓' : 'Siguiente →';
  tourPopover.querySelector('[data-tour-prev]').disabled = tourIndex === 0;
};

const startTour = (event) => {
  tourTrigger = event?.currentTarget || document.activeElement;
  clearTimeout(toastTimer);
  toast.classList.remove('show');
  closeModals(false);
  closeNotifications(false);
  closeSidebar();
  hideGlobalResults();
  tourIndex = 0;
  document.body.classList.add('tour-active');
  setAccessibleVisibility(tourPopover, true);
  tourPopover.classList.add('open');
  showTourStep();
  tourPopover.querySelector('[data-tour-next]').focus();
};

const closeTour = (restoreFocus = true) => {
  clearTourHighlight();
  tourPopover.classList.remove('open');
  setAccessibleVisibility(tourPopover, false);
  document.body.classList.remove('tour-active');
  if (restoreFocus) tourTrigger?.focus();
};

navigationButtons.forEach((button) => button.addEventListener('click', () => changeView(button.dataset.view)));
document.querySelectorAll('[data-view-jump]').forEach((button) => button.addEventListener('click', () => {
  if (button.closest('.alert-widget')) {
    state.stockFilters.status = 'low';
    state.stockFilters.page = 1;
    document.querySelector('[data-stock-status]').value = 'low';
    document.querySelector('[data-stock-filters]').hidden = false;
    renderProducts();
  }
  changeView(button.dataset.viewJump);
}));
document.querySelector('[data-open-sidebar]').addEventListener('click', openSidebar);
document.querySelector('[data-close-sidebar]').addEventListener('click', closeSidebar);
mobileOverlay.addEventListener('click', closeSidebar);

document.querySelectorAll('[data-open-modal]').forEach((button) => button.addEventListener('click', () => openModal(button.dataset.openModal, button)));
document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModals()));
modalBackdrop.addEventListener('click', () => { closeModals(); closeNotifications(); });
notificationButton.addEventListener('click', openNotifications);
document.querySelector('[data-close-notifications]').addEventListener('click', () => closeNotifications());

document.querySelector('[data-movement-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const product = productById(data.get('producto'));
  const type = data.get('tipo').toString();
  const quantity = Number(data.get('cantidad'));
  const branch = data.get('sucursal').toString();
  if (!product || !state.branches.some((item) => item.name === branch) || !Number.isFinite(quantity) || quantity <= 0) {
    showToast('Revisá los datos', 'Elegí un producto y una cantidad válida.', 'error');
    return;
  }
  const available = productStock(product, branch);
  if (type === 'Salida' && quantity > available) {
    showToast('Stock insuficiente', `Solo hay ${formatNumber(available)} unidades disponibles en ${branch}.`, 'error');
    return;
  }
  product.stocks[branch] = available + (type === 'Entrada' ? quantity : -quantity);
  state.movements.unshift({
    id: Date.now(),
    occurredAt: new Date().toISOString(),
    productId: product.id,
    type,
    quantity,
    reason: data.get('motivo').toString(),
    branch,
    user: USER_NAME,
    observation: data.get('observacion').toString().trim(),
  });
  if (productStock(product) <= product.min) addNotification({ title: 'Stock para revisar', text: `${product.name} quedó en o bajo el mínimo.`, kind: 'warning', icon: 'i-alert', view: 'stock', filter: 'low' });
  refreshAll();
  closeModals();
  event.currentTarget.reset();
  updateMovementReasons();
  showToast('Movimiento guardado', `${type} de ${formatNumber(quantity)} unidades registrada en ${branch}.`);
});

document.querySelector('[data-product-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('nombre').toString().trim();
  const category = data.get('categoria').toString();
  const prefix = category === 'Materia prima' ? 'MAT' : category === 'Producto terminado' ? 'PRO' : 'INS';
  const code = data.get('codigo').toString().trim().toUpperCase() || `${prefix}-${String(Math.max(...state.products.map((product) => product.id)) + 1).padStart(3, '0')}`;
  const stock = Number(data.get('stock'));
  const minimum = Number(data.get('minimo'));
  const unitCost = Number(data.get('costo'));
  const branch = data.get('sucursal').toString();
  if (!name) {
    showToast('Nombre incompleto', 'Escribí un nombre válido para el producto.', 'error');
    return;
  }
  if (state.products.some((product) => product.code.toUpperCase() === code)) {
    showToast('Código duplicado', `El código ${code} ya pertenece a otro producto.`, 'error');
    return;
  }
  if (![stock, minimum, unitCost].every((value) => Number.isFinite(value) && value >= 0) || !state.branches.some((item) => item.name === branch)) {
    showToast('Valores inválidos', 'Revisá stock, mínimo, costo y sucursal.', 'error');
    return;
  }
  const id = Math.max(0, ...state.products.map((product) => product.id)) + 1;
  state.products.push({
    id,
    code,
    name,
    category,
    min: minimum,
    unitCost,
    emoji: '📦',
    stocks: { [branch]: stock },
  });
  if (stock > 0) state.movements.unshift({ id: Date.now(), occurredAt: new Date().toISOString(), productId: id, type: 'Entrada', quantity: stock, reason: 'Stock inicial', branch, user: USER_NAME, observation: 'Alta de producto' });
  refreshAll();
  closeModals();
  event.currentTarget.reset();
  showToast('Producto agregado', `${name} ya forma parte del inventario de ${branch}.`);
});

document.querySelector('[data-production-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const recipe = recipes[data.get('receta')];
  const branch = data.get('sucursal').toString();
  const quantity = Number(data.get('cantidad'));
  if (!recipe || !state.branches.some((item) => item.name === branch) || !Number.isFinite(quantity) || quantity <= 0) {
    showToast('Revisá la producción', 'Elegí una receta, sucursal y cantidad válidas.', 'error');
    return;
  }
  const ratio = quantity / recipe.baseYield;
  const requirements = recipe.ingredients.map((ingredient) => ({
    ...ingredient,
    required: ingredient.quantity * ratio,
    product: productById(ingredient.productId),
  }));
  const missing = requirements.find((ingredient) => productStock(ingredient.product, branch) < ingredient.required);
  if (missing) {
    showToast('Faltan insumos', `${missing.product.name}: necesitás ${formatNumber(missing.required)} u. y hay ${formatNumber(productStock(missing.product, branch))}.`, 'error');
    return;
  }
  const number = Math.max(...state.productions.map((production) => Number(production.id.split('-')[1]))) + 1;
  const lot = `PR-${String(number).padStart(4, '0')}`;
  const occurredAt = new Date().toISOString();
  requirements.forEach((ingredient, index) => {
    ingredient.product.stocks[branch] = productStock(ingredient.product, branch) - ingredient.required;
    state.movements.unshift({ id: Date.now() + index, occurredAt, productId: ingredient.product.id, type: 'Salida', quantity: ingredient.required, reason: 'Producción', branch, user: USER_NAME, observation: `Consumo lote #${lot}` });
  });
  const output = productById(recipe.productId);
  output.stocks[branch] = productStock(output, branch) + quantity;
  state.movements.unshift({ id: Date.now() + 99, occurredAt, productId: output.id, type: 'Entrada', quantity, reason: 'Producción', branch, user: USER_NAME, observation: `Producto terminado lote #${lot}` });
  state.productions.unshift({ id: lot, occurredAt, recipeId: recipe.id, productId: output.id, branch, status: 'Completada', progress: 100, quantity, user: USER_NAME, ingredients: requirements.map((ingredient) => ({ productId: ingredient.productId, quantity: ingredient.required })) });
  addNotification({ title: 'Producción completada', text: `El lote #${lot} sumó ${formatNumber(quantity)} u. de ${output.name}.`, kind: 'success', icon: 'i-check', view: 'production' });
  refreshAll();
  closeModals();
  showToast('Producción registrada', `El lote #${lot} actualizó insumos y producto terminado.`);
});

document.querySelector('[data-transfer-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const origin = data.get('origen').toString();
  const destination = data.get('destino').toString();
  const product = productById(data.get('producto'));
  const quantity = Number(data.get('cantidad'));
  const available = product ? productStock(product, origin) : 0;
  if (origin === destination) {
    showToast('Elegí otro destino', 'El origen y el destino deben ser diferentes.', 'error');
    return;
  }
  if (!product || !Number.isFinite(quantity) || quantity <= 0 || quantity > available) {
    showToast('Stock insuficiente', `Disponible en ${origin}: ${formatNumber(available)} unidades.`, 'error');
    return;
  }
  product.stocks[origin] = available - quantity;
  product.stocks[destination] = productStock(product, destination) + quantity;
  const occurredAt = new Date().toISOString();
  state.movements.unshift(
    { id: Date.now(), occurredAt, productId: product.id, type: 'Entrada', quantity, reason: 'Transferencia', branch: destination, user: USER_NAME, observation: `Recibido desde ${origin}` },
    { id: Date.now() + 1, occurredAt, productId: product.id, type: 'Salida', quantity, reason: 'Transferencia', branch: origin, user: USER_NAME, observation: `Enviado a ${destination}` },
  );
  addNotification({ title: 'Transferencia completada', text: `${destination} recibió ${formatNumber(quantity)} u. de ${product.name}.`, kind: 'blue', icon: 'i-arrows', view: 'branches' });
  refreshAll();
  closeModals();
  showToast('Transferencia registrada', `${formatNumber(quantity)} unidades pasaron de ${origin} a ${destination}.`);
});

document.querySelector('[data-branch-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('nombre').toString().trim();
  const address = data.get('direccion').toString().trim();
  if (!name || !address || state.branches.some((branch) => normalize(branch.name) === normalize(name))) {
    showToast('Sucursal inválida', 'Usá un nombre nuevo y no vacío.', 'error');
    return;
  }
  state.branches.push({ id: Date.now(), name, address, type: data.get('tipo').toString() });
  refreshAll();
  closeModals();
  event.currentTarget.reset();
  showToast('Sucursal creada', `${name} ya está disponible en movimientos y transferencias.`);
});

document.querySelectorAll('[data-produce]').forEach((button) => button.addEventListener('click', () => {
  const recipeId = button.dataset.recipe || 'chocolate';
  const form = document.querySelector('[data-production-form]');
  form.elements.receta.value = recipeId;
  form.elements.sucursal.value = recipes[recipeId].defaultBranch;
  updateProductionPreview();
  openModal('production', button);
}));
document.querySelector('[data-show-recipes]').addEventListener('click', (event) => openModal('production', event.currentTarget));
document.querySelector('[data-demo-action="branch"]').addEventListener('click', (event) => openModal('branch', event.currentTarget));
document.querySelector('[data-demo-action="transfer"]').addEventListener('click', (event) => openModal('transfer', event.currentTarget));
document.querySelectorAll('[data-export-report]').forEach((button) => button.addEventListener('click', () => exportReport(button.dataset.exportReport)));

document.querySelector('[data-product-search]').addEventListener('input', (event) => {
  state.stockFilters.query = event.currentTarget.value;
  state.stockFilters.page = 1;
  renderProducts();
});
document.querySelector('[data-category-filter]').addEventListener('change', (event) => {
  state.stockFilters.category = event.currentTarget.value;
  state.stockFilters.page = 1;
  renderProducts();
});
document.querySelector('[data-stock-branch]').addEventListener('change', (event) => {
  state.stockFilters.branch = event.currentTarget.value;
  state.stockFilters.page = 1;
  renderStockSummary();
  renderProducts();
});
document.querySelector('[data-stock-status]').addEventListener('change', (event) => {
  state.stockFilters.status = event.currentTarget.value;
  state.stockFilters.page = 1;
  renderProducts();
});
document.querySelector('[data-stock-sort]').addEventListener('change', (event) => {
  state.stockFilters.sort = event.currentTarget.value;
  state.stockFilters.page = 1;
  renderProducts();
});
document.querySelector('[data-toggle-stock-filters]').addEventListener('click', (event) => {
  const filters = document.querySelector('[data-stock-filters]');
  filters.hidden = !filters.hidden;
  event.currentTarget.setAttribute('aria-expanded', String(!filters.hidden));
});
document.querySelector('[data-clear-stock-filters]').addEventListener('click', () => {
  state.stockFilters = { query: '', category: 'all', branch: 'all', status: 'all', sort: 'name', page: 1 };
  document.querySelector('[data-product-search]').value = '';
  document.querySelector('[data-category-filter]').value = 'all';
  document.querySelector('[data-stock-branch]').value = 'all';
  document.querySelector('[data-stock-status]').value = 'all';
  document.querySelector('[data-stock-sort]').value = 'name';
  renderStockSummary();
  renderProducts();
  showToast('Filtros limpiados', 'Volvés a ver el inventario completo.');
});

document.querySelector('[data-movement-search]').addEventListener('input', (event) => {
  state.movementFilters.query = event.currentTarget.value;
  renderMovements();
});
document.querySelector('[data-movement-type]').addEventListener('change', (event) => {
  state.movementFilters.type = event.currentTarget.value;
  renderMovements();
});
document.querySelector('[data-movement-period]').addEventListener('change', (event) => {
  state.movementFilters.period = event.currentTarget.value;
  renderMovements();
});

document.querySelector('[data-dashboard-period]').addEventListener('change', () => {
  renderDashboardChart();
  showToast('Gráfico actualizado', `Ahora muestra los últimos ${document.querySelector('[data-dashboard-period]').value} días.`);
});

document.querySelectorAll('[data-report-period]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-report-period]').forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  state.reportFilters.period = button.dataset.reportPeriod;
  const custom = button.dataset.reportPeriod === 'custom';
  document.querySelector('[data-custom-period]').hidden = !custom;
  if (custom) {
    state.reportFilters.from = document.querySelector('[data-report-from]').value;
    state.reportFilters.to = document.querySelector('[data-report-to]').value;
  }
  renderReports();
}));
document.querySelector('[data-report-branch]').addEventListener('change', (event) => {
  state.reportFilters.branch = event.currentTarget.value;
  renderReports();
});
document.querySelector('[data-apply-custom-period]').addEventListener('click', () => {
  const from = document.querySelector('[data-report-from]').value;
  const to = document.querySelector('[data-report-to]').value;
  if (!from || !to || parseLocalDate(from) > parseLocalDate(to)) {
    showToast('Período inválido', 'Completá ambas fechas y verificá que “Desde” no sea posterior a “Hasta”.', 'error');
    return;
  }
  state.reportFilters.from = from;
  state.reportFilters.to = to;
  renderReports();
  showToast('Período aplicado', 'Los indicadores y exportaciones usan el rango personalizado.');
});

document.querySelectorAll('[data-movement-form] input[name="tipo"]').forEach((input) => input.addEventListener('change', updateMovementReasons));
document.querySelector('[data-movement-branch]').addEventListener('change', updateMovementProductSelect);
document.querySelector('[data-recipe-select]').addEventListener('change', (event) => {
  document.querySelector('[data-production-branch]').value = recipes[event.currentTarget.value].defaultBranch;
  updateProductionPreview();
});
document.querySelector('[data-production-branch]').addEventListener('change', updateProductionPreview);
document.querySelector('[data-production-form] input[name="cantidad"]').addEventListener('input', updateProductionPreview);
document.querySelector('[data-transfer-origin]').addEventListener('change', updateTransferProducts);
document.querySelector('[data-transfer-destination]').addEventListener('change', updateTransferPreview);
document.querySelector('[data-transfer-product]').addEventListener('change', updateTransferPreview);
document.querySelector('[data-transfer-form] input[name="cantidad"]').addEventListener('input', updateTransferPreview);

document.querySelector('[data-detail-movement]').addEventListener('click', (event) => {
  closeModals(false);
  openModal('movement', event.currentTarget);
  document.querySelector('[data-product-select]').value = selectedProductId;
});

globalSearch.addEventListener('input', showGlobalResults);
globalSearch.addEventListener('focus', showGlobalResults);
document.addEventListener('click', (event) => {
  if (!event.target.closest('.global-search-wrap')) hideGlobalResults();
});

document.querySelector('.company-switch').addEventListener('click', (event) => openModal('profile', event.currentTarget));
document.querySelector('.profile-button').addEventListener('click', (event) => openModal('profile', event.currentTarget));
document.querySelectorAll('[data-reset-demo]').forEach((button) => button.addEventListener('click', () => resetDemo(true)));

document.querySelector('[data-theme-toggle]').addEventListener('click', (event) => {
  const dark = document.body.classList.toggle('dark-mode');
  event.currentTarget.setAttribute('aria-pressed', String(dark));
  event.currentTarget.setAttribute('aria-label', dark ? 'Usar tema claro' : 'Usar tema oscuro');
  localStorage.setItem('oax-demo-theme', dark ? 'dark' : 'light');
  showToast(dark ? 'Tema oscuro activado' : 'Tema claro activado', 'La apariencia se guardó para tu próxima visita.');
});

document.querySelectorAll('[data-start-tour]').forEach((button) => button.addEventListener('click', startTour));
document.querySelector('[data-tour-close]').addEventListener('click', () => closeTour());
document.querySelector('[data-tour-prev]').addEventListener('click', () => {
  if (tourIndex > 0) {
    tourIndex -= 1;
    showTourStep();
  }
});
document.querySelector('[data-tour-next]').addEventListener('click', () => {
  if (tourIndex === simulationSteps.length - 1) {
    closeTour();
    showToast('Demostración finalizada', 'Ya conocés cómo se conectan las funciones principales del sistema.');
    return;
  }
  tourIndex += 1;
  showTourStep();
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    globalSearch.focus();
  }
  if (event.key === 'Escape') {
    if (!globalResults.hidden) hideGlobalResults();
    else if (document.querySelector('.modal.open')) closeModals();
    else if (notificationDrawer.classList.contains('open')) closeNotifications();
    else if (sidebar.classList.contains('open')) closeSidebar();
    else if (tourPopover.classList.contains('open')) closeTour();
  }
  const openDialog = document.querySelector('.modal.open') || (notificationDrawer.classList.contains('open') ? notificationDrawer : null);
  if (openDialog) trapFocus(event, openDialog);
});

modals.forEach((modal) => setAccessibleVisibility(modal, false));
setAccessibleVisibility(notificationDrawer, false);
setAccessibleVisibility(tourPopover, false);
panels.forEach((panel) => setAccessibleVisibility(panel, panel.dataset.panel === 'dashboard'));
navigationButtons.forEach((button) => button.setAttribute('aria-current', button.dataset.view === 'dashboard' ? 'page' : 'false'));
document.querySelector('[data-open-sidebar]').setAttribute('aria-expanded', 'false');
notificationButton.setAttribute('aria-expanded', 'false');

setSelectOptions(document.querySelector('[data-recipe-select]'), Object.values(recipes).map((recipe) => ({ value: recipe.id, label: `${recipe.name} · rinde ${recipe.baseYield} u.` })), 'chocolate');
const today = new Date();
const reportFrom = new Date(today);
reportFrom.setDate(reportFrom.getDate() - 6);
const dateInputValue = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
document.querySelector('[data-report-from]').value = dateInputValue(reportFrom);
document.querySelector('[data-report-to]').value = dateInputValue(today);
state.reportFilters.from = document.querySelector('[data-report-from]').value;
state.reportFilters.to = document.querySelector('[data-report-to]').value;

const savedTheme = localStorage.getItem('oax-demo-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  document.querySelector('[data-theme-toggle]').setAttribute('aria-pressed', 'true');
  document.querySelector('[data-theme-toggle]').setAttribute('aria-label', 'Usar tema claro');
} else {
  document.querySelector('[data-theme-toggle]').setAttribute('aria-pressed', 'false');
}

document.querySelector('[data-today]').textContent = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }).format(today);
updateMovementReasons();
refreshAll();
