console.log("extension started")
// background.js
let currentSite = null
let startTime = null

chrome.tabs.onActivated.addListener(async (activeInfo) => {

  const tab = await chrome.tabs.get(activeInfo.tabId)
  if (!tab.url) return

  const domain = new URL(tab.url).hostname
  const now = Date.now()

  if (currentSite && startTime) {

    const duration = Math.floor((now - startTime) / 1000)

    // CONNECT TO BACKEND
    fetch("http://localhost:3000/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site: currentSite,
        duration: duration
      })
    })

  }

  currentSite = domain
  startTime = now

})