import Head from "next/head";

const CustomHead = ({title}) => {
  const generateTitle = () => {
    return title
      ? `${title} | ${process.env.NEXT_PUBLIC_APP_NAME}`
      : `${process.env.NEXT_PUBLIC_APP_NAME}`;
  };

  return (
    <Head>
      <title>{generateTitle()}</title>
      <meta name="description" content="DoneTime" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default CustomHead