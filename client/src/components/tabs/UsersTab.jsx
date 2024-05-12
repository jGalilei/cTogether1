import { SignOut } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import Users from "@/components/common/Users"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import useAppContext from "@/hooks/useAppContext"
import UserStatus from "@/utils/status"
import useSocket from "@/hooks/useSocket"

function UsersTab() {
    const navigate = useNavigate()
    const { tabHeight } = useWindowDimensions()
    const { setStatus } = useAppContext()
    const { socket } = useSocket()

    const leaveRoom = () => {
        socket.disconnect()
        setStatus(UserStatus.DISCONNECTED)
        navigate("/", {
            replace: true,
        })
    }

    return (
        <div className="flex flex-col p-4" style={{ height: tabHeight }}>
            <h1 className="tab-title">Users</h1>
            {/* List of connected users */}
            <Users />
            <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex w-full gap-4">
                    {/* Leave room button */}
                    <button
                        className="flex flex-grow justify-center rounded-md bg-primary p-3 text-black"
                        onClick={leaveRoom}
                        title="Leave room"
                    >
                        <SignOut size={26} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UsersTab
