import React from "react";
import Section from "./Section";
import FeatureCard from "./FeatureCard";
import TextGroup from "./TextGroup";

import { landingPageContent } from "~/content/landingPageContent";

const Features = () => {
  const { featuresSection } = landingPageContent;
  return (
    <Section secondaryBackground>
      <TextGroup
        heading={featuresSection.heading}
        paragraph={featuresSection.paragraph}
      />
      <div className="grid max-w-[900px] grid-cols-1 gap-3 md:grid-cols-2">
        {featuresSection.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            content={feature.content}
            icon={feature.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Features;
