import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Grants() {
  const grantPrograms = [
    {
      title: 'Core Infrastructure Grants',
      amount: 'Up to $250,000',
      description: 'For projects building critical infrastructure, tools, and protocols on DCHAIN.',
      eligibility: [
        'Open-source development',
        'Experienced team with proven track record',
        'Clear technical roadmap',
        'Measurable impact on ecosystem',
      ],
    },
    {
      title: 'Developer Tooling Grants',
      amount: 'Up to $100,000',
      description: 'Supporting the creation of developer tools, SDKs, and documentation.',
      eligibility: [
        'Focus on developer experience',
        'Open-source and well-documented',
        'Addresses existing pain points',
        'Commitment to maintenance',
      ],
    },
    {
      title: 'Research Grants',
      amount: 'Up to $150,000',
      description: 'Funding cutting-edge research in blockchain technology and cryptography.',
      eligibility: [
        'Novel research topics',
        'Academic or research background',
        'Peer review and publication',
        'Knowledge sharing commitment',
      ],
    },
    {
      title: 'Community & Education Grants',
      amount: 'Up to $50,000',
      description: 'Supporting educational initiatives, events, and community building efforts.',
      eligibility: [
        'Community impact focus',
        'Educational content creation',
        'Event organization experience',
        'Diverse and inclusive approach',
      ],
    },
  ];

  const applicationProcess = [
    {
      step: '01',
      title: 'Submit Application',
      description: 'Complete our grant application form with project details, timeline, and budget.',
    },
    {
      step: '02',
      title: 'Initial Review',
      description: 'Our team reviews applications within 2-3 weeks for eligibility and alignment.',
    },
    {
      step: '03',
      title: 'Technical Assessment',
      description: 'Selected proposals undergo technical review by our advisory board.',
    },
    {
      step: '04',
      title: 'Decision & Funding',
      description: 'Approved projects receive funding and ongoing support from our team.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#0a0e27] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3NjA4NTkzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-white mb-6">DCHAIN Grants Program</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Empowering developers, researchers, and communities to build the future
            of decentralized technology. Apply for funding to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Grants Overview */}
      <section className="py-24 bg-[#0f1535]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Grant Programs</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              We offer multiple grant programs to support various aspects of the DCHAIN ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {grantPrograms.map((program, index) => (
              <div
                key={index}
                className="p-8 border border-orange-500/30 hover:border-orange-500 transition-all bg-[#0a0e27]/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white">{program.title}</h3>
                  <span className="text-orange-500">{program.amount}</span>
                </div>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-white">Eligibility:</p>
                  {program.eligibility.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-[#0a0e27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Application Process</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              A transparent and straightforward process from application to funding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-[#0f1535] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">$10M+</div>
              <p className="text-gray-300">Total Grants Awarded</p>
            </div>
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">150+</div>
              <p className="text-gray-300">Projects Funded</p>
            </div>
            <div>
              <div className="text-5xl mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">45</div>
              <p className="text-gray-300">Countries Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0e27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Apply?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Join the growing ecosystem of builders and innovators shaping the future
            of decentralized technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/srZtKLw6hJ17s1wF7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all inline-flex items-center justify-center"
            >
              Apply for Grant
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-transparent text-white border-2 border-orange-500 hover:bg-orange-500/10 transition-all inline-block"
            >
              View FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#0f1535]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white mb-4">Questions About Grants?</h3>
              <p className="text-gray-300 mb-4">
                Our team is here to help you through the application process.
              </p>
              <a href="mailto:grants@dchain.foundation" className="text-orange-500 hover:text-orange-400 transition-colors">
                grants@dchain.foundation
              </a>
            </div>
            <div>
              <h3 className="text-white mb-4">Previous Recipients</h3>
              <p className="text-gray-300 mb-4">
                See examples of funded projects and their impact on the ecosystem.
              </p>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                View Case Studies →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
