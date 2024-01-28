import re

def sqlite_to_mysql(sqlite_sql_file, mysql_sql_file):
    with open(sqlite_sql_file, 'r') as fin:
        with open(mysql_sql_file, 'w') as fout:
            
            for line in fin:
                
                # Replace autoincrement with auto_increment
                line = line.replace("autoincrement", "auto_increment")
                
                # Add engine specification
                #if line.startswith('CREATE TABLE'):
                #    line = line.replace('CREATE TABLE', 'CREATE TABLE IF NOT EXISTS')
                #    line += ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci\n'
                    
                # Replace boolean type
                line = re.sub(r'\s+boolean\s+', ' tinyint(1) ', line)
                
                # Replace datetime with timestamp
                line = line.replace('datetime', 'timestamp NULL') 
                
                fout.write(line)
                
sqlite_file = 'dump.sql'
mysql_file = 'dump_mysql.sql'

sqlite_to_mysql(sqlite_file, mysql_file)

print('Conversion done!')
