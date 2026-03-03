import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "germany",
    city: "",
    role: "",
    serviceInterest: "",
    agreeToContact: false,
  });

  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch German cities when component mounts
  useEffect(() => {
    fetchGermanCities();
  }, []);

  const fetchGermanCities = async () => {
    setLoadingCities(true);
    try {
      // Using CountriesNow API to get German cities
      const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          country: 'germany'
        })
      });
      
      const data = await response.json();
      
      if (data.error === false && data.data) {
        // Sort cities alphabetically and take major cities
        const sortedCities = data.data.sort();
        setCities(sortedCities);
      } else {
        // Fallback to major German cities if API fails
        setCities([
          'Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 
          'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig',
          'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg'
        ]);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
      // Fallback to major German cities
      setCities([
        'Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 
        'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig',
        'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg'
      ]);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section
      className="max-w-8xl mx-auto px-4 md:px-12 py-8 md:py-16"
      id="waitlist"
    >
      <motion.div
        className="bg-[#F6F6F6] rounded-3xl p-6 md:p-12 border border-[#0000001A]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row items-top gap-6 md:gap-8">
          {/* Left Side */}
          <div className="lg:min-w-75">
            <span className="text-[#FF6600] text-sm font-semibold bg-[#FF66001A] px-2 py-1 rounded-full">
              Early Access
            </span>
            <h2 className="text-5xl font-extrabold text-[#000000CC] mt-2 mb-6">
              Join the waitlist
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                <img
                  src="/images/1.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/images/2.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                />
                <img
                  src="/images/3.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                />
                <img
                  src="/images/4.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                />
                <div className="w-10 h-10 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-xs -ml-3 border-2 border-white">
                  5k+
                </div>
              </div>
              <p className="text-[10px] text-gray-600">
                Over <span className="text-[#FF6600]">5k people</span> signed up
                <br />
                to beta in <span className="text-[#FF6600]">4 countries</span>
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              Get notified when Kraftigö opens in your city.
              <br />
              Early users help shape the MVP.
            </p>

            <img src="/logo.svg" alt="Kraftigö" className="h-10 mt-35" />
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name here"
                  className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600] "
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600] appearance-none "
                    required
                  >
                    <option value="germany">🇩🇪 Germany</option>
                    <option value="usa">🇺🇸 United States</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="nigeria">🇳🇬 Nigeria</option>
                  </select>
                  <img
                    src="/chevron.svg"
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <div className="relative">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600] appearance-none "
                    required
                    disabled={loadingCities}
                  >
                    <option value="">
                      {loadingCities ? 'Loading cities...' : 'Select a city'}
                    </option>
                    {cities.map((city) => (
                      <option key={city} value={city.toLowerCase()}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <img
                    src="/chevron.svg"
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  I am a
                </label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600]  appearance-none"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="customer">Customer</option>
                    <option value="krafter">Krafter (Service Provider)</option>
                    <option value="both">Both</option>
                  </select>
                  <img
                    src="/chevron.svg"
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600]  appearance-none"
                    required
                  >
                    <option value="">Select an interest</option>
                    <option value="electrician">Electrician</option>
                    <option value="plumber">Plumber</option>
                    <option value="cleaner">Cleaner</option>
                    <option value="painter">Painter</option>
                    <option value="carpenter">Carpenter</option>
                  </select>
                  <img
                    src="/chevron.svg"
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-6 h-6 border-2 border-[#FF6600] rounded-lg flex items-center justify-center peer-checked:bg-[#FF6600] transition-colors">
                  {formData.agreeToContact && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-600">
                  I agree to be contacted about Kraftigö updates. (No spam.)
                </span>
              </label>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-6 py-3  rounded-xl bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200 transition-colors"
              >
                Copy referral link
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-[#FF6600] text-white font-semibold hover:bg-[#ff6600cc] transition-colors"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
