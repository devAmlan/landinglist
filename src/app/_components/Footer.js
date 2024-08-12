import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import _ from "lodash";
import { FaXTwitter, MdEmail } from "@/icons";

const Links = [
  {
    id: nanoid(),
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: nanoid(),
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    id: nanoid(),
    label: "Refund policy",
    href: "/refund-policy",
  },
];

const SOCIAL_LINKS = [
  {
    id: nanoid(),
    icon: <FaXTwitter />,
    href: "https://x.com/indieninad",
  },
  {
    id: nanoid(),
    icon: <MdEmail />,
    href: "mailto:productizedsite@gmail.com",
  },
];
function Footer() {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-5 p-5 md:p-10 bg-white/5 absolute bottom-0">
      <div className="w-full text-white flex justify-between items-end flex-col md:flex-row gap-10 md:gap-20">
        <div className="flex justify-start items-start flex-col gap-5 w-full md:w-2/5">
          <h2 className="text-xl font-bold text-primary">Landinglist.xyz</h2>
          <p className="w-full text-sm text-secondary">
            Find awesome landing page templates for your next projects.
          </p>
        </div>

        <ul className="w-full md:w-2/5 flex justify-end items-start flex-col gap-2">
          {_.map(Links, ({ id, label, href }) => (
            <Link className="text-sm underline text-white" href={href} key={id}>
              {label}
            </Link>
          ))}
        </ul>

        <div className="w-full flex justify-start items-center gap-5 flex-1">
          {_.map(SOCIAL_LINKS, ({ id, icon, href }) => (
            <a key={id} href={href} target="_blank">
              {icon}
            </a>
          ))}
        </div>
      </div>
      <p className="w-full text-xs text-white">
        &#169; Landinglist.xyz | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
