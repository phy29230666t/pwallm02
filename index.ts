let deferredPrompt: any;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // 설치 버튼을 보이게 하기
    const installButton = document.getElementById("install-btn");
    if (installButton) {
        installButton.style.display = "block";

        installButton.addEventListener("click", async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === "accepted") {
                    console.log("PWA 설치됨");
                }
                deferredPrompt = null;
            }
        });
    }
});
