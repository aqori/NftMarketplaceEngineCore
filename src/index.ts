// src/index.ts
/**
 * Main entry point for NftMarketplaceEngineCore
 */

import { NftMarketplaceEngineCore } from './nftmarketplaceenginecore';
import minimist from 'minimist';

interface Args {
    verbose?: boolean;
    input?: string;
    output?: string;
}

const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

const app = new NftMarketplaceEngineCore({
    verbose: args.verbose
});

app.execute()
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
