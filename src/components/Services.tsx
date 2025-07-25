export function Services() {
  const services = [
    {
      title: "Classic Boudoir",
      description: "Timeless and elegant photography that captures your natural beauty with sophisticated styling and lighting.",
      features: ["Professional styling consultation", "Hair and makeup guidance", "Wardrobe recommendations", "Edited digital gallery"],
    },
    {
      title: "Couples Boudoir",
      description: "Intimate photography sessions for couples looking to celebrate their connection and create lasting memories together.",
      features: ["Couple posing guidance", "Romantic atmosphere", "Privacy and comfort", "Beautiful keepsake album"],
    },
    {
      title: "Maternity Boudoir",
      description: "Celebrate the beauty of pregnancy with elegant maternity boudoir photography that honors this special time.",
      features: ["Pregnancy-safe posing", "Flowing fabrics and props", "Gentle lighting", "Milestone documentation"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional boudoir photography sessions tailored to celebrate your unique story and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
