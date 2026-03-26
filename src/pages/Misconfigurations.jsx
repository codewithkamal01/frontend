import MisconfigHeader from "../components/misconfig/MisconfigHeader";
import MisconfigStats from "../components/misconfig/MisconfigStats";

function Misconfigurations() {
  return (
    <div className="bg-[#0a0e14] min-h-screen px-6 py-6 space-y-6">
      <MisconfigHeader />
      <MisconfigStats />
    </div>
  );
}

export default Misconfigurations;
