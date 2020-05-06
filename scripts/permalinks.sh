#!/bin/bash

# Purpose: Collect permalinks from all *md files in H2 repo 
#
#
# Example call: permalinks.sh
#
# If that call doesn't work, try ./permalinks.sh
#
# NOTE: Script assumes you are executing from within the /scripts directory of
#       your local H2 git repo.
#
# Process:
# 1) Go to H2 repo content directory (assumption is you are in the scripts dir)
# 2) Use for loop to go through all *md files in each content sub dir
#    and list permalinks for all file names,
#    skipping over index.md and /all.md files

#set counter
count=0

# Go to content directory and loop through all 'md' files in sub dirs
cd ../content

FILES=`find .  -type f -name '*md' -print`

for f in $FILES
do
   # filter out index.md and all.md files
   if [[ "$f" == */all.md ]] || [[ "$f" == *index.md ]] || [[ "$f" == */retired-articles/* ]] ;
   then
      # skip file
      continue
   else
      # find permalink in file metadata
      plink=`grep permalink $f`

      # print a list of all 
      echo "$plink";
      count=$((count+1));
   fi
done
echo $count " files"
