import {Navbar} from "./components/Navbar"
import {Accounts} from "./components/Accounts/Accounts"
import AccountsProvider from "./components/Accounts/Context/AccountsContext"
import LoginScreen from "./components/LoginScreen"
import {useState} from "react"

import logo from '../images/logo.png'
import managerIcon from '../images/password-icon.png'
import generatorIcon from '../images/generator-icon.png'
import settingsIcon from '../images/settings-icon.png'
import clipboardIcon from '../images/clipboard-icon.png'
import showPasswordIcon from '../images/show-password-icon.png'
import hidePasswordIcon from '../images/hide-password-icon.png'

export const HOSTNAME_REGEX = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/
export const images = {
    logo: logo,
    managerIcon: managerIcon,
    generatorIcon: generatorIcon,
    settingsIcon: settingsIcon,
    clipboardIcon: clipboardIcon,
    showPasswordIcon: showPasswordIcon,
    hidePasswordIcon: hidePasswordIcon
}


export default function App() {
    const [selected, setSelected] = useState(<AccountSection/>)

    const changeSelected = (menu) => {
        switch (menu) {
            case 'Accounts':
                setSelected(<AccountSection/>)
                break
            case 'Generator':
                setSelected(<MenuPlaceholder/>)
                break
            case 'Settings':
                setSelected(<MenuPlaceholder/>)
        }
    }

    return (
        <>
            <LoginScreen>
                <Navbar changeSelected={changeSelected}/>
                {selected}
            </LoginScreen>
        </>
    )
}

function AccountSection() {
    return (
        <div className="ml-[250px]">
            <AccountsProvider>
                <Accounts/>
            </AccountsProvider>
        </div>
    )
}

// Placeholder for other menus in the navbar, will change.
function MenuPlaceholder() {
    return (
        <div className="ml-[250px] h-[85vh] flex flex-col items-center justify-center">
            <h1 className="text-2xl text-gray-300">This section is not available right now.</h1>
            <h1 className="text-lg text-gray-300">It will get implemented in a future update.</h1>
        </div>
    )
}