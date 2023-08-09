document.addEventListener("DOMContentLoaded", function() {
  const itemList = document.getElementById("itemList");
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const addBtn = document.getElementById("addBtn");
  const totalElement = document.getElementById("total");

  let total = 0;

  addBtn.addEventListener("click", function() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description && amount) {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `
        ${description} - $${amount.toFixed(2)}
        <button class="btn btn-danger btn-sm float-end remove-btn">Remove</button>
      `;

      itemList.appendChild(listItem);
      total += amount;
      totalElement.innerText = `Total: $${total.toFixed(2)}`;

      // Clear inputs
      descriptionInput.value = "";
      amountInput.value = "";

      // Add event listener for remove button
      const removeBtn = listItem.querySelector(".remove-btn");
      removeBtn.addEventListener("click", function() {
        total -= amount;
        totalElement.innerText = `Total: $${total.toFixed(2)}`;
        listItem.remove();
      });
    }
  });
});