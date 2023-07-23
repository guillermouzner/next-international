"use client";

import {useI18n, useChangeLocale, useCurrentLocale} from "../../../locales/client";

export default function Client() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div>
      <p>ESTO ES DESDE PAGE.TSX HIJO /CLIENT</p>

      <h1>CSR</h1>
      <p>
        Current locale:
        <span>{locale}</span>
      </p>
      <p>{t("hello")}</p>
      <p>
        {t("welcome", {
          name: "Lio Messi",
        })}
      </p>
      <p>
        (with React components):{" "}
        {t("welcome", {
          name: <strong>Lio Messi</strong>,
        })}
      </p>
      <p>
        {t("about.you", {
          age: "23",
          name: "LIONEL ANDRES",
        })}
      </p>
      <p>
        (with React components):{" "}
        {t("about.you", {
          age: <strong>23</strong>,
          name: "LIONEL ANDRES",
        })}
      </p>
      <button type="button" onClick={() => changeLocale("en")}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale("es")}>
        ES
      </button>
    </div>
  );
}
