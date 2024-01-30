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
  if(!await checkIfOpenVpnExists()) {
    return OvpnStatus.UNAVAILABLE;
  }

  const status = await $`ip a show tun0`.quiet();
  if (status.exitCode !== 0) {
    return OvpnStatus.DISCONNECTED;
  }

  return OvpnStatus.CONNECTED;
};

const connectOpenVpn = async () => {
  try {
    await $`whoami`;
    const ovpnPath = await $`which openvpn`.text();
    const command = `sudo ${ovpnPath} --config ~/configs/ovpnconfig.ovpn`;
    console.log(command);
    const connect = await $`echo passwd | sudo -S -u ovpnmanager ${command}`;

    if (connect.exitCode !== 0) {
      throw new Error('Could not connect to OpenVPN.');
    }
  } catch (e) {
    console.log(e);
    throw new Error('Could not connect to OpenVPN.');
  }

  return true;
}

export {
  OvpnStatus,
  getOvpnStatus,
  checkIfOpenVpnExists,
  connectOpenVpn,
};
