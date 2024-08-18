# Reads from a file of links, converts it into a list and download file present on each link sequentially

from pathlib import Path
import requests

my_file = open("/home/mayank/repos/web_development/02college_ranking/10data.txt", "r") 
data = my_file.read()
list_of_links = data.split("\n")  
my_file.close()

a = 0
for i in list_of_links:
    a += 1
    filename = Path('/home/mayank/repos/databases/college_ranking/' + str(a) + '.pdf')
    url = i
    response = requests.get(url)
    filename.write_bytes(response.content)
