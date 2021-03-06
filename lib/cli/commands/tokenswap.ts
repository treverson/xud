import callback from '../command';
import XUClient from '../../xuclient/XUClient';
import { Arguments } from 'yargs';

export const command = 'tokenswap <identifier> <role> <sending_amount> <sending_token> <receiving_amount> <receiving_token>';

export const describe = 'perform a raiden token swap';

export const builder = {
  sending_amount: {
    type: 'number',
  },
  receiving_amount: {
    type: 'number',
  },
};

function callHandler(xuClient: XUClient, argv: Arguments) {
  const payload = {
    role: argv.role,
    sending_amount: argv.sending_amount,
    sending_token: argv.sending_token,
    receiving_amount: argv.receiving_amount,
    receiving_token: argv.receiving_token,
  };
  return xuClient.tokenSwap(argv.target_address, payload, argv.identifier);
}

export const handler = (argv: Arguments) => {
  callback(argv, callHandler);
};
