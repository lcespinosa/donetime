import Layout from "components/layouts/BackOffice";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Reports = ({ ...props }) => {
  const { t } = useTranslation("navigation");

  return (
    <Layout title="Reports" t={t}>
      Reports
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navigation"])),
  },
});

export default Reports;
