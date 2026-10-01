import React from "react";
import ReactDOM from "react-dom/client";
import { Mascot } from "page-mascot";

class NfyMascotElement extends HTMLElement {
  connectedCallback() {
    const size = Number(this.getAttribute("size")) || 240;
    
    // URL tuyệt đối trỏ về assets trên GitHub Pages của bạn
    const baseUrl = "https://null-nian1202.github.io/nfy-mascot/";

    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <React.StrictMode>
        <Mascot
          directions={`${baseUrl}mascots/nfy-directions.jpg`}
          reactions={`${baseUrl}mascots/nfy-reactions.png`}
          size={size}
          label="NFY mascot"
        />
      </React.StrictMode>
    );
  }
}

// Đăng ký custom tag nếu chưa có
if (!customElements.get("nfy-mascot")) {
  customElements.define("nfy-mascot", NfyMascotElement);
}
