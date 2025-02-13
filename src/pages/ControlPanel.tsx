import React, { LazyExoticComponent, useState, Suspense } from "react";
import TabBar from "../components/TabBar";

interface Plugin {
  name: string;
  component: LazyExoticComponent<React.ComponentType>;
}

const pluginNames = ["Core", "TestPlugin"];
const plugins: Array<Plugin> = new Array<Plugin>();

pluginNames.forEach((pluginName) => {
  if (pluginName === "Core") return;

  plugins.push({
    name: pluginName,
    component: React.lazy(() => import("../plugins/" + pluginName)),
  });
});

function ControlPanel() {
  const [activeTab, setActiveTab] = useState<string>(pluginNames[0]);

  const renderActiveTab = () => {
    let component: JSX.Element = <div>Error loading plugin component.</div>;

    plugins.forEach((plugin) => {
      console.log("HERE IS MY LOGG", plugin.name, plugin.component);
      if (plugin.name === activeTab) component = <plugin.component />;
    });

    return component;
  };

  return (
    <div>
      <TabBar
        tabs={pluginNames}
        activeTab={plugins[0].name}
        onTabClicked={setActiveTab}
      />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {renderActiveTab()}
        </Suspense>
      </div>
    </div>
  );
}

export default ControlPanel;
