import Layout from "components/layouts/BackOffice";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Teams = ({ ...props }) => {
  const { t } = useTranslation("navigation");

  return (
    <Layout title="Teams" t={t}>
      Teams
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navigation"])),
  },
});

export default Teams;
