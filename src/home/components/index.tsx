"use client";

import Experience from "./Experience";
import Presentation from "./Presentation";

function Template() {
  return (
    <div className="container max-w-7xl mx-auto grid gap-4 lg:grid-cols-2 ">
      <Presentation />
      <Experience />
    </div>
  );
}

export default Template;
