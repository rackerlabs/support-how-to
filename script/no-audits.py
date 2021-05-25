# Instructions for using this script are available at
# https://reimagined-spork-ebad5969.pages.github.io/processes/how-to/scripts/list-articles-without-audit-dates.html
# Sample call: python no-audits.py
# NOTE: Program assumes you are executing from within the script directory of
#       your local H2 git repo.

import os
import sys
import datetime
import xlsxwriter

# Create a workbook and add a worksheet.
workbook = xlsxwriter.Workbook('../files/h2-no-audits.xlsx')
worksheet = workbook.add_worksheet()

audit_null = "audit_date:\n"
info = ([])


def filter_files(dir):
    r = []
    count = 0
    for root, dirs, files in os.walk(dir):
        for file in files:
            path = root + "/" + file
            if "all.md" in path or "retired-" in path or "cloud-queues" in path:
                continue
            else:
                text = open(path, 'r')
                lines = text.readlines()
                if audit_null in lines:

                    # ----------------------------------
                    # Create the link
                    # First, convert the file name to a list and strip the .md
                    # file extension from it
                    #file = list(file)
                    #del file[-1:-4:-1]
                    # Then, join the list items back together
                    #file = "".join(file)

                    # Get the last directory of the root, which should be the # article folder, which is also it's name
                    #print root
                    if os.path.isdir(root):
                       articlefolder = os.path.basename(root)

                    # Compose the link for each file
                    #link = "https://docs.rackspace.com/support/how-to/" + file + "/"
                    link = "https://docs.rackspace.com/support/how-to/" + articlefolder + "/"
                    # Append the file name and link to "info"
                    info.append([path, link])
                    # Increment the counter
                    count += 1
    # Write file and link to a spreadsheet
    # Start from the second cell. Rows and columns are zero
    # indexed.
    row = 0
    col = 0
    # write file and link

    # Loop through the items inside the "info" *list of lists*
    for grouping in (info):
        worksheet.write(row, col, info[row][0])
        worksheet.write(row, col + 1, info[row][1])
        row += 1
    print("\nSuccess! There are {} How-To articles without audit dates. \n \n"
          "YOUR RESULTS HAVE BEEN SAVED TO ..FILES/H2-NO-AUDITS.XLSX. \n \n"
          "To make this information editable for all Info Devs, copy and "
          "paste the content into a new Excel file in O365 online and "
          "share it.\n \n".format(count))


# Call the main function
filter_files("../content/how-to/")
workbook.close()
