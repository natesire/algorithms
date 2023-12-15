# built-in functions are different from class methods but can be read the same way
# all class methods are functions but functions are not necessarily methods themselves


def print_methods(module_or_type):
    methods_or_functions = dir(module_or_type)
    count_functions = len(methods_or_functions)
    target_type = type(module_or_type)
    target_name = target_type.__name__
    print(f'{count_functions} {target_type} {target_name}')
    for method in methods_or_functions:
        print(f'{method}()')

types = [1, 1.1, "str", [1,2,3], {1,2,3}, {'key': 'value'}, True]
    
# iterate val with index
for (index, val) in enumerate(types):
    print_methods(type)

# all the built in methods for Python are returned in a dictionary
print(dir(__builtins__))

