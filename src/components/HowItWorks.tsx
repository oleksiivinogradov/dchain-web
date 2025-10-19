import { ArrowRight, Users, Network, Coins, Droplets, Wallet } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0f1535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block">
            HOW IT WORKS
          </h2>
        </div>

        {/* Flow Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {/* Step 1: PROJECTS/USERS */}
            <div className="flex-1 bg-gradient-to-br from-purple-600 to-pink-600 p-6 relative group hover:scale-105 transition-transform">
              <Users className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">PROJECTS/USERS</h3>
            </div>

            <div className="flex flex-col items-center px-2">
              <ArrowRight className="text-blue-400" size={32} />
              <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Add transactions</p>
            </div>

            {/* Step 2: DCHAIN */}
            <div className="flex-1 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 relative group hover:scale-105 transition-transform">
              <Network className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">DCHAIN</h3>
            </div>

            <div className="flex flex-col items-center px-2">
              <ArrowRight className="text-blue-400" size={32} />
              <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Receives fees</p>
            </div>

            {/* Step 3: RECEIVED FEES */}
            <div className="flex-1 bg-gradient-to-br from-cyan-600 to-blue-700 p-6 relative group hover:scale-105 transition-transform">
              <Coins className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">RECEIVED FEES</h3>
            </div>

            <div className="flex flex-col items-center px-2">
              <ArrowRight className="text-blue-400" size={32} />
              <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Distributed to</p>
            </div>

            {/* Step 4: DTOKEN */}
            <div className="flex-1 bg-gradient-to-br from-indigo-600 to-purple-700 p-6 relative group hover:scale-105 transition-transform">
              <Droplets className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">DTOKEN</h3>
            </div>

            <div className="flex flex-col items-center px-2">
              <ArrowRight className="text-orange-400" size={32} />
              <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Profit to</p>
            </div>

            {/* Step 5: Early USERS/PROJECTS */}
            <div className="flex-1 bg-gradient-to-br from-orange-500 to-pink-500 p-6 relative group hover:scale-105 transition-transform">
              <Wallet className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">Early USERS/PROJECTS</h3>
            </div>
          </div>

          {/* Mobile/Tablet Flow */}
          <div className="lg:hidden space-y-4">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6">
              <Users className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">PROJECTS/USERS</h3>
            </div>
            
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="text-blue-400 rotate-90" size={32} />
                <p className="text-xs text-gray-400 mt-1">Add transactions on DChain</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6">
              <Network className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">DCHAIN</h3>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="text-blue-400 rotate-90" size={32} />
                <p className="text-xs text-gray-400 mt-1">Receives transaction fees</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6">
              <Coins className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">RECEIVED FEES</h3>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="text-blue-400 rotate-90" size={32} />
                <p className="text-xs text-gray-400 mt-1">Fees distributed to liquidity</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
              <Droplets className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">DTOKEN</h3>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <ArrowRight className="text-orange-400 rotate-90" size={32} />
                <p className="text-xs text-gray-400 mt-1">Receive profit from distributed DTOKEN</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-6">
              <Wallet className="text-white mb-3 mx-auto" size={32} />
              <h3 className="text-white text-center">Early USERS/PROJECTS</h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-[#0a0e27] border border-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              1
            </div>
            <h3 className="text-white mb-3">Add Transactions</h3>
            <p className="text-gray-300">
              Projects and users add transactions on the DChain network
            </p>
          </div>

          <div className="text-center p-6 bg-[#0a0e27] border border-cyan-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              2
            </div>
            <h3 className="text-white mb-3">Collect Fees</h3>
            <p className="text-gray-300">
              DChain receives transaction fees which are aggregated
            </p>
          </div>

          <div className="text-center p-6 bg-[#0a0e27] border border-orange-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              3
            </div>
            <h3 className="text-white mb-3">Distribute Rewards</h3>
            <p className="text-gray-300">
              Fees are distributed to liquidity providers and early birds receive DToken rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
