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
find src -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' -o -name '*.css' \) \
  -exec "${SED_INPLACE[@]}" 's|src="/|src="./|g; s|href="/|href="./|g; s|url("/|url("./|g; s|url(/|url(./|g' {} +

# Patch index.html absolute paths
"${SED_INPLACE[@]}" 's|href="/|href="./|g; s|src="/|src="./|g' index.html
