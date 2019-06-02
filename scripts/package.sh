#!/bin/bash

# Default output directory and filename
OUTPUT_DIR=./
OUTPUT_FILE_NAME="theme.zip"

# Check if output directory is supplied
if [ ! -z $1 ]; then
  OUTPUT_DIR=$1
fi

# Check if supplied output directory exists
if [ ! -d $OUTPUT_DIR ]; then
  echo "Directory supplied does not exist"
  exit 1;
fi

# Check if output file name is supplied
if [ ! -z $2 ]; then
  OUTPUT_FILE_NAME=$2
fi

# Clean up existing folder
# rm -rf node_modules/
rm -rf dist/

# Install Node Modules and build bundle
# npm run install
npm run build:production

# Create temp folder to zip
TMP_FOLDER_NAME=$(date +"%m%d%y%H%M%S")
TMP_FOLDER=$OUTPUT_DIR/$TMP_FOLDER_NAME
mkdir $TMP_FOLDER

# Copy files to temp folder
cp -r ./assets $TMP_FOLDER
cp -r ./dist $TMP_FOLDER
cp -r ./plugins $TMP_FOLDER
cp -r ./acf_fields.json $TMP_FOLDER
cp -r ./functions.php $TMP_FOLDER
cp -r ./index.php $TMP_FOLDER
cp -r ./screenshot.png $TMP_FOLDER
cp -r ./style.css $TMP_FOLDER

# Create zip file
cd $OUTPUT_DIR
echo $OUTPUT_FILE_NAME $TMP_FOLDER_NAME
zip -r $OUTPUT_FILE_NAME $TMP_FOLDER_NAME

# Clean up temp folder
rm -rf $TMP_FOLDER_NAME