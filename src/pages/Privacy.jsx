import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("Privacy & Cookie Policy");

  const sections = [
    "Privacy & Cookie Policy",
    "Acceptable Use Policy",
    "Dispute Policy",
    "Krafter Services Agreement",
    "Data Processing Agreement",
    "Service Providers",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Sidebar - On this page */}
          <aside className="w-full md:w-64 shrink-0 md:mt-20">
            <h3 className="font-bold text-black mb-6 text-lg">On this page</h3>
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-left transition-all cursor-pointer text-[15px] ${
                    activeSection === section
                      ? "text-[#FF6600] font-medium"
                      : "text-black hover:text-[#FF6600]"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <h1 className="text-3xl md:text-3xl font-bold text-black mb-10">
              {activeSection}
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                Kraftigo Servicess Limited (“Kraftigo”, “Company”, “we”, “us” or
                “our”) offers an online services platform and a Point-of-Sale
                (PoS) Terminal deployment and support service that allows Users
                to make seamless, stress-free servicess for desired goods and
                services online and at physical retail locations. At Kraftigo,
                we are committed to protecting the privacy and security of our
                consumers’ and users’ personal data. We are committed to
                transparency, accountability and confidentiality of your data.
                This is why our Privacy and Cookie Policy (“Privacy Policy”)
                describes how we collect, use, store, share, and protect
                personal data from Website Visitors, Kraftigo Users, and/or
                Vendors (“Data Subjects”) who engage with our services. It
                applies to our website and all related sites, applications,
                services and tools (collectively, our “Services”).
              </p>

              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                While our services are primarily designed for businesses and
                organisations (“Merchants”), we recognise that individual
                consumers may interact with us through Merchants or website
                visits. We are committed to responsibly processing personal data
                for everyone involved. We generally process personal data at the
                direction of and on behalf of Merchants. When we do, we do so as
                a service provider or a “Data Processor” to those Merchants, but
                we do not control and are not responsible for the privacy
                practices of those Merchants.
              </p>

              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                If you are a Customer of a Kraftigo Merchant, you should read
                that Merchant’s Privacy Policy and direct any privacy inquiries
                to that Merchant. If you are a Merchant, please see the Merchant
                Privacy Policy. This Privacy Policy does not apply to services
                not owned or controlled by Kraftigo, including third-party
                websites and the services of Kraftigo’s Merchants. This Privacy
                Policy applies to all forms of systems, operations and processes
                within the Kraftigo environment that involve the processing of
                personal data. Kraftigo is a Stripe company; for more
                information about Stripe’s privacy practices, see the Stripe
                Privacy Policy{" "}
                <a
                  href="https://stripe.com/en-gb/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6600] hover:underline"
                >
                  https://stripe.com/en-gb/privacy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
