"use client";
import React from "react";

function page() {
  return (
    <div className="w-full text-white font-mono flex justify-start items-start flex-col gap-5 md:mb-48 mb-96">
      <p>
        At Landinglist.xyz, we currently do not offer refunds for our services.
        All purchases and transactions made on our platform are considered
        final. We encourage our users to carefully review our offerings,
        pricing, and terms before making any commitments or purchases.
      </p>
      <p>
        We strive to provide accurate and valuable information about the Landing
        page templates listed in our directory. However, we cannot guarantee the
        performance or quality of services offered by these businesses. Our role
        is to facilitate connections between users and service providers.
      </p>
      <p>
        If you experience any issues or have concerns about a transaction, we
        urge you to first attempt to resolve the matter directly with the
        service provider. If you need further assistance, our customer support
        team is available at
        <a
          className="underline mx-2 text-primary cursor-pointer"
          href="mailto:productizedsite@gmail.com"
          target="_blank"
        >
          []@gmail.com
        </a>
        .We will do our best to mediate and find a satisfactory resolution, but
        please understand that we cannot process refunds for services rendered
        by third-party businesses.
      </p>
      <p>
        We continuously evaluate our policies to ensure the best experience for
        our users. Any future changes to our refund policy will be clearly
        communicated on our website.
      </p>
    </div>
  );
}

export default page;
