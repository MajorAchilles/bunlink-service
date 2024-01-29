import { $ } from 'bun';

enum OvpnStatus {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  UNAVAILABLE = 'UNAVAILABLE'
};

/**
 * Checks if OpenVPN exists.
 * 
 * @returns {Promise<boolean>} A promise that resolves to true if OpenVPN exists, false otherwise.
 */
const checkIfOpenVpnExists = async (): Promise<boolean> => {
  const openvpn = await $`which openvpn`.quiet();
  return openvpn.exitCode === 0;
};

const getOvpnStatus = async (): Promise<OvpnStatus> => {
  if(await checkIfOpenVpnExists()) {
    return OvpnStatus.UNAVAILABLE;
  }

  const status = await $`openvpn --version`.quiet();
  if (status.exitCode !== 0) {
    return OvpnStatus.DISCONNECTED;
  }

  return OvpnStatus.CONNECTED;
};

export {
  OvpnStatus,
  getOvpnStatus,
  checkIfOpenVpnExists
};
