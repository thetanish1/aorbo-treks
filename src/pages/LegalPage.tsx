import React from 'react';
import { useLocation } from 'react-router-dom';
import { LegalLayout } from '@/components/layout/LegalLayout';
import { SEO, createBreadcrumbSchema } from '@/components/common/SEO';

export const LegalPage: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname === '/privacy-policy') {
    return (
      <>
        <SEO
          title="Privacy Policy"
          description="Read TrekNest's Privacy Policy on how we collect, protect, and respect your personal data and booking information."
          canonical="/privacy-policy"
          schema={createBreadcrumbSchema([{ name: 'Privacy Policy', item: '/privacy-policy' }])}
        />
        <LegalLayout title="Privacy Policy" lastUpdated="January 15, 2026">
          <section className="space-y-6 text-slate-700">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you use TrekNest to browse, compare, or reserve trek packages, we collect information you provide directly, such as your full name, email address, mobile phone number, emergency contacts, and dietary preferences required for high-altitude expedition meal planning.
            </p>

            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              Your contact and identity information is shared solely with the specific verified trek organiser whose package you have booked, and where required by state forest departments to issue mandatory mountain entry permits (such as Uttarakhand Forest Department, Himachal Forest Passes, and Singalila National Park passes).
            </p>

            <h2 className="text-xl font-bold text-slate-900">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard 256-bit encryption for all data transfers. TrekNest does not store complete credit card or debit card credentials on its servers. All payments are processed through RBI-authorized payment aggregator gateways.
            </p>

            <h2 className="text-xl font-bold text-slate-900">4. Cookies & Analytics</h2>
            <p>
              We use functional cookies to remember your destination filters, currency selections, and session state. You can manage or disable cookies via your browser settings.
            </p>
          </section>
        </LegalLayout>
      </>
    );
  }

  if (pathname === '/user-agreement') {
    return (
      <>
        <SEO
          title="User Agreement"
          description="TrekNest Platform User Agreement governing rights, duties, and community standards for outdoor adventure bookings."
          canonical="/user-agreement"
          schema={createBreadcrumbSchema([{ name: 'User Agreement', item: '/user-agreement' }])}
        />
        <LegalLayout title="User Agreement" lastUpdated="January 10, 2026">
          <section className="space-y-6 text-slate-700">
            <h2 className="text-xl font-bold text-slate-900">1. Role of TrekNest as Aggregator</h2>
            <p>
              TrekNest acts as a technology marketplace aggregator connecting independent, verified trek organisers with trekkers. TrekNest does not directly conduct mountaineering expeditions; operational delivery, mountain safety, and basecamp management are owned by the verified host organiser named on your confirmation pass.
            </p>

            <h2 className="text-xl font-bold text-slate-900">2. Health & Medical Fitness Declarations</h2>
            <p>
              Trekking in high-altitude environments (above 8,000 ft) carries inherent physical demands. You agree to disclose any pre-existing medical conditions (including asthma, hypertension, cardiac issues) honestly during booking and to abide by the safety instructions of certified trek leads.
            </p>

            <h2 className="text-xl font-bold text-slate-900">3. Environmental & Trail Code of Conduct</h2>
            <p>
              All community members booking through TrekNest are required to practice Leave No Trace principles. Trekkers found littering non-biodegradable plastics or causing harm to alpine wildlife will be subject to immediate exclusion from batches without refund.
            </p>
          </section>
        </LegalLayout>
      </>
    );
  }

  if (pathname === '/refund-policy') {
    return (
      <>
        <SEO
          title="Cancellation & Refund Policy"
          description="Transparent cancellation terms, refund schedules, and weather contingency vouchers for all trek bookings on TrekNest."
          canonical="/refund-policy"
          schema={createBreadcrumbSchema([{ name: 'Refund Policy', item: '/refund-policy' }])}
        />
        <LegalLayout title="Refund Policy" lastUpdated="February 01, 2026">
          <section className="space-y-6 text-slate-700">
            <h2 className="text-xl font-bold text-slate-900">1. Standard Cancellation Schedule</h2>
            <p>
              Unless otherwise specified on a specific trek package's listing, standard cancellation refunds are processed as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>15+ days prior to departure:</strong> 90% refund back to original payment method (or 100% TrekNest wallet credit valid for 12 months).</li>
              <li><strong>7 to 14 days prior to departure:</strong> 50% refund or 75% reschedule voucher for a future batch.</li>
              <li><strong>Under 7 days prior:</strong> Non-refundable due to pre-purchased forest permits, ration logistics, and reserved mule/homestay allotments.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900">2. Inclement Weather & Natural Calamity</h2>
            <p>
              In cases where routes are closed by local administration or district magistrates due to heavy blizzards, landslides, or road blocks, organisers offer a complimentary rollover to alternate dates or safe alternate lower trails.
            </p>

            <h2 className="text-xl font-bold text-slate-900">3. Refund Processing Timelines</h2>
            <p>
              Approved refunds are credited to the original bank account, UPI, or card within 5 to 7 business days from the date of approval.
            </p>
          </section>
        </LegalLayout>
      </>
    );
  }

  // Default: Terms of Service (/terms)
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing the use of the TrekNest trek booking marketplace website and mobile applications."
        canonical="/terms"
        schema={createBreadcrumbSchema([{ name: 'Terms of Service', item: '/terms' }])}
      />
      <LegalLayout title="Terms & Conditions" lastUpdated="January 01, 2026">
        <section className="space-y-6 text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the TrekNest platform (website, mobile application, or related services), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our platform.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. Marketplace Booking & Accuracy</h2>
          <p>
            Organisers are responsible for ensuring that package itineraries, departure dates, included meals, and gear descriptions displayed on TrekNest are accurate and up to date. TrekNest conducts independent verification audits but does not assume operational liability for force majeure weather events.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property</h2>
          <p>
            All trademarks, logos, content, and code featured on TrekNest are the intellectual property of TrekNest Technologies Pvt Ltd or their respective licensed partner organisers.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
          </p>
        </section>
      </LegalLayout>
    </>
  );
};

