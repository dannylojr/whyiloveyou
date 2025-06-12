import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.whyILoveYou.app',
  appName: 'whyILoveYou',
  webDir: 'dist/myapp/browser',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#4B0082", // morado oscuro
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
  },
};

export default config;
