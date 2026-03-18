import { useState } from "react";

const Securitycompliance = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: "Vector (6).png",
      title: "End-to-End Encryption",
      desc: "Every transaction is encrypted, safeguarding sensitive financial data from unauthorized access."
    },
    {
      icon: "Vector (7).png",
      title: "PCI DSS Level 1 Compliance",
      desc: "Ensuring the highest level of payment security for processing transactions."
    },
    {
      icon: "Vector (8).png",
      title: "AI-Powered Fraud Detection",
      desc: "Advanced machine learning models analyze transaction patterns to detect and prevent fraudulent activities in real-time."
    },
    {
      icon: "Vector (9).png",
      title: "Regulatory Compliance (KYC, AML, PSD2)",
      desc: "Built-in compliance solutions to meet global financial regulations and ensure a seamless user verification process."
    }
  ];

  return (
    <div className="security-compliance">

      <div className="section-header">
        <p className="sac">SECURITY & COMPLIANCE</p>
        <h1 className="egpfyb">Enterprise-Grade Protection for Your Business</h1>
        <p className="opidtmthiseytcdaforsafcwgr">
          Our platform is designed to meet the highest industry standards,
          ensuring your transactions, customer data, and financial operations
          remain secure and fully compliant with global regulations.
        </p>
      </div>

      <div className="feature-container">

        <div className="feature">

          {features.map((item, index) => (
            <div
              key={index}
              className={activeIndex === index ? "feature-content active" : "feature-content"}
              onClick={() => setActiveIndex(index)}
            >

              <div className="features-tilte-conatiner">
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
              </div>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

        <div className="card-no">
          <img src="Component.png" alt="" />
        </div>

      </div>

      <div className="colab">
        <img src="Logoipsum.png" alt="" />
        <img src="Logoipsum (1).png" alt="" />
        <img src="Logoipsum (2).png" alt="" />
        <img src="Logoipsum (3).png" alt="" />
      </div>

    </div>
  );
};

export default Securitycompliance;