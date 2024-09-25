'use strict';

// 2010年から2015年にかけて15～19歳の人が増えた割合の都道府県ランキング
// １　ファイルからデータを読み込む
const FS = require('fs');
const READLINE = require('readline');
const RS = FS.ReadStream('./popu-pref.csv');
const RL = READLINE.createInterface({ 'input': RS, 'output': {} });
RL.on('line', (lineString) => {
    console.log(lineString);
});
RL.resume();

// ２　2010年と2015年のデータを選ぶ
// ３　都道府県ごとの変化率を計算する
// ４　変化率ごとに並べる
// ５　並べられたものを表示する