"use client";

import { useTranslations } from "next-intl";
import {Button} from "primereact/button"

export default function Home() {
  const t = useTranslations("HomePage");
  const a = useTranslations("all_in_one");

  return (
    <>
    <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
      <div
        className="grid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-12 md:col-6">
          <div className="pr-0 md:pr-8">
            <div className="text-blue-500 font-bold text-5xl mb-5">
              {t("title")}
            </div>

            <div
              className="mb-5 border-blue-500 pl-3"
              style={{ borderLeft: "4px solid" }}
            >
              <span className="text-white font-bold text-2xl">
                {t("interface")}
              </span>
              <div className="text-gray-400 line-height-3 mt-3">
                {t("intContent")}
              </div>
            </div>

            <div className="mb-5">
              <span className="text-gray-400 font-bold text-2xl">
                {t("conectivity")}
              </span>
              <div className="text-gray-400 line-height-3 mt-3">
                {t("conContent")}
              </div>
            </div>

            <div className="mb-5">
              <span className="text-gray-400 font-bold text-2xl">
                {t("privacy")}
              </span>
              <div className="text-gray-400 line-height-3 mt-3">
                {t("privContent")}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dwf7017c25/images/3003649/GOOGLE-PIXEL-9-PRO-XL-5G-16-512G-NEGRO_Front-Back.png?sw=400"
            alt="Image"
          />
        </div>
      </div>
    </div>

    <div className="px-4 py-8 md:px-6 lg:px-8" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
    <div className="text-blue-600 text-xl font-medium mb-3">{a("heading")}</div>
    <div className="text-900 text-3xl font-bold mb-3">{a("description")}</div>
    <div className="text-700">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div className="grid mt-7">
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-blue-50 p-4 text-blue-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-heart text-5xl "></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">{a("simpler")}</div>
                <div className="text-700 mb-4 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                <Button label={a("learn")}className="p-button-text font-bold" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-purple-50 p-4 text-purple-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-wifi text-5xl"></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">{a("extensive")}</div>
                <div className="text-700 mb-4 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
                <Button label={a("learn")} className="p-button-text font-bold" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="shadow-1 p-5 surface-card text-center border-round">
                <div className="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
                    <i className="pi pi-lock text-5xl"></i>
                </div>
                <div className="text-900 font-medium text-2xl mb-4">{a("magical")}</div>
                <div className="text-700 mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
                <Button label={a("learn")} className="p-button-text font-bold" />
            </div>
        </div>
    </div>
</div>
     
    </>
  );
}
