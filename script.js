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
      console.log("clicked call button");
    }
  });
