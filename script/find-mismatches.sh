#!/bin/bash

# Purpose: Identify all article folders in H2 repo where:
# The folder name does not match the permalink in the index.md file
#
# Example call: find-mistmatches.sh
#
# If you got a file not found error when you run the script, run the following
# command instead:
#
#               ./find-mismatches.sh
#
# NOTE: Script assumes you are executing from within the scripts directory of
#       your local H2 git repo.
#
# Process:
# 1) Loop through content directory to get article folder names
# 2) Get permalink from index.md file
# 3) if permalink and folder name don't match, report

#set counter
count=0

# Go to content directory and loop through all 'md' filesi in sub dirs
cd ../content/how-to
DIRS=`find . -type d -print`

for d in $DIRS
do
#check that index.md exists
   if test -f "$d/index.md"; then
# find permalink
      plink=`grep permalink $d/index.md`
#      echo "plink " $plink
# separate permalink from rest of the grepped line and remove trailing slash
      aplink=`echo $plink | awk -F: '{print $2}'`
      aplink=${aplink%/}
# trim whitespace
      aplink=`echo $aplink | sed 's/ *$//g'`
#   echo "perma link " $aplink
# get folder name and remove trailing slash
      foldername=`basename $d`
      foldername=${foldername%/}
#   echo "folder " $d " and foldername " $foldername
 
# if folder doesn't match permalink, display message
     if [ "$foldername" != "$aplink" ] ;
     then
# pull file name and directory
        echo "Folder " $d " not same as article " $aplink
        count=$((count+1));
     fi
  fi
done
echo $count " mismatches "
