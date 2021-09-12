import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

  return (
    <Layout>
      <div>
        <Logo dark />
        <Title level={2} className="mt-6">
          {t("Sign in to your account")}
        </Title>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" name="remember-me" />
                <Label htmlFor="remember-me">Remember me</Label>
              </div>

              <div className="text-sm">
                <Link href="#">Forgot your password?</Link>
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
