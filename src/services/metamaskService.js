import MetaMaskSDK from '@metamask/sdk';

const MMSDK = new MetaMaskSDK({ injectProvider: true, enableDebug: true });
const sdkProvider = MMSDK.getProvider();

export const ethereumProvider = window.ethereum || sdkProvider;

export const connectMetamask = async () => {
  if (!ethereumProvider) {
    throw new Error('Metamask provider not available');
  }
  const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
  return accounts;
};
