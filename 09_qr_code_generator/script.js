const input = document.querySelector(".input");
const output = document.querySelector(".output");
const input_url = document.getElementById("inputUrl");
const qr_code = document.getElementById("qrCode");
const qr_background = document.querySelector(".qr-background-div");

const generateQr = () => {
  const url_text = input_url.value;

  new QRCode(qr_code, {
    text: url_text,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  input.style.display = "none";
  output.style.display = "flex";
};

const downloadQr = () => {
  html2canvas(qr_background, {
    allowTaint: true,
  }).then((canvas) => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "qr_code";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
};

const shareQr = () => {
  navigator.clipboard.writeText(input_url.value);
};
