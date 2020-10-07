#!/usr/bin/env node
"use strict"

import files from "./files.js"
import createFiles from "./utils/createFiles.js"

createFiles(files, ["prettierrc", "eslintrc", "gitignore"])
