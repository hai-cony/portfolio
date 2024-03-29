"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import LoadingScreen from "@/components/loading";
import Navbar from "@/components/navbar";
import { ArrowDown } from "lucide-react";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function page() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(null);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
      setLoading(false);
    }, 1000);
    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "Mei",
      "Juny",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;
    setCurrentDate(formattedDate);
  }, []); // [] agar useEffect hanya dijalankan saat komponen dipasang

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Navbar />
      <section
        className="bg-secondary h-screen text-primary font-poppins"
        id="top"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-3xl font-medium text-transparent sm:text-4xl">
              {time?.toLocaleTimeString()}
            </h1>
            <p className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text font-semibold text-transparent mb-10">
              {currentDate}
            </p>
            <h1 className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl pb-3">
              Hi, Welcome To My Page
            </h1>
            <h1 className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              I'm Erik Bagja Nugraha.
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed text-primary font-semibold">
              i'm Indonesian and a web developer
            </p>

            <div className="mt-8 flex flex-col justify-center">
              <div>
                <a href="#whoami">
                  <Button variant="primary">Get Started</Button>
                </a>
              </div>
              <div className="flex justify-center">
                <a href="#whoami">
                  <ArrowDown className="animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
      <Footer />
    </>
  );
}
