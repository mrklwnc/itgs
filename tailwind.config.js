/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mrk: {
          darkblue: "#0D1B2A",
          bluecharcoal: "#1B263B",
          chambray: "#415A77",
          shipcove: "#778DA9",
          blacksqueze: "#E0E1DD",
        },
      },
      backgroundImage: {
        products: "url('/itgs/devices/hero-section.svg')",
        jeneal: "url('/team/Jeneal.png')",
        jayvie: "url('/team/Jayvie.png')",
        lewence: "url('/team/Lewence.png')",
        rayunisky: "url('/team/Rayunisky.png')",
        shawn: "url('/team/Shawn.png')",
        office: "url('/office.png')",
        rocketship: "url('/itgs/elements/rocket.svg')",
        dashedline: "url('/itgs/elements/dashed-tools.svg')",
        mailman: "url('/itgs/elements/icons/mail.svg')",
      },
      backgroundSize: {
        large: "80%",
        16: "4rem",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
