type ApplicationState = {
  openVpnCheckInterval: number;
  openVpnCheckIntervalId: number;
  openVpnExists: boolean;
  openVpnConnected: boolean;
};

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

}

const instance = new AppState();
Object.freeze(instance);

module.exports = instance;
