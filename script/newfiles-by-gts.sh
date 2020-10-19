#!/bin/bash

# Purpose: Identify all *md files in H2 repo where:
# Created date is after date begin date passed in with script call
# and before end date passed in with script call
# and author is a GTS team Racker
#
# Example call: newfiles-by-gts.sh 2020-01-01 2020-06-01
#
# If you got a file not found error when you run the script, run the following
# command instead:
#
#               ./newfiles-by-gts.sh 2020-01-01 2020-06-01
#
# NOTE: Script assumes you are executing from within the scripts directory of
#       your local H2 git repo.
#
# Process:
# 1) Get the dates to compare from the arguments passed in
# 2) Create array of GTS Rackers
# 3) Go to H2 repo content directory (assumption is you are in the scripts dir)
# 4) Use for loop to go through all *md files in each content sub dir
#    and list all file names and directories where:
#       create_date is between begin and end dates (from the script arguments)
#       and author is a GTS Racker
#
# Updates:
# 2020-09-28  corrected output article link


# assign date arguments to variables
begdate=$1
enddate=$2

# Create array of GTS Rackers

counter=0

while IFS= read -r line
do
   GTSmembers+=("$line");
   counter=$((counter+1));
done < GTSmembers.txt

#set counter
count=0

# Go to content directory and loop through all 'md' filesi in sub dirs
cd ../content/how-to

FILES=`find .  -type f -name '*.md' -print`

for f in $FILES
do

# find created_date and last_modified_date in file meta data
   cdate=`grep created_date $f`
   mdate=`grep last_modified_date $f`
   cby=`grep ^created_by: $f`;
# separate actual dates from rest of the grepped line
   acdate=`echo $cdate | awk -F\' '{print $2}'`
   amdate=`echo $mdate | awk -F\' '{print $2}'`
   acby=`echo $cby | awk '{print $2 " " $3 " " $4}'`;
#trim whitespace
   acby=`echo $acby | sed 's/ *$//g'`

# if create date is between the begin and end dates passed in - proceed
  if [[ "$acdate" > "$begdate" ]] && [[ "$acdate" < "$enddate" ]] ;
  then

# Determine if it's a GTS Racker
     looper=0
     while [[ $looper -lt  $counter ]]
     do
#       echo "author " $acby
#       if [[ "$acby" == "Benji Ivey" ]]; then
#         echo "acby " $acby " and membercompare " ${GTSmembers[$looper]}
#       fi
       if [[ "$acby" == "${GTSmembers[$looper]}" ]]
       then
# pull file name and directory
          thefilewx=$(basename $f)
          thedir=$(dirname $f)
          thefile=${thefilewx%.*}
          thearticle=$(basename $thedir)
          theroot="https://docs.rackspace.com/support/how-to/"
          thepath=$theroot$thearticle
          theoutput=$acdate";"$acby";"$thepath

# print out all newly created files by GTS Rackers
          echo $theoutput
          count=$((count+1));
          break;
       fi
       looper=$((looper+1));
     done
  fi
done
echo $count " new GTS files added between " $begdate " and " $enddate
