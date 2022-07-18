import {useRef, useState} from "react"
import {BLUE_OUTLINE, IMAGES, RED_OUTLINE} from "../../data/constants"
import InputField from "../../components/forms/InputField"
import SecondaryButton from "../../components/buttons/SecondaryButton"
import PropTypes from "prop-types"

export default function LoginForm(props) {
    // State
    const [isMP, setIsMP] = useState(false)
    const [masterPassword, setMasterPassword] = useState("")

    // Ref
    const warningRef = useRef(null)
    const masterPassRef = useRef(null)

    const verifyMasterPassword = async (event) => {
        event.preventDefault()
        // Verify the master password in the database.
        const isMasterPassword = await window.database.verifyMasterPassword(masterPassword)

        if (isMasterPassword) {
            setIsMP(isMasterPassword)
        } else {
            // Invalid master password warning.
            const warning = warningRef.current
            const masterPass = masterPassRef.current

            // Show warning and make outline of input red.
            warning.classList.remove("invisible")
            masterPass.classList.remove(...BLUE_OUTLINE)
            masterPass.classList.add(...RED_OUTLINE)
        }
    }

    const removeWarning = () => {
        // Remove the red warning for the login form.
        const warning = warningRef.current
        const masterPass = masterPassRef.current

        warning.classList.add("invisible")
        masterPass.classList.remove(...RED_OUTLINE)
        masterPass.classList.add(...BLUE_OUTLINE)
    }

    return (
        <>
            {!isMP ?
                <div className="bg-dark-blue-1 w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-10"
                >
                    <div>
                        <img src={IMAGES.LOGO}
                             alt="Sencrypt"
                             className="w-72"
                        />
                    </div>
                    <form onSubmit={verifyMasterPassword}
                          className="flex flex-col space-y-6 items-center"
                    >
                        <InputField autoFocus={true}
                                    title="Enter your Master Password:"
                                    type="password"
                                    fieldId="masterPassword"
                                    ref={masterPassRef}
                                    name="masterPassword"
                                    minLength={1}
                                    maxLength={32}
                                    value={masterPassword}
                                    removeWarning={removeWarning}
                                    onChange={(input) => {
                                        setMasterPassword(input)
                                    }}
                        />
                        <p ref={warningRef}
                           className="invisible text-red-500"
                        >
                            Invalid Master Password.
                        </p>
                        <SecondaryButton type="submit"
                                         disabled={!masterPassword}
                                         hoverColor="blue-1"
                                         activeColor="blue-2"
                        >
                            Log in
                        </SecondaryButton>
                    </form>
                </div>
                // If the master password is valid render the rest of the app.
                : props.children
            }
        </>
    )
}

LoginForm.propTypes = {
    children: PropTypes.node
}