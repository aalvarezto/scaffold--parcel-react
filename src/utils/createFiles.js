"use strict"

import fs from "fs"
import path from "path"

const createFiles = (files, hidden = []) => {
	Object.keys(files).map(key => {
		const formatedPath = hidden.includes(key)
			? "." + key
			: key

		const dir = path.join(path.resolve(), formatedPath)

		fs.writeFileSync(dir, files[key])
	})
}

export default createFiles
