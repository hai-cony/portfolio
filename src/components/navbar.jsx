import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Moon, Sun } from "lucide-react";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi tema pengguna yang disimpan di localStorage
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    // Toggle dark mode
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=" text-primary font-bold ml-5 flex h-full items-center scale-75 rounded"
    >
      {isDarkMode ? (
        <span>
          <Moon />
        </span>
      ) : (
        <span>
          <Sun />
        </span>
      )}
    </button>
  );
}

export default function Navbar() {
  return (
    <div className="fixed z-[999] w-screen h-10 top-0 left-0 bg-secondary shadow-sm shadow-blue-600/50 text-primary transition duration-100">
      <div className="flex h-full items-center px-10 justify-between">
        <div className="text-lg font-semibold">Xena</div>
        <div className="flex h-full items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <div className="flex space-x-2 mr-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Automation</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="m-3 w-[75vh] flex">
                      <div className="h-52 w-44 bg-secondary font-bold flex flex-col justify-end p-3 rounded mr-3">
                        <div>Home Automation by Xena</div>
                      </div>
                      <ul>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              Kontrol jarak jauh
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              On/Off saklar dari jarak jauh via web.
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              ESP8266 Support
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Intergrasi controller ESP8266 dengan koneksi HTTPS
                              yang aman.
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              Komunikasi API
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Transmisi data antara perangkat ESP8266 dan server
                              menggunakan API.
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fitur</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="m-3 w-[75vh] flex">
                      <ul className="w-1/2">
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              HTTPS
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Transmisi data menggunakan protokol HTTPS yang
                              aman.
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              JSON
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              API yang menggunakan JSON dapat dengan mudah
                              dibaca.
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              User Friendly
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Antarmuka yang dibangun untuk memudahkan pengguna.
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                      <ul className="w-1/2">
                        <div className="text-md text-primary font-bold mb-2 ml-2">
                          Lebih dekat
                        </div>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              Kontak
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Lihat informasi kontak.
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="hover:bg-secondary p-2 rounded hover:cursor-pointer">
                          <NavigationMenuLink>
                            <div className="text-sm text-primary font-semibold">
                              Tentang
                            </div>
                            <div className="text-sm text-semibold text-slate-500/70">
                              Tujuan pembuatan layanan.
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href={"/login"}
                    className="flex h-full items-center text-sm ml-3 font-medium"
                  >
                    Documentation
                  </Link>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
}
