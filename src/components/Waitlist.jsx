import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { joinWaitlist, getAllServices } from "../lib/api/waitlist";
import { toast } from "sonner";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "germany",
    state: "",
    role: "",
    serviceInterest: "",
    customService: "",
    agreeToContact: false,
  });

  const [states, setStates] = useState([]);
  const [services, setServices] = useState([
    "Electrician",
    "Plumber",
    "Cleaner",
    "Painter",
    "Carpenter",
  ]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingServices, setLoadingServices] = useState(false);

  // Fetch German states when component mounts
  useEffect(() => {
    fetchGermanStates();
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoadingServices(true);
    try {
      const data = await getAllServices();

      let servicesList = [];

      // Handle different possible response structures
      if (Array.isArray(data)) {
        servicesList = data;
      } else if (data && Array.isArray(data.services)) {
        servicesList = data.services;
      } else if (data && Array.isArray(data.categories)) {
        servicesList = data.categories;
      } else if (data && Array.isArray(data.data)) {
        servicesList = data.data;
      }

      if (servicesList.length > 0) {
        // Add "Other" to the fetched list
        setServices([...servicesList, "Other"]);
      } else {
        // Ensure fallback has "Other"
        setServices([
          "Electrician",
          "Plumber",
          "Cleaner",
          "Painter",
          "Carpenter",
          "Other",
        ]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      // Ensure fallback has "Other"
      setServices([
        "Electrician",
        "Plumber",
        "Cleaner",
        "Painter",
        "Carpenter",
        "Other",
      ]);
    } finally {
      setLoadingServices(false);
    }
  };

  const fetchGermanStates = async () => {
    setLoadingStates(true);
    try {
      // Using CountriesNow API to get German states
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: "germany",
          }),
        },
      );

      const data = await response.json();

      if (data.error === false && data.data && data.data.states) {
        // Sort states alphabetically
        const sortedStates = data.data.states
          .map((s) => s.name)
          .sort((a, b) => a.localeCompare(b));
        setStates(sortedStates);
      } else {
        // Fallback to German states if API fails
        setStates([
          "Baden-Württemberg",
          "Bavaria",
          "Berlin",
          "Brandenburg",
          "Bremen",
          "Hamburg",
          "Hesse",
          "Lower Saxony",
          "Mecklenburg-Vorpommern",
          "North Rhine-Westphalia",
          "Rhineland-Palatinate",
          "Saarland",
          "Saxony",
          "Saxony-Anhalt",
          "Schleswig-Holstein",
          "Thuringia",
        ]);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
      // Fallback to German states
      setStates([
        "Baden-Württemberg",
        "Bavaria",
        "Berlin",
        "Brandenburg",
        "Bremen",
        "Hamburg",
        "Hesse",
        "Lower Saxony",
        "Mecklenburg-Vorpommern",
        "North Rhine-Westphalia",
        "Rhineland-Palatinate",
        "Saarland",
        "Saxony",
        "Saxony-Anhalt",
        "Schleswig-Holstein",
        "Thuringia",
      ]);
    } finally {
      setLoadingStates(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const finalServiceInterest =
        formData.serviceInterest.toLowerCase() === "other"
          ? formData.customService
          : formData.serviceInterest;

      const apiData = {
        fullName: formData.fullName,
        email: formData.email,
        country: formData.country,
        city: formData.state,
        role: formData.role,
        serviceInterest: finalServiceInterest,
        agreesToContact: formData.agreeToContact,
      };

      await joinWaitlist(apiData);
      setSubmitStatus("success");
      toast.success(
        "You've been added to the waitlist! We'll be in touch soon.",
        {
          duration: 5000,
          style: {
            background: "#FF6600",
            color: "#fff",
            borderRadius: "8px",
          },
        },
      );
      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        country: "germany",
        state: "",
        role: "",
        serviceInterest: "",
        customService: "",
        agreeToContact: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      toast.error(
        error.response?.data?.message ||
          "Failed to join waitlist. Please try again.",
        {
          duration: 5000,
          style: {
            background: "#EF4444",
            color: "#fff",
            borderRadius: "8px",
          },
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="py-16" id="waitlist">
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
              Get notified when Kraftigö opens in your state.
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
                  State
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600] appearance-none "
                    required
                    disabled={loadingStates}
                  >
                    <option value="">
                      {loadingStates ? "Loading states..." : "Select a state"}
                    </option>
                    {states.map((state) => (
                      <option key={state} value={state.toLowerCase()}>
                        {state}
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
                    disabled={loadingServices}
                  >
                    <option value="">
                      {loadingServices
                        ? "Loading services..."
                        : "Select an interest"}
                    </option>
                    {services.map((service, index) => {
                      const value =
                        typeof service === "string"
                          ? service
                          : service.name ||
                            service.categoryName ||
                            service.title ||
                            service.label ||
                            `service-${index}`;
                      const label =
                        typeof service === "string"
                          ? service
                          : service.name ||
                            service.categoryName ||
                            service.title ||
                            service.label ||
                            `Service ${index + 1}`;
                      return (
                        <option
                          key={typeof value === "string" ? value : index}
                          value={
                            typeof value === "string"
                              ? value.toLowerCase()
                              : value
                          }
                        >
                          {label}
                        </option>
                      );
                    })}
                  </select>
                  <img
                    src="/chevron.svg"
                    alt=""
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {formData.serviceInterest.toLowerCase() === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Specify service
                </label>
                <input
                  type="text"
                  name="customService"
                  value={formData.customService}
                  onChange={handleChange}
                  placeholder="What service are you interested in?"
                  className="w-full px-4 py-3 rounded-lg border border-[#0000001A] focus:outline-none focus:border-[#FF6600]"
                  required
                />
              </motion.div>
            )}

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
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl bg-[#FF6600] text-white font-semibold hover:bg-[#ff6600cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Waitlist;
