import { N } from "elysia/dist/index-kJIc86qB";

type ApplicationState = {
  openVpnCheckIntervalGood: number;
  openVpnCheckIntervalBad: number;
  openVpnCheckIntervalId: NodeJS.Timeout | number;
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
            openVpnCheckIntervalGood: 10000,
            openVpnCheckIntervalBad: 1000,
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
   * Retrieves the value of the openVpnCheckIntervalBad property from the application state.
   * 
   * @returns {number} The value of the openVpnCheckIntervalBad property, or 0 if it is not set.
   */
  getOpenVpnCheckIntervalBad(): number {
    return this.data?.openVpnCheckIntervalBad || 0;
  }

  /**
   * Sets the value of the openVpnCheckIntervalBad property in the application state.
   * 
   * @param {number} interval - The new value for the openVpnCheckIntervalBad property.
   * @returns {void}
   */
  setOpenVpnCheckIntervalBad(interval: number): void {
    this.data!.openVpnCheckIntervalBad = interval;
  }


  /**
   * Retrieves the value of the openVpnCheckIntervalGood property from the application state.
   * 
   * @returns {number} The value of the openVpnCheckIntervalGood property, or 0 if it is not set.
   */
  getOpenVpnCheckIntervalGood(): number {
    return this.data?.openVpnCheckIntervalGood || 0;
  }

  /**
   * Sets the value of the openVpnCheckIntervalGood property in the application state.
   * 
   * @param {number} interval - The new value for the openVpnCheckIntervalGood property.
   * @returns {void}
   */
  setOpenVpnCheckIntervalGood(interval: number): void {
    this.data!.openVpnCheckIntervalGood = interval;
  }


  /**
   * Sets the value of the openVpnCheckInterval property in the application state.
   * 
   * @param {number} interval - The new value for the openVpnCheckInterval property.
   * @returns {void}
   */
  getOpenVpnCheckIntervalId(): NodeJS.Timeout | number {
    return this.data?.openVpnCheckIntervalId || 0;
  }

  /**
   * Sets the value of the openVpnCheckIntervalId property in the application state.
   * 
   * @param {number} intervalId - The new value for the openVpnCheckIntervalId property.
   * @returns {void}
   */
  setOpenVpnCheckIntervalId(intervalId: NodeJS.Timeout | number): void {
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

  /**
   * Logs the current application state to the console.
   * 
   * @returns {void}
   */
  log(): void {
    console.log(this.data);
  }
}

const instance = new AppState();
Object.freeze(instance);

export default instance;