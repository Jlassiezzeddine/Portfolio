"use client";
import { social } from "@/shared/data/contact";
import { generateLabelFromSlug } from "@/shared/utils/generateLabelFromSlug";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../theme-toggle";
import ResumeButton from "@/home/components/ResumeButton";

function Navigation() {
  return (
    <nav className="container mx-auto py-8 sticky top-0 left-0 z-50 bg-background">
      <div className="flex items-center gap-4 justify-end">
        {Object.entries(social).map(([slug, link]) => (
          <Link href={link} key={slug} target="_blank">
            {generateLabelFromSlug(slug)}
          </Link>
        ))}
        <div className="pl-8">
          <ResumeButton />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navigation;
