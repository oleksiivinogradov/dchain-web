export function About() {
  return (
    <section id="about" className="py-24 bg-[#0f1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">About DCHAIN Foundation</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            We are a non-profit organization dedicated to advancing blockchain technology
            and fostering a decentralized future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-orange-500/30 hover:border-orange-500 transition-all bg-[#0a0e27]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="text-white mb-4">Open Source</h3>
            <p className="text-gray-300">
              All our protocols and tools are open source, enabling transparent development
              and community-driven innovation.
            </p>
          </div>

          <div className="p-8 border border-orange-500/30 hover:border-orange-500 transition-all bg-[#0a0e27]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="text-white mb-4">Decentralized</h3>
            <p className="text-gray-300">
              We believe in true decentralization, empowering users with control over their
              data and digital assets.
            </p>
          </div>

          <div className="p-8 border border-orange-500/30 hover:border-orange-500 transition-all bg-[#0a0e27]/50">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="text-white mb-4">Sustainable</h3>
            <p className="text-gray-300">
              Our technology is designed with sustainability in mind, minimizing environmental
              impact while maximizing efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
