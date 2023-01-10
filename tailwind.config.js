/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'charger': "url('@/assets/desktop/Charger.jpg')",
        'model-3': "url('@/assets/desktop/Model3.jpg')",
        'model-s': "url('@/assets/desktop/ModelS.jpg')",
        'model-x': "url('@/assets/desktop/ModelX.jpg')",
        'model-y': "url('@/assets/desktop/ModelY.jpg')",
        'solar-panel': "url('@/assets/desktop/SolarPanel.jpg')",
        'solar-roof': "url('@/assets/desktop/SolarRoof.jpg')",
        'mb-charger': "url('@/assets/mobile/Charger.jpg')",
        'mb-model-3': "url('@/assets/mobile/Model3.jpg')",
        'mb-model-s': "url('@/assets/mobile/ModelS.jpg')",
        'mb-model-x': "url('@/assets/mobile/ModelX.jpg')",
        'mb-model-y': "url('@/assets/mobile/ModelY.jpg')",
        'mb-solar-panel': "url('@/assets/mobile/SolarPanel.jpg')",
        'mb-solar-roof': "url('@/assets/mobile/SolarRoof.jpg')",
      }
    },
  },
  plugins: [],
}
