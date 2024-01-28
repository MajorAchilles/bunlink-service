type ApplicationState = {
  openVpnCheckInterval: number;
  openVpnCheckIntervalId: number;
  openVpnExists: boolean;
  openVpnConnected: boolean;
};
/**
 * Represents the application state.
 */
class AppState {
  static instance: AppState;
  data: ApplicationState | undefined;

  constructor() {
      if (!AppState.instance) {
          this.data = {
            openVpnCheckInterval: 10000,
            openVpnCheckIntervalId: 0,
            openVpnExists: false,
            openVpnConnected: false,
          };

          AppState.instance = this;
      }
      return AppState.instance;
  }

  /**
   * Retrieves the current application state.
   * 
   * @returns {ApplicationState | undefined} The current application state, or undefined if no state is set.
   */
  get(): ApplicationState | undefined {
    return this.data;
  }

  /**
   * Sets the application state.
   * 
   * @param {ApplicationState} data - The new application state to be set.
   * @returns {void}
   */
  set(data: ApplicationState): void {
    this.data = data;
  }

  /**
   * Retrieves the value of the openVpnCheckInterval property from the application state.
   * 
   * @returns {number} The value of the openVpnCheckInterval property, or 0 if it is not set.
   */
  getOpenVpnCheckInterval(): number {
    return this.data?.openVpnCheckInterval || 0;
  }

  /**
   * Sets the value of the openVpnCheckInterval property in the application state.
   * 
   * @param {number} interval - The new value for the openVpnCheckInterval property.
   * @returns {void}
   */
  setOpenVpnCheckInterval(interval: number): void {
    this.data!.openVpnCheckInterval = interval;
  }

  /**
   * Sets the value of the openVpnCheckInterval property in the application state.
   * 
   * @param {number} interval - The new value for the openVpnCheckInterval property.
   * @returns {void}
   */
  getOpenVpnCheckIntervalId(): number {
    return this.data?.openVpnCheckIntervalId || 0;
  }

  /**
   * Sets the value of the openVpnCheckIntervalId property in the application state.
   * 
   * @param {number} intervalId - The new value for the openVpnCheckIntervalId property.
   * @returns {void}
   */
  setOpenVpnCheckIntervalId(intervalId: number): void {
    this.data!.openVpnCheckIntervalId = intervalId;
  }

  /**
   * Retrieves the value of the openVpnExists property from the application state.
   * 
   * @returns {boolean} The value of the openVpnExists property, or false if it is not set.
   */
  getOpenVpnExists(): boolean {
    return this.data?.openVpnExists || false;
  }

  /**
   * Sets the value of the openVpnExists property in the application state.
   * 
   * @param {boolean} exists - The new value for the openVpnExists property.
   * @returns {void}
   */
  setOpenVpnExists(exists: boolean): void {
    this.data!.openVpnExists = exists;
  }

  /**
   * Retrieves the value of the openVpnConnected property from the application state.
   * 
   * @returns {boolean} The value of the openVpnConnected property, or false if it is not set.
   */
  getOpenVpnConnected(): boolean {
    return this.data?.openVpnConnected || false;
  }

  /**
   * Sets the value of the openVpnConnected property in the application state.
   * 
   * @param {boolean} connected - The new value for the openVpnConnected property.
   * @returns {void}
   */
  setOpenVpnConnected(connected: boolean): void {
    this.data!.openVpnConnected = connected;
  }
}

const instance = new AppState();
Object.freeze(instance);

module.exports = instance;
