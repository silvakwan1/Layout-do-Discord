
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const linkElement = document.getElementById("link_download");

if (isMobile) {
  linkElement.href = "https://play.google.com/store/apps/details?id=com.discord&hl=pt_BR&pli=1";
  linkElement.textContent = "Baixar para android";
} else {
  linkElement.href = "https://discord.com/download";
  linkElement.textContent = "Baixar para Windows";
}
