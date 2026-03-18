const PricingPlan = () => {
  return (
    <>
      <div class="pricing-plan">
        <div class="section-header">
          <p class="sac">PRICING PLAN</p>

          <h1 class="egpfyb">Find the Right Plan for Your Business</h1>

          <p class="opidtmthiseytcdaforsafcwgr">
            Transparent pricing with powerful features. Whether you're just
            starting out or processing high-volume transactions, we have a plan
            for you.
          </p>
        </div>

        <section class="pricing">
          <div class="pricing-container">
            <div class="pricing-card light">
              <h3 class="sp">Starter Plan</h3>

              <div class="price">
                <h1>$0</h1>
                <span>/ month</span>
              </div>

              <p class="sub">$19 for next month</p>

              <p class="desc">
                for next monthPerfect for freelancers, small businesses, and
                early-stage startups who need a simple way to accept payments.
              </p>
              <div class="line-1"></div>

              <h5 class="feat">FEATURES</h5>
              <ul>
                <li>Process up to $10,000/month in transactions</li>
                <li>Accept Credit/Debit Cards & Bank Transfers</li>
                <li>Basic fraud protection for secure payments</li>
                <li>Standard API access for simple integrations</li>
              </ul>

              <button class="btn-outline">Start Now</button>
            </div>

            <div class="pricing-card dark">
              <div class="popular">
                <h3 class="gp-2">Growth Plan</h3>
                <span>MOST POPULAR</span>
              </div>

              <div class="price-2">
                <h1>$99</h1>
                <span>/ month</span>
              </div>

              <p class="sub-2">Discount 30% off</p>

              <p class="desc">
                Best for growing businesses, SaaS platforms, and e-commerce
                stores looking for seamless transactions and fraud prevention.
              </p>
              <div class="line-2"></div>
              <h5 class="feat-2">FEATURES</h5>

              <ul>
                <li class="le">Process up to $250,000/month in transactions</li>
                <li class="le">
                  Accept payments via Cards, Bank & Digital Wallets
                </li>
                <li class="le">Advanced fraud protection & chargeback</li>
                <li class="le">Full API access + Webhooks for integrations</li>
                <li class="le">
                  24/7 chat & email support for faster issue resolution
                </li>
                <li class="le">
                  Faster settlement speed (T+1) for better cash flow
                </li>
              </ul>

              <button class="btn-primary">Choose Plan</button>
            </div>

            <div class="pricing-card light">
              <h3 class="sp">Scale Plan</h3>

              <div class="price">
                <h1>Custom</h1>
                <span>Pricing</span>
              </div>

              <p class="sub">Contact Us Now</p>

              <p class="desc">
                Ideal for enterprises, marketplaces, and businesses processing
                high transaction volumes that need instant settlements and
                premium support.
              </p>
              <div class="line-3"></div>

              <h5 class="feat">FEATURES</h5>

              <ul>
                <li>Process up to $1,000,000/month in transactions</li>
                <li>Accept payments via all methods and local</li>
                <li>AI-powered fraud detection & real-time monitoring</li>
                <li>Dedicated API support with enterprise-grade</li>
                <li>Priority customer support via phone, chat & email</li>
                <li>Instant settlements for seamless cash flow</li>
                <li>Multi-currency support to expand globally</li>
              </ul>

              <button class="btn-outline">Discuss Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPlan;
