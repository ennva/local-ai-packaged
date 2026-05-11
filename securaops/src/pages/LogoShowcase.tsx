import React from 'react';
import Logo from '../components/Logo';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="container-custom py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            SecuraOps Brand Identity
          </h1>
          <p className="text-lg text-neutral-600 font-roboto max-w-2xl mx-auto">
            Three distinctive logo concepts embodying controlled simplicity and digital serenity.
            Each design represents the perfect blend of technology and trust.
          </p>
        </div>

        {/* Color Palette Section */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Brand Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-full h-24 rounded-lg bg-primary mb-2 shadow-md"></div>
              <p className="font-montserrat font-semibold text-sm">Deep Blue</p>
              <p className="text-xs text-neutral-600">#0D3B66</p>
              <p className="text-xs text-neutral-500 mt-1">Trust • Stability</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 rounded-lg bg-secondary mb-2 shadow-md"></div>
              <p className="font-montserrat font-semibold text-sm">Turquoise</p>
              <p className="text-xs text-neutral-600">#00BFA6</p>
              <p className="text-xs text-neutral-500 mt-1">Innovation • Clarity</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 rounded-lg bg-neutral-100 mb-2 shadow-md border border-neutral-200"></div>
              <p className="font-montserrat font-semibold text-sm">Light Gray</p>
              <p className="text-xs text-neutral-600">#F5F5F5</p>
              <p className="text-xs text-neutral-500 mt-1">Neutrality • Space</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 rounded-lg bg-white mb-2 shadow-md border border-neutral-200"></div>
              <p className="font-montserrat font-semibold text-sm">Pure White</p>
              <p className="text-xs text-neutral-600">#FFFFFF</p>
              <p className="text-xs text-neutral-500 mt-1">Simplicity • Clean</p>
            </div>
            <div className="text-center">
              <div className="w-full h-24 rounded-lg bg-accent mb-2 shadow-md"></div>
              <p className="font-montserrat font-semibold text-sm">Gold</p>
              <p className="text-xs text-neutral-600">#FFD700</p>
              <p className="text-xs text-neutral-500 mt-1">Premium • CTA</p>
            </div>
          </div>
        </div>

        {/* Logo Variants */}
        <div className="space-y-12">
          {/* Concept 1: Fluid Logo */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">Concept 1: Abstract Fluid</h2>
              <p className="text-neutral-600 font-roboto">
                Organic wave-like shape representing fluidity and simplicity. 
                The flowing design symbolizes seamless operations and digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Light background */}
              <div className="bg-neutral-50 rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-500 mb-4 font-semibold">Light Background</p>
                <Logo variant="fluid" size="lg" withText={true} />
                <div className="mt-8 space-y-4">
                  <Logo variant="fluid" size="md" withText={true} />
                  <Logo variant="fluid" size="sm" withText={true} />
                </div>
              </div>

              {/* Dark background */}
              <div className="bg-primary rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-100 mb-4 font-semibold">Dark Background</p>
                <div className="[&_span]:!text-white">
                  <Logo variant="fluid" size="lg" withText={true} />
                </div>
                <div className="mt-8 space-y-4 [&_span]:!text-white">
                  <Logo variant="fluid" size="md" withText={true} />
                  <Logo variant="fluid" size="sm" withText={true} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="font-semibold text-primary mb-2">Design Features:</h3>
              <ul className="text-sm text-neutral-600 space-y-1 font-roboto">
                <li>✓ Layered wave forms create depth and movement</li>
                <li>✓ Central diamond shield represents security and protection</li>
                <li>✓ Gold accent adds premium touch and draws focus</li>
                <li>✓ Best for: Modern, approachable brand personality</li>
              </ul>
            </div>
          </div>

          {/* Concept 2: Technical Logo */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">Concept 2: Technical Architecture</h2>
              <p className="text-neutral-600 font-roboto">
                Geometric hexagonal design inspired by network infrastructure.
                Represents technical mastery, structure, and interconnected systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Light background */}
              <div className="bg-neutral-50 rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-500 mb-4 font-semibold">Light Background</p>
                <Logo variant="technical" size="lg" withText={true} />
                <div className="mt-8 space-y-4">
                  <Logo variant="technical" size="md" withText={true} />
                  <Logo variant="technical" size="sm" withText={true} />
                </div>
              </div>

              {/* Dark background */}
              <div className="bg-primary rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-100 mb-4 font-semibold">Dark Background</p>
                <div className="[&_span]:!text-white">
                  <Logo variant="technical" size="lg" withText={true} />
                </div>
                <div className="mt-8 space-y-4 [&_span]:!text-white">
                  <Logo variant="technical" size="md" withText={true} />
                  <Logo variant="technical" size="sm" withText={true} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="font-semibold text-primary mb-2">Design Features:</h3>
              <ul className="text-sm text-neutral-600 space-y-1 font-roboto">
                <li>✓ Hexagonal structure symbolizes stability and efficiency</li>
                <li>✓ Network nodes with connecting lines represent connectivity</li>
                <li>✓ Layered geometry creates sophisticated depth</li>
                <li>✓ Best for: Enterprise, technical-focused brand</li>
              </ul>
            </div>
          </div>

          {/* Concept 3: Hybrid Logo */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">Concept 3: Hybrid Fusion</h2>
              <p className="text-neutral-600 font-roboto">
                Perfect blend of fluid organic forms with structured geometric elements.
                Represents the balance between human-centric design and technical excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Light background */}
              <div className="bg-neutral-50 rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-500 mb-4 font-semibold">Light Background</p>
                <Logo variant="hybrid" size="lg" withText={true} />
                <div className="mt-8 space-y-4">
                  <Logo variant="hybrid" size="md" withText={true} />
                  <Logo variant="hybrid" size="sm" withText={true} />
                </div>
              </div>

              {/* Dark background */}
              <div className="bg-primary rounded-lg p-8 flex flex-col items-center justify-center min-h-[250px]">
                <p className="text-xs text-neutral-100 mb-4 font-semibold">Dark Background</p>
                <div className="[&_span]:!text-white">
                  <Logo variant="hybrid" size="lg" withText={true} />
                </div>
                <div className="mt-8 space-y-4 [&_span]:!text-white">
                  <Logo variant="hybrid" size="md" withText={true} />
                  <Logo variant="hybrid" size="sm" withText={true} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="font-semibold text-primary mb-2">Design Features:</h3>
              <ul className="text-sm text-neutral-600 space-y-1 font-roboto">
                <li>✓ Fluid elliptical background with gradient transition</li>
                <li>✓ Geometric shield overlay creates visual interest</li>
                <li>✓ Flow lines add dynamic movement and energy</li>
                <li>✓ Best for: Versatile brand that appeals to diverse audiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Typography System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4">Montserrat (Headers)</h3>
              <div className="space-y-2">
                <p className="font-montserrat font-bold text-3xl text-primary">Bold 800</p>
                <p className="font-montserrat font-bold text-2xl text-primary">Bold 700</p>
                <p className="font-montserrat font-semibold text-xl text-primary">Semi-Bold 600</p>
                <p className="font-montserrat font-medium text-lg text-primary">Medium 500</p>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4">Roboto (Body)</h3>
              <div className="space-y-2">
                <p className="font-roboto font-semibold text-lg text-neutral-700">Semi-Bold 600</p>
                <p className="font-roboto font-medium text-base text-neutral-700">Medium 500</p>
                <p className="font-roboto font-normal text-base text-neutral-700">Regular 400</p>
                <p className="font-roboto font-light text-base text-neutral-700">Light 300</p>
              </div>
              <p className="font-roboto text-sm text-neutral-600 mt-4 leading-relaxed">
                This is sample body text in Roboto. It provides excellent readability 
                for longer content while maintaining a modern, clean aesthetic that 
                complements the Montserrat headers perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-12 text-center py-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
          <p className="text-3xl font-montserrat font-bold text-white mb-2">
            Technology, made fluid.
          </p>
          <p className="text-lg font-roboto text-white/90">
            Controlled simplicity meets digital serenity
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;