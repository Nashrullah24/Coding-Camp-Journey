import { test } from "node:test";
import assert from "node:assert";
import {
  tambah,
  isGenap,
  cariMax,
  buatUser,
  ambilDataAsync,
} from "./Latihan.js";

test("Tes fungsi tambah positif", () => {
  assert.equal(tambah(2, 3), 5);
});

test("tes fungsi tambah negatif", () => {
  assert.equal(tambah(-3, -5), -8);
});

test("Test assert ganjil genap", () => {
  const truefalse = () => {
    if (isGenap(2) == 0) {
      return true;
    } else {
      return false;
    }
  };
  assert.strictEqual(truefalse, true);
});
