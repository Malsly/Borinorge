import { greatVibes } from "../../../fonts";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { useTranslation } from "../../../i18n";

export default async function Noun({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "noun");

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1
            className={`header__title header__title--home ${greatVibes.variable}`}
          >
            {t("title")}
          </h1>
        </div>
      </header>
      <main className="project">
        <Breadcrumbs currentPage={t("title")} lng={lng} />
        <p className="project__paragraph">{t("introduction")}</p>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("gender")}
          </a>
        </h2>
        <div className="project__paragraph">
          {t("gender-one")}
          <div className="pl-1 sm:pl-4 md:pl-8 grid grid-cols-2 border-separate border-spacing-y-20 border-slate-400">
            <div>
              <b>{t("masculine-gender")} </b>
              {t("article")}
              <b> en</b>
            </div>
            <div>en gutt - {t("boy")}</div>
            <div>
              <b>{t("feminine-gender")} </b>
              {t("article")}
              <b> ei</b>
            </div>
            <div>en jente - {t("girl")}</div>
            <div>
              <b>{t("neuter-gender")} </b>
              {t("article")}
              <b> et</b>
            </div>
            <div>
              et barn - {t("child")}, et eple - {t("apple")}
            </div>
          </div>

          <p className="pt-4">{t("gender-two")}</p>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("indefinite-form")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            {t("indefinite-one")}
            <b> en</b>, <b> ei </b>
            {t("or")}
            <b> et </b>
            {t("indefinite-two")}
          </p>
          <span className="pl-4">
            <b>Jeg leser ei bok</b> — {t("reading-book")}
          </span>
          <p className="pt-2">{t("uncountable")}</p>
          <span className="pl-4">
            <b>Jeg liker te</b> — {t("liker-te")}
          </span>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("definite-form")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>{t("definite-one")}</p>
          <div className="pl-1 sm:pl-4 md:pl-8 grid grid-cols-2 border border-spacing-y-2">
            <div>
              <b>{t("masculine-gender")} </b>
            </div>
            <div>
              <span>
                gutt<b>en</b>
              </span>
            </div>

            <div className="pt-2">
              <b>{t("feminine-gender")} </b>
            </div>
            <div className="pt-2">
              jent<b>a </b> ({t("article")}
              <b> ie </b>
              {t("definite-two")}
              <b> a</b>)
            </div>

            <div className="pt-2">
              <b>{t("neuter-gender")} </b>
            </div>
            <div className="pt-2">
              barn<b>et </b>, epl<b>et </b>
              {t("definite-three")}
            </div>
          </div>
        </div>

        <h2 className="project__subtitle">
          <a href="#" title={t("details")}>
            {t("plural")}
          </a>
        </h2>
        <div className="project__paragraph">
          <p>
            {t("plural-one")}
            <b>-er</b>
          </p>
          <ul className="w-3/4 pl-6">
            <li>
              <span className="pl-4">
                gutt<b>er</b> - {t("boys")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                jent<b>er</b> - {t("girls")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                epl<b>er</b> - {t("apples")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">barn - {t("children")}</span>
            </li>
          </ul>
        </div>

        <div className="project__paragraph">
          <p>
            {t("plural-two")}
            <b>-er</b>
          </p>
          <ul className="w-3/4 pl-6">
            <li>
              <span className="pl-4">
                gutt<b>ene</b> - {t("boys")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                jent<b>ene</b> - {t("girls")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                epl<b>ene</b> - {t("apples")}
              </span>
            </li>
            <li className="pt-2">
              <span className="pl-4">
                barn<b>a</b>
                {t("plural-three")} - {t("children")}
              </span>
            </li>
          </ul>
        </div>

        {/* Дополнительные материалы */}
        <div className="project__paragraph">
          {t("look-up-noun")}:
          <ul className="list-outside list-disc ml-10">
            <li>
              {t("russian-norwegian-dictionary")}
              <p>
                <a
                  href="https://lexin.oslomet.no/"
                  target="_blank"
                  className="project__link"
                >
                  lexin.oslomet.no
                </a>
              </p>
              ({t("forms-of-word")} bøyning)
            </li>
            <li>
              {t("ordbokene-explanatory-dictionary")} Ordbøkene
              <p>
                <a
                  href="https://ordbokene.no/"
                  target="_blank"
                  className="project__link"
                >
                  ordbokene.no
                </a>
              </p>
              ({t("click-on-vis")} vis bøyning)
            </li>
            <li>
              {t("dict-dictionary")}Dict
              <p>
                <a
                  href={t("dict-link")}
                  target="_blank"
                  className="project__link"
                >
                  dict.com
                </a>
              </p>
              {t("with-transcription")}
            </li>
          </ul>
          <p className="project__paragraph">{t("tables-forms-voicing")}</p>
        </div>

        {/* Реклама телеграмма */}
        <div className="project__paragraph">
          <b>{t("welcome-to-telegram")} &nbsp;</b>
          <a
            href={t("telegram-link")}
            target="_blank"
            className="project__link"
          >
            {t("telegram-link")}
          </a>
        </div>
      </main>
    </>
  );
}
