import Image from "next/image";
import React from "react";
import partnerIcon1 from "../../../../public/partners/mircosoft-icon.png";
import partnerIcon2 from "../../../../public/partners/dell-icon.png";
import partnerIcon3 from "../../../../public/partners/Amazon-icon.png";
import partnerIcon4 from "../../../../public/partners/AT&T-icon.png";
import partnerIcon5 from "../../../../public/partners/brocade-icon.png";
import partnerIcon6 from "../../../../public/partners/checkpoint-icon.png";
import partnerIcon7 from "../../../../public/partners/hp-icon.png";
import partnerIcon8 from "../../../../public/partners/dell-emc-icon.png";
import partnerIcon9 from "../../../../public/partners/fortinet-icon.png";
import partnerIcon10 from "../../../../public/partners/microsoft-azure-icon.png";
import partnerIcon11 from "../../../../public/partners/mitel-icon.png";
import partnerIcon12 from "../../../../public/partners/office-365-icon.png";
import partnerIcon13 from "../../../../public/partners/paloalto.png";
import partnerIcon14 from "../../../../public/partners/shape-icon.png";
import partnerIcon15 from "../../../../public/partners/Solarwinds-icon.png";
import partnerIcon16 from "../../../../public/partners/watchguard-technologies-icon.png";
import partnerIcon17 from "../../../../public/partners/sumologic-icon.png";
import partnerIcon18 from "../../../../public/partners/f5-networks-icon.png";
import partnerIcon19 from "../../../../public/partners/cyberversion-icon.png";
import partnerIcon20 from "../../../../public/partners/radiflow-icon.png";
import partnerIcon21 from "../../../../public/partners/vmware-icon.png";
import partnerIcon22 from "../../../../public/partners/sumo-icon.png";
import partnerIcon23 from "../../../../public/partners/ruckus-icon.png";
import partnerIcon24 from "../../../../public/partners/brocade-2-icon.png";
import Link from "next/link";

const PartnersCard = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="text-gray-900 text-2xl lg:text-4xl font-semibold">
        We are Proud to have Industry leaders as our Partners
      </h1>
      <p className="text-gray-600 py-2">
        InfoSight proudly partners with below industry leading companies.
      </p>
      <div className="grid lg:grid-cols-11 grid-cols-3 lg:gap-10 gap-6 py-5">
        <Link href="https://www.microsoft.com">
          <Image src={partnerIcon1} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.dell.com/">
          <Image src={partnerIcon2} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.amazon.com/">
          <Image src={partnerIcon3} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.att.com/">
          <Image src={partnerIcon4} alt="Parter logo" className="" />
        </Link>
        <Link href="#">
          <Image src={partnerIcon5} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.checkpoint.com/">
          <Image src={partnerIcon6} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.hp.com/">
          <Image src={partnerIcon7} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.dell.com/en-us/blog/tags/dell-emc/">
          <Image src={partnerIcon8} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.fortinet.com/">
          <Image src={partnerIcon9} alt="Parter logo" className="" />
        </Link>
        <Link href="https://azure.microsoft.com/en-us">
          <Image src={partnerIcon10} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.mitel.com/">
          <Image src={partnerIcon11} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.microsoft.com/en/microsoft-365/">
          <Image src={partnerIcon12} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.paloaltonetworks.com/">
          <Image src={partnerIcon13} alt="Parter logo" className="" />
        </Link>
        <Link href="#">
          <Image src={partnerIcon14} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.solarwinds.com/">
          <Image src={partnerIcon15} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.watchguard.com/">
          <Image src={partnerIcon16} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.sumologic.com/">
          <Image src={partnerIcon17} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.f5.com/">
          <Image src={partnerIcon18} alt="Parter logo" className="" />
        </Link>
        <Link href="#">
          <Image src={partnerIcon19} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.radiflow.com/">
          <Image src={partnerIcon20} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.vmware.com/">
          <Image src={partnerIcon21} alt="Parter logo" className="" />
        </Link>
        <Link href="#">
          <Image src={partnerIcon22} alt="Parter logo" className="" />
        </Link>
        <Link href="https://www.ruckusnetworks.com/">
          <Image src={partnerIcon23} alt="Parter logo" className="" />
        </Link>
        <Link href="#">
          <Image src={partnerIcon24} alt="Parter logo" className="" />
        </Link>
      </div>
    </div>
  );
};

export default PartnersCard;
