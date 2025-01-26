import { useState } from "react";

type TabItem = {
  title: string;
  id: number;
};

const TabData: TabItem[] = [
  {
    title: "실시간",
    id: 1,
  },
  {
    title: "일간",
    id: 2,
  },
  {
    title: "주간",
    id: 3,
  },
  {
    title: "월간",
    id: 4,
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <>
    <div className="flex gap-5 font-semibold text-2xl ">
      {TabData.map((element) => (
        <div
          key={element.id}
          onClick={() => handleClick(element.id)} 
          className={`cursor-pointer ${activeTab === element.id ? 'text-black' : 'text-deep-grey'}`}>
          {element.title}
        </div>
      ))}
    </div>
    </>
  );
};

export default Tab;
