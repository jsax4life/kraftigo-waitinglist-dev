import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import Waitlist from "../components/Waitlist";

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12">
            <h1 className="text-4xl md:text-[52px] font-bold text-black font-garet leading-[1.1]">
              What Makes<br /> Kraftigo<br /> Stand Out
            </h1>
          </div>
          <div className="md:w-7/12 space-y-12">
            <p className="text-[#000000CC] text-[17px] leading-relaxed">
              In every neighborhood, busy people need everyday help but remain disconnected from those ready to assist. Kraftigo is the app that finally brings them together.
            </p>
            
            <div>
              <h3 className="text-[19px] font-bold text-black mb-4">We Saw The Gap, And We Decided To Fix It</h3>
              <p className="text-[#000000CC] text-[17px] leading-relaxed">
                Take a look around your own community. We saw a glaring, everyday problem that was simply being ignored: getting simple tasks done was overwhelmingly stressful, while finding flexible ways to earn extra money was far too difficult. The demand for help was everywhere, and the supply of eager, capable individuals was right next door—but the system connecting them was completely broken.<br /><br />
                We couldn't just stand by. We saw this gap, and we decided to fix it with purpose and passion. We built Kraftigo not just as an app, but as a vibrant, living bridge between the people who need a hand and the people who want to earn.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-bold text-black mb-4">A Platform Built For Real People</h3>
              <p className="text-[#000000CC] text-[17px] leading-relaxed">
                We are fiercely passionate about empowering our community. Why choose us? Because we didn't build this for massive corporations; we built this for you. We are unlocking a totally new local economy specifically designed for ordinary people and students who just want to monetize their spare time. Whether you need your house cleaned, your garden sorted, or you want to earn real money by helping someone out, Kraftigo is designed to make your life tangibly better.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* 2. Banner Image */}
      <section className="w-full">
        {/* Placeholder: Update the src URL to the real team table image when available */}
        <img 
          src="/images/about.jpg" 
          alt="Team collaborating" 
          className="w-full h-80 md:h-[400px] object-cover object-center bg-gray-100"
        />
      </section>

      {/* 3. Checkmarks Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12 hidden md:block"></div> {/* Offset to match header block */}
          <div className="md:w-7/12">
            <h3 className="text-[19px] font-bold text-black mb-8">We Saw The Gap, And We Decided To Fix It</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <svg className="w-[22px] h-[22px] text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#000000CC] text-[17px] leading-relaxed">
                  Total Transparency: With our live on-the-job time tracking, there's no guessing. You know exactly how much time a task took, down to the second, ensuring fair pay and total peace of mind.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-[22px] h-[22px] text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#000000CC] text-[17px] leading-relaxed">
                  Ultimate Flexibility: We don't force you into rigid boxes. Need something highly specific? Our "Custom Kraft" feature lets you request exactly what you need, on your own terms and budget.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <svg className="w-[22px] h-[22px] text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[#000000CC] text-[17px] leading-relaxed">
                  A Seamless Ecosystem: Want to hire a helper today and earn money as a Krafter tomorrow? You can. Our app lets you effortlessly flip between getting help and earning cash, keeping the value right here in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats / Benefit Cards */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FF6600] rounded-xl p-8 md:p-10 text-white flex flex-col min-h-[340px]">
            <div>
              <p className="text-[19px] mb-1 font-medium font-garet">Under</p>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight font-garet">3 Minutes</h3>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-white/95 leading-relaxed">
                The target time it takes to seamlessly match your requested task with a verified, ready-to-work Krafter.
              </p>
            </div>
          </div>

          <div className="bg-[#FF6600] rounded-xl p-8 md:p-10 text-white flex flex-col min-h-[340px]">
            <div>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight mb-2 font-garet">100%</h3>
              <p className="text-[17px] font-medium font-garet">of Tips Kept</p>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-white/95 leading-relaxed">
                Every single cent of a tip goes directly into the Krafter's digital wallet, because they earned it.
              </p>
            </div>
          </div>

          <div className="bg-[#FFF5EE] border border-[#FF6600]/40 rounded-xl p-8 md:p-10 flex flex-col min-h-[340px]">
            <div>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight text-[#FF6600] mb-2 font-garet">£0</h3>
              <p className="text-[17px] font-medium text-[#FF6600] font-garet">Hidden Fees</p>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-[#FF6600] leading-relaxed">
                Total pricing transparency from the moment you book to the second the live timer stops. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join The Movement */}
      <section className="text-center px-4 mb-24 max-w-3xl mx-auto">
        <h3 className="text-[19px] font-bold text-black mb-4">Join The Movement</h3>
        <p className="text-[#000000CC] text-[17px] leading-relaxed">
          We believe that everyone deserves a stress-free way to manage their time and a fair way to earn. We are thrilled to invite you to join the Kraftigo community. Let's get things done, together.
        </p>
      </section>

      <Waitlist />
      <div className="py-15"></div>
      <CtaBanner />
      <Footer />
    </main>
  )
}

export default About