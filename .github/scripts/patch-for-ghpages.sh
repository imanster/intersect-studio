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
patch_file() {
  "${SED_INPLACE[@]}" 's|src="/|src="./|g' "$1"
  "${SED_INPLACE[@]}" 's|href="/|href="./|g' "$1"
  "${SED_INPLACE[@]}" 's|url("/|url("./|g' "$1"
  "${SED_INPLACE[@]}" 's|url(/|url(./|g' "$1"
  "${SED_INPLACE[@]}" 's|url: "/|url: "./|g' "$1"
}

patch_file index.html
find src -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' -o -name '*.css' \) \
  -print0 | while IFS= read -r -d '' file; do
  patch_file "$file"
done
