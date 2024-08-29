import csv 

#Base class that accepts filename and the delimiter which is a comma
class CSV:
    def __init__(self, filename, delimiter=','):
        self.filename = filename
        self.delimiter = delimiter

#The CSVReader class inherits from CSV 
class CSVReader(CSV):
    def __init__(self, filename, delimiter=','):
        super().__init__(filename, delimiter)

#The interation of it then to yielf each line split at the delimiter
    def __iter__(self):
        with open(self.filename) as input_file:
            for line in input_file:
                yield line.strip().split(self.delimiter)

#Inherits from the CSV and serves as the dict
class CSVDictReader(CSV):
    def __iter__(self):
            with open(self.filename) as input_file:
                read_in = csv.DictReader(input_file, delimiter=self.delimiter)
                for row in read_in:
                    yield dict(row)

#Writes to a specific csv file       
class CSVWriter(CSV):
    def write(self, rows):
        with open(self.filename, line='') as output_file:
            for row in rows:
                line = self.delimiter.join(map(str, row))
                output_file.write(line + '\n')

class CSVDictWriter(CSV):
    #writes in a dictionary to the new file
    def write(self, dictionary):
        with open(self.filename, newl='') as output_file:
            #creates header class using the dictionaries keys
            header = list(dictionary[0].keys())
            csv_writer = csv.DictWriter(output_file, fieldnames=header, delimiter=self.delimiter)
            #writerheader() writes a row with the field names
            csv_writer.writeheader()
            csv_writer.writerows(dictionary)

#reads in the CVS file to test 
csv_reader = CSVReader("consumer_complaints.csv")

#prints row by row
for row in csv_reader:
    print(row)
