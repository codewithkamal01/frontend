function SettingCard({ setting, toggleSetting }) {
  return (
    <div
      className={`bg-[rgb(21,26,33)] rounded-2xl p-6 flex flex-col justify-between border border-[rgba(68,72,79,0.1)]
      ${setting.fullWidth ? "md:col-span-2" : ""}`}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-[rgb(241,243,252)]">
            {setting.title}
          </h3>

          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${setting.color}20`, color: setting.color }}
          >
            <span className="material-symbols-outlined text-lg">
              {setting.icon}
            </span>
          </div>
        </div>

        <p className="text-sm text-[rgb(168,171,179)] leading-relaxed">
          {setting.desc}
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => toggleSetting(setting.id)}
          className={`w-11 h-6 rounded-full relative transition-all ${
            setting.enabled ? "" : "bg-[rgb(32,38,47)]"
          }`}
          style={{
            background: setting.enabled ? setting.color : "rgb(32,38,47)",
          }}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
              setting.enabled ? "left-6" : "left-0.5"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default SettingCard;
