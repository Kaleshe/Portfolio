import React from "react";

const PageTemplate = ({ children }) => (
  <main className="bg-gradient-to-b from-white from-30% via-[#F7F5F2] via-50% to-warm-gray to-60% py-8 md:py-20">
    <div className="max-w-5xl mx-auto px-3 space-y-16 md:space-y-20">
      {children}
    </div>
  </main>
);

export default PageTemplate;
