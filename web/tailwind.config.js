
  export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        fontFamily: {
          heading: ["Poppins", "sans-serif"], 
          body: ["Inter", "sans-serif"],      
        },
        colors: {
          primary: "#1e40af", 
          secondary: "#f97316", 
        },
        boxShadow: {
          soft: "0 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },
    plugins: [],
  };
