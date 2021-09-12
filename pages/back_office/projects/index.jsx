import React, { useState } from "react";
import Layout from "components/layouts/BackOffice";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Panel, Heading, Button } from "components/ui";

const Projects = ({ ...props }) => {
  const { t } = useTranslation("navigation");

  const [tabs, setSelectedTab] = useState([
    { name: t("In progress"), href: "#", current: true },
    { name: t("Completed"), href: "#", current: false },
    { name: t("Cancelled"), href: "#", current: false },
  ]);

  const updateTabSelection = (selection) => {
    const newState = [...tabs];
    newState.map((tab) => {
      tab.current = tab.name === selection;
    });
    setSelectedTab(newState);
  };

  const buildHeading = () => {
    const actions = [<Button key="create" label={t("Create")} type="button" />];
    return (
      <Heading
        title={t("Projects")}
        actions={actions}
        tabs={tabs}
        t={t}
        setSelectedTab={updateTabSelection}
      />
    );
  };

  return (
    <Layout title="Projects" t={t}>
      <div className="p-4">
        <Panel heading={buildHeading()}>Projects</Panel>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navigation"])),
  },
});

export default Projects;
