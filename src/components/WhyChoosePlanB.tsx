import React from 'react'; 

const features = [
  {
    title: 'Targeted Talent',
    desc: 'Connect with students who match your brand’s values and needs.',
  },
  {
    title: 'Rapid Deployment',
    desc: 'Onboard and launch campaigns in days, not weeks.',
  },
  {
    title: 'Scalable Support',
    desc: 'Scale your team seamlessly as your campaign grows.',
  },
];

export const WhyChoosePlanB: React.FC = () => (
  <section id="why-choose-planb" className="py-16">
    <div className="container text-bee-black">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Why Choose Plan B?
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 bg-white/90 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-medium mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoosePlanB;
