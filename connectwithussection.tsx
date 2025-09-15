import React from 'react'

const ConnectWithUs = () => {
  return (
    <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Connect With Us</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Have questions or need assistance with your real estate journey? Our team is here to help — reach out anytime!
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {/* Phone */}
      <div className="flex items-start gap-4">
        <span className="text-amber-600 text-3xl">📞</span>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <span className="text-amber-600 text-3xl">📧</span>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Email</h4>
          <p className="text-gray-600">contact@hmproperties.in</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4">
        <span className="text-amber-600 text-3xl">📍</span>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Office</h4>
          <p className="text-gray-600">Andheri East, Mumbai, Maharashtra</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ConnectWithUs