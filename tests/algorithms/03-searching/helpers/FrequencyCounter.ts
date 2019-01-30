/**
 * Created by zhiyuan.huang@ddder.net.
 */

import path = require('path');
import readline = require('readline');
import fs = require('fs');
import { timeRecord } from '../../../helpers';
import { SymbolTable } from 'src/algorithms/03-searching/SymbolTable';

function getDataInput(fileName: string): string {
    return path.resolve(__dirname, '../data', fileName);
}

export const DATA_INPUT = {
    tnyTale: getDataInput('tnyTale.txt'),
    tale: getDataInput('tale.txt'),
    leipzig1m: getDataInput('leipzig1m.txt'),
    leipzig100k: getDataInput('leipzig100k.txt'),
    leipzig300k: getDataInput('leipzig300k.txt'),
};

export class FrequencyCounter {
    static inputPath: string;
    static async exec(st: SymbolTable<string, number>, minLength: number = 5) {
        if (!this.inputPath) return;

        let wordAmount = 0;
        let distinctAmount = 0;

        let rl = readline.createInterface({
            input: fs.createReadStream(this.inputPath)
        });

        await new Promise((resolve, reject) => {
            rl.on('line', (line: string) => {
                let words = line.split(/[^\w]/);
                for (let word of words) {
                    if (word.length < minLength) continue;
                    ++wordAmount;
                    if (st.contains(word)) {
                        st.put(word, st.get(word) + 1);
                    } else {
                        ++distinctAmount;
                        st.put(word, 1);
                    }
                }
            }).on('close', () => {
                resolve();
            });
        });

        let max = '';
        st.put(max, 0);

        for (let word of st.keys()) {
            if (st.get(max) < st.get(word)) {
                max = word;
            }
        }

        console.log(`max = ${max}, ${st.get(max)}`);
        console.log(`distinct = ${distinctAmount}`);
        console.log(`words = ${wordAmount}`);
    }
}

export class TnyTaleCounter extends FrequencyCounter {
    static inputPath = DATA_INPUT.tnyTale;
}

export class TaleCounter extends FrequencyCounter {
    static inputPath = DATA_INPUT.tale;
}

export class Leipzig1mCounter extends FrequencyCounter {
    static inputPath = DATA_INPUT.leipzig1m;
}

export class Leipzig100kCounter extends FrequencyCounter {
    static inputPath = DATA_INPUT.leipzig100k;
}

export class Leipzig300kCounter extends FrequencyCounter {
    static inputPath = DATA_INPUT.leipzig300k;
}
