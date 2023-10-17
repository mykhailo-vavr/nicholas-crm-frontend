#!/usr/bin/env sh

if [ $# -lt 2 ]; then
  echo "Invalid count of arguments"
  read -p ""
  exit 0
fi

baseDir=$1
componentName="${@: -1}"

if [ ! -d $baseDir ]; then
  echo "Direction $baseDir doesn't exists"
  read -p ""
  exit 0
fi

cd $baseDir

if [ -d $componentName ]; then
  echo "Component $componentName is already exists"
  read -p ""
  exit 0
fi

echo "export { default as $componentName } from './$componentName';" >> index.ts

mkdir $componentName
cd $componentName

echo "import { "$componentName"FC } from './types';" >> index.tsx
echo "" >> index.tsx
echo const "$componentName"": "$componentName"FC = (props) => (" >> index.tsx
echo "    <div></div>" >> index.tsx
echo ");" >> index.tsx
echo "" >> index.tsx
echo "export default $componentName;" >> index.tsx

echo "import { FC } from 'react';" > types.ts
echo "" >> types.ts
echo "export type "$componentName"FC = FC;">> types.ts

read -p "Success"