// Preload (Isolated World)
const {contextBridge} = require('electron')
const {AccountController} = require("./accountController")
const utility = require('../model/utility')

const Controller = new AccountController()

// Controller
contextBridge.exposeInMainWorld('controller',
    {
        checkIsNew: async () => await Controller.checkIsNew(),
        createMasterPassword: async (masterPassword) => await Controller.createMasterPassword(masterPassword),
        verifyMasterPassword: async (masterPassword) => await Controller.verifyMasterPassword(masterPassword),
        getAllAccounts: async () => await Controller.getAllAccounts(),
        createAccount: async (account) => {
            await Controller.createAccount(account)
        },
        updateAccount: async (index, newAccount) => {
            await Controller.updateAccount(index, newAccount)
        },
        deleteAccount: async (index) => {
            await Controller.deleteAccount(index)
        }
    }
)

// Utility functions.
contextBridge.exposeInMainWorld('utility', {
    generateRandomPassword: (parameters, length) => utility.generateRandomPassword(parameters, length)
})