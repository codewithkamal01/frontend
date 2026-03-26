import MisconfigHeader from "../components/misconfig/MisconfigHeader";
import MisconfigStats from "../components/misconfig/MisconfigStats";
import TableContainer from "../components/misconfig/TableContainer";

function Misconfigurations() {
  return (
    <div className="bg-[#0a0e14] min-h-screen space-y-6">
      <MisconfigHeader />
      <MisconfigStats />
      <TableContainer />

      {/* Footer */}
      <div className="mt-12 text-center opacity-20 select-none">
        <span className="font-['Space_Grotesk'] font-bold text-6xl text-transparent bg-gradient-to-b from-[#9BA8FF] to-transparent bg-clip-text">
          AUTO CLOUD GUARD
        </span>
      </div>
    </div>
  );
}

export default Misconfigurations;
