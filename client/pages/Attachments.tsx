import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Attachments() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative pb-12 max-w-[1440px] mx-auto" style={{ padding: "96px 48px 48px" }}>
        {/* Decorative square top left */}
        <div
          style={{
            backgroundColor: "rgb(217, 217, 217)",
            height: "32px",
            left: "176px",
            position: "absolute",
            top: "160px",
            width: "32px",
            margin: "70px -206px 0 -80px",
          }}
        />

        {/* Title Section */}
        <div className="text-center relative" style={{ position: "relative", textAlign: "center" }}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a56456487002c05cdb71fbdf0f72f432b8625fdb?width=1750"
            alt="ATTACHMENTS"
            className="w-full h-auto"
            style={{
              display: "block",
              aspectRatio: "875 / 244",
              maxWidth: "875px",
              width: "100%",
              margin: "0 auto",
            }}
          />
        </div>

        {/* THE ONES WHO MADE ACHIEVE THOSE Banner */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue"
            style={{ height: "40px" }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fea9c1b0659429605389153af8da3d062a18b06d?width=722"
              alt="THE ONES WHO MADE ACHIEVE THOSE"
              className="h-6"
            />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
            maxWidth: "1024px",
            margin: "0 auto 48px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(217, 217, 217)",
                height: "32px",
                left: "525px",
                position: "absolute",
                top: "35px",
                width: "32px",
                zIndex: "0",
              }}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8284c18cd83db35dd2c7b6742a5aadabede0ef8f?width=550"
              alt="Achievement photo"
              style={{
                display: "block",
                aspectRatio: "55 / 41",
                borderRadius: "4px",
                position: "relative",
                width: "100%",
                zIndex: "10",
              }}
            />
            <div
              style={{
                backgroundColor: "rgb(217, 217, 217)",
                height: "32px",
                width: "32px",
                margin: "12px 0 0 auto",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9623b81ab98c69275cd72860ad3734832efb0098?width=534"
              alt="Achievement photo"
              style={{
                display: "block",
                aspectRatio: "267 / 241",
                borderRadius: "4px",
                width: "100%",
                marginTop: "80px",
              }}
            />
          </div>
        </div>

        {/* MY WORKS Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(30, 99, 232)",
              height: "40px",
              justifyContent: "center",
              padding: "12px 24px",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fdf36ffcd1a748edbb35d052718d7c7cddf9a4d5?width=208"
              alt="MY WORKS"
              style={{ height: "24px" }}
            />
          </div>
        </div>

        {/* Works Section */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Work Item 1 - Calculator */}
          <div
            style={{
              display: "grid",
              gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                order: "1",
                position: "relative",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df19489131c1efc230a7e42925598f3a56ab04f1?width=624"
                alt="Calculator project"
                style={{
                  display: "block",
                  aspectRatio: "312 / 347",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                order: "2",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(217, 217, 217)",
                  height: "32px",
                  left: "-12px",
                  position: "absolute",
                  top: "318px",
                  width: "32px",
                }}
              />
              <div
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor: "rgb(30, 99, 232)",
                  borderWidth: "3px",
                  minHeight: "81px",
                  padding: "24px",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/38f95ebf7bd6607ec28596f983b924ebc833af75?width=746"
                  alt="A vibe-coded arithmetic calculator made in excel similarly working like the Windows Programming Calculator"
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Work Item 2 - Java Programs */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gap: "32px",
              gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
              marginTop: "64px",
            }}
          >
            <div
              style={{
                order: "2",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(217, 217, 217)",
                  height: "32px",
                  left: "0px",
                  position: "absolute",
                  top: "244px",
                  width: "32px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor: "rgb(30, 99, 232)",
                  borderWidth: "3px",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "100px",
                  padding: "24px",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1d0679d1dfc1e799070d7d53c18a5a8e575d4fed?width=898"
                  alt="Hard-coded Java programs with Apache Netbeans to help with real world situations like this grocery discount calculator to calculate certain discounts when purchase amount thresh"
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                order: "1",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b66f84a6a4c5db541253d69a313ff203217bd01d?width=678"
                alt="Java code screenshot"
                style={{
                  display: "block",
                  aspectRatio: "339 / 277",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                  width: "100%",
                }}
              />
            </div>
          </div>

          {/* Work Item 3 - Attendance App */}
          <div
            style={{
              display: "grid",
              gridTemplate: "none / repeat(2, minmax(0px, 1fr))",
              gap: "32px",
              marginTop: "64px",
            }}
          >
            <div
              style={{
                order: "1",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9a8632cec6b38f61d5936bfef5e796e331666580?width=624"
                alt="Attendance app screenshots"
                style={{
                  display: "block",
                  aspectRatio: "52 / 43",
                  borderRadius: "4px",
                  boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                order: "2",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(217, 217, 217)",
                  height: "32px",
                  left: "0px",
                  position: "absolute",
                  top: "380px",
                  width: "32px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor: "rgb(30, 99, 232)",
                  borderWidth: "3px",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "81px",
                  padding: "24px",
                  marginTop: "130px",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1176a65d80a54449f8e83d348623b4de3b517c22?width=898"
                  alt="Designed an attendance app using Figma and vibe-coded the app using Java and JavaScript as a partial fulfillment for Practical Research subject in high school"
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-12 sm:my-16">
          <div 
            className="w-full h-4 bg-brand-blue"
            style={{ maxWidth: "1090px", margin: "0 auto" }}
          />
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center max-w-[1090px] mx-auto mb-8">
          <Link 
            to="/education"
            className="inline-flex items-center justify-center bg-brand-gray hover:bg-gray-300 transition-colors"
            style={{ width: "232px", height: "54px", clipPath: "polygon(100% 0, 0 0, 0 70%, 10% 100%, 100% 100%)" }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bab1a3644446f938b5ce3033a678d01ceb02b68f?width=464"
              alt="EDUCATION"
              className="h-full"
            />
          </Link>

          <button 
            onClick={scrollToTop}
            className="inline-flex items-center justify-center bg-brand-gray hover:bg-gray-300 transition-colors"
            style={{ width: "232px", height: "54px", clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/433d2d4ab1c8ee2705171d5bf9c5a1ce661f7eb2?width=464"
              alt="BACK TO TOP"
              className="h-full"
            />
          </button>
        </div>

        {/* Floating Scroll to Top Button */}
        <button 
          onClick={() => window.scrollBy({ top: 200, behavior: 'smooth' })}
                  className="fixed right-8 bottom-8 w-8 h-8 bg-brand-blue hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
          aria-label="Scroll down"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12.5L1.50481 3L14.4952 3L8 12.5Z" fill="white"/>          </svg>
        </button>
      </main>
    </div>
  );
}
