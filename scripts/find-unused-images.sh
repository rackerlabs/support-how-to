#!/bin/bash

# Purpose: Find unused images in H2 repo
#
#
# Example call: find-used-images.sh
#
# If that call doesn't work, try ./find-unused-images.sh
#
# NOTE: Script assumes you are executing from within the /scripts directory of
#       your local H2 git repo.
#
# Process:
# 1) In image directory, find all image files in all subdirectories and output
#    them to new file without the leading “./“.  Sort the file.
# 2) In content root, find all referenced images in all files in all sub dirs.
#    Sort the file.
# 3) Compare sorted files and output unused images.


# Go to image directory, find all the images, and sort output

cd ../_assets/img

find . -type f | sed 's,^[^/]*/,,' > ../../files/H2-all-images.txt

sort -o  ../../files/H2-all-images.txt ../../files/H2-all-images.txt

# Go to content directory, find all referenced images, and sort output

cd ../../content

grep -r asset_path * | awk 'sub(/.*asset_path/,""){print $1}' > ../files/H2-used-images.txt

sort -o ../files/H2-used-images.txt ../files/H2-used-images.txt

# Go to files directory, compare files, and output unused images

cd ../files

comm -23 H2-all-images.txt H2-used-images.txt > H2-unused-images.txt
