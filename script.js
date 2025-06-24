let incomeSources = [];

document.getElementById('income-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('income-name').value.trim();
  const amount = parseFloat(document.getElementById('income-amount').value);

  if (!name || isNaN(amount)) return;

  incomeSources.push({ name, amount });
  updateIncomeList();
  e.target.reset();
});

function updateIncomeList() {
  const list = document.getElementById('income-list');
  list.innerHTML = '';

  let total = 0;
  incomeSources.forEach((source, index) => {
    total += source.amount;
    const li = document.createElement('li');
    li.innerHTML = \`\${source.name}: $\${source.amount.toFixed(2)} <button onclick="removeIncome(\${index})">Remove</button>\`;
    list.appendChild(li);
  });

  document.getElementById('total-income').textContent = total.toFixed(2);
}

function removeIncome(index) {
  incomeSources.splice(index, 1);
  updateIncomeList();
}
