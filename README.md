# Customer Page Visit Tracker

A friend of mine named Laurel asked how I would go about reading in
a CSV file, building a customer database of customers and their
page visits.

She was trying to do a similar project on her own, and I thought I'd like 
to help, because I haven't ever read a file from the file system using
Node.  In things like Bash, Perl or Python, you do that very very easily.
In Node, you're normally dealing with webservers and HTTP, and I just never
tried accessing the file system before using Node.  I'm sure there are
lots of more interesting ways to do it than what I found, but this works
for the time being.

# Installation

You can get the clone link by visiting the GitHub repo or typing:

```
git clone git@github.com:deepbsd/customerPageVisits.git
cd customerPageVisits
npm install
npm install fs
```
If you've cloned the repo, you will have already have `fs` as a module dependency in the package.json file.
If so, you won't need to npm install fs separately.  It won't hurt to install it if it's not in your local
package.json file, though.  npm will just tell you it's aready at the latest version.

# The Data File

The data file should be in the format `1, C1, P2` and each line will be terminated with a "\n" (standard 
UNIX newline), because each line will be read and split into an array of lines.  There can be 
lots of lines, but currently the `data.csv` file is just a few lines long.

Oh, the filename should probably be `data.csv`.  If you want to name it something else, you'll
have to rename the constant `DATAFILE` in the code.  

You'll also want to update the path to the file if it's not in the current directory.

# Command Line Arguments

This program uses the `process.argv` array to collect arguments and iterate through them.  If you only use one 
argument, then you'll get one list of page visits.  If you pass two arguments, you'll get two lines of output.
And so on.

# Tests

I didn't create tests for this program.  It's only a few lines long, and it was a one-off.  But I can write some 
just for the practice, but perhaps on another day.



