import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative pb-12 max-w-[1440px] mx-auto" style={{ padding: "96px 48px 48px" }}>
        {/* Decorative square top left */}
        <div
          style={{
            backgroundColor: "rgb(217, 217, 217)",
            height: "32px",
            position: "absolute",
            left: "87px",
            top: "237px",
            width: "32px",
          }}
        />

        {/* Title Section */}
        <div className="text-center relative mb-12">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e49feee8b6c4d43ff1e35e4bcefd36a61c72171e?width=1604"
            alt="EDUCATION"
            className="w-full h-auto"
            style={{
              display: "block",
              aspectRatio: "802 / 244",
              maxWidth: "802px",
              width: "100%",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Items */}
          <div className="space-y-10 relative">
            
            {/* Timeline Line - Vertical connector on the left */}
            <div 
              className="absolute left-[42px] hidden lg:block"
              style={{
                width: "5px",
                height: "calc(100% - 40px)",
                backgroundColor: "#1E63E8",
                top: "40px",
              }}
            />

            {/* Education Item 1 - University */}
            <div className="relative flex gap-6 items-start" style={{ marginTop: "40px" }}>
              {/* Timeline Circle */}
              <div
                className="relative flex-shrink-0 hidden lg:flex"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "5px solid #1E63E8",
                  borderRadius: "0",
                  position: "relative",
                  marginLeft: "24px",
                }}
              >
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    backgroundColor: "#0065e7",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "matrix(1, 0, 0, 1, -9.5, -9.5)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3 items-start">
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2 bg-brand-blue"
                    style={{ height: "40px" }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/6cfb56fa1545e1cf67c004e6e1d7c5c4ac21b228?width=514"
                      alt="UNIVERSITY OF THE CORDILLERAS"
                      style={{ height: "19px" }}
                    />
                  </div>
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2"
                    style={{ 
                      height: "40px",
                      border: "3px solid #1E63E8",
                    }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ca9863b4ab6c0b19fbb3e7607ed4b991d862a177?width=214"
                      alt="Expected 2028"
                      style={{ height: "19px" }}
                    />
                  </div>
                </div>
                <div
                  className="border-[3px] border-brand-blue p-4"
                  style={{ minHeight: "43px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "auto",
                      width: "auto",
                      alignSelf: "center",
                      font: "24px Roboto, sans-serif",
                    }}
                  >
                    BS in Information Technology major in Web Technology&nbsp;
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 2 - High School */}
            <div className="relative flex gap-6 items-start" style={{ marginTop: "40px" }}>
              {/* Timeline Circle */}
              <div
                className="relative flex-shrink-0 hidden lg:flex"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "5px solid #1E63E8",
                  borderRadius: "0",
                  position: "relative",
                  marginLeft: "24px",
                }}
              >
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    backgroundColor: "#D9D9D9",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "matrix(1, 0, 0, 1, -9.5, -9.5)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3 items-start">
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2 bg-brand-blue"
                    style={{ height: "40px" }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e0dd9bad923b6859926522f859f9f35c26f3d351?width=476"
                      alt="ST. ALBERT THE GREAT SCHOOL"
                      style={{ height: "19px" }}
                    />
                  </div>
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2"
                    style={{ 
                      height: "40px",
                      border: "3px solid #1E63E8",
                    }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/c035f00b8ab784a2b256b44aa52bd1c160ac9766?width=74"
                      alt="2025"
                      style={{ height: "19px" }}
                    />
                  </div>
                </div>
                <div
                  className="border-[3px] border-brand-blue p-4"
                  style={{ minHeight: "43px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "auto",
                      width: "auto",
                      alignSelf: "center",
                      font: "24px Roboto, sans-serif",
                    }}
                  >
                    High school diploma, With honors, Loyalty Awardee
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 3 - Junior High School */}
            <div className="relative flex gap-6 items-start" style={{ position: "relative", margin: "40px 0 0 23px" }}>
              {/* Timeline Circle */}
              <div
                className="relative flex-shrink-0 hidden lg:flex"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "5px solid #1E63E8",
                  borderRadius: "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    backgroundColor: "#D9D9D9",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "matrix(1, 0, 0, 1, -9.5, -9.5)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3 items-start">
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2 bg-brand-blue"
                    style={{ height: "40px" }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e0dd9bad923b6859926522f859f9f35c26f3d351?width=476"
                      alt="ST. ALBERT THE GREAT SCHOOL"
                      style={{ height: "19px" }}
                    />
                  </div>
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2"
                    style={{ 
                      height: "40px",
                      border: "3px solid #1E63E8",
                    }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/cb8aeb55f54a7a0d76161e746704788eec88c90b?width=74"
                      alt="2023"
                      style={{ height: "19px" }}
                    />
                  </div>
                </div>
                <div
                  className="border-[3px] border-brand-blue p-4"
                  style={{ minHeight: "43px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "auto",
                      width: "auto",
                      alignSelf: "center",
                      font: "24px Roboto, sans-serif",
                    }}
                  >
                    Junior high school certificate, With honors
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 4 - Elementary */}
            <div className="relative flex gap-6 items-start" style={{ position: "relative", margin: "40px 0 0 24px" }}>
              {/* Timeline Circle */}
              <div
                className="relative flex-shrink-0 hidden lg:flex"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "5px solid #1E63E8",
                  borderRadius: "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    backgroundColor: "#D9D9D9",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "matrix(1, 0, 0, 1, -9.5, -9.5)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3 items-start">
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2 bg-brand-blue"
                    style={{ height: "40px" }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e0dd9bad923b6859926522f859f9f35c26f3d351?width=476"
                      alt="ST. ALBERT THE GREAT SCHOOL"
                      style={{ height: "19px" }}
                    />
                  </div>
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2"
                    style={{ 
                      height: "40px",
                      border: "3px solid #1E63E8",
                    }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/acf4162bc00a849db35e92ec42f3613159e1b27f?width=74"
                      alt="2019"
                      style={{ height: "19px" }}
                    />
                  </div>
                </div>
                <div
                  className="border-[3px] border-brand-blue p-4"
                  style={{ minHeight: "43px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "auto",
                      width: "auto",
                      alignSelf: "center",
                      font: "24px Roboto, sans-serif",
                    }}
                  >
                    Elementary school diploma, With honors, Loyalty Awardee
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 5 - Kindergarten */}
            <div className="relative flex gap-6 items-start" style={{ position: "relative", margin: "40px 0 0 24px" }}>
              {/* Timeline Circle */}
              <div
                className="relative flex-shrink-0 hidden lg:flex"
                style={{
                  width: "40px",
                  height: "40px",
                  border: "5px solid #1E63E8",
                  borderRadius: "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "19px",
                    height: "19px",
                    backgroundColor: "#D9D9D9",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "matrix(1, 0, 0, 1, -9.5, -9.5)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-3 items-start">
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2 bg-brand-blue"
                    style={{ height: "40px" }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e0dd9bad923b6859926522f859f9f35c26f3d351?width=476"
                      alt="ST. ALBERT THE GREAT SCHOOL"
                      style={{ height: "19px" }}
                    />
                  </div>
                  <div 
                    className="inline-flex items-center justify-center px-3 py-2"
                    style={{ 
                      height: "40px",
                      border: "3px solid #1E63E8",
                    }}
                  >
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/73b8596840a98b7c1011a9195a5a9635842dbcbf?width=74"
                      alt="2013"
                      style={{ height: "19px" }}
                    />
                  </div>
                </div>
                <div
                  className="border-[3px] border-brand-blue p-4"
                  style={{ minHeight: "43px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "auto",
                      width: "auto",
                      alignSelf: "center",
                      font: "24px Roboto, sans-serif",
                    }}
                  >
                    Kindergarten diploma
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-12 sm:my-16">
          <div 
            className="w-full h-4 bg-brand-blue"
            style={{ maxWidth: "1088px", margin: "0 auto" }}
          />
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center max-w-[1088px] mx-auto mb-8">
          <Link 
            to="/"
            className="inline-flex items-center justify-center bg-brand-gray hover:bg-gray-300 transition-colors"
            style={{ width: "232px", height: "54px", clipPath: "polygon(100% 0, 0 0, 0 70%, 10% 100%, 100% 100%)",
}}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6049c71c183b8dc424d5a8a84a01ec34cace4243?width=464"
              alt="ABOUT"
              className="h-full"
            />
          </Link>

          <Link 
            to="/attachments"
            className="inline-flex items-center justify-center bg-brand-gray hover:bg-gray-300 transition-colors"
            style={{ width: "232px", height: "54px", clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)" }}
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/aafe4561f1defd22787d1b337b5836ff2713e8d1?width=464"
              alt="ATTACHMENTS"
              className="h-full"
            />
          </Link>
        </div>

        {/* Floating Scroll to Top Button */}
        <button
          onClick={() => window.scrollBy({ top: 200, behavior: 'smooth' })}
          className="fixed right-8 bottom-8 w-8 h-8 bg-brand-blue hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
          aria-label="Scroll down"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12.5L1.50481 3L14.4952 3L8 12.5Z" fill="white" />          </svg>
        </button>
      </main>
    </div>
  );
}
