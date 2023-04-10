function collectIP() {
    if (navigator.userAgent) {
        navigator.userAgent;
        console.log("User agent string: " + navigator.userAgent);
        var ua = navigator.userAgent;
        var ip = "";
        if (navigator.networkInformation && navigator.networkInformation.connection && navigator.networkInformation.connection.type === 2) {
          ip = navigator.networkInformation.connection.physicalAddress;
        }
        else if (navigator.webkitNetworkInformation && navigator.webkitNetworkInformation.connection) {
            ip = navigator.webkitNetworkInformation.connection.physicalAddress;
        }
        console.log("IP address: " + ip);
    }
}
  
collectIP();