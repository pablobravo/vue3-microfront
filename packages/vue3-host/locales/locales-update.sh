#!/usr/bin/env sh

export $(cat .env | sed 's/#.*//g' | xargs)
set -f 
LOCALES=(${LOCALES_LANGUAGES//,/ })

for LOCALE in "${LOCALES[@]}"
do
    if wget  -O locales/$LOCALE.$LOCALES_EXTENSION --header="Authorization: Loco $LOCO_API_KEY" https://localise.biz/api/export/locale/$LOCALE.$LOCALES_EXTENSION?format=symfony
        sed -i '' "s/@/{'@'}/g" locales/$LOCALE.$LOCALES_EXTENSION
    then
        echo "$LOCALE.$EXTENSION file updated successfully"
    else
        echo "An error has occurred"
        exit 1
    fi
done

exit 0