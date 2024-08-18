#reads a file and extracts all the links ending with '.pdf' and writes it over on the same file
import re

def find_links_with_text(file_path, search_text):
    links = []

    with open(file_path, 'r') as file:
        text = file.read()

        # Use regular expression to find links
        link_pattern = re.compile(r'(https?://\S+)')
        all_links = link_pattern.findall(text)

        # Filter links containing the search text
        for link in all_links:
            if search_text in link:
                links.append(link)

    return links

file_path = '/home/mayank/repos/web_development/02college_ranking/10data.txt'
search_text = '.pdf'
links = find_links_with_text(file_path, search_text)

string = ''
for i in links:
    string += i + '\n'

f = open('/home/mayank/repos/web_development/02college_ranking/10data.txt', 'w')
f.write(string)