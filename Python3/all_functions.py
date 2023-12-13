# straight forward way to analyze all the built-in functions and methods for various types

import math
import string

def print_methods(target):
    methods_or_functions = dir(target)
    count_methods = len(methods_or_functions)
    # get type of target
    target_type = type(target)
    print(f'{count_methods} {target_type} methods or functions {methods_or_functions}\n')

print_methods(1)
print_methods(1.1)
print_methods(math)
print_methods(string)
print_methods([1,2,3])
print_methods({1,2,3})
print_methods({'key': 'value'})
print_methods(True)

# check if these match exactly
# all the built in methods for Python are returned in a dictionary
print_methods(__builtins__)
print(dir(__builtins__))