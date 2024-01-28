import { $ } from 'bun';

/**
 * Checks if OpenVPN exists.
 * 
 * @returns {Promise<boolean>} A promise that resolves to true if OpenVPN exists, false otherwise.
 */
const checkIfOpenVpnExists = async (): Promise<boolean> => {
  const openvpn = await $`which openvpn`;
  return openvpn.exitCode === 0;
};

export {
  checkIfOpenVpnExists
};
