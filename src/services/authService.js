import api from './api';
import { connectMetamask, ethereumProvider } from './metamaskService';
import Web3 from 'web3';

const web3 = new Web3();

export async function getNonce(address) {
  const res = await api.get('/api/auth/nonce', {
    params: { address },
  });
  return res.data?.nonce;
}

export async function verifySignature(address, signature) {
  const res = await api.post('/api/auth/verify', {
    address,
    signature,
  });
  return res.data?.token;
}

export async function loginWithMetamask() {
  const accounts = await connectMetamask();
  const address = accounts[0];
  let nonce = await getNonce(address);
  const message = web3.utils.utf8ToHex(nonce);

  const signature = await ethereumProvider.request({
    method: 'personal_sign',
    params: [message, address]
  });

  const user = await verifySignature(address, signature);
  return user;
}


