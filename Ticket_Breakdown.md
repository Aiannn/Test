# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Currently the Agent table basically looks like this (excluding details): 
#   Name           -> + Custom id
1   John Smith          S17
2   Jack Johns          S91

4   Stan Jones          J92

1) Facility's database should assign a new id to every new Agent who works with. 
This id number is going to increase by 1 with every new Agent. The difference between this id and already existing internal id is there is no empty lines and id's numbers skipped in database, in case removing an Agent. 

The logic:
On the server check Agent table length: like Agent.all.length = 10 (for example)
the new id = Agent.all.length + 1.

It's going to look like this, the new Agent get registered though filling out a form -> sending request to server -> checking how many records are in Agent table -> based on that assigning a new id to new Agent.

acceptance of this solution: the ids are not gonna being repeated that means that new registered Agent info is going to be saved in database fast without any id's reassignments.
time to implement: fast

2) With every new Agent, Facility can assign a random id number (like 1299T93 format). 

The logic is simple and looks like 
'val = Math.floor(1000 + Math.random()*9000)
val2 = String.fromCharCode(65+Math.floor(Math.random()*26)) // string is a set of letters [A-Z]
val3= Math.floor(Math.random()*90 +10) //from 10 to 99
newId = val+val2+val3'
Kind of not most effective solution, but can be improved

It's going to looks like this: Agent get registered though filling out a form -> sending request to server, checking if there is no record with that id -> saving a new Agent. And use this ID for type of authentication when Agent is going to see a list of shifts. 

acceptance of this solution: since the format looks like NNNNLNN, where N is number and L is letter, there is a very low probability that some id already exists, that means that saving a new record to database is going to be basically fast, since server is not going to reassign an id again. 
time to implement: fast
