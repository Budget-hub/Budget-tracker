self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("budget-cache").then(cache => {
      return cache.addAll(["index.html"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
function updateTTable() {
  const tBody = document.getElementById('t-table-body');
  tBody.innerHTML = "";

  incomeSources.forEach(source => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td></td>
      <td>${source.name}: $${source.amount.toFixed(2)}</td>
    `;
    tBody.appendChild(row);
  });
}