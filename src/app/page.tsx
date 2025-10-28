"use client";

import Link from "next/link";
import { ExternalLink, MoveRight } from "lucide-react";
import { skills, works } from "@/content";
import { truncateString } from "@/lib/utils";
import { experiences } from "@/content/experience";
import { Separator } from "@/components/global";
import clsx from "clsx";
import Prism from "@/components/animations/prism";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="border-l border-r w-full lg:w-[1104px] mx-auto px-6 py-8 grid lg:grid-cols-5 gap-12 items-center"
        id="hero"
      >
        <div className="lg:col-span-3">
          <p className="text-sm font-mono text-neutral-600 dark:text-neutral-300">
            PORTFOLIO / 2025
          </p>
          <h1 className="text-neutral-800 dark:text-neutral-100 tracking-tight text-2xl md:text-4xl text-pretty mt-2 mb-4 font-medium">
            Farhan Nur Hidayat
          </h1>

          <p className="text-neutral-600 dark:text-neutral-300 font-sans text-sm md:text-base">
            Front-End Developer and UI/UX Designer passionate about creating
            modern, responsive websites and intuitive user experiences.
          </p>

          <div className="flex items-center space-x-6 mt-6">
            {/* <Link
              href="#"
              className="hover:shadow-sm dark:border-neutral-200 dark:hover:shadow-sm border-2 border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8"
            >
              Read Resumes
            </Link> */}

            <div className="flex items-center gap-2 font-sans text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-12 lg:grid-cols-1 gap-4 lg:gap-8">
            <div className="space-y-2 col-span-6">
              <div className="text-sm text-neutral-600 dark:text-neutral-300 font-mono">
                CURRENTLY
              </div>
              <div className="col-span-6 space-y-2">
                <div className="text-neutral-800 dark:text-neutral-100 font-sans">
                  Full Stack Developer
                </div>
                <Link
                  href="https://icei.or.id/id"
                  target="_blank"
                  className="font-sans underline text-neutral-800 dark:text-neutral-100 flex items-center gap-2"
                >
                  icei.or.id <ExternalLink className="w-4 h-4" />
                </Link>
                <div className="text-xs text-neutral-600 dark:text-neutral-300 font-sans mt-2">
                  March 2025 - Present
                </div>
              </div>
            </div>
            <div className="space-y-4 col-span-6">
              <div className="text-sm text-neutral-600 dark:text-neutral-300 font-mono">
                FOCUS
              </div>
              <div className="flex flex-wrap gap-1">
                {skills.map(skill => (
                  <span
                    key={skill.id}
                    className="font-sans px-3 py-1 text-xs border border-border hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill.stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <Separator />

      <section
        className="border-l border-r w-full lg:w-[1104px] mx-auto px-6 py-8"
        id="experience"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-neutral-800 dark:text-neutral-100 tracking-tight text-2xl md:text-3xl text-pretty font-medium">
            The Experience
          </h2>

          <p className="font-mono font-normal text-neutral-600 dark:text-neutral-300">
            2019 - 2025
          </p>
        </div>

        <div className="grid grid-rows-1 divide-y border">
          {experiences.map((experience, index) => (
            <div
              className="grid grid-cols-12 divide-y divide-x-0 lg:divide-x lg:divide-y-0 divide-dashed"
              key={index}
            >
              <div className="col-span-12 lg:col-span-3 flex items-center justify-center p-4 lg:p-0 lg:px-4">
                <p className="font-mono text-neutral-600 dark:text-neutral-300 text-center">
                  {experience.date}
                </p>
              </div>

              <div
                className={clsx(
                  experience.stacks ? "lg:col-span-6" : "lg:col-span-9",
                  "p-4 col-span-12"
                )}
              >
                <p className="font-sans text-neutral-600 dark:text-neutral-300 mb-2 text-sm">
                  {experience.company}
                </p>
                <h3 className="text-xl font-semibold font-sans text-neutral-800 dark:text-neutral-100 mb-4">
                  {experience.role}
                </h3>

                <p className="font-sans text-neutral-600 dark:text-neutral-300">
                  {experience.description}
                </p>
              </div>

              {experience.stacks && (
                <div className="col-span-12 lg:col-span-3 p-4 lg:p-0 lg:px-2 flex items-center justify-center">
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {experience.stacks.map((stack, index) => (
                      <span
                        key={index}
                        className="font-sans px-3 py-1 text-xs border border-border hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section
        className="border-l border-r w-full lg:w-[1104px] mx-auto px-6 py-8"
        id="works"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-neutral-800 dark:text-neutral-100 tracking-tight text-2xl md:text-3xl text-pretty font-medium">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-rows-1 lg:grid-cols-12 justify-center divide-y divide-x-0 lg:divide-y-0 lg:divide-x border">
          {works.map((work, index) => (
            <div className="col-span-4 flex flex-col gap-4 p-6" key={index}>
              <p className="font-mono text-sm text-neutral-600 dark:text-neutral-300">
                {work.category}
              </p>
              <h3 className="font-sans text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                {work.title}
              </h3>
              <p className="font-sans text-sm lg:text-base text-neutral-600 dark:text-neutral-300">
                {truncateString(work.description, 150)}
              </p>

              <Link
                href={`${work.source}`}
                target="_blank"
                className="border dark:hover:border-white hover:border-neutral-950 text-foreground font-sans font-medium flex items-center gap-2 w-max py-2 px-4 transition duration-200"
              >
                Read More <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section
        className="border-l border-r w-full h-screen lg:w-[1104px] lg:h-screen mx-auto relative overflow-hidden"
        id="contact"
      >
        <Prism
          animationType="3drotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
          transparent={true}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 w-full lg:w-[600px] m-auto">
          <div className="flex items-center flex-col gap-4">
            <h1 className="text-neutral-950 dark:text-white tracking-tight text-4xl md:text-6xl text-center text-pretty font-extrabold">
              Let&apos;s Connect
            </h1>

            <p className="text-neutral-950 dark:text-neutral-50 font-sans text-base lg:text-xl text-center">
              Always interested in new opportunities, collaborations, and
              conversations about technology and design.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <Link
              href="https://www.linkedin.com/in/farhannhdyt/"
              target="_blank"
              className="w-full lg:w-auto hover:shadow-sm font-medium flex items-center justify-center gap-2 dark:border-neutral-200 dark:hover:shadow-sm border-2 border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8"
            >
              LinkedIn <ExternalLink className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="mailto:test@mail.com"
              className="group flex items-center gap-3 dark:text-white text-neutral-950 transition-colors duration-300"
            >
              <span className="text-base sm:text-lg font-sans font-medium">
                contact.farhannhdyt@gmail.com
              </span>
              <MoveRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
