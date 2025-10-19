import { ImageWithFallback } from './figma/ImageWithFallback';

interface VisionProps {
  visionImage: string;
}

export function Vision({ visionImage }: VisionProps) {
  return (
    <section id="vision" className="py-24 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 mb-6">
              DCHAIN Foundation envisions a world where blockchain technology serves as the
              backbone for a fair, transparent, and accessible digital economy.
            </p>
            <p className="text-gray-300 mb-6">
              We are committed to developing infrastructure that empowers individuals,
              supports innovation, and creates opportunities for everyone to participate
              in the decentralized future.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span className="text-gray-300">
                  Building scalable and secure blockchain infrastructure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span className="text-gray-300">
                  Fostering global developer communities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">•</span>
                <span className="text-gray-300">
                  Promoting education and accessibility in blockchain technology
                </span>
              </li>
            </ul>
          </div>

          <div className="relative h-96 md:h-full border-2 border-orange-500/30 overflow-hidden">
            <ImageWithFallback
              src={visionImage}
              alt="Network Connection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
