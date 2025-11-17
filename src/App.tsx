import React from 'react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover what solar can do for <span className="text-orange-600">YOUR</span> home — clearly, honestly, and without pressure.
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Most homeowners don’t install solar because it feels confusing, risky, or expensive.  
            We built KnowYourSolar to change that — by giving you a simple, personalized report that explains your solar potential in plain language.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-200">
            Check My Home’s Solar Potential
          </button>
          <p className="mt-4 text-gray-600 italic">
            No salespeople. No technical jargon. No strings attached — just clarity.
          </p>
        </div>
      </section>

      {/* Why Solar Helps You */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            🌱 Why Solar Helps You
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Solar isn’t complicated — it’s just misunderstood. Here’s what most homeowners don’t know:
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Solar saves most households tens of thousands of dollars over time.",
                desc: "Electricity rates rise every year, but sunlight stays free. Solar lets you lock in low-cost energy for decades."
              },
              {
                title: "Solar increases your home’s value — even if you don’t stay long-term.",
                desc: "Homes with solar sell for 4–5% more on average. That means you often make money even before you finish paying off the system."
              },
              {
                title: "Solar reduces your carbon footprint dramatically.",
                desc: "Installing a typical home solar system has the same impact as planting hundreds of trees."
              },
              {
                title: "Solar works in more places than people think.",
                desc: "You don’t need a perfect roof. You don’t even need a roof at all — ground solar, carport solar, pole-mounted solar, and backyard solar structures are real, affordable options that most people never hear about."
              },
              {
                title: "Solar is simpler than it looks — when someone walks you through it.",
                desc: "That’s the entire purpose of this tool: To make solar easy, understandable, and personal."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 p-5 border-l-4 border-orange-400 bg-orange-50 rounded-r-lg">
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-700">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            🧭 How KnowYourSolar Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "Step 1",
                title: "You upload a few photos of your home.",
                desc: "We guide you through exactly how to take them. Your photos are never shared or sold — they’re used only for your solar analysis."
              },
              {
                step: "Step 2",
                title: "Our system analyzes your home using weather, shading, and sunlight data.",
                desc: "We look at your roof, but also your yard and other structures — because there are many ways to install solar."
              },
              {
                step: "Step 3",
                title: "You get your personalized solar report.",
                desc: "No jargon. No pressure. Just a clear explanation of: How much solar energy you can generate, Where panels would work best, How much you could save per year, Your estimated payback time, Potential increase in home value, Environmental impact."
              },
              {
                step: "Step 4",
                title: "Optional: If you want help moving forward, we connect you with verified local installers.",
                desc: "If not, that’s completely fine too — the report is yours to keep."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-orange-600 font-bold mb-2">{item.step}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar is NOT Just Roof Panels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            ☀️ Solar is NOT Just Roof Panels
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Most people think solar only works on the roof, but that’s not true.  
            Your report will evaluate all solar options:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Roof Solar – great when roof angle and shading are ideal",
              "Ground Solar – lower cost, higher efficiency, easier maintenance",
              "Carport Solar – shade your car and power your home",
              "Pole-Mounted Solar – can track the sun for 25–35% more energy",
              "Shed/Garage Solar – perfect for properties with small structures",
              "Patio/Pergola Solar – beautiful home upgrades that generate power"
            ].map((option, i) => (
              <div key={i} className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <p className="text-gray-800">{option}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg text-gray-700 font-medium">
            Your property likely has more solar potential than you realize.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">❤️ Our Mission</h2>
          <p className="text-gray-800 text-lg mb-6">
            KnowYourSolar exists for one purpose:  
            to help homeowners make confident, informed decisions about solar energy.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm inline-block">
            <p className="text-gray-700">
              There are no hidden motives.  
              We don’t pressure you to install solar.  
              We don’t sell your information.  
              We simply give you the knowledge and clarity you deserve — so you can decide what’s best for your home, your finances, and your future.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔐 Privacy Assurance</h3>
          <p className="text-gray-700">
            Your photos stay private.  
            Your data stays yours.
          </p>
          <p className="mt-2 text-gray-600">
            We use your photos only to generate your personalized report.  
            We never sell, share, or store images for marketing or training.  
            You stay in control of your information at every step.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-md border border-amber-200">
            <p className="text-2xl font-bold text-orange-600 mb-2">“A complete personalized solar analysis — for just $20.”</p>
            <ul className="text-gray-700 mt-4 space-y-1">
              <li>• No subscriptions.</li>
              <li>• No upsells.</li>
              <li>• No pressure.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Your $20 helps support this public tool so we can keep providing clear, unbiased solar insights to homeowners everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Before Upload */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🏡 Let’s see what solar can do for your home.</h3>
          <p className="text-gray-700 mb-6">
            To analyze your solar potential, we’ll ask for a few simple photos.  
            Don’t worry — we’ll guide you through it.
          </p>
          <div className="bg-green-50 p-5 rounded-lg inline-block border border-green-200">
            <p className="text-green-800 font-medium">
              You’re doing something great:  
              You’re learning how to reduce your energy costs and help the planet.  
              We’re here to make it easy.
            </p>
          </div>
        </div>
      </section>

      {/* After Report */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎉 Your home has real solar potential — here’s what you can do with it.</h3>
          <p className="text-gray-800 mb-6">
            Whether your numbers are high, moderate, or low, your report will explain your options clearly.  
            Even if solar isn’t a perfect fit for your roof, your yard or outbuildings might still be ideal.
          </p>
          <p className="text-lg font-semibold text-emerald-800">
            This is your home’s solar roadmap.  
            Use it however you choose.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 leading-relaxed">
            KnowYourSolar is a mission-driven project built to help homeowners understand the real benefits of solar energy.  
            Our goal is simple: make solar knowledge accessible, honest, and empowering for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
