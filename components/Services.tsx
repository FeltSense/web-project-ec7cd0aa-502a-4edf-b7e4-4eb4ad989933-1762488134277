export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Your Fitness Journey
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Experience a comprehensive approach to wellness with our premium services designed to help you achieve your goals
      </p>
    </div>

    {/* Vertical Timeline */}
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-slate-300 to-slate-200 hidden md:block"></div>

      {/* Timeline Items */}
      <div className="space-y-16">
        {/* Service 1 */}
        <div className="relative pl-0 md:pl-24">
          {/* Timeline Dot */}
          <div className="absolute left-6 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  50+ Weekly Group Classes
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Diverse class offerings including HIIT, Yoga, Spin, Boxing, and Strength Training to keep your workouts dynamic and engaging. Expert-led sessions designed for all fitness levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">HIIT</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Yoga</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Spin</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Boxing</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Strength</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative pl-0 md:pl-24">
          {/* Timeline Dot */}
          <div className="absolute left-6 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Certified Personal Trainers
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Work one-on-one with our team of certified professionals who bring specialized expertise in nutrition, injury prevention, and performance optimization to help you reach your peak potential.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Customized Programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Nutrition Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Form Correction</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Goal Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative pl-0 md:pl-24">
          {/* Timeline Dot */}
          <div className="absolute left-6 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Train with confidence using our modern equipment and premium facilities. From cutting-edge cardio machines to comprehensive free weight areas, we provide everything you need for an exceptional workout experience.
                </p>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">10K+</div>
                      <div className="text-xs text-slate-600 mt-1">Sq Ft Space</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">200+</div>
                      <div className="text-xs text-slate-600 mt-1">Equipment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">24/7</div>
                      <div className="text-xs text-slate-600 mt-1">Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative pl-0 md:pl-24">
          {/* Timeline Dot */}
          <div className="absolute left-6 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block"></div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Flexible Membership Plans
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Choose the membership that fits your lifestyle with our flexible plans and no long-term contracts. Enjoy the freedom to pause, upgrade, or cancel anytime while accessing all our premium amenities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Pause Anytime</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">All Amenities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-slate-600 mb-6">Ready to start your fitness journey?</p>
      <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
        Get Started Today
      </button>
    </div>
  </div>
</section>
  );
}