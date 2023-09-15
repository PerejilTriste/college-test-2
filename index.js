#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN

const data = content.split('\n').slice(1).map((row) => row.split('|').slice(1).slice(0, -1).map((el) => el.trim()));

// step 1
console.log(`Count: ${data.length}`);

// END