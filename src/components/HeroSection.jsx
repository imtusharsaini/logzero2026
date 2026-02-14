import Image from "next/image";

import CounterNo from "./CounterNo";
import WhiteButton from "./WhiteButton";

import { InlineGreenButton } from "./InlineGreenButton";
export default function HeroSection({
  title,
  subtitle,
  titlecolor,
  playiconyes,
  description,
  shortdescription,
  addCounterNo,
  isocertified,
  buttonText = "Schedule Consultation",
  buttonLink,
  buttonTarget,
  bannerimage,
  BtnPrimary,
  buttonTextTwo,
  buttonlinkurlTwo,
  buttonlinktargetTwo,
  description2,
  KeyFeatures,
  keyFeaturesList,
  nostats = [],
  servicesOptions = [],
}) {
  return (
    <section className="bggray2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="gap-6 pt-[30px] pb-[30px] pl-6 xl:pl-[80px] lg:pl-[50px] md:pl-8 pr-6 lg:pr-[30px] md:pr-[0px]">
          {/* Heading */}
          {title && (
            <h1 className={`${titlecolor ? "textblue7" : ""}`}>{title}</h1>
          )}

          {subtitle && <h2 className="subheading-4 mt-5">{subtitle}</h2>}

          {/* Description */}
          {description && (
            <>
              <p className="mt-6">{description}</p>
              {description2 && <p className="mt-6">{description2}</p>}
            </>
          )}

          {shortdescription && (
            <p className="mt-6 text-[#525D6A] !mb-[30px]">
              <em>{shortdescription}</em>
            </p>
          )}

          {/* Counters */}
          {addCounterNo && nostats?.length > 0 && (
            <CounterNo nostats={nostats} />
          )}

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col lg:flex-row md:flex-col sm:flex-row gap-3 sm:gap-4">
            {BtnPrimary ? (
              <InlineGreenButton
                text={buttonText}
                linkurl={buttonLink}
                linktarget={buttonTarget}
                MoveRighticon
                services={servicesOptions}
              />
            ) : (
              <>
                <InlineGreenButton
                  text={buttonText}
                  linkurl={buttonLink}
                  linktarget={buttonTarget}
                  MoveRighticon
                  services={servicesOptions}
                />
                <WhiteButton
                  text={buttonTextTwo}
                  linkurl={buttonlinkurlTwo}
                  linktarget={buttonlinktargetTwo}
                  MoveRighticon={!playiconyes}
                />
              </>
            )}
          </div>

          {/* ISO Logos */}
          {isocertified && (
            <div className="flex gap-8 mt-6 font-semibold text-center">
              <Image
                src="/assets/img/iso-img2.png"
                alt=""
                width={100}
                height={100}
              />
              <Image
                src="/assets/img/iso-img.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          )}

          {/* Key Features */}
          {KeyFeatures && keyFeaturesList?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-5">
              {keyFeaturesList.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 pr-[20px] ${
                    index !== keyFeaturesList.length - 1
                      ? "md:border-r md:border-[#000]"
                      : ""
                  }`}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={24}
                    height={24}
                    className="text-[#5BC2A7]"
                  />
                  <span className="finter text-[18px]">{feature.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-[562px]">
          <Image
            src={bannerimage}
            alt="Hero"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}


