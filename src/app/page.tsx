"use client";
import React from "react";
import AccessibilityComp from "./components/ADACompliance";
import HomePage from "./components/HomePage";

export default function Home() {
  const [isActive, setIsActive] = React.useState(false);

  const toggleActive = () => {
    setIsActive((prev: boolean) => !prev);
  };
  return (
    <div>
      <HomePage />
      {/* <div>
        <h1>Main Content</h1>
        <p>
          This is an example of an accessible component that considers various
          use cases. It includes semantic HTML elements, proper use of ARIA
          attributes, keyboard navigation, and more.
        </p>
        <button
          type="button"
          aria-label={isActive ? "Hide Details" : "Show Details"}
          onClick={toggleActive}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          {isActive ? "Hide Details" : "Show Details"}
        </button>

        {isActive && (
          <div>
            <h2>Details Section</h2>
            <img
              src="https://placekitten.com/200/200"
              alt="A cute kitten" // Provide descriptive alt text for images
              style={{ width: "200px", height: "200px" }}
            />
            <p>
              This section contains additional details. Ensure that the content
              here is accessible to screen readers and keyboard users.
            </p>
            <a href="#section1" aria-label="Link to Section 1">
              Section 1
            </a>
            <a href="#section2" aria-label="Link to Section 2">
              Section 2
            </a>
          </div>
        )}

        <section id="section1" aria-labelledby="section1-heading">
          <h2 id="section1-heading">Section 1</h2>
          <p>This is the content of Section 1.</p>
        </section>
        <section id="section2" aria-labelledby="section2-heading">
          <h2 id="section2-heading">Section 2</h2>
          <p>This is the content of Section 2.</p>
        </section>
      </div> */}
      {/* <AccessibilityComp /> */}
    </div>
  );
}
