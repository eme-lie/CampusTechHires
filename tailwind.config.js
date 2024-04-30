/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        Neutral100_Base_Background: "#fafafa",
        Neutral200_Secondary_Background: "#ebf3ff",
        Neutral300_Border: "#bdbdbd",
        Neutral400: "#f2f2f2",
        Neutral600_Text_extra: "#757575",
        Neutral900_Text_main: "#0d3060",
        primaryColor: "#0c78f1",
        success: "#4caf50",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "student-hero-pattern": "url('src/assets/images/students.jpg')",
        "employer-hero-pattern": "url('src/assets/images/employer.png')",
        "how-it-works-step1-image": "url('src/assets/images/step1.svg')",
        "how-it-works-step2-image": "url('src/assets/images/step2.svg')",
        "how-it-works-step3-image": "url('src/assets/images/step3.svg')",
        "get-started-image":
          "url('src/assets/images/group-of-students-landscape.svg')",
        "signup-login-background":
          "url('src/assets/images/signupandloginbackground.png')",
        signupImage: "url('src/assets/images/signup-image.png')",
        "home-image": "url('src/assets/images/home-hero-imagee.png')",
        "background-image-for-job":
          "url('src/assets/images/background-for-job.svg')",
        "job-image": "url('src/assets/images/background-for-job.png')",
        loginImage: "url('src/assets/images/student-group.png')",
      },
      width: {
        30: "30%",
        55: "55%",
        45: "45%",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
