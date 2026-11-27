// Default company catalog fallback (if API is unreachable or running offline/file://)
const DEFAULT_COMPANIES = [
  "Google", "Apple", "Microsoft", "Amazon", "Meta",
  "Nvidia", "Netflix", "Tesla", "OpenAI", "Spotify",
  "Uber", "Airbnb", "Adobe", "Salesforce", "Stripe",
  "GitHub", "Intel", "AMD", "IBM", "Oracle",
  "Palantir", "Databricks", "Figma", "Notion", "Canva",
  "Cloudflare", "Atlassian", "Snowflake", "Reddit", "LinkedIn",
  "PayPal", "Twitter", "Pinterest", "Snapchat", "Dropbox",
  "Zoom", "Slack", "eBay", "TikTok", "Qualcomm",
  "Cisco", "Samsung", "Sony", "Dell", "HP",
  "Siemens", "Philips", "Panasonic", "Foxconn", "Alibaba",
  "Baidu", "Tencent", "Huawei", "Xiaomi", "LG"
];

const logoMap = {
  "Google": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "Apple": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "Meta": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Meta_Platforms_Inc._logo.svg",
  "Netflix": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "Tesla": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  "Adobe": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_Logo.png",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Intel": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  "Oracle": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "Salesforce": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "Spotify": "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "Uber": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  "Airbnb": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  "PayPal": "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  "Samsung": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  "Sony": "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
  "Dell": "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  "HP": "https://upload.wikimedia.org/wikipedia/commons/3/3a/HP_logo_2012.svg",
  "Twitter": "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png",
  "Pinterest": "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
  "Snapchat": "https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg",
  "Dropbox": "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
  "Zoom": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
  "Slack": "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  "Reddit": "https://upload.wikimedia.org/wikipedia/en/8/82/Reddit_logo_and_wordmark.svg",
  "eBay": "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
  "LinkedIn": "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  "TikTok": "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  "Nvidia": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  "AMD": "https://upload.wikimedia.org/wikipedia/commons/2/2e/AMD_Logo.svg",
  "Qualcomm": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Qualcomm-Logo.svg",
  "Cisco": "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  "Xiaomi": "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  "LG": "https://upload.wikimedia.org/wikipedia/commons/0/0e/LG_logo_%282015%29.svg",
  "Motorola": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Motorola_logo.svg",
  "Asus": "https://upload.wikimedia.org/wikipedia/commons/0/0e/ASUS_Logo.svg",
  "Lenovo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lenovo_logo_2015.svg",
  "Toshiba": "https://upload.wikimedia.org/wikipedia/commons/0/09/Toshiba_logo.svg",
  "Siemens": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Siemens-logo.svg",
  "Philips": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Philips_logo.svg",
  "Panasonic": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Panasonic_logo.svg",
  "Foxconn": "https://upload.wikimedia.org/wikipedia/commons/7/71/Foxconn_logo.svg",
  "Alibaba": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Alibaba_Group_logo.svg",
  "Baidu": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Baidu_Logo.svg",
  "Tencent": "https://upload.wikimedia.org/wikipedia/commons/0/09/Tencent_Logo.svg",
  "Huawei": "https://upload.wikimedia.org/wikipedia/commons/0/08/Huawei_Standard_logo.svg",
  "ZTE": "https://upload.wikimedia.org/wikipedia/commons/f/fd/ZTE_new_logo.svg",
  "Vivo": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vivo_logo_2019.svg",
  "OpenAI": "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  "Stripe": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  "GitHub": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  "Cloudflare": "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.svg",
  "Figma": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  "Notion": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
};

const AVATAR_COLORS = [
  "#6366f1", "#ec4899", "#8b5cf6", "#10b981",
  "#f59e0b", "#3b82f6", "#14b8a6", "#f97316"
];

function getAvatarColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

// DOM Elements
const addBtn = document.getElementById("addBtn");
const addBtnIcon = document.getElementById("addBtnIcon");
const addBtnText = document.getElementById("addBtnText");
const menu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const searchInput = document.getElementById("search");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const companyList = document.getElementById("companyList");
const selectedDiv = document.getElementById("selected");
const counterBadge = document.getElementById("counterBadge");
const progressBar = document.getElementById("progressBar");
const emptyState = document.getElementById("emptyState");
const emptyStateBtn = document.getElementById("emptyStateBtn");
const catalogCount = document.getElementById("catalogCount");
const limitNotice = document.getElementById("limitNotice");
const customCompanyForm = document.getElementById("customCompanyForm");
const newCompanyInput = document.getElementById("newCompany");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const toast = document.getElementById("toast");

// State
let companies = [];
let selected = [];
let customCompanies = [];
let draggedIndex = null;

// Safe localStorage loading
try {
  selected = JSON.parse(localStorage.getItem("selectedCompanies") || "[]");
  if (!Array.isArray(selected)) selected = [];
} catch (e) {
  selected = [];
}

try {
  customCompanies = JSON.parse(localStorage.getItem("customCompanies") || "[]");
  if (!Array.isArray(customCompanies)) customCompanies = [];
} catch (e) {
  customCompanies = [];
}

// Initialize and Fetch Companies
function initCompanies() {
  // Try relative static companies.json first (works on GitHub Pages and local servers)
  fetch("companies.json")
    .then(res => {
      if (!res.ok) return fetch("/api/companies");
      return res;
    })
    .then(res => {
      if (!res.ok) throw new Error("HTTP error " + res.status);
      return res.json();
    })
    .then(data => {
      mergeAndSetCompanies(data);
    })
    .catch(err => {
      console.warn("Using default company list:", err);
      mergeAndSetCompanies(DEFAULT_COMPANIES);
    });
}

function mergeAndSetCompanies(apiList) {
  const allSet = new Set([...apiList, ...DEFAULT_COMPANIES, ...customCompanies, ...selected]);
  companies = Array.from(allSet);
  renderMenu(companies);
  renderSelected();
}

function getLogo(name) {
  return logoMap[name] || null;
}

function createLogoElement(name) {
  const logoUrl = getLogo(name);
  if (logoUrl) {
    const img = document.createElement("img");
    img.src = logoUrl;
    img.alt = name;
    img.className = "company-logo";
    img.loading = "lazy";
    img.onerror = () => {
      // Fallback to text avatar if image fails to load
      const avatar = createAvatarFallback(name);
      img.replaceWith(avatar);
    };
    return img;
  }
  return createAvatarFallback(name);
}

function createAvatarFallback(name) {
  const avatar = document.createElement("div");
  avatar.className = "avatar-fallback";
  avatar.style.backgroundColor = getAvatarColor(name);
  avatar.textContent = (name.trim()[0] || "?").toUpperCase();
  return avatar;
}

// Toast helper
let toastTimer = null;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// Render Selected List
function renderSelected() {
  selectedDiv.innerHTML = "";
  const count = selected.length;

  // Counter & Progress
  counterBadge.textContent = `${count} / 20`;
  if (count >= 20) {
    counterBadge.classList.add("full");
    progressBar.classList.add("full");
  } else {
    counterBadge.classList.remove("full");
    progressBar.classList.remove("full");
  }
  progressBar.style.width = `${Math.min(100, (count / 20) * 100)}%`;

  // Empty state handling
  if (count === 0) {
    emptyState.classList.remove("hidden");
    selectedDiv.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    selectedDiv.classList.remove("hidden");
  }

  // Render items
  selected.forEach((name, index) => {
    const item = document.createElement("div");
    item.className = "item";
    item.setAttribute("role", "listitem");
    item.setAttribute("draggable", "true");
    item.dataset.index = index;

    // Left container: Rank, Logo, Name
    const left = document.createElement("div");
    left.className = "item-left";

    const rank = document.createElement("div");
    rank.className = "rank-badge";
    if (index === 0) rank.classList.add("rank-1");
    else if (index === 1) rank.classList.add("rank-2");
    else if (index === 2) rank.classList.add("rank-3");
    rank.textContent = index + 1;
    left.appendChild(rank);

    left.appendChild(createLogoElement(name));

    const span = document.createElement("span");
    span.className = "company-name";
    span.textContent = name;
    span.title = name;
    left.appendChild(span);

    item.appendChild(left);

    // Right container: Move Up/Down & Remove buttons
    const actions = document.createElement("div");
    actions.className = "item-actions";

    // Move Up
    const upBtn = document.createElement("button");
    upBtn.className = "order-btn";
    upBtn.title = "Move up";
    upBtn.innerHTML = "▲";
    upBtn.disabled = index === 0;
    upBtn.onclick = (e) => {
      e.stopPropagation();
      moveCompany(index, index - 1);
    };
    actions.appendChild(upBtn);

    // Move Down
    const downBtn = document.createElement("button");
    downBtn.className = "order-btn";
    downBtn.title = "Move down";
    downBtn.innerHTML = "▼";
    downBtn.disabled = index === count - 1;
    downBtn.onclick = (e) => {
      e.stopPropagation();
      moveCompany(index, index + 1);
    };
    actions.appendChild(downBtn);

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.title = `Remove ${name}`;
    removeBtn.innerHTML = "&times;";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeCompany(name);
    };
    actions.appendChild(removeBtn);

    item.appendChild(actions);

    // Drag and Drop Event Handlers
    item.addEventListener("dragstart", (e) => {
      draggedIndex = index;
      item.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", index);
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      draggedIndex = null;
    });

    item.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    item.addEventListener("drop", (e) => {
      e.preventDefault();
      const targetIndex = index;
      if (draggedIndex !== null && draggedIndex !== targetIndex) {
        const movedItem = selected.splice(draggedIndex, 1)[0];
        selected.splice(targetIndex, 0, movedItem);
        saveSelected();
        renderSelected();
      }
    });

    selectedDiv.appendChild(item);
  });

  // Save changes to storage
  saveSelected();

  // Update limit indicators
  if (limitNotice) {
    if (selected.length >= 20) {
      limitNotice.classList.remove("hidden");
    } else {
      limitNotice.classList.add("hidden");
    }
  }
}

function saveSelected() {
  try {
    localStorage.setItem("selectedCompanies", JSON.stringify(selected));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

function saveCustomCompanies() {
  try {
    localStorage.setItem("customCompanies", JSON.stringify(customCompanies));
  } catch (e) {
    console.error("Failed to save custom companies:", e);
  }
}

// Move company up or down
function moveCompany(fromIdx, toIdx) {
  if (toIdx < 0 || toIdx >= selected.length) return;
  const item = selected.splice(fromIdx, 1)[0];
  selected.splice(toIdx, 0, item);
  saveSelected();
  renderSelected();
}

// Render Menu / Catalog
function renderMenu(list) {
  companyList.innerHTML = "";
  const isFull = selected.length >= 20;

  if (list.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "empty-catalog-msg";
    emptyMsg.textContent = "No companies matching your search.";
    companyList.appendChild(emptyMsg);
    catalogCount.textContent = "0 companies found";
    return;
  }

  catalogCount.textContent = `Showing ${list.length} companies`;

  list.forEach(name => {
    const card = document.createElement("div");
    card.className = "company-card";
    card.setAttribute("role", "listitem");

    card.appendChild(createLogoElement(name));

    const span = document.createElement("span");
    span.textContent = name;
    card.appendChild(span);

    if (selected.includes(name)) {
      card.classList.add("selected-card");
      card.title = `${name} is already in your top 20`;
    } else if (isFull) {
      card.classList.add("selected-card");
      card.title = "Your list is full (max 20 reached)";
    } else {
      card.onclick = () => addCompany(name);
      card.title = `Click to add ${name}`;
    }

    companyList.appendChild(card);
  });
}

function addCompany(name) {
  const trimmed = name.trim();
  if (!trimmed) return;
  if (selected.length >= 20) {
    showToast("⚠️ Limit reached! Maximum 20 companies allowed.");
    return;
  }
  if (selected.includes(trimmed)) {
    showToast(`${trimmed} is already in your list!`);
    return;
  }

  selected.push(trimmed);
  renderSelected();
  updateMenu();
  showToast(`Added ${trimmed} to your Dream list! ✨`);
}

function removeCompany(name) {
  selected = selected.filter(n => n !== name);
  renderSelected();
  updateMenu();
  showToast(`Removed ${name}`);
}

function updateMenu() {
  const q = searchInput.value.trim().toLowerCase();
  clearSearchBtn.classList.toggle("hidden", q.length === 0);

  const filtered = q
    ? companies.filter(c => c.toLowerCase().includes(q))
    : companies;
  renderMenu(filtered);
}

// Toggle Catalog Menu
function toggleMenu(forceOpen = null) {
  const shouldOpen = forceOpen !== null ? forceOpen : menu.classList.contains("hidden");
  if (shouldOpen) {
    menu.classList.remove("hidden");
    addBtnIcon.textContent = "✕";
    addBtnText.textContent = "Close Catalog";
    addBtn.classList.remove("btn-primary");
    addBtn.classList.add("btn-secondary");
    updateMenu();
    searchInput.focus();
  } else {
    menu.classList.add("hidden");
    addBtnIcon.textContent = "+";
    addBtnText.textContent = "Browse Catalog";
    addBtn.classList.remove("btn-secondary");
    addBtn.classList.add("btn-primary");
  }
}

// Event Listeners
addBtn.onclick = () => toggleMenu();
if (closeMenuBtn) closeMenuBtn.onclick = () => toggleMenu(false);
if (emptyStateBtn) emptyStateBtn.onclick = () => toggleMenu(true);

searchInput.oninput = updateMenu;

if (clearSearchBtn) {
  clearSearchBtn.onclick = () => {
    searchInput.value = "";
    updateMenu();
    searchInput.focus();
  };
}

// Custom company addition
if (customCompanyForm) {
  customCompanyForm.onsubmit = (e) => {
    e.preventDefault();
    const newName = newCompanyInput.value.trim();
    if (!newName) return;

    if (!companies.includes(newName)) {
      companies.unshift(newName);
      customCompanies.push(newName);
      saveCustomCompanies();

      fetch("/api/companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
      }).catch(() => {/* ignore if running statically or offline */ });
    }

    addCompany(newName);
    newCompanyInput.value = "";
  };
}

// Share / Copy button
if (copyBtn) {
  copyBtn.onclick = () => {
    if (selected.length === 0) {
      showToast("Add some companies first before copying!");
      return;
    }
    const formatted = [
      "✨ Job99 - My Top Dream Companies to Work For:",
      ...selected.map((c, i) => `${i + 1}. ${c}`)
    ].join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(formatted).then(() => {
        showToast("Copied your Dream list to clipboard! 📋");
      }).catch(() => {
        fallbackCopy(formatted);
      });
    } else {
      fallbackCopy(formatted);
    }
  };
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("Copied your Dream list to clipboard! 📋");
  } catch (err) {
    showToast("Could not copy automatically.");
  }
  document.body.removeChild(textarea);
}

// Clear / Reset list
if (clearBtn) {
  clearBtn.onclick = () => {
    if (selected.length === 0) return;
    if (confirm("Are you sure you want to reset your Dream list?")) {
      selected = [];
      saveSelected();
      renderSelected();
      updateMenu();
      showToast("List reset.");
    }
  };
}

// Start
initCompanies();
