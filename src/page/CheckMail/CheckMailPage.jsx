import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import LightModeButton from "../../components/LightModeButton";
import CheckMailForm from "./CheckMailForm";
import Logo from "../../components/Logo";



export default function CheckMailPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative min-h-screen bg-wih-900 text-wih-50 flex items-center justify-center">
      <Logo />
      <LightModeButton toggleTheme={toggleTheme} theme={theme} />
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-10">
        <CheckMailForm />
        <section className="self-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Welcome to WorkInHarmony
          </h1>
          <p className="mt-4 leading-7 text-wih-50/80 max-w-prose">
            "Work smarter, not harder! Our project management tool helps teams
            organize tasks, share files, chat in real time, and stay on top of
            deadlines—all in one place. Whether you’re managing a big project or
            collaborating with a small team, it makes work simple, fast, and
            stress-free."
          </p>
        </section>
      </div>
    </div>
  );
}
