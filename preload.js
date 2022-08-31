const monstremgr = require("./Model/monstresmgr");
const { contextBridge } = require("electron");

const getNames = () => {
    return monstremgr.getNames();
}

contextBridge.exposeInMainWorld("api", {
    getNames: getNames
})