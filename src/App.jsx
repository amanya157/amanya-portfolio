// =========================================================
// MAIN NAVIGATION
// =========================================================

import Navbar from "./components/Navbar";

// =========================================================
// MAIN WEBSITE SECTIONS
// =========================================================

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Training from "./sections/Training";
import Services from "./sections/Services";
import Support from "./sections/Support";
import Contact from "./sections/Contact";
import AdminDashboard from "./pages/AdminDashboard";

// =========================================================
// FOOTER & AI ASSISTANT
// =========================================================

import Footer from "./components/Footer";
import AIAssistant from "./sections/AIAssistant";

// =========================================================
// ADMIN PAGE
// =========================================================

import Admin from "./pages/Admin";

// =========================================================
// MAIN APP
// =========================================================

function App() {

  // =======================================================
  // CHECK CURRENT URL
  // =======================================================

  const currentPath = window.location.pathname;

  // =======================================================
  // ADMIN LOGIN PAGE
  // =======================================================

 if (currentPath === "/admin") {
  return <Admin />;
}

if (currentPath === "/admin/dashboard") {
  return <AdminDashboard />;
}

  // =======================================================
  // MAIN PORTFOLIO
  // =======================================================

  return (
    <>
      {/* Website navigation */}
      <Navbar />

      {/* Main sections */}
      <Hero />
      <About />
      <Skills />
      <Training />
      <Services />
      <Support />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* AI Assistant */}
      <AIAssistant />
    </>
  );
}

export default App;