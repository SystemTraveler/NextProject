#!/bin/sh
mkdir ../tmp
cd ../tmp
npm install axios
cd ../builder
Builder -convertXml ../app/Content.xml ../tmp/
python3.11 ../app/python/venv/Script.py ../tmp/next.api.js
cp ../already/styles.css ../tmp/
cp ../already/DelaGothicOne-Regular.ttf ../tmp/

Builder -MakeMeta ../tmp/
Builder -MakePIM ../tmp/ ../tmp/Install.pim