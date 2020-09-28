#!/bin/bash

# Purpose: Identify all *md files in H2 repo where:
# Created date is after date begin date passed in with script call
# and before end date passed in with script call
#
# Example call: newfiles.sh 2016-01-29 2016-04-05
#
# If you got a file not found error when you run the script, run the following
# command instead:
#
#               ./newfiles.sh 2016-01-29 2016-04-05
#
# NOTE: Script assumes you are executing from within the script directory of
#       your local H2 git repo.
#
# Process:
# 1) Get the dates to compare from the arguments passed in
# 2) Go to H2 repo content directory (assumption is you are in the scripts dir)
# 3) Use for loop to go through all *md files in each content sub dir
#    and list all file names and directories where:
#       create_date is between begin and end dates (from the script arguments)
#
# Updates:
# 7/10/17: remove criteria that create date and modified date must be the same
# 6/5/20: fixed instructions and excluded non-article files.
# 8/13/20: updated for new how-to repo
# 9/28/20: fixed path to content directory and link to article


# assign date arguments to variables
begdate=$1
enddate=$2

#set counter
count=0

# Go to content directory and loop through all 'md' filesi in sub dirs
cd ../content/how-to

FILES=`find .  -type f -name '*md' -print`

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
# pull file name and directory
     thefile=$(basename $f)
     thedir=$(dirname $f)
     thearticle=$(basename $thedir)
     theroot="https://docs.rackspace.com/support/how-to/"
     thepath=$theroot$thearticle
     theoutput=$acdate";"$acby";"$thepath
# print out all newly created files
     echo $theoutput
     count=$((count+1));
  fi
done
echo $count " new files added between " $begdate " and " $enddate
