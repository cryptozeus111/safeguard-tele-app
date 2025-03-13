import { init, backButton } from '@telegram-apps/sdk';

// Initialize the SDK.
init();

// Mount the Back Button.
backButton.mount();

// ... the SDK is already initialized, and the Back Button is mounted.
if (backButton.show.isAvailable()) {
  backButton.show();
}