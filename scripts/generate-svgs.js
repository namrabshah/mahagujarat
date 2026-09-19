const fs = require("fs");
const path = "public/images/products";

function svg(name, body) {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="800" height="640" role="img">
  <defs>
    <linearGradient id="steel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8ECF0"/>
      <stop offset="35%" stop-color="#A8B2BD"/>
      <stop offset="70%" stop-color="#6B7682"/>
      <stop offset="100%" stop-color="#3D4650"/>
    </linearGradient>
    <linearGradient id="steelLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F3F5F7"/>
      <stop offset="50%" stop-color="#C5CDD6"/>
      <stop offset="100%" stop-color="#7A8794"/>
    </linearGradient>
    <linearGradient id="brass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0D78C"/>
      <stop offset="50%" stop-color="#C9A227"/>
      <stop offset="100%" stop-color="#8A6B12"/>
    </linearGradient>
    <linearGradient id="navy" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E3A5F"/>
      <stop offset="100%" stop-color="#0B1D36"/>
    </linearGradient>
    <radialGradient id="bg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="320" fill="url(#bg)"/>
  <rect x="0" y="0" width="400" height="4" fill="#0B1D36"/>
  ${body}
</svg>`;
  fs.writeFileSync(`${path}/${name}.svg`, content);
}

svg(
  "ms-pipes",
  `<g transform="translate(50,90)">
    <ellipse cx="40" cy="70" rx="36" ry="18" fill="url(#steel)"/>
    <rect x="4" y="20" width="72" height="50" fill="url(#steelLight)"/>
    <ellipse cx="40" cy="20" rx="36" ry="18" fill="url(#steel)"/>
    <ellipse cx="40" cy="20" rx="22" ry="10" fill="#2A3340"/>
  </g>
  <g transform="translate(155,85)">
    <rect x="0" y="20" width="70" height="110" fill="url(#steelLight)" stroke="#4B5563" stroke-width="2"/>
    <rect x="8" y="28" width="54" height="94" fill="#374151" opacity="0.35"/>
  </g>
  <g transform="translate(260,95)">
    <rect x="0" y="15" width="90" height="100" fill="url(#steel)" stroke="#4B5563" stroke-width="2"/>
    <rect x="10" y="25" width="70" height="80" fill="#1F2937" opacity="0.4"/>
  </g>`,
);

svg(
  "gi-pipes",
  `<g transform="translate(70,80)">
    <ellipse cx="50" cy="80" rx="42" ry="20" fill="url(#steelLight)"/>
    <rect x="8" y="20" width="84" height="60" fill="url(#steel)"/>
    <ellipse cx="50" cy="20" rx="42" ry="20" fill="#D1D5DB"/>
    <ellipse cx="50" cy="20" rx="26" ry="12" fill="#4B5563"/>
  </g>
  <g transform="translate(200,70)">
    <ellipse cx="55" cy="90" rx="48" ry="22" fill="url(#steel)"/>
    <rect x="7" y="15" width="96" height="75" fill="url(#steelLight)"/>
    <ellipse cx="55" cy="15" rx="48" ry="22" fill="#E5E7EB"/>
    <ellipse cx="55" cy="15" rx="30" ry="14" fill="#374151"/>
  </g>`,
);

svg(
  "ms-fittings",
  `<path d="M80 160 L140 160 L140 100 L200 100 L200 160 L260 160 L260 220 L200 220 L200 280 L140 280 L140 220 L80 220 Z" fill="url(#steel)" stroke="#4B5563" stroke-width="2"/>
  <circle cx="300" cy="160" r="50" fill="none" stroke="url(#steel)" stroke-width="28"/>
  <circle cx="300" cy="160" r="28" fill="#E2E8F0"/>`,
);

svg(
  "gi-fittings",
  `<path d="M90 200 Q90 100 190 100" fill="none" stroke="url(#steelLight)" stroke-width="36"/>
  <circle cx="90" cy="200" r="22" fill="url(#steel)"/>
  <circle cx="190" cy="100" r="22" fill="url(#steel)"/>
  <rect x="230" y="120" width="110" height="80" rx="8" fill="url(#steelLight)" stroke="#64748B"/>
  <rect x="250" y="140" width="70" height="40" fill="#475569" opacity="0.35"/>`,
);

svg(
  "flanges",
  `<g transform="translate(70,55)">
    <circle cx="100" cy="105" r="95" fill="url(#brass)" stroke="#8A6B12" stroke-width="2"/>
    <circle cx="100" cy="105" r="42" fill="#F8FAFC" stroke="#8A6B12" stroke-width="3"/>
    <circle cx="100" cy="28" r="10" fill="#5C4A10"/>
    <circle cx="100" cy="182" r="10" fill="#5C4A10"/>
    <circle cx="28" cy="105" r="10" fill="#5C4A10"/>
    <circle cx="172" cy="105" r="10" fill="#5C4A10"/>
    <circle cx="48" cy="48" r="10" fill="#5C4A10"/>
    <circle cx="152" cy="48" r="10" fill="#5C4A10"/>
    <circle cx="48" cy="162" r="10" fill="#5C4A10"/>
    <circle cx="152" cy="162" r="10" fill="#5C4A10"/>
  </g>
  <g transform="translate(210,70)" opacity="0.92">
    <circle cx="90" cy="95" r="85" fill="url(#steel)" stroke="#4B5563" stroke-width="2"/>
    <circle cx="90" cy="95" r="38" fill="#F1F5F9" stroke="#4B5563" stroke-width="3"/>
  </g>`,
);

svg(
  "valves",
  `<rect x="150" y="180" width="100" height="70" rx="8" fill="url(#steel)"/>
  <rect x="120" y="205" width="40" height="28" rx="4" fill="url(#steelLight)"/>
  <rect x="240" y="205" width="40" height="28" rx="4" fill="url(#steelLight)"/>
  <rect x="185" y="110" width="30" height="75" fill="url(#steel)"/>
  <circle cx="200" cy="95" r="45" fill="url(#navy)" stroke="#C9A227" stroke-width="3"/>
  <circle cx="200" cy="95" r="12" fill="#C9A227"/>
  <rect x="192" y="55" width="16" height="80" fill="#C9A227" opacity="0.85"/>
  <rect x="160" y="87" width="80" height="16" fill="#C9A227" opacity="0.85"/>`,
);

svg(
  "cocks",
  `<rect x="160" y="150" width="80" height="100" rx="10" fill="url(#brass)"/>
  <rect x="130" y="180" width="40" height="30" rx="4" fill="url(#brass)"/>
  <rect x="230" y="180" width="40" height="30" rx="4" fill="url(#brass)"/>
  <rect x="185" y="90" width="30" height="65" fill="url(#brass)"/>
  <circle cx="200" cy="80" r="35" fill="#0B1D36"/>
  <rect x="195" y="50" width="10" height="60" fill="#C9A227"/>`,
);

svg(
  "nipples",
  `<g transform="translate(60,120)">
    <rect x="0" y="20" width="120" height="50" rx="6" fill="url(#steel)"/>
    <path d="M0 20 L0 70 M8 20 L8 70 M16 20 L16 70" stroke="#4B5563" stroke-width="2"/>
    <path d="M104 20 L104 70 M112 20 L112 70 M120 20 L120 70" stroke="#4B5563" stroke-width="2"/>
  </g>
  <g transform="translate(210,140)">
    <rect x="0" y="15" width="90" height="40" rx="5" fill="url(#brass)"/>
    <path d="M0 15 L0 55 M7 15 L7 55 M14 15 L14 55" stroke="#8A6B12" stroke-width="2"/>
    <path d="M76 15 L76 55 M83 15 L83 55 M90 15 L90 55" stroke="#8A6B12" stroke-width="2"/>
  </g>`,
);

svg(
  "couplings",
  `<rect x="80" y="120" width="240" height="80" rx="12" fill="url(#steel)" stroke="#4B5563" stroke-width="2"/>
  <rect x="100" y="135" width="200" height="50" rx="6" fill="#64748B" opacity="0.35"/>
  <path d="M95 120 L95 200 M110 120 L110 200" stroke="#334155" stroke-width="3"/>
  <path d="M290 120 L290 200 M305 120 L305 200" stroke="#334155" stroke-width="3"/>`,
);

svg(
  "elbows",
  `<path d="M90 240 L90 140 Q90 90 140 90 L250 90" fill="none" stroke="url(#steel)" stroke-width="48"/>
  <path d="M90 240 L90 140 Q90 90 140 90 L250 90" fill="none" stroke="#94A3B8" stroke-width="18" opacity="0.35"/>
  <circle cx="90" cy="240" r="28" fill="url(#steelLight)" stroke="#475569"/>
  <circle cx="250" cy="90" r="28" fill="url(#steelLight)" stroke="#475569"/>`,
);

svg(
  "tees",
  `<rect x="170" y="60" width="60" height="200" rx="8" fill="url(#steel)"/>
  <rect x="80" y="130" width="240" height="60" rx="8" fill="url(#steel)"/>
  <circle cx="110" cy="160" r="22" fill="#E2E8F0" stroke="#475569"/>
  <circle cx="290" cy="160" r="22" fill="#E2E8F0" stroke="#475569"/>
  <circle cx="200" cy="80" r="22" fill="#E2E8F0" stroke="#475569"/>`,
);

svg(
  "reducers",
  `<path d="M70 100 L180 120 L180 200 L70 220 Z" fill="url(#steel)" stroke="#475569"/>
  <path d="M180 120 L330 140 L330 180 L180 200 Z" fill="url(#steelLight)" stroke="#475569"/>
  <ellipse cx="70" cy="160" rx="18" ry="60" fill="url(#steelLight)"/>
  <ellipse cx="330" cy="160" rx="12" ry="28" fill="url(#steel)"/>`,
);

svg(
  "bushes",
  `<polygon points="140,80 260,80 280,240 120,240" fill="url(#steel)" stroke="#475569" stroke-width="2"/>
  <polygon points="160,110 240,110 250,210 150,210" fill="#64748B" opacity="0.4"/>
  <rect x="155" y="70" width="90" height="20" fill="url(#steelLight)"/>`,
);

svg(
  "caps",
  `<rect x="130" y="100" width="140" height="120" rx="10" fill="url(#steel)"/>
  <rect x="145" y="115" width="110" height="90" fill="#475569" opacity="0.3"/>
  <polygon points="200,70 240,110 160,110" fill="url(#steelLight)" stroke="#475569"/>
  <circle cx="200" cy="160" r="18" fill="#0B1D36"/>`,
);

svg(
  "unions",
  `<rect x="70" y="130" width="90" height="60" rx="8" fill="url(#steel)"/>
  <rect x="240" y="130" width="90" height="60" rx="8" fill="url(#steel)"/>
  <circle cx="200" cy="160" r="55" fill="url(#steelLight)" stroke="#475569" stroke-width="4"/>
  <circle cx="200" cy="160" r="28" fill="#E2E8F0"/>
  <rect x="185" y="120" width="30" height="80" fill="#64748B" opacity="0.5"/>`,
);

svg(
  "accessories",
  `<circle cx="120" cy="160" r="55" fill="url(#steel)"/>
  <circle cx="120" cy="160" r="25" fill="#E2E8F0"/>
  <rect x="200" y="120" width="130" height="80" rx="10" fill="url(#brass)"/>
  <path d="M210 120 L210 200 M220 120 L220 200 M310 120 L310 200 M320 120 L320 200" stroke="#8A6B12" stroke-width="2"/>`,
);

svg(
  "ball-valve",
  `<rect x="100" y="170" width="200" height="60" rx="10" fill="url(#steel)"/>
  <circle cx="200" cy="200" r="35" fill="url(#steelLight)" stroke="#475569" stroke-width="3"/>
  <rect x="190" y="70" width="20" height="110" rx="4" fill="#2563EB"/>
  <rect x="155" y="55" width="90" height="28" rx="6" fill="#1D4ED8"/>`,
);

svg(
  "gate-valve",
  `<rect x="145" y="170" width="110" height="80" rx="10" fill="url(#steel)"/>
  <rect x="110" y="195" width="40" height="30" rx="4" fill="url(#steelLight)"/>
  <rect x="250" y="195" width="40" height="30" rx="4" fill="url(#steelLight)"/>
  <rect x="185" y="110" width="30" height="65" fill="url(#steel)"/>
  <circle cx="200" cy="90" r="48" fill="#1E3A5F" stroke="#C9A227" stroke-width="3"/>
  <circle cx="200" cy="90" r="10" fill="#C9A227"/>
  <rect x="194" y="48" width="12" height="84" fill="#C9A227"/>
  <rect x="158" y="84" width="84" height="12" fill="#C9A227"/>`,
);

svg(
  "butterfly-valve",
  `<circle cx="200" cy="175" r="70" fill="#1E40AF" stroke="#0B1D36" stroke-width="4"/>
  <ellipse cx="200" cy="175" rx="18" ry="55" fill="url(#steel)"/>
  <rect x="192" y="60" width="16" height="90" fill="#111827"/>
  <rect x="150" y="45" width="100" height="24" rx="4" fill="#111827"/>`,
);

svg(
  "globe-valve",
  `<path d="M140 220 Q140 150 200 130 Q260 150 260 220 Z" fill="url(#steel)"/>
  <rect x="115" y="200" width="50" height="30" rx="4" fill="url(#steelLight)"/>
  <rect x="235" y="200" width="50" height="30" rx="4" fill="url(#steelLight)"/>
  <rect x="185" y="90" width="30" height="55" fill="url(#steel)"/>
  <circle cx="200" cy="75" r="40" fill="url(#navy)" stroke="#94A3B8" stroke-width="3"/>
  <circle cx="200" cy="75" r="8" fill="#C9A227"/>`,
);

console.log("SVGs created:", fs.readdirSync(path).length);
