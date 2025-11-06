function getMobileOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(ua)) return "Android";
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "iOS";
  return "Unknown";
}

const deviceType = getMobileOS();
document.getElementById("device-info").textContent = `You are using: ${deviceType}`;

// Optional: redirect or customize
if (deviceType === "Android") {
  window.location.href = "/ble_audio/android.html";
  // window.location.href = "https://play.google.com/store/apps/details?id=your.app.id";
} else if (deviceType === "iOS") {
  window.location.href = "/ble_audio/ios.html";
  // window.location.href = "https://apps.apple.com/app/idYOUR_APP_ID";
} else {
  window.location.href = "/ble_audio/other.html";
  //window.location.href = "https://apps.apple.com/app/idYOUR_APP_ID";
}

// Optional: log to server
/*
fetch("/log-device", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ device: deviceType })
});
*/
