import React from 'react'

export default function Hero() {
  return (
    <section className="text-center py-16">
    {/* Background Image */}
    <div className="relative flex justify-center max-w-6xl mx-auto">
      <img
        src="/media/images/homeHero.png"
        alt="Hero Image"
        className="w-3/4 h-auto"
      />
    </div>

    {/* Headline */}
    <h1 className="text-4xl font-bold text-gray-700 mt-8">Invest in everything</h1>

    {/* Subtitle */}
    <p className="text-gray-600 text-lg mt-4">
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
    </p>

    {/* Call to Action Button */}
    <div className="mt-8">
      <a
        href="http://kite.com"
        className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Sign up now
      </a>
    </div>
  </section>
  )
}
