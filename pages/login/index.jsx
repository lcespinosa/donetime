import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";

import Layout from "components/layouts/Security";
import Logo from "components/common/Logo";

import { Button, Link, Typography, Form } from "components/ui";

const { Title } = Typography;
const { Label, Input, Checkbox } = Form;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["login"])),
    },
  };
}

export default function Example() {
  const { t } = useTranslation("login");

  const digitButtonClasses = classNames(
    "inline-flex justify-center py-3 px-6 border border-gray-300 rounded-md shadow-sm bg-white",
    "text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
  );

  return (
    <Layout>
      <div>
        <Logo dark />
        <Title level={2} className="mt-6">
          {t("Sign in with your PIN")}
        </Title>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="pin">PIN</Label>
              <div className="mt-1">
                <Input
                  id="pin"
                  name="pin"
                  type="password"
                  className="text-center"
                  required
                />
              </div>
            </div>

            <div className="max-w-max mx-auto space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className={digitButtonClasses}>7</div>
                <div className={digitButtonClasses}>8</div>
                <div className={digitButtonClasses}>9</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className={digitButtonClasses}>4</div>
                <div className={digitButtonClasses}>5</div>
                <div className={digitButtonClasses}>6</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className={digitButtonClasses}>1</div>
                <div className={digitButtonClasses}>2</div>
                <div className={digitButtonClasses}>3</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-start-2">
                  <div className={digitButtonClasses}>0</div>
                </div>
              </div>
            </div>

            <div>
              <Button label="Sign in" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
