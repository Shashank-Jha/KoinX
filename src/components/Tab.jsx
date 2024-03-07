import { useState } from 'react';

const Tab = () => {
    const tabs = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`text-slate-800 py-2 px-4 ${index === activeTab ? 'text-blue-400 border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tab;
