// 2010年から2015年にかけて15～19歳の人が増えた割合の都道府県ランキング
'use strict';

// １　ファイルからデータを読み込む
const FS = require('fs');
const READLINE = require('readline');
const RS = FS.ReadStream('./popu-pref.csv');
const RL = READLINE.createInterface({ 'input': RS, 'output': {} });
const MAP = new Map(); // key:都道府県 value:集計データのオブジェクト

RL.on('line', (lineString) => {
  // ２　2010年と2015年のデータを選ぶ
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const prefecture = columns[2];
  const popu = parseInt(columns[7]);

  if (year === 2010 || year === 2015) {
    let value = MAP.get(prefecture);
    if (!value) {
      value = {
        popu10: 0,
        popu15: 0,
        change: null
      };
    }

    if (year === 2010) {
      value.popu10 += popu;
    }
    if (year === 2015) {
      value.popu15 += popu;
    }
    
    MAP.set(prefecture, value);
  }
});

RL.resume();
RL.on('close', () => {
  // ３　都道府県ごとの変化率を計算する
  for (let pair of MAP) {
    const VALUE = pair[1];
    VALUE.change = VALUE.popu15 / VALUE.popu10;
  }
  console.log(MAP);
});

// ４　変化率ごとに並べる
// ５　並べられたものを表示する