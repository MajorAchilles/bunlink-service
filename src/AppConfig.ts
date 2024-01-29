import { ERRORS } from "./constants/labels";

type ApplicationConfiguration = {
  port: number;
  ovpnCheckInterval: number;
};
/**
 * Represents the application configuration.
 */
class AppConfig {
  static instance: AppConfig;
  data: ApplicationConfiguration | undefined;

  constructor() {
      if (!AppConfig.instance) {
        if (!Bun.env.OVPN_CHECK_INTERVAL) {
          throw new Error(ERRORS.OVPN_CHECK_INTERVAL_NOT_DEFINED);
        }

        if (!Bun.env.PORT) {
          throw new Error(ERRORS.PORT_NOT_DEFINED);
        }
        
        let parsedInterval = parseInt(Bun.env.PORT!);
        if (isNaN(parsedInterval)) {
          throw new Error(ERRORS.OVPN_CHECK_INTERVAL_NOT_DEFINED);
        }
        
        let parsedPort = parseInt(Bun.env.PORT!);
        if (isNaN(parsedPort)) {
          throw new Error(ERRORS.PORT_NOT_NUMBER);
        }

        this.data = {
          port: parsedPort,
          ovpnCheckInterval: parsedInterval,
        };

        AppConfig.instance = this;
      }
      return AppConfig.instance;
  }

  /**
   * Retrieves the current application configuration.
   * 
   * @returns {ApplicationConfiguration | undefined} The current application configuration, or undefined if no state is set.
   */
  get(): ApplicationConfiguration | undefined {
    return this.data;
  }

  /**
   * Retrieves the value of the port property from the application configuration.
   * 
   * @returns {boolean} The value of the port property, or false if it is not set.
   */
  getPort(): number {
    if (!this.data?.port) {
      throw new Error(ERRORS.PORT_NOT_DEFINED)
    }
    return this.data?.port;
  }


  /**
   * Retrieves the value of the ovpnCheckInterval property from the application configuration.
   * 
   * @returns {boolean} The value of the ovpnCheckInterval property, or false if it is not set.
   */
  getOvpnCheckInterval(): number {
    if (!this.data?.ovpnCheckInterval) {
      throw new Error(ERRORS.OVPN_CHECK_INTERVAL_NOT_DEFINED)
    }

    return this.data?.ovpnCheckInterval;
  }


  /**
   * Logs the current application configuration to the console.
   * 
   * @returns {void}
   */
  log(): void {
    console.log(this.data);
  }
}

const instance = new AppConfig();
Object.freeze(instance);

export default instance;