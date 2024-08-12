import React from "react";

function page() {
  return (
    <div className="w-full px-5 text-white md:mb-48 mb-96">
      <h3 className="text-primary text-2xl">Terms and Conditions</h3>
      <p>Last updated: 27-07-24</p>
      <ul className="w-full flex justify-start items-start flex-col gap-5 list-decimal my-10 px-5">
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Acceptance of Terms
          </h3>
          By accessing and using Productized.site, you agree to be bound by
          these Terms and Conditions.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Use of the Site
          </h3>
          You agree to use the Site only for lawful purposes and in accordance
          with these Terms.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">User Accounts</h3>
          You may need to create an account to use certain features of the Site.
          You are responsible for maintaining the confidentiality of your
          account information.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Business Listings
          </h3>
          4.1 Listing Eligibility: Only legitimate productized businesses may be
          listed on the Site. 4.2 Accuracy: You are responsible for providing
          accurate and up-to-date information for your business listing. 4.3
          Review and Removal: We reserve the right to review, reject, or remove
          any listing at our discretion.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Intellectual Property
          </h3>
          The Site and its original content, features, and functionality are
          owned by productized.site and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property laws.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">User Content</h3>
          By submitting content to the Site, you grant us a non-exclusive,
          worldwide, royalty-free license to use, reproduce, modify, and
          distribute that content.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Disclaimer of Warranties
          </h3>
          The Site is provided on an as is and as available basis. We make no
          warranties, expressed or implied, regarding the operation of the Site
          or the information, content, materials, or products included.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Limitation of Liability
          </h3>
          We shall not be liable for any indirect, incidental, special,
          consequential or punitive damages resulting from your use of or
          inability to use the Site.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Third-Party Links
          </h3>
          The Site may contain links to third-party websites. We are not
          responsible for the content or practices of any linked third-party
          sites.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">Modifications</h3>
          We reserve the right to modify these Terms at any time. Changes will
          be effective immediately upon posting to the Site.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">Termination</h3> We
          may terminate or suspend your account and access to the Site at our
          sole discretion, without notice, for conduct that we believe violates
          these Terms or is harmful to other users, us, or third parties, or for
          any other reason.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">Governing Law</h3>
          These Terms shall be governed by and construed in accordance with the
          laws of USA, without regard to its conflict of law provisions.
        </li>
        <li>
          <h3 className="text-lg font-semibold text-primary">
            Contact Information
          </h3>
          Questions about the Terms should be sent to us at
          <a
            className="underline mx-2 text-primary cursor-pointer"
            href="mailto:productizedsite@gmail.com"
            target="_blank"
          >
            productizedsite@gmail.com
          </a>
          By using Productized.site, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions.
        </li>
      </ul>
    </div>
  );
}

export default page;
