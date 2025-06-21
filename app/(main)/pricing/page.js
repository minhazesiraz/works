import PricingCards from "@/components/PricingCards";

const pricing_plans = [
  {
    type: "Full-Time",
    tagline: "Dedicated service for full months",
    fee: 735.18,
    basis: "month",
    features: [
      "Complete eCommerce development & management",
      "Unlimited design & content updates",
      "Custom admin dashboard with role control",
      "Advanced SEO & speed optimization",
      "Weekly strategy and progress meetings",
      "Dedicated priority support",
      "Ongoing performance monitoring"
    ],
    isPopular: false,
    cta: "Hire Me"
  },
  {
    type: "Project-Based",
    tagline: "One-time complete delivery within timeline",
    fee: 1470.36,
    basis: "project",
    features: [
      "Custom website (up to 6 pages)",
      "Product upload (up to 20 products)",
      "Payment gateway integration",
      "Responsive UI/UX design",
      "SEO-ready setup",
      "1 month post-delivery support"
    ],
    isPopular: true,
    cta: "Get Started"
  },
  {
    type: "Hourly",
    tagline: "Ideal for small tasks or consultations",
    fee: 33.81,
    basis: "hour",
    features: [
      "Bug fixing",
      "Consultation or code review",
      "Small frontend/backend features",
      "Responsive tweaks",
      "Urgent tasks or emergency fixes"
    ],
    isPopular: false,
    cta: "Book Now"
  }
];

export default function Pricing_Page() {
  return (
     <>
     <div
        // className="lg:max-md-full mx-auto max-w-sm overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-200"
     className="mx-auto flex flex-wrap justify-center gap-6 p-6"
    >
        {pricing_plans.map((plan, i) => (
          
          <PricingCards
            key={i}
            type={plan.type}
            tagline={plan.tagline}
            fee={plan.fee}
            basis={plan.basis}
            features={plan.features}
            isPopular={plan.isPopular}
            cta={plan.cta}
          />
        ))}
        </div>
     </>
  );
}
