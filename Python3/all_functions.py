# built-in functions are different from class methods but can be read the same way
# all class methods are functions but functions are not necessarily methods themselves

import math
import string
import time

def print_methods(module_or_type):
    methods_or_functions = dir(module_or_type)
    count_functions = len(methods_or_functions)
    target_type = type(module_or_type)
    target_name = target_type.__name__
    print(f'{count_functions} {target_type} {target_name}, methods or functions: {methods_or_functions}\n')

print_methods(1)
print_methods(1.1)
print_methods(math)
print_methods(string)
print_methods(time)
print_methods([1,2,3])
print_methods({1,2,3})
print_methods({'key': 'value'})
print_methods(True)

# check if these match exactly
# all the built in methods for Python are returned in a dictionary
print_methods(__builtins__)
print(dir(__builtins__))