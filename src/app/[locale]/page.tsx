"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8" >
      <div className="grid" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
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
            style={{ marginTop: "-160px" }}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}
