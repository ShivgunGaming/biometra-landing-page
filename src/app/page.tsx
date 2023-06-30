import Box from "./components/Box";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Stars from "./components/Stars";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Stars />
      <Banner />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic  after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:dark:from-transparent before:to-sky-700 before:dark:opacity-10 after:from-sky-900 after:dark:via-[#0141ff] after:opacity-40 before:lg:h-[360px]">
        <div className="flex flex-wrap gap-6 w-full h-full justify-center my-10 px-2">
          <Box name="About Us" description="Welcome to Biometra, your trusted Biometric Scanning Web3 Wallet." />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 w-full h-full justify-center my-10 ">
        <Service
          title="Secure Biometric Authentication"
          items={[
            "Biometra offers advanced biometric scanning technology to ensure secure and convenient authentication for your Web3 transactions. Say goodbye to passwords and enjoy seamless access with just a touch or a glance.",
          ]}
        />
        <Service
          title="Effortless Transaction Management"
          items={[
            "With Biometra, managing your Web3 transactions becomes effortless. Our intuitive interface allows you to easily send, receive, and monitor your digital assets, providing a smooth and user-friendly experience.",
          ]}
        />{" "}
        <Service
          title="Unparalleled Security"
          items={[
            "Your digital assets deserve the highest level of security. Biometra employs cutting-edge encryption and decentralized storage to safeguard your funds and personal information, giving you peace of mind and protection against cyber threats.",
          ]}
        />{" "}
      </div>
      <Footer />
    </main>
  );
}
