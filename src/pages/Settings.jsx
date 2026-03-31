import { useState } from "react";
import SettingCard from "../components/settings/SettingCard";
import { settingsData } from "../Data/settingsData";

function Settings() {
  const [settings, setSettings] = useState(settingsData);

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

  const handleDiscard = () => {
    setSettings(settingsData);
  };

  const handleSave = () => {
    console.log("Saved Settings:", settings);
  };

  return (
    <div className="bg-[#0a0e14] min-h-screen">
      <main className="max-w-4xl mx-auto w-full">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-[rgb(241,243,252)] mb-3">
            Settings
          </h1>
          <p className="text-[rgb(168,171,179)]">
            Manage your cloud security preferences and automated behaviors.
          </p>
        </header>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {settings.map((setting) => (
            <SettingCard
              key={setting.id}
              setting={setting}
              toggleSetting={toggleSetting}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 py-6">
          <button
            onClick={handleDiscard}
            className="px-8 py-3 rounded-xl cursor-pointer text-[rgb(168,171,179)] hover:text-white transition-colors"
          >
            Discard Changes
          </button>

          <button
            onClick={handleSave}
            className="px-10 py-3 rounded-xl font-bold text-black cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgb(155,168,255), rgb(165,140,255))",
            }}
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}

export default Settings;
