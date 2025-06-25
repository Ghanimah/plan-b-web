import {
  Calendar,
  Megaphone,
  Search,
  Building2,
  ShoppingCart,
  Heart,
} from 'lucide-react';

const clientTypes = [
  { icon: Calendar, title: 'Event Organizers', description: 'From corporate conferences to cultural festivals', services: ['Event staffing','Setup crews','Ushers & greeters'], color: 'bg-honey' },
  { icon: Megaphone, title: 'Marketing & Activation Agencies', description: 'Brand promotion and experiential marketing', services: ['Promoters & ambassadors','Sampling teams','Brand surveys'], color: 'bg-bee-red' },
  { icon: Search, title: 'Retail & Mystery Shopping', description: 'On-floor service audits and customer-experience reporting', services: ['Mystery shopping','Surveys & feedback','Floor staff'], color: 'bg-honey-dark' },
  { icon: Building2, title: 'Hospitality & F&B', description: 'Baristas, waitstaff, and greeters for your venue', services: ['Barista staff','Event catering','Guest ushers'], color: 'bg-honey' },
  { icon: ShoppingCart, title: 'E-commerce & Sampling', description: 'Product distribution and brand awareness campaigns', services: ['Door-to-door sampling','Online surveys','Promo events'], color: 'bg-bee-red' },
  { icon: Heart, title: 'Community & NGOs', description: 'Volunteers and part-time coordinators for social causes', services: ['Volunteer staffing','Fundraising support','Event teams'], color: 'bg-honey-dark' },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="
        relative py-16
        bg-fixed bg-center bg-cover
        bg-[url('/assets/Background3.png')]
      "
    >
      {/* —— Overlay removed here —— */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center text-bee-black mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Who We Serve</h2>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            We partner with a variety of clients—from event organizers to NGOs—providing tailored staffing solutions that elevate your operations.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map(({ icon: Icon, title, description, services, color }, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
            >
              <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bee-black mb-2">{title}</h3>
              <p className="text-bee-black/70 mb-4 flex-grow">{description}</p>
              <ul className="list-disc list-inside text-sm text-bee-black/80 space-y-1">
                {services.map((svc, i) => (
                  <li key={i}>{svc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
