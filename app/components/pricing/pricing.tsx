"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../commons/button";

type PricingPlan = {
  id: string;
  title: string;
  description: string;
  price: number;
  features: {
    name: string;
    included: boolean;
  }[];
};

const PRICING: PricingPlan[] = [
  {
    id: "freebie",
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Unlimited Sharing", included: false },
      { name: "Upload graphics & video in up to 4k", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: true },
      { name: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="mt-18">
      <div className="flex flex-col items-center justify-center">
        <h2
          className="text-[40px] leading-[100%] tracking-[0%] text-center font-bold"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <span style={{ color: "var(--color-nav-text)" }}>
            Airbnb Assistant
          </span>{" "}
          <span style={{ color: "var(--color-accent)" }}>Pricing</span>
        </h2>
        <p
          className="mt-4 text-center text-[20px] leading-[100%] tracking-[0%] font-normal"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "var(--color-nav-text)",
          }}
        >
          Choose a plan that’s right for you
        </p>

        <div className="mt-8 flex items-center gap-6 relative">
          <p
            className="text-[16px] leading-[100%] tracking-[0%] font-normal text-(--color-pay-text)"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Pay Monthly
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly((s) => !s)}
            />
            <div
              className="w-12 h-6 bg-(--color-switch-bg) rounded-full relative transition-colors duration-300 peer-checked:bg-(--color-switch-bg)"
              style={{
                background: isYearly
                  ? "var(--color-accent)"
                  : "var(--color-switch-bg)",
              }}
            >
              <div
                className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-6"
                style={{
                  transform: isYearly ? "translateX(1.5rem)" : "translateX(0)",
                }}
              />
            </div>
          </label>
          <p
            className="text-[16px] leading-[100%] tracking-[0%] font-normal text-(--color-pay-text)"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Pay Yearly
          </p>

          <div className="absolute -right-45 -top-2.5 flex items-end">
            <Image
              src="/save_arrow.svg"
              width={92}
              height={56}
              alt="Save arrow"
              style={{ marginBottom: "6px" }}
            />
            <span
              className="text-[16px] mb-5 font-medium underline"
              style={{ color: "var(--color-accent)" }}
            >
              Save 25%
            </span>
          </div>
        </div>

        <ul className="mt-11.5 w-full px-[128px] grid grid-cols-3 gap-6">
          {PRICING.map((plan) => {
            const annualPrice = Math.round(plan.price * 12 * 0.75);
            return (
              <li
                key={plan.id}
                className={
                  "group flex flex-col rounded-[10px] py-10 px-6 border opacity-100 bg-[var(--color-white-background)] border-[color:var(--color-service-border)] hover:bg-[var(--color-accent)] transition-colors duration-200"
                }
              >
                <p
                  className={
                    "font-bold text-[22px] leading-[100%] tracking-[0%] text-[var(--color-pay-text)] group-hover:text-[var(--color-on-accent)]"
                  }
                >
                  {plan.title}
                </p>
                <p
                  className={
                    "font-normal not-italic text-[16px] leading-[100%] tracking-[0%] text-[var(--color-description-text)] group-hover:text-[var(--color-description-on-accent)] mt-3"
                  }
                >
                  {plan.description}
                </p>
                <p className="mt-5 mb-6 flex items-center gap-3">
                  {isYearly ? (
                    <>
                      <span className="font-['Manrope',sans-serif] font-semibold text-[56px] leading-[100%] text-(--color-pay-text) group-hover:text-(--color-on-accent)">
                        {"$" + annualPrice}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-light text-[16px] leading-[100%] text-(--color-subtext) group-hover:text-(--color-description-on-accent)">
                        /Year
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-['Manrope',sans-serif] font-semibold text-[56px] leading-[100%] text-(--color-pay-text) group-hover:text-(--color-on-accent)">
                        {"$" + plan.price}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-light text-[16px] leading-[100%] text-(--color-subtext) group-hover:text-(--color-description-on-accent)">
                        /Month
                      </span>
                    </>
                  )}
                </p>
                <Button
                  type="start"
                  verticalPadding="py-0"
                  horizontalPadding="px-0 group-hover:bg-[var(--color-white-background)] group-hover:text-[var(--color-accent)] group-hover:border-transparent"
                  child={
                    <p
                      className="text-[16px]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Get Started Now
                    </p>
                  }
                />
                <ul className="mt-10 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-4 text-[16px] leading-[100%]"
                    >
                      <div
                        className="w-8 h-8 min-h-8 min-w-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: feature.included
                            ? "#FAC4D2"
                            : "#F7F8F9",
                        }}
                      >
                        <Image
                          src={
                            feature.included
                              ? "/tic_icon.svg"
                              : "/cross_icon.svg"
                          }
                          width={16}
                          height={16}
                          alt={feature.included ? "Included" : "Not included"}
                        />
                      </div>
                      <span
                        className={`${feature.included ? "text-(--color-pay-text) group-hover:text-(--color-on-accent)" : "text-(--color-feature-disabled)"} font-['Manrope',sans-serif] font-medium text-[16px] leading-[100%] tracking-[0%]`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
