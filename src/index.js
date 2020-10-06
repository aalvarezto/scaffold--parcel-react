#!/usr/bin/env node
"use strict"

import fs from "fs"
import { prettier } from "./files.js"

fs.writeFileSync("./.prettierrc", prettier)
