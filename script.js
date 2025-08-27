// heart update
document
  .getElementById("card-container-section")
  .addEventListener("click", function (e) {
    const targetData = e.target;
    if (targetData.className.includes("fa-heart")) {
      let heartTotal = document.getElementById("heart-update").innerText;

      heartTotal = Number(heartTotal) + 1;
      document.getElementById("heart-update").innerText = heartTotal;
    }

    // call button
    if (targetData.className.includes("call-btn")) {
      let coinValue = Number(document.getElementById("coin-number").innerText);

      const title = targetData.parentNode.parentNode.children[1].innerText;
      const hotNumber = targetData.parentNode.parentNode.children[3].innerText;

      const serviceName =
        targetData.parentNode.parentNode.children[2].innerText;

      if (coinValue >= 20) {
        alert(`📞 calling ${serviceName} ${hotNumber}...`);
        coinValue = coinValue - 20;
        document.getElementById("coin-number").innerText = coinValue;

        const date = new Date().toLocaleTimeString();

        // create a childnode
        var cardNode = document.createElement("div");
        const callHistoryParent = document.getElementById("card-section");
        cardNode.innerHTML = `
              <div class="flex justify-between items-center bg-gray-100 px-2 py-4 rounded-lg mt-3">
          <div>
            <h1 class="font-semibold">${title}</h1>
            <p>${hotNumber}</p>
          </div>
          <p>${date}</p>
        </div>
            `;

        callHistoryParent.appendChild(cardNode);
      } else {
        alert("❌ You don't have enough coins. You need at least 20 coins.");
      }
    }

    // copy button
    if (targetData.className.includes("copy-btn")) {
      let copyValueTotal = Number(
        document.getElementById("copy-count").innerText
      );
      copyValueTotal = copyValueTotal + 1;
      document.getElementById("copy-count").innerText = copyValueTotal;

      // Copy to clipboard

      const hotNumber = targetData.parentNode.parentNode.children[3].innerText;
      navigator.clipboard
        .writeText(hotNumber)
        .then(() => {
          alert("Number has been copied " + hotNumber);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  });

// call history button
document
  .getElementById("call-history-clear-btn")
  .addEventListener("click", function () {
    document.getElementById("card-section").innerHTML = " ";
  });
