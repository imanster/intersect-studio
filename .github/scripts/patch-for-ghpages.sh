#!/usr/bin/env bash
set -euo pipefail

if sed --version 2>/dev/null | grep -q GNU; then
  SED_INPLACE=(sed -i)
else
  SED_INPLACE=(sed -i '')
fi

# Patch BrowserRouter to HashRouter for subpath deployment
"${SED_INPLACE[@]}" 's/BrowserRouter/HashRouter/g' src/App.tsx

# Patch absolute asset paths to relative for subpath deployment
SRC_FILES=$(find src -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' -o -name '*.css' \))

"${SED_INPLACE[@]}" 's|src="/|src="./|g' $SRC_FILES index.html
"${SED_INPLACE[@]}" 's|href="/|href="./|g' $SRC_FILES index.html
"${SED_INPLACE[@]}" 's|url("/|url("./|g' $SRC_FILES
"${SED_INPLACE[@]}" 's|url(/|url(./|g' $SRC_FILES
"${SED_INPLACE[@]}" 's|url: "/|url: "./|g' $SRC_FILES
