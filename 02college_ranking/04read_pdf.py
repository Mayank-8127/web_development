#total no of students,
#gender ratio,
#homestate students ratio other state students ratio foreign students,
#median placements,
#median placement average of 3 years,
#total students ratio placed students ratio students going for higher studies ratio unemployed students,

#money spent in last year
#money recieved for sponsered research and projects in last year
#student to faculty ratio


import fitz
text = ""
a = 0
for i in range(860):
   a += 1
   text += '\n<<>>\n'
   doc = fitz.open('/home/mayank/repos/databases/college_ranking/' + str(a) + '.pdf')
   for page in doc:
      text+=page.get_text()

f = open('/home/mayank/repos/web_development/02college_ranking/11dataofpdfs.txt', 'w')
f.write(text)