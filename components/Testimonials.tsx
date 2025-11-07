export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Real Results from Real Members
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Discover how Pulse Fitness has transformed lives through personalized training and unwavering support
      </p>
    </div>

    {/* Side-by-Side Comparison Layout */}
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      {/* Left Side - Featured Testimonial */}
      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              SM
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-slate-900">Sarah Mitchell</h3>
              <p className="text-sm text-slate-600">Marketing Director, 38</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-base leading-relaxed mb-4">
              "I lost 32 pounds in 5 months and gained confidence I didn't know I had. The trainers at Pulse Fitness created a program that fit my busy schedule and actually worked. No gimmicks, just real guidance and accountability."
            </p>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 font-medium">Weight Loss Journey</span>
            <span className="text-blue-600 font-semibold">-32 lbs in 5 months</span>
          </div>
        </div>
      </div>

      {/* Right Side - Featured Testimonial */}
      <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              JC
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-slate-900">James Chen</h3>
              <p className="text-sm text-slate-600">Software Engineer, 29</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-base leading-relaxed mb-4">
              "After years of desk work destroying my posture and energy, Pulse Fitness helped me build real strength. The personalized approach meant exercises that addressed my specific issues. I'm stronger now than I was in college."
            </p>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 font-medium">Strength Building</span>
            <span className="text-blue-600 font-semibold">+45% strength gain</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Row - Two More Testimonials */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Bottom Left */}
      <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold">
            RP
          </div>
          <div className="ml-4">
            <h3 className="text-base font-semibold text-slate-900">Rachel Patel</h3>
            <p className="text-sm text-slate-600">Teacher, 42</p>
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 text-base leading-relaxed">
          "The group classes are incredible. I've made friends while getting in the best shape of my life. The instructors know everyone by name and push you just the right amount. It's become the highlight of my week."
        </p>
      </div>

      {/* Bottom Right */}
      <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold">
            MT
          </div>
          <div className="ml-4">
            <h3 className="text-base font-semibold text-slate-900">Michael Torres</h3>
            <p className="text-sm text-slate-600">Business Owner, 51</p>
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 text-base leading-relaxed">
          "At 51, I thought my best years were behind me. Pulse Fitness proved me wrong. My energy is through the roof, my blood pressure is down, and I feel 10 years younger. Worth every penny."
        </p>
      </div>
    </div>
  </div>
</section>
  );
}