import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative pt-20 sm:pt-16 pb-12 px-4 sm:px-8 lg:px-0 max-w-[1440px] mx-auto">
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{
            minHeight: "570px",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            flexGrow: "0",
            alignSelf: "stretch",
            margin: "0 20px",
          }}
        >
          
          <div 
            className="relative flex flex-col justify-center order-2 lg:order-1"
            style={{ paddingLeft: "48px" }}
          >
            <div className="relative">
              <div 
                style={{
                  backgroundColor: "rgba(217, 217, 217, 1)",
                  height: "32px",
                  width: "32px",
                  marginBottom: "24px",
                }}
              ></div>
              
              <div>
                <h2
                  className="font-bold text-brand-text text-3xl lg:text-4xl"
                  style={{
                    fontSize: "36px",
                    lineHeight: "40px",
                  }}
                >
                  Hello, I am Anjo!
                </h2>
                
                <div 
                  className="text-brand-text"
                  style={{
                    fontWeight: "400",
                    marginTop: "24px",
                  }}
                >
                  <div style={{ fontWeight: "400" }}>
                    I am a first year student taking up Bachelor of Science in Information Technology specializing in Web Technologies. I am passionate about technology and exploring how software can solve real-world problems.
                  </div>
                  
                  <div style={{ fontWeight: "400", marginTop: "16px" }}>
                    My journey has been driven by a strong desire to learn through hands-on experiences. I aim to be a dependable, reliable, and trainable team player who is eager to improve.
                  </div>
                  
                  <div style={{ fontWeight: "400", marginTop: "16px" }}>
                    Now, I am focused on mastering the basics of Java so that I can confidently contribute to real-world projects and prepare for a future role as a Software Engineer.
                  </div>
                </div>
              </div>
              
              <div 
                style={{
                  backgroundColor: "rgb(30, 99, 232)",
                  height: "16px",
                  marginTop: "32px",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>

          <div 
            className="relative flex flex-col justify-center order-1 lg:order-2"
            style={{
              alignItems: "center",
              flexDirection: "column",
              paddingRight: "250px",
            }}
          >
            <div style={{ fontWeight: "400", maxWidth: "512px", position: "relative", width: "100%" }}>
              <div 
                className="relative z-10"
                style={{
                  aspectRatio: "1 / 1",
                  maxWidth: "500px",
                  width: "100%",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F531acf2e25c44f4f8374b50815400433%2F152baa3162cc4d359737badd998f576c"
                  alt="Mark Anjo Claveria"
                  style={{
                    borderRadius: "8px",
                    height: "100%",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>

              <div
                className="hidden lg:block z-0 pointer-events-none"
                style={{
                  position: "absolute",
                  bottom: "-64px",
                  right: "-64px",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1fe2612e47166028df3e33a7fd36fc52a7172304?width=572"
                  alt="ME"
                  style={{
                    marginBottom: "186px",
                    opacity: 0.9,
                    position: "relative",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                fontWeight: "400",
                left: "-26px",
                pointerEvents: "none",
                position: "absolute",
                top: "-115px",
                zIndex: "0",
                width: "84%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8ca791f4da7024164d40977c78c76537760566bd?width=1298"
                alt="ABOUT"
                style={{
                  height: "100%",
                  opacity: 0.9,
                  pointerEvents: "none",
                  width: "100%",
                  margin: "114px 0 0 -198px",
                }}
              />
            </div>

            <div
              style={{
                fontWeight: "400",
                marginTop: "24px",
                maxWidth: "512px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a09c2561f88440bfe90122a8a2fac2bddc914e88?width=1072"
                alt="MARK ANJO CLAVERIA"
                style={{ width: "100%" }}
              />

              <Link
                to="/education"
                className="inline-flex items-center justify-between bg-brand-gray hover:bg-gray-300 transition-colors group"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "32px 0 0 auto",
                  minWidth: "232px",
                  padding: "16px 24px",
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)",
                  transitionDuration: "0.15s",
                  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <span 
                  style={{
                    color: "rgb(0, 0, 0)",
                    font: "400 30px/36px Thegand, sans-serif",
                  }}
                >
                  MY EDUCATION
                </span>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "8px",
                  }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M18 10L0 20V0L18 10Z" fill="#1E63E8"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
