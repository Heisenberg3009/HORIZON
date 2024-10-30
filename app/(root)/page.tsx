import TotalBalanceBox from "@/components/TotalBalancebox";
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Tulsi" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1350.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
