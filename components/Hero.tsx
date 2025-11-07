export default function Hero() {
  return (
    <section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
        Transform Your Body
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        50+ weekly group classes. Certified personal trainers. State-of-the-art equipment. Your fitness journey starts here.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-sm">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-semibold hover:border-slate-300 transition-colors">
          View Class Schedule
        </button>
      </div>
    </div>

    <div className="max-w-2xl mx-auto mb-20">
      <img 
        src="https://picsum.photos/1200/600" 
        alt="Modern fitness facility" 
        className="w-full h-64 object-cover rounded-2xl shadow-md"
      />
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="text-center">
        <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
        <div className="text-slate-600 font-medium">Weekly Classes</div>
        <div className="text-sm text-slate-500 mt-2">HIIT, Yoga, Spin, Boxing & Strength Training</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
        <div className="text-slate-600 font-medium">Certified Trainers</div>
        <div className="text-sm text-slate-500 mt-2">Specialized expertise in every discipline</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
        <div className="text-slate-600 font-medium">Facility Access</div>
        <div className="text-sm text-slate-500 mt-2">State-of-the-art equipment always available</div>
      </div>
    </div>
  </div>
</section>
  );
}