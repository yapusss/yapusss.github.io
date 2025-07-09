if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker terdaftar!"))
    .catch((err) => console.error("Gagal daftar SW:", err));
}
