"use client";
import { Dropdown } from "primereact/dropdown";
import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Header() {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string | null>(null);

  const t = useTranslations("HomePage");

  const btnRef17 = useRef<null>(null);
  const btnRef18 = useRef<null>(null);
  const btnRef19 = useRef<null>(null);
  const btnRef20 = useRef<null>(null);

  useEffect(() => {
    const locale = pathname.split("/")[1];
    setCurrentLocale(locale);
  }, [pathname]);

  const onSelectChange = (event: { value: string }) => {
    const nextLocale = event.value;
    const currentPath = pathname.split("/").slice(2).join("/");
    startTransition(() => {
      router.push(`/${nextLocale}/${currentPath}`);
    });
  };

  const Lang = [
    { label: t("es"), value: "es" },
    { label: t("en"), value: "en" },
  ];

  return (
    <>
      <div className="bg-gray-900 relative px-6">
        <div
          className="py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none lg:border-bottom-1 border-gray-800"
          style={{ minHeight: "81px" }}
        >
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
            alt="Image"
            height="40"
            className="mr-0 lg:mr-6"
          />
          <div className="flex align-items-center">
            <StyleClass
              nodeRef={btnRef17}
              selector="#navbar-sub-8"
              enterClassName="hidden"
              leaveToClassName="hidden"
              hideOnOutsideClick
            >
              <a
                href="/"
                className="p-ripple cursor-pointer block lg:hidden text-gray-400 mr-5"
              >
                <i className="pi pi-ellipsis-v text-2xl"></i>
                <Ripple />
              </a>
            </StyleClass>
            <StyleClass
              nodeRef={btnRef18}
              selector="#navbar-8"
              enterClassName="hidden"
              leaveToClassName="hidden"
              hideOnOutsideClick
            >
              <a
                ref={btnRef18}
                className="p-ripple cursor-pointer block lg:hidden text-gray-400"
              >
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
              </a>
            </StyleClass>
          </div>
          <div
            id="navbar-sub-8"
            className="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none"
          >
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
              <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                  <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                  <span className="block lg:hidden font-medium">Inbox</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                  <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                    <Badge severity="danger" />
                  </i>
                  <span className="block lg:hidden font-medium">
                    Notifications
                  </span>
                  <Ripple />
                </a>
              </li>
              <li className="border-top-1 border-gray-800 lg:border-top-none">
                <a className="p-ripple flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                  <img
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    className="mr-3 lg:mr-0"
                    style={{ width: "28px", height: "28px" }}
                  />
                  <div className="block lg:hidden">
                    <div className="text-gray-400 font-medium">
                      Josephine Lillard
                    </div>
                    <span className="text-gray-500 font-medium text-sm">
                      Marketing Specialist
                    </span>
                  </div>
                  <Ripple />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="navbar-8"
          className="py-2 px-6 lg:px-0 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2"
        >
          <ul className="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
            <li>
              <Link
                href="/"
                className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
              >
                <i className="pi pi-home mr-2"></i>
                <span>{t("navhome")}</span>
                <Ripple />
              </Link>
            </li>
            <li className="lg:relative">
              <StyleClass
                nodeRef={btnRef19}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick
              >
                <a
                  ref={btnRef19}
                  className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                >
                  <i className="pi pi-users mr-2"></i>
                  <span>{t("customer")}</span>
                  <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                  <Ripple />
                </a>
              </StyleClass>
              <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer">
                <li>
                  <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                    <i className="pi pi-user-plus mr-2"></i>
                    <span className="font-medium">{t("new")}</span>
                    <Ripple />
                  </a>
                </li>
                <li className="relative">
                  <StyleClass
                    nodeRef={btnRef20}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="scalein"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeout"
                    hideOnOutsideClick
                  >
                    <a
                      ref={btnRef20}
                      className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150"
                    >
                      <i className="pi pi-search mr-2"></i>
                      <span className="font-medium">{t("search")}</span>
                      <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                    <li>
                      <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                        <i className="pi pi-shopping-cart mr-2"></i>
                        <span className="font-medium">{t("purchase")}</span>
                        <Ripple />
                      </a>
                    </li>
                    <li className="relative">
                      <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                        <i className="pi pi-comments mr-2"></i>
                        <span className="font-medium">{t("message")}</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                <i className="pi pi-calendar mr-2"></i>
                <span>{t("calendar")}</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                <i className="pi pi-chart-line mr-2"></i>
                <span>{t("stats")}</span>
                <Ripple />
              </a>
            </li>
            <div className="card flex justify-content-center">
              <Dropdown
                options={Lang}
                value={
                  Lang.find((lang) => lang.value === currentLocale) || null
                }
                onChange={onSelectChange}
                placeholder={t("lang")}
                className="w-full md:w-14rem" style={{padding:"8px", margin:"4px"}}
              />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
