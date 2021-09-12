import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Head from "components/common/Head";

const BackOffice = ({ title, t, ...props }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <Head title={title} />
      <NavigationBar
        t={t}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header t={t} setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main content */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
            >
              <h1 id="primary-heading" className="sr-only">
                {title}
              </h1>
              {props.children}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;
