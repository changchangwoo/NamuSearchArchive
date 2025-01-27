

import { useState } from "react";

  type TabItem = {
    title: string;
    id: number;
  };

  const TabData: TabItem[] = [
    {
      title: "실시간",
      id: 0,
    },
    {
      title: "일간",
      id: 1,
    },
    {
      title: "주간",
      id: 2,
    },
    {
      title: "월간",
      id: 3,
    },
  ];

  const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (id: number) => {
      setActiveTab(id);
    };

    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex font-bold gap-10 text-2xl">
            {TabData.map((element) => (
              <div
                key={element.id}
                onClick={() => handleClick(element.id)}
                className={`cursor-pointer ${
                  activeTab === element.id ? "text-black" : "text-deep-grey"
                }`}
              >
                {element.title}
              </div>
            ))}
          </div>
          <div className="w-80 h-2 my-1">
            <div className="rounded-xl w-20 h-[5px] bg-primary duration-300 relative"
            style={
              {
                left: `calc(${25 * activeTab}% + ${activeTab !== 0 ? 12 : 0}px)`,
              }
            }
            ></div>
          </div>
        </div>
      </>
    );
  };

  export default Tab;
