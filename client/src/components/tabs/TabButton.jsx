import useTab from "@/hooks/useTabs"
import TABS from "@/utils/tabs"
import PropTypes from "prop-types"

function TabButton({ tabName, icon }) {
    const { activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen } =
        useTab()

    const handleTabClick = (tabName) => {
        if (tabName === activeTab) {
            setIsSidebarOpen(!isSidebarOpen)
        } else {
            setIsSidebarOpen(true)
            setActiveTab(tabName)
        }
    }

    return (
        <button
            onClick={() => handleTabClick(tabName)}
            className="relative flex items-center justify-center"
        >
            {icon}
        </button>
    )
}

TabButton.propTypes = {
    tabName: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
}

export default TabButton