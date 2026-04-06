const panel = document.getElementById("side-panel");
const pinToggle = document.getElementById("pin-toggle");
const hoverHandle = document.getElementById("hover-handle");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

let isPinned = true;

function syncPanelState() {
  panel.classList.toggle("is-pinned", isPinned);
  pinToggle.setAttribute("aria-pressed", String(isPinned));
  pinToggle.textContent = isPinned ? "Unpin panel" : "Pin panel";
}

pinToggle.addEventListener("click", () => {
  isPinned = !isPinned;
  syncPanelState();
});

hoverHandle.addEventListener("mouseenter", () => {
  if (!isPinned) {
    panel.classList.add("is-open");
  }
});

hoverHandle.addEventListener("click", () => {
  if (!isPinned) {
    panel.classList.toggle("is-open");
  }
});

panel.addEventListener("mouseleave", () => {
  if (!isPinned) {
    panel.classList.remove("is-open");
  }
});

function activateTab(button) {
  const targetId = button.getAttribute("aria-controls");

  for (const item of tabButtons) {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  }

  for (const panelItem of tabPanels) {
    const selected = panelItem.id === targetId;
    panelItem.classList.toggle("active", selected);
    panelItem.hidden = !selected;
  }
}

for (const button of tabButtons) {
  button.addEventListener("click", () => activateTab(button));
}

syncPanelState();
panel.classList.add("is-open");
