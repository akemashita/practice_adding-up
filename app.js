// 2010年から2015年にかけて15～19歳の人が増えた割合の都道府県ランキング
'use strict';

// １　ファイルからデータを読み込む
const FS = require('fs');
const READLINE = require('readline');
const RS = FS.ReadStream('./popu-pref.csv');
const RL = READLINE.createInterface({ 'input': RS, 'output': {} });

RL.on('line', (lineString) => {
    // ２　2010年と2015年のデータを選ぶ
    const columns = lineString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[2];
    const popu = parseInt(columns[7]);
    if (year === 2010 || year === 2015) {
        console.log(year);
        console.log(prefecture);
        console.log(popu);
    }
});
RL.resume();

// ３　都道府県ごとの変化率を計算する
// ４　変化率ごとに並べる
// ５　並べられたものを表示する