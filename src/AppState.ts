import { OvpnStatus } from "./ovpnManager";

type ApplicationState = {
  openVpnCheckIntervalId: NodeJS.Timeout | number;
  openVpnStatus: OvpnStatus;
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
            openVpnCheckIntervalId: 0,
            openVpnStatus: OvpnStatus.UNAVAILABLE,
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
   * Retrieves the value of the openVpnConnected property from the application state.
   * 
   * @returns {boolean} The value of the openVpnConnected property, or false if it is not set.
   */
  getOpenVpnConnected(): OvpnStatus {
    return this.data?.openVpnStatus || OvpnStatus.UNAVAILABLE;
  }

  /**
   * Sets the value of the openVpnConnected property in the application state.
   * 
   * @param {boolean} status - The new value for the openVpnConnected property.
   * @returns {void}
   */
  setOpenVpnStatus(status: OvpnStatus): void {
    this.data!.openVpnStatus = status;
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