"use client";
import FadeInSection from "./FadeInSection";

export default function withFadeIn(Component) {
  return function Wrapper(props) {
    return (
      <FadeInSection>
        <Component {...props} />
      </FadeInSection>
    );
  };
}
