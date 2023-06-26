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
        jeneal: "url('/team/Jeneal.png')",
        jayvie: "url('/team/Jayvie.png')",
        lewence: "url('/team/Lewence.png')",
        rayunisky: "url('/team/Rayunisky.png')",
        shawn: "url('/team/Shawn.png')",
        office: "url('/office.png')",
        rocketship: "url('/itgs/elements/rocket.svg')",
        dashedline: "url('/itgs/elements/dashed-tools.svg')",
      },
    },
  },
  plugins: [],
};
