import React from "react";

export default function Images() {
  return (
    <div className="bg-black flex items-center justify-center p-6">

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 md:divide-x md:divide-gray-600">

        <div className="md:px-6">
          <img src="/asset/images/fivestar.png" alt="fivestar" className="h-8 md:h-20 object-contain" />
        </div>

        <div className="px-6">
          <img src="/asset/images/goodfirms.png" alt="goodfirms" className="h-8 md:h-20 object-contain" />
        </div>

        <div className="px-6">
          <img src="/asset/images/bark.png" alt="bark"  className="h-8 md:h-15 object-contain"/>
        </div>

        <div className="px-6">
          <img src="/asset/images/clucth.png" alt="clutch"  className="h-8 md:h-20 object-contain"/>
        </div>

        <div className="px-6">
          <img src="/asset/images/amazon.png" alt="amazon" className="h-8 md:h-20 object-contain" />
        </div>

      </div>

    </div>
  );
}