import {getI18n, getCurrentLocale, getStaticParams} from "../../locales/server";

// Only needed for SSG
export const generateStaticParams = getStaticParams();

export default async function Home() {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <div>
      <p>ESTO ES DESDE PAGE.TSX PADRE</p>
      <h1>SSR / SSG</h1>
      <p>
        Current locale:
        <span>{locale}</span>
      </p>
      <p>Hello: {t("hello")}</p>
      <p>
        Hello:{" "}
        {t("welcome", {
          name: "John",
        })}
      </p>
      <p>
        Hello (with React components):{" "}
        {t("welcome", {
          name: <strong>John</strong>,
        })}
      </p>
      <p>
        Hello:{" "}
        {t("about.you", {
          age: "23",
          name: "Doe",
        })}
      </p>
      <p>
        Hello (with React components):{" "}
        {t("about.you", {
          age: <strong>23</strong>,
          name: "Doe",
        })}
      </p>
    </div>
  );
}
