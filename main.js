chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "fix") {
    var info = document.getElementById("secondary-inner");
    var recommended = document.getElementById("below");

    var loc1 = document.getElementById("primary-inner");
    var loc2 = document.getElementById("secondary");

    if (info && recommended && loc1 && loc2) {
      loc1.appendChild(info);
      loc2.appendChild(recommended);
      console.log("done");
    } else {
      console.log("One or more elements not found");
    }
  }
});
